const staticFlyMiles = "fly-miles-v1"
const assets = [
  "/",
  "/index.html",
  "/registration.html",
  "/contact.html",
  
  "/css/style.css",
  "/css/animate.css",
  "/css/bootsrap.css",
  "/css/bootstrap-datepicker.min.css",
  "/css/flexslider.css",
  "/css/icomoon.css",
  "/css/magnific-popup.css",
  "/css/owl.carousel.min.css",
  "/css/owl.theme.default.min.css",
  "/css/themify.css",

  "/js/bootstrap.main.js",
  "/js/bootstrapdatepicker.min.js",
  "/js/jquery.countTo.js",
  "/js/jquery.easing.1.3.js",
  "/js/jquery.easypiechart.min.js",
  "/js/jquery.magnific-popup.min.js",
  "/js/jquery.min.js",
  "/js/jquery.stellar.min.js",
  "/js/jquery.waypoints.min.js",
  "/js/magnific-popup-options.js",
  "/js/jquery.modernizer-2.6.2.min.js",
  "/js/owl.carousel.min.js",
  "/js/respond.min.js",

  "/images/img_1.jpg",
  "/images/img_2.jpg",
  "/images/img_3.jpg",
  "/images/img_4.jpg",
  "/images/img_5.jpg",
  "/images/img_6.jpg",
  "/images/img_bg_1.jpg",
  "/images/img_bg_2.jpg",
  "/images/img_bg_3.jpg",
  "/images/loader.gif",

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticFlyMiles).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}