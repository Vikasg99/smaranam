const CACHE_NAME = 'smaranam-v3';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './icon-512.png',
    './upi_payment_qr.jpg',
    './images/shiva.svg',
    './images/vishnu.jpg',
    './images/ganesha.svg',
    './images/krishna.svg',
    './images/shani.svg',
    './images/shiva_mahadev.svg',
    './audio/om_namah_shivaya.mp3',
    './audio/om_namo_bhagavate_vasudevaya.wav',
    './audio/ganesh_mantra.wav',
    './audio/hare_krishna_mantra.wav',
    './audio/shani_mantra.mp3'
];

// Install Event
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching essential assets...');
            return cache.addAll(ASSETS);
        })
    );
});

// Activate Event
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        })
    );
});

// Fetch Event
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            return cachedResponse || fetch(e.request);
        })
    );
});
