const CACHE_NAME = 'animal-flip-toddler-v8';
const ASSETS = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'images/forest.png',
  'images/ocean.png',
  'images/farm.png',
  'images/dinosaur.png',
  'images/insect.png',
  'images/polar.png',
  'images/animals/bear.jpg',
  'images/animals/deer.jpg',
  'images/animals/dino_ankylo.jpg',
  'images/animals/dino_brachi.jpg',
  'images/animals/dino_crocodile.jpg',
  'images/animals/dino_diplodocus.jpg',
  'images/animals/dino_dodo.jpg',
  'images/animals/dino_iguana.jpg',
  'images/animals/dino_mammoth.jpg',
  'images/animals/dino_pterosaur.jpg',
  'images/animals/dino_scorpion.jpg',
  'images/animals/dino_snake.jpg',
  'images/animals/dino_spider.jpg',
  'images/animals/dino_trex.jpg',
  'images/animals/farm_cat.jpg',
  'images/animals/farm_chick.jpg',
  'images/animals/farm_cow.jpg',
  'images/animals/farm_dog.jpg',
  'images/animals/farm_donkey.jpg',
  'images/animals/farm_duck.jpg',
  'images/animals/farm_goat.jpg',
  'images/animals/farm_goose.jpg',
  'images/animals/farm_horse.jpg',
  'images/animals/farm_pig.jpg',
  'images/animals/farm_rabbit.jpg',
  'images/animals/farm_sheep.jpg',
  'images/animals/forest_beaver.jpg',
  'images/animals/forest_boar.jpg',
  'images/animals/forest_hedgehog.jpg',
  'images/animals/forest_owl.jpg',
  'images/animals/forest_raccoon.jpg',
  'images/animals/forest_skunk.jpg',
  'images/animals/forest_wolf.jpg',
  'images/animals/fox.jpg',
  'images/animals/insect_ant.jpg',
  'images/animals/insect_bee.jpg',
  'images/animals/insect_beetle.jpg',
  'images/animals/insect_butterfly.jpg',
  'images/animals/insect_caterpillar.jpg',
  'images/animals/insect_cricket.jpg',
  'images/animals/insect_frog.jpg',
  'images/animals/insect_gecko.jpg',
  'images/animals/insect_grasshopper.jpg',
  'images/animals/insect_ladybug.jpg',
  'images/animals/insect_snail.jpg',
  'images/animals/insect_spider.jpg',
  'images/animals/ocean_crab.jpg',
  'images/animals/ocean_dolphin.jpg',
  'images/animals/ocean_fish.jpg',
  'images/animals/ocean_jellyfish.jpg',
  'images/animals/ocean_lobster.jpg',
  'images/animals/ocean_octopus.jpg',
  'images/animals/ocean_pufferfish.jpg',
  'images/animals/ocean_seal.jpg',
  'images/animals/ocean_shark.jpg',
  'images/animals/ocean_squid.jpg',
  'images/animals/ocean_turtle.jpg',
  'images/animals/ocean_whale.jpg',
  'images/animals/polar_arcticfox.jpg',
  'images/animals/polar_crab.jpg',
  'images/animals/polar_fish.jpg',
  'images/animals/polar_hare.jpg',
  'images/animals/polar_owl.jpg',
  'images/animals/polar_penguin.jpg',
  'images/animals/polar_polarbear.jpg',
  'images/animals/polar_reindeer.jpg',
  'images/animals/polar_seal.jpg',
  'images/animals/polar_walrus.jpg',
  'images/animals/polar_whale.jpg',
  'images/animals/polar_wolf.jpg',
  'images/animals/rabbit.jpg',
  'images/animals/squirrel.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      });
    })
  );
});
