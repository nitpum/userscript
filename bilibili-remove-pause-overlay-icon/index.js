// ==UserScript==
// @name        Bilibili remove pause overlay icon
// @namespace   nitpum.com
// @match       *://*.bilibili.tv/*play/*
// @grant       GM_addStyle
// @version     1.2.1
// @author      nitpum
// @description 5/26/2024, 6:52:04 PM
// @downloadURL https://userscript.nitpum.com/bilibili-remove-pause-overlay-icon/index.js
// ==/UserScript==

GM_addStyle(`
  .player-mobile-play-mask-pause-icon {
    display: none !important;
  }
`);
