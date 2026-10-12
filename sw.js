const CACHE_NAME = "binhiscan-shell-v2";
const SHELL = ["./", "./index.html", "./labels.txt", "./manifest.webmanifest", "./model.tflite"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);
    if (cached) return cached;
    try {
      const response = await fetch(req);
      // Cache successful app files and CDN runtime/WASM responses so a later visit may work offline.
      if (response && (response.ok || response.type === "opaque")) {
        try { await cache.put(req, response.clone()); } catch (_) {}
      }
      return response;
    } catch (error) {
      const sameOrigin = new URL(req.url).origin === self.location.origin;
      if (sameOrigin) {
        const shell = await cache.match("./index.html");
        if (shell) return shell;
      }
      throw error;
    }
  })());
});
