// functions/api/order.js
// Cloudflare Pages Function — handles order submissions from checkout.html.
// Sends the shop owner a notification email and the customer a confirmation,
// both via Resend, from a domain you've verified in Resend.
//
// Required Cloudflare Pages secrets (set in dashboard, never in code):
//   RESEND_API_KEY        — your Resend "Sending" API key
//   TURNSTILE_SECRET_KEY   — your Turnstile widget's secret key
//
// Edit the two constants below for your own setup.

const OWNER = "goldtidesresearch@gmail.com";               // where order notifications go
const FROM  = "Goldtide Research <orders@goldtidesresearch.ca>"; // must be your Resend-verified domain

// Domains allowed to POST here. Add your Pages preview domain too if you test from it.
const ALLOWED_ORIGINS = [
  "https://goldtidesresearch.ca",
  "https://www.goldtidesresearch.ca",
];

const MAX_BODY_BYTES = 20_000; // reject oversized payloads outright
const MAX_ITEMS = 50;
const MAX_STRING = 200;

function toAscii(str) {
  // Resend (and many mail APIs) can silently drop non-ASCII bytes like em dashes.
  // Strip anything outside printable ASCII, keep it readable.
  return String(str ?? "")
    .replace(/[—–]/g, "-")
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'")
    .replace(/[^\x20-\x7E\n\r]/g, "");
}

function clamp(str, max = MAX_STRING) {
  return toAscii(str).slice(0, max);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function verifyTurnstile(token, secretKey, ip) {
  if (!token) return false;
  const form = new FormData();
  form.append("secret", secretKey);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });
  const data = await res.json();
  return data.success === true;
}

async function sendEmail(apiKey, payload) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Resend error ${res.status}: ${text}`);
  }
  return res.json();
}

export async function onRequestPost(context) {
  const { request, env } = context;

  // 1) Origin allowlist
  const origin = request.headers.get("Origin") || "";
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return new Response(JSON.stringify({ error: "forbidden_origin" }), { status: 403 });
  }

  // 2) Size cap
  const contentLength = Number(request.headers.get("Content-Length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return new Response(JSON.stringify({ error: "payload_too_large" }), { status: 413 });
  }

  let body;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return new Response(JSON.stringify({ error: "payload_too_large" }), { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return new Response(JSON.stringify({ error: "invalid_json" }), { status: 400 });
  }

  // 3) Honeypot — bots fill hidden fields humans never see.
  // Accept silently (200) without sending anything, so bots don't learn to avoid it.
  if (body.company) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  // 4) Turnstile verification (server-side, never trust the client alone)
  const clientIp = request.headers.get("CF-Connecting-IP");
  const turnstileOk = await verifyTurnstile(body.turnstileToken, env.TURNSTILE_SECRET_KEY, clientIp);
  if (!turnstileOk) {
    return new Response(JSON.stringify({ error: "bot_check_failed" }), { status: 400 });
  }

  // 5) Validate + clamp inputs
  const customer = body.customer || {};
  if (!isValidEmail(customer.email)) {
    return new Response(JSON.stringify({ error: "invalid_email" }), { status: 400 });
  }
  if (!customer.firstName || !customer.lastName || !customer.address1 || !customer.city || !customer.province || !customer.postalCode) {
    return new Response(JSON.stringify({ error: "missing_fields" }), { status: 400 });
  }
  if (!Array.isArray(body.items) || body.items.length === 0 || body.items.length > MAX_ITEMS) {
    return new Response(JSON.stringify({ error: "invalid_items" }), { status: 400 });
  }

  const safeCustomer = {
    email: clamp(customer.email, 254),
    firstName: clamp(customer.firstName, 80),
    lastName: clamp(customer.lastName, 80),
    address1: clamp(customer.address1),
    city: clamp(customer.city, 80),
    province: clamp(customer.province, 80),
    postalCode: clamp(customer.postalCode, 20),
    phone: clamp(customer.phone || "", 30),
  };

  const safeItems = body.items.slice(0, MAX_ITEMS).map(item => ({
    name: clamp(item.name, 120),
    dose: clamp(item.dose, 40),
    price: Number.isFinite(Number(item.price)) ? Math.max(0, Number(item.price)) : 0,
  }));

  const subtotal = Number.isFinite(Number(body.subtotal)) ? Number(body.subtotal) : 0;
  const shipping = Number.isFinite(Number(body.shipping)) ? Number(body.shipping) : 0;
  const tax = Number.isFinite(Number(body.tax)) ? Number(body.tax) : 0;
  const total = Number.isFinite(Number(body.total)) ? Number(body.total) : 0;
  const ref = clamp(body.ref || "", 40) || "GT-UNKNOWN";

  const itemLinesText = safeItems.map(i => `- ${i.name} (${i.dose}) - CA$${i.price.toFixed(2)}`).join("\n");
  const itemLinesHtml = safeItems.map(i => `<li>${i.name} (${i.dose}) &mdash; CA$${i.price.toFixed(2)}</li>`).join("");

  const key = env.RESEND_API_KEY;
  if (!key) {
    return new Response(JSON.stringify({ error: "email_not_configured" }), { status: 500 });
  }

  // 6) Send owner notification + customer confirmation via Resend
  try {
    await sendEmail(key, {
      from: FROM,
      to: [OWNER],
      reply_to: safeCustomer.email,
      subject: `New Order ${ref}`,
      text:
        `Order Reference: ${ref}\n\n` +
        `ITEMS:\n${itemLinesText}\n\n` +
        `Subtotal: CA$${subtotal.toFixed(2)}\nShipping: CA$${shipping.toFixed(2)}\nTax: CA$${tax.toFixed(2)}\nTotal: CA$${total.toFixed(2)}\n\n` +
        `CUSTOMER:\n${safeCustomer.firstName} ${safeCustomer.lastName}\n${safeCustomer.email}\n${safeCustomer.phone || "(no phone provided)"}\n\n` +
        `SHIP TO:\n${safeCustomer.address1}\n${safeCustomer.city}, ${safeCustomer.province} ${safeCustomer.postalCode}\n\n` +
        `Expecting an Interac e-Transfer for CA$${total.toFixed(2)}, reference ${ref}.`,
    });

    await sendEmail(key, {
      from: FROM,
      to: [safeCustomer.email],
      subject: `Your Goldtide Research order ${ref}`,
      html:
        `<p>Thanks for your order, ${safeCustomer.firstName}.</p>` +
        `<p><strong>Order Reference: ${ref}</strong></p>` +
        `<ul>${itemLinesHtml}</ul>` +
        `<p>Subtotal: CA$${subtotal.toFixed(2)}<br>Shipping: CA$${shipping.toFixed(2)}<br>Tax: CA$${tax.toFixed(2)}<br><strong>Total: CA$${total.toFixed(2)}</strong></p>` +
        `<p>Please send an Interac e-Transfer for CA$${total.toFixed(2)} to goldtidesresearch@gmail.com, ` +
        `with <strong>${ref}</strong> in the message. Autodeposit is enabled, so no security question is needed.</p>` +
        `<p>We'll confirm and ship once the e-Transfer is received.</p>`,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "send_failed", detail: String(err) }), { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true, ref }), { status: 200 });
}
