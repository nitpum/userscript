// ==UserScript==
// @name        Youtube Focus
// @namespace   nitpum.com
// @match       https://www.youtube.com/*
// @grant       GM_addStyle
// @version     1.1.0
// @author      nitpum
// @description 02/03/2024, 23:35:57
// @downloadURL https://raw.githubusercontent.com/nitpum/userscript/main/youtube-focus/index.js
// ==/UserScript==

GM_addStyle("ytd-reel-shelf-renderer { display: none; }");

GM_addStyle("ytd-watch-next-secondary-results-renderer { margin-top: 100vh; }");

GM_addStyle("*[is-shorts] { display: none; }");

GM_addStyle(
	"ytd-two-column-browse-results-renderer[page-subtype='home'] { padding-top: 100vh; }",
);
