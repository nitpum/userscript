// ==UserScript==
// @name        Bilibili hide subtitle
// @namespace   nitpum.com
// @match       *://*.bilibili.tv/*play/*
// @grant       GM_addStyle
// @version     1.0.1
// @author      nitpum
// @description 5/26/2024, 6:52:04 PM
// @downloadURL https://raw.githubusercontent.com/nitpum/userscript/main/bilibili-hide-subtitle/index.js
// ==/UserScript==

const APP_ID = '#app'
const SUBTITLE_MENU_CLASS = 'ip-subtitle'
const NO_SUB_TITLE_OPTION_ID = 'no-sub-option'

let styleElement = null

function addBaseStyle() {
  GM_addStyle(`
  .hide-subtitle-radio {
	display: inline-block;
	width: 10px;
	height: 10px;
	border: 1px solid white;
	border-radius: 4px;
  }
  .hide-subtitle-radio-active {
	background-color: #4c93ff;
  }
`)
}

function hideSubtitle() {
  if (styleElement) return

  document.querySelector('#' + NO_SUB_TITLE_OPTION_ID).innerHTML =
    '<div class="hide-subtitle-radio"></div> Subtitle'

  styleElement = GM_addStyle(`
	.subtitle-group {
	  display: none !important;
	}
  `)
}

function showSubtitle() {
  if (!styleElement) return

  document.querySelector('#' + NO_SUB_TITLE_OPTION_ID).innerHTML =
    '<div class="hide-subtitle-radio hide-subtitle-radio-active"></div> Subtitle'
  styleElement.remove()
  styleElement = null
}

function addOption() {
  if (document.querySelector(`#${NO_SUB_TITLE_OPTION_ID}`)) {
    return
  }

  const subTitleOptions = document.querySelector(`.${SUBTITLE_MENU_CLASS}`)

  const noSub = document.createElement('div')
  noSub.innerHTML =
    '<div class="hide-subtitle-radio hide-subtitle-radio-active"></div> Subtitle'
  noSub.setAttribute('id', NO_SUB_TITLE_OPTION_ID)
  noSub.setAttribute('class', 'ip-subtitle--item')
  noSub.addEventListener('click', handleClickNoSubtitle)

  subTitleOptions.prepend(noSub)
}

function handleClickNoSubtitle() {
  if (styleElement !== null) {
    showSubtitle()
  } else {
    hideSubtitle()
  }
}

function detectSubtitleMenu() {
  const callback = (mutationList, observer) => {
    const hasSubtitleMenu = document.querySelector(`.${SUBTITLE_MENU_CLASS}`)
    if (hasSubtitleMenu) {
      addOption()
      observer.disconnect()
    }
  }

  const observer = new MutationObserver(callback)

  observer.observe(document.querySelector(APP_ID), {
    attributes: true,
    childList: true,
    subtree: true,
  })
}

function main() {
  addBaseStyle()
  detectSubtitleMenu()
}

main()
