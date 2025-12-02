self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('csc-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/about.html',
        '/services.html',
        '/pricing.html',
        '/contact.html',
        '/logo-placeholder.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});