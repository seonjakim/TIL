const cacheName = 'v1'

const cacheAssets = ['index.html', 'about.html', '/js/main.js']

// Call Install Event
self.addEventListener('install', (e) => {
  console.log('service worker installed')
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log('caching files')
        cache.addAll(cacheAssets)
      })
      .then(() => self.skipWaiting())
  )
})

// Call Activate Event
self.addEventListener('activate', (e) => {
  console.log('service worker activated')
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing old cache')
            return caches.delete(cache)
          }
        })
      )
    })
  )
})

// Call fetch event
self.addEventListener('fetch', (e) => {
  console.log('Service Worker: Fetching')
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))
})
