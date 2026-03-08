// ==UserScript==
// @name        Youtube grayscale
// @namespace   nitpum.com
// @match       https://*.youtube.com/*
// @icon        https://www.youtube.com/s/desktop/ab5c3a01/img/favicon_32x32.png
// @grant       GM_addStyle
// @version     1.0.0
// @author      nitpum
// @description Make youtbue grayscale
// @downloadURL https://userscript.nitpum.com/youtube-grayscale/index.js
// ==/UserScript==

GM_addStyle(`img, svg, video { filter: grayscale(1); }`);
