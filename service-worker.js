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
    "revision": "771fe732c69bfcf4e93f9b773400e385"
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
    "url": "assets/js/7.ff6884c0.js",
    "revision": "7d03c2d1025498f9202a620a9c9fd32b"
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
    "url": "assets/js/app.66a3a68b.js",
    "revision": "c250614712d56976292d89b86a4ce690"
  },
  {
    "url": "index.html",
    "revision": "ab7286e3c94ccdd1482314aa3138a0da"
  },
  {
    "url": "logo.png",
    "revision": "7623b31ea8912e775aa903f3da491179"
  },
  {
    "url": "prologue/contribution-guide.html",
    "revision": "52b384f419df6db13b50e78d0461f5c4"
  },
  {
    "url": "prologue/index.html",
    "revision": "f1e1f9cf27309e0424fa4add562d0884"
  },
  {
    "url": "prologue/upgrade-guide.html",
    "revision": "54426d9bf5ac287e77eac08c28638e4f"
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
