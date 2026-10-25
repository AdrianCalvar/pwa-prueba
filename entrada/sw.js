const C = 'entrada-v1';
const FILES = ['./', './index.html', './manifest.webmanifest'];
self.addEventListener('install', e => e.waitUntil(caches.open(C).then(c => c.addAll(FILES))));
// Red primero, para que los cambios de la página lleguen sin reinstalar.
self.addEventListener('fetch', e => e.respondWith(fetch(e.request).catch(() => caches.match(e.request))));
