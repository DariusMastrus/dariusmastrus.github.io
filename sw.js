const CACHE_NAME = "dnd-catalogo-v1";
const ASSETS = [
  "./catalogo.html",
  "./manifest.json",
  "https://www.transparenttextures.com/patterns/aged-paper.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});