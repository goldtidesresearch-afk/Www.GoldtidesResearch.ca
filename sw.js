// Goldtide Research — service worker
// Bump this version string on every deploy that changes cached files,
// so returning visitors pick up the new content instead of a stale cache.
const CACHE_VERSION = 'goldtide-v1';

const APP_SHELL = [
  '/',
  '/index.html',
  '/shop.html',
  '/checkout.html',
  '/success.html',
  '/guide.html',
  '/library.html',
  '/coa-lookup.html',
  '/terms.html',
  '/privacy.html',
  '/shipping.html',
  '/assets/i18n.js',
  '/assets/goldtide-logo.png',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL)).catch(() => {
      // If a single file 404s during install, don't block the whole install.
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // let cross-origin requests (fonts, etc.) pass through untouched

  const isHTML = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    // Network-first for pages: customers should always see current prices/stock
    // when they have a connection. Cache is only a fallback for offline use.
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((res) => res || caches.match('/index.html')))
    );
    return;
  }

  // Cache-first for static assets (images, i18n.js, icons) — faster repeat loads.
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        return res;
      });
    })
  );
});
