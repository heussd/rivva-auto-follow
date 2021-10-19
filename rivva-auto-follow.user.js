// ==UserScript==
// @name        Rivva Auto Follow 
// @namespace   Violentmonkey Scripts
// @match       https://rivva.de/*
// @grant       none
// @version     1.0
// @homepageURL https://github.com/heussd/rivva-auto-follow
// @updateURL   https://github.com/heussd/rivva-auto-follow/raw/main/rivva-auto-follow.user.js
// ==/UserScript==

window.location.href = 
  document
    .getElementsByTagName("article")[1]
    .getElementsByTagName("a")[0]
    .href