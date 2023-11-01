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
    "revision": "44a78dc5b4bb262affb5a5c8aa0ecf55"
  },
  {
    "url": "assets/css/0.styles.fbbe2a77.css",
    "revision": "66ff016f7409fa70fbeac58e867b4144"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.dd8691fa.js",
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
    "url": "assets/js/6.62cbcb9b.js",
    "revision": "7972827be161ab5eeea7c0205885ff43"
  },
  {
    "url": "assets/js/7.cd1e62d2.js",
    "revision": "c4bd390b1f071350e58a2fff7cdeffbe"
  },
  {
    "url": "assets/js/8.207e5539.js",
    "revision": "74d40a8ff88c414dfe9645b8d2c745a4"
  },
  {
    "url": "assets/js/9.ed09befb.js",
    "revision": "01f9a03c35d62167d081b18de33c7521"
  },
  {
    "url": "assets/js/app.c197e812.js",
    "revision": "e6646bd3ad5fd9ab4fa7de2552d9c762"
  },
  {
    "url": "index.html",
    "revision": "4e718254593d71adc6db9eee7eb8db82"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "prologue/contribution-guide.html",
    "revision": "bd7cad9c23fc952e1c33cd26fd57a638"
  },
  {
    "url": "prologue/index.html",
    "revision": "be2ab2094d6305f95c43b5195a3ccf85"
  },
  {
    "url": "prologue/upgrade-guide.html",
    "revision": "66ab1a41bfec8be7d476e921c26dfffa"
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
