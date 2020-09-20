// ==UserScript==
// @name         cbplus-dev
// @namespace    https://github.com/valzar-cbp/
// @downloadURL  https://raw.githubusercontent.com/valzar-cbp/cbplus/dev/index.js
// @version      1.1.5
// @description  Better Chaturbate!
// @author       ValzarMen
// @include      https://www.chaturbate.com/*
// @include      https://chaturbate.com/*
// @require      https://raw.githubusercontent.com/valzar-cbp/cbplus/dev/cbplus.js
// @require      https://raw.githubusercontent.com/valzar-cbp/cbplus/dev/require/video.min.js
// @require      https://raw.githubusercontent.com/valzar-cbp/cbplus/dev/require/jquery.min.js
// @require      https://raw.githubusercontent.com/valzar-cbp/cbplus/dev/require/jquery-ui.min.js
// @resource     vjCSS https://raw.githubusercontent.com/valzar-cbp/cbplus/dev/resource/video-js.css
// @resource     jqCSS https://raw.githubusercontent.com/valzar-cbp/cbplus/dev/resource/jquery-ui.css
// @resource     cbCSS https://raw.githubusercontent.com/valzar-cbp/cbplus/dev/resource/cbplus.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

'use strict';

GM_addStyle (GM_getResourceText("vjCSS"));
GM_addStyle (GM_getResourceText("jqCSS"));
GM_addStyle (GM_getResourceText("cbCSS"));

generalStuff()
