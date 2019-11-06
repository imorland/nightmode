module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport *//*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/***/ }),

/***/ "./src/forum/addMenuItems.js":
/*!***********************************!*\
  !*** ./src/forum/addMenuItems.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/SessionDropdown */ "flarum/components/SessionDropdown");
/* harmony import */ var flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  function DisplayOledPromptIfNeeded(_app, oledSwitched, darkModeTurningOff, darkModeTurningOn) {
    if (oledSwitched === void 0) {
      oledSwitched = false;
    }

    if (darkModeTurningOff === void 0) {
      darkModeTurningOff = false;
    }

    if (darkModeTurningOn === void 0) {
      darkModeTurningOn = false;
    }

    if (!_app.session.user.canUseDarkMode() || !_app.session.user.canChangeDarkModeType()) return;

    var fofNightModeOledType = _app.session.user.preferences().fofNightModeOledType;

    var fofNightMode = _app.session.user.preferences().fofNightMode;

    var ls = window.localStorage.getItem("giffgaff_darkmode_oledpromptshown") ? false : true;
    var shouldShowOledPrompt = !oledSwitched && (!(darkModeTurningOff || !fofNightMode) || darkModeTurningOn) && !fofNightModeOledType && ls; // dark mode must be enabled, oled prompt should be shown, and isn't already shown

    if (shouldShowOledPrompt && $("section.ggDarkModeBanner").length === 0) {
      var banner = document.createElement("section");
      banner.className = "ggDarkModeBanner";
      banner.innerHTML = "If dark mode is still too light, you can <a href='#' class=\"blackmodebannershow\">switch to black mode</a> (saves battery on OLED screens). <a href=\"#\" class=\"dismiss-btn\" title=\"Dismiss alert\"><i class=\"fas fa-times\"></i></a>";
      document.body.appendChild(banner);
      $("section.ggDarkModeBanner a.blackmodebannershow").click(function () {
        $("#header-secondary > ul > li.item-session > div > button").click();
        $("#header-secondary > ul > li.item-session > div > ul > li.item-toggleOledDarkMode > button").focus();
        return false;
      });
      $("section.ggDarkModeBanner a.dismiss-btn").click(function () {
        $("section.ggDarkModeBanner").remove();
        window.localStorage.setItem("giffgaff_darkmode_oledpromptshown", true);
        return false;
      });
    } else if ($("section.ggDarkModeBanner").length > 0) {
      $("section.ggDarkModeBanner").remove();
    }
  }

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_SessionDropdown__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, "items", function (items) {
    if (app.session.user.canUseDarkMode()) {
      var lightState = app.session.user.preferences().fofNightMode == true ? false : true;
      var oledState = app.session.user.canChangeDarkModeType() && app.session.user.preferences().fofNightModeOledType == true ? true : false; // Add night mode link to session dropdown

      items.add(app.session.user && app.session.user.preferences().fofNightMode ? "nightmode" : "daymode", flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
        icon: lightState == true ? "fas fa-moon" : "fas fa-sun",
        href: "javascript:;",
        children: lightState == true ? app.translator.trans("fof-nightmode.forum.night") : app.translator.trans("fof-nightmode.forum.day"),
        onclick: function onclick() {
          DisplayOledPromptIfNeeded(app, false, !lightState, lightState); // Toggle night mode on or off by changing the user preference

          app.session.user.savePreferences({
            fofNightMode: lightState
          });
          $("body").toggleClass("dark");
        }
      }), -1);

      if (app.session.user.canChangeDarkModeType() && !lightState) {
        // Add night mode link to session dropdown
        items.add("toggleOledDarkMode", flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
          icon: "far fa-moon",
          children: oledState ? app.translator.trans("fof-nightmode.forum.user.settings.oled_off") : app.translator.trans("fof-nightmode.forum.user.settings.oled_on"),
          onclick: function onclick() {
            DisplayOledPromptIfNeeded(app, true); // console.log(`OLED mode state: ${!oledState}`);
            // Toggle night mode on or off by changing the user preference

            app.session.user.savePreferences({
              fofNightModeOledType: !oledState
            });
            $("body").toggleClass("dark--oled");
          }
        }), -1);
      }
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_Page__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, "init", function () {
    DisplayOledPromptIfNeeded(app);
  });
});

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/tags/components/TagsPage */ "flarum/tags/components/TagsPage");
/* harmony import */ var flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _addMenuItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addMenuItems */ "./src/forum/addMenuItems.js");







flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('fof-nightmode', function (app) {
  flarum_models_User__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.canUseDarkMode = flarum_Model__WEBPACK_IMPORTED_MODULE_4___default.a.attribute('canUseDarkMode');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.canChangeDarkModeType = flarum_Model__WEBPACK_IMPORTED_MODULE_4___default.a.attribute('canChangeDarkModeType');
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'init', function () {
    if (app.session.user && app.session.user.canUseDarkMode() && app.session.user.preferences().fofNightMode) {
      $('body').addClass('dark');
    } else {
      $('body').removeClass('dark');
    }

    if (app.session.user && app.session.user.canUseDarkMode() && app.session.user.canChangeDarkModeType() && app.session.user.preferences().fofNightModeOledType) {
      $('body').addClass('dark--oled');
    } else {
      $('body').removeClass('dark--oled');
    }
  });

  if (flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_3___default.a) {
    Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'config', function () {
      if (app.session.user && app.session.user.canUseDarkMode() && app.session.user.preferences().fofNightMode) {
        $('body').addClass('dark');
      } else {
        $('body').removeClass('dark');
      }

      if (app.session.user && app.session.user.canUseDarkMode() && app.session.user.canChangeDarkModeType() && app.session.user.preferences().fofNightModeOledType) {
        $('body').addClass('dark--oled');
      } else {
        $('body').removeClass('dark--oled');
      }
    });
  }

  Object(_addMenuItems__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/SessionDropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/SessionDropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SessionDropdown'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/models/User":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/User']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/User'];

/***/ }),

/***/ "flarum/tags/components/TagsPage":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['tags/components/TagsPage']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/components/TagsPage'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map