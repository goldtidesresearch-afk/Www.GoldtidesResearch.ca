# Goldtide Research — Cloudflare Setup

Everything here can be done from your phone browser — no command-line tools required.

## What you're setting up
- **Cloudflare Pages** hosts the site (replaces Vercel) and auto-deploys from your GitHub repo,
  same as before.
- **A Pages Function** (`functions/api/order.js`) sends you an order notification and the
  customer a confirmation email, using **Resend**.
- **Turnstile** (Cloudflare's free CAPTCHA) blocks bots from spamming the order form.
- **Security headers** (`_headers`) are already included and need no setup.

---

## 1. Move your domain to Cloudflare
1. Create a free account at **cloudflare.com**
2. Dashboard → **Add a Site** → enter `goldtidesresearch.ca`
3. Cloudflare scans your existing DNS records and shows you two nameservers
4. Go to wherever you registered the domain → **DNS / Nameserver settings** → replace the
   existing nameservers with the two Cloudflare gives you
5. This can take anywhere from a few minutes to ~24 hours to fully switch over. Cloudflare
   emails you once it's active.

*(If you'd rather not move the domain, Cloudflare Pages can still work with a CNAME at your
current registrar — but moving the domain gives you Turnstile, the WAF, and DNS all in one
place, which is what the rest of this guide assumes.)*

## 2. Connect Cloudflare to your GitHub repo
Cloudflare's dashboard has moved to a unified "Workers & Pages" flow — when you connect a Git
repo now, it creates a **Worker with static assets** rather than a classic "Pages" project.
That's what this repo is now set up for (via `wrangler.jsonc` and `src/index.js`), so just:

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Connect to Git**
2. Authorize GitHub, pick your `GoldtidesResearch.ca` repo
3. It should auto-detect the config from `wrangler.jsonc` in the repo — if it asks for a build
   command, leave it **blank**; deploy command should end up being `npx wrangler deploy`
4. **Save and Deploy**
5. Once deployed, look for a domains/routes section on the project (naming may say "Custom
   Domains" or "Domains & Routes" depending on your dashboard version) → add
   `goldtidesresearch.ca` and `www.goldtidesresearch.ca`

If your project already exists from an earlier attempt and failed to build, you don't need to
recreate it — just re-upload these files to the same GitHub repo and use **Retry build** (or
it may redeploy automatically on the new commit).

## 3. Resend (order emails)
1. Create a free account at **resend.com** (3,000 emails/month free)
2. **Domains** → **Add Domain** → `goldtidesresearch.ca`
3. Resend shows you DNS records (SPF, DKIM, and ideally DMARC) to add
4. Since your domain is now on Cloudflare, add those exact records under Cloudflare →
   your domain → **DNS** → **Add Record**
5. Back in Resend, click **Verify** once the records are added (may take a few minutes)
6. **API Keys** → **Create API Key** → give it "Sending access" → copy the key
7. In Cloudflare → your project → **Settings** (look for **Variables and Secrets**, Cloudflare has renamed this a couple of times) → add a
   **secret** (not a plain variable) named `RESEND_API_KEY` with that value

## 4. Turnstile (bot protection)
1. Cloudflare dashboard → **Turnstile** → **Add Site**
2. Domain: `goldtidesresearch.ca`. Widget mode: Managed (default) is fine
3. Copy the **Site Key** and **Secret Key** it gives you
4. **Site Key**: open `checkout.html` in GitHub, find this line and replace the placeholder:
   ```html
   <div class="cf-turnstile" data-sitekey="YOUR_TURNSTILE_SITE_KEY" ...>
   ```
5. **Secret Key**: Cloudflare → your project → **Settings** → **Variables and Secrets** →
   add a secret named `TURNSTILE_SECRET_KEY` with that value

## 5. Rate limiting (optional but recommended)
Cloudflare → your domain → **Security → WAF → Rate limiting rules** → create a rule limiting
requests to `/api/order` per IP (e.g., 5 requests per minute). Availability and exact steps
depend on your current Cloudflare plan — check the dashboard, since free-tier limits change
from time to time.

## 6. Business mailbox (optional)
This isn't required for order emails to work — Resend sends `from` your domain without you
needing an inbox there. But if you'd like to *receive* mail at a branded address instead of
Gmail, set up Microsoft 365, Google Workspace, or Zoho Mail for the domain, and add the MX
records they give you under Cloudflare DNS.

---

## Things to double-check before going live
- `functions/api/order.js` has two constants at the top — confirm they're right:
  - `OWNER` — where order notifications land (currently `goldtidesresearch@gmail.com`)
  - `FROM` — must be an address on your Resend-verified domain
- `ALLOWED_ORIGINS` in that same file must exactly match your live domain(s)
- `checkout.html`'s Turnstile `data-sitekey` must be your real Site Key (step 4 above)

## Testing
Place a test order once everything's connected. If email sending fails, the checkout page
shows a fallback message with instructions to email the order manually — nothing gets silently
lost. Check the Cloudflare Pages **Functions** logs (your Pages project → a deployment →
**Functions**) if something isn't working — errors show up there.
