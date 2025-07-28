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

GM_addStyle(`
/* Hide short */
ytd-reel-shelf-renderer {
  display: none;
}

*[is-shorts] {
  display: none;
}

/*
ytd-search grid-shelf-view-model {
    display: none !important;
}
*/

/* Bump home screen video recommend to botom */
ytd-two-column-browse-results-renderer[page-subtype='home'] {
  padding-top: 100vh;
}

/* Sidebar video recommend */
ytd-watch-next-secondary-results-renderer {
  opacity: 0;
  transition: opacity 500ms;
}

ytd-watch-next-secondary-results-renderer:hover {
  opacity: 1;
}
`);
