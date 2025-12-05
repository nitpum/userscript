// ==UserScript==
// @name        Facebook focus
// @namespace   nitpum.com
// @match       https://*.facebook.com/*
// @grant       GM_addStyle
// @version     1.0
// @author      nitpum
// @description Reduce distranction on Facebook
// @downloadURL https://raw.githubusercontent.com/nitpum/userscript/main/facebook-focus/index.js
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
`);
