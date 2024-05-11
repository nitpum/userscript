// ==UserScript==
// @name        Youtube Focus
// @namespace   nitpum.com
// @match       https://www.youtube.com/*
// @grant       GM_addStyle
// @version     1.0.1
// @author      nitpum
// @description 02/03/2024, 23:35:57
// @downloadURL https://raw.githubusercontent.com/nitpum/userscript/main/youtube-focus/youtube-focus.js
// ==/UserScript==
(function () {
  GM_addStyle('ytd-reel-shelf-renderer { display: none; }')

  GM_addStyle('ytd-watch-next-secondary-results-renderer { margin-top: 80vh; }')
})()

