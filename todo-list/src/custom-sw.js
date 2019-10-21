self.addEventListener('fetch', (event) => {
  if (event.request.url.startsWith('https://jsonplaceholder.typicode.com/')) {
    var response;
    event.respondWith(
      caches
        .match(event.request)
        .then(function(r) {
          if (r) {
            return r;
          }
          return fetch(event.request);
        })
        .then(function(r) {
          response = r;
          caches.open('v1').then(function(cache) {
            cache.put(event.request.url, response);
          });
          return response.clone();
        }),
    );
  }
});
