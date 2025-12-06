// ==UserScript==
// @name        Youtube Focus
// @namespace   nitpum.com
// @match       https://*.youtube.com/*
// @grant       GM_addStyle
// @version     1.3.1
// @author      nitpum
// @description Reduce distraction on Youtube
// @downloadURL https://userscript.nitpum.com/youtube-focus/index.js
// ==/UserScript==

GM_addStyle(`
/* Hide short */
ytd-reel-shelf-renderer {
  display: none;
}

*[is-shorts] {
  display: none;
}

/* Hide mobile Shorts on home page */
ytm-rich-section-renderer:has(ytm-shorts-lockup-view-model.shortsLockupViewModelHost) {
  display: none;
}

/* Hide mobile Shorts on video page */
ytm-item-section-renderer:has(ytm-shorts-lockup-view-model.shortsLockupViewModelHost) {
  display: none;
}

/* Hide mobile Shorts button on navigation bar */
ytm-pivot-bar-item-renderer:has(.pivot-shorts) {
  display: none;
}

/* Hide Shorts on search page */
ytd-search grid-shelf-view-model {
    display: none !important;
}

/* Hide mobile big Shorts on search page */
ytm-video-with-context-renderer:has(.big-shorts-singleton) {
  display: none !important;
}

/* Bump home screen video recommend to botom */
ytd-two-column-browse-results-renderer[page-subtype='home'] {
  padding-top: 100vh;
}

/* Bump home screen video mobile */
#app .page-container:has(ytm-browse) {
  padding-top: 100vh;
}

/* Only show sidebar video recommend when mouse hover */
ytd-watch-next-secondary-results-renderer {
  opacity: 0;
  transition: opacity 500ms;
  margin-top: 100vh;
}

ytd-watch-next-secondary-results-renderer:hover {
  opacity: 1;
}
`);

