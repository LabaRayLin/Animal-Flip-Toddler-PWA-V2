const CACHE_NAME = 'animal-flip-toddler-v9';
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
  'images/animals/birds_cockatoo.jpg',
  'images/animals/birds_eagle.jpg',
  'images/animals/birds_flamingo.jpg',
  'images/animals/birds_hummingbird.jpg',
  'images/animals/birds_kingfisher.jpg',
  'images/animals/birds_peacock.jpg',
  'images/animals/birds_swan.jpg',
  'images/animals/birds_woodpecker.jpg',
  'images/animals/deer.jpg',
  'images/animals/desert_armadillo.jpg',
  'images/animals/desert_camel.jpg',
  'images/animals/desert_roadrunner.jpg',
  'images/animals/desert_sandcat.jpg',
  'images/animals/desert_scorpion.jpg',
  'images/animals/dino_ankylo.jpg',
  'images/animals/dino_brachi.jpg',
  'images/animals/dino_crocodile.jpg',
  'images/animals/dino_diplodocus.jpg',
  'images/animals/dino_dodo.jpg',
  'images/animals/dino_iguana.jpg',
  'images/animals/dino_mammoth.jpg',
  'images/animals/dino_scorpion.jpg',
  'images/animals/dino_snake.jpg',
  'images/animals/dino_spider.jpg',
  'images/animals/dino_trex.jpg',
  'images/animals/dino_velociraptor.jpg',
  'images/animals/dino_velociraptor.png',
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
  'images/animals/jungle_anteater.jpg',
  'images/animals/jungle_capybara.jpg',
  'images/animals/jungle_chameleon.jpg',
  'images/animals/jungle_chimp.jpg',
  'images/animals/jungle_gibbon.jpg',
  'images/animals/jungle_jaguar.jpg',
  'images/animals/jungle_parrot.jpg',
  'images/animals/jungle_python.jpg',
  'images/animals/jungle_toucan.jpg',
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
  'images/animals/pets_bunny.jpg',
  'images/animals/pets_chinchilla.jpg',
  'images/animals/pets_ferret.png',
  'images/animals/pets_goldfish.jpg',
  'images/animals/pets_guineapig.jpg',
  'images/animals/pets_hamster.jpg',
  'images/animals/pets_parakeet.jpg',
  'images/animals/pets_poodle.jpg',
  'images/animals/pets_shiba.jpg',
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
  'images/animals/rare_alpaca.jpg',
  'images/animals/rare_kangaroo.jpg',
  'images/animals/rare_koala.jpg',
  'images/animals/rare_narwhal.jpg',
  'images/animals/rare_otter.jpg',
  'images/animals/rare_panda.jpg',
  'images/animals/rare_pangolin.jpg',
  'images/animals/rare_platypus.jpg',
  'images/animals/rare_quokka.jpg',
  'images/animals/rare_redpanda.jpg',
  'images/animals/rare_slowloris.jpg',
  'images/animals/savanna_cheetah.jpg',
  'images/animals/savanna_elephant.jpg',
  'images/animals/savanna_gazelle.jpg',
  'images/animals/savanna_giraffe.jpg',
  'images/animals/savanna_gorilla.jpg',
  'images/animals/savanna_hippo.jpg',
  'images/animals/savanna_hyena.jpg',
  'images/animals/savanna_lion.jpg',
  'images/animals/savanna_meerkat.jpg',
  'images/animals/savanna_ostrich.jpg',
  'images/animals/savanna_rhino.png',
  'images/animals/savanna_zebra.jpg',
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
