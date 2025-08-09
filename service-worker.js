const CACHE_NAME = "simulafpc-v3";
const urlsToCache = [
  "/SimulaFPC/",
  "/SimulaFPC/index.html",
  "/SimulaFPC/style.css",   // Cambia a tu archivo CSS real
  "/SimulaFPC/script.js",    // Cambia a tu archivo JS real
  "/SimulaFPC/icons/icon-192.png",
  "/SimulaFPC/icons/icon-512.png"
];

// Instalar y guardar en caché
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activar y limpiar cachés viejas
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }))
    )
  );
});

// Interceptar peticiones
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});