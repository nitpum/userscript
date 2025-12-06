// ==UserScript==
// @name        Facebook focus
// @namespace   nitpum.com
// @match       https://*.facebook.com/*
// @grant       GM_addStyle
// @version     1.1.2
// @author      nitpum
// @description Reduce distranction on Facebook
// @downloadURL https://userscript.nitpum.com/facebook-focus/index.js
// ==/UserScript==

GM_addStyle(`
div[role="complementary"] {
  opacity: 0;
  user-select: none;
}

div[role="complementary"]:hover {
  opacity: 1;
  user-select: unset;
  transition: 1s opacity;
}

/* Hide reels */
div.html-div:has(div[aria-label="Reels"]) {
  display: none !important;
}

/* Hide mobile reels */
div[data-mcomponent="MContainer"][data-type="container"]:has(div[aria-label^="View reel"]) {
  opacity: 0;
}

/* Open in app bottom container */
div[data-comp-id="22222"][data-mcomponent="MContainer"][data-type="container"] {
  display: none !important;
}
`);
