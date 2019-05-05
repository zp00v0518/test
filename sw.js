const cacheName = '1.0.1';
const resourcesToPrecache = [
  '/',
  'index.html',
  'style/style.css',
  'js/Canvas.js',
  'js/game.js',
  'js/Keys.js',
  'js/sourceLoader.js',
  'favicon.ico',
  'zmei.png',
];

self.addEventListener('install', event => {
  console.log('Install event');
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      
      return cache.addAll(resourcesToPrecache);
    }),
  );
});

self.addEventListener('activate', event => {
  console.log('activate event', event);
});

self.addEventListener('fetch', event => {
  // console.log('fetch intercepted for', event);
  event.respondWith(caches.match(event.request).then(cachedResponse => {
    return cachedResponse || fetch(event.request);
  }).catch(err => console.log(err))
  );
});
