// src/sw.js
import { precacheAndRoute } from "workbox-precaching";

// This will be replaced with the actual manifest during build
precacheAndRoute(self.__WB_MANIFEST);

// Add your custom service worker logic below
self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", (event) => {
  // Custom fetch handling
});
