/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8634be5951e1b2bed1110b307ab68f61"
  },
  {
    "url": "assets/css/0.styles.d9a86543.css",
    "revision": "6f29d0e169a044ae19181cf856824cfb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.ce3dec6d.js",
    "revision": "eb0cf4bbfb9b839e91727eb6d9076e53"
  },
  {
    "url": "assets/js/3.6b5b4f97.js",
    "revision": "787b878b5345adcb8c9e9c08cac3f395"
  },
  {
    "url": "assets/js/4.ee498dee.js",
    "revision": "c53445cd3cabecc6c25d1d438531b0ab"
  },
  {
    "url": "assets/js/5.2d79c6c8.js",
    "revision": "318b30ca5eba7b8ace88c2eedf099273"
  },
  {
    "url": "assets/js/6.9e0b5a41.js",
    "revision": "cc23ab1252f132849f38afbefeb1d6f7"
  },
  {
    "url": "assets/js/7.31d480e0.js",
    "revision": "205edb2bf65326d70be1f9d1385b5dba"
  },
  {
    "url": "assets/js/8.c2eed002.js",
    "revision": "683a28cc8e100cdfe21e9021bbecc128"
  },
  {
    "url": "assets/js/9.ed09befb.js",
    "revision": "01f9a03c35d62167d081b18de33c7521"
  },
  {
    "url": "assets/js/app.0fbcc885.js",
    "revision": "085d67aaa6d0b4ecf5bfda90fcbd7941"
  },
  {
    "url": "index.html",
    "revision": "ee9e4c7bf372539590ae6423467628a8"
  },
  {
    "url": "logo.png",
    "revision": "e20d14d45261a8376b1b48410c9bc1b9"
  },
  {
    "url": "prologue/contribution-guide.html",
    "revision": "0000073e0cf412564e60378295c2ee3a"
  },
  {
    "url": "prologue/index.html",
    "revision": "630bb5db083bdd91c34610ae4babbeed"
  },
  {
    "url": "prologue/upgrade-guide.html",
    "revision": "f851cc9c227eac2f846be586a41fd78a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
