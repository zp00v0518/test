const cacheName = 'cache-v16';
const resourcesToPrecache = [
  '/',
  'index.html',
  'style/style.css',
  'js/Canvas.js',
  'js/game.js',
  'js/Keys.js',
  'js/sourceLoader.js',
  'js/push.js',
  'favicon.ico',
  'zmei.png',
];

self.addEventListener('install', event => {
  console.log('Install event');
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(resourcesToPrecache);
    }).catch(err => {
      console.log(err)
    }),
  );
});

self.addEventListener('fetch', event => {
  console.log('fetch event')
  event.respondWith(
    caches
      .match(event.request)
      .then(cachedResponse => {
        return cachedResponse || fetch(event.request);
      })
      .catch(err => console.log(err)),
  );
});
