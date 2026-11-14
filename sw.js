const CACHE_NAME = 'myplanner-v1';
const ASSETS = [
  './',
  './index.html',
  './notes.html',
  './tasks.html',
  './timer.html',
  './links.html',
  './alarm.html',
  './support.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon-192x192.png'
];

// نصب و ذخیره فایل‌ها
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// باز کردن فایل‌ها از حافظه وقتی اینترنت قطع است
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
