// ==UserScript==
// @name         CBPlus
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Better Chaturbate!
// @author       ValzarMen
// @include      https://www.chaturbate.com/*
// @include      https://chaturbate.com/*
// @require      https://raw.githubusercontent.com/valzar-cbp/cbplus/master/require/cbplus.js
// @require      https://raw.githubusercontent.com/valzar-cbp/cbplus/master/require/video-js-7.6.5.min.js
// @require      https://raw.githubusercontent.com/valzar-cbp/cbplus/master/require/videojs-http-streaming-1.11.1.min.js
// @require      https://raw.githubusercontent.com/valzar-cbp/cbplus/master/require/jquery-3.4.1.min.js
// @require      https://raw.githubusercontent.com/valzar-cbp/cbplus/master/require/jquery-ui-1.12.1.min.js
// @resource     vjCSS https://raw.githubusercontent.com/valzar-cbp/cbplus/master/resource/video-js.css
// @resource     jqCSS https://raw.githubusercontent.com/valzar-cbp/cbplus/master/resource/jquery-ui.css
// @resource     cbCSS https://raw.githubusercontent.com/valzar-cbp/cbplus/master/resource/cbplus.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

// DUPLICATED IDS fix

'use strict';

const globals = {};

GM_addStyle (GM_getResourceText("vjCSS"));
GM_addStyle (GM_getResourceText("jqCSS"));
GM_addStyle (GM_getResourceText("cbCSS"));

generalStuff()