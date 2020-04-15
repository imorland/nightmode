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

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

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

    if (!app.session.user || !_app.session.user.canUseDarkMode() || !_app.session.user.canChangeDarkModeType()) return;

    var fofNightModeOledType = _app.session.user.preferences().fofNightModeOledType;

    var fofNightMode = _app.session.user.preferences().fofNightMode;

    var ls = window.localStorage.getItem("giffgaff_darkmode_oledpromptshown") ? false : true;
    var shouldShowOledPrompt = !oledSwitched && (!(darkModeTurningOff || !fofNightMode) || darkModeTurningOn) && !fofNightModeOledType && ls; // dark mode must be enabled, oled prompt should be shown, and isn't already shown

    if (shouldShowOledPrompt && $("section.ggDarkModeBanner").length === 0) {
      var banner = document.createElement("section");
      banner.className = "ggDarkModeBanner";
      banner.innerHTML = _app.translator.trans("fof-nightmode.forum.oled_banner", {
        a1: "<a href='#' class=\"blackmodebannershow\">",
        a2: "</a>"
      }).join("") + " <a href=\"#\" class=\"dismiss-btn\" title=\"Dismiss alert\"><i class=\"fas fa-times\"></i></a>";
      document.body.appendChild(banner);
      $("section.ggDarkModeBanner a.blackmodebannershow").click(function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
          $("#header-secondary > ul > li.item-session > div > button.Button--user").click();
          "#header-secondary > ul > li.item-session > div > ul > li.item-toggleOledDarkMode > button".focus();
        } else {
          // small screen
          while ($(".App-backControl .Button.Navigation-back.Button--icon.hasIcon").length > 0) {
            $(".App-backControl .Button.Navigation-back.Button--icon.hasIcon").click();
          }

          $(".App-backControl .Button.Button--icon.Navigation-drawer.hasIcon").click();
          $("#header-secondary > ul > li.item-session > div > button.Button--user").click();
          var $toggleBtn = $("#header-secondary > ul > li.item-session > div > ul > li.item-toggleOledDarkMode > button");
          $toggleBtn.parent().css("overflow", "hidden");
          $toggleBtn.addClass("pulsate");
        }

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
            fofNightMode: lightState,
            fofNightModeOverrideAuto: true
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

/***/ "./src/forum/addSettingsItems.js":
/*!***************************************!*\
  !*** ./src/forum/addSettingsItems.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/SettingsPage */ "flarum/components/SettingsPage");
/* harmony import */ var flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'accountItems', function (items) {
    var _this = this;

    items.add('theme-switch', flarum_components_Switch__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      children: app.translator.trans('fof-nightmode.forum.user.settings.dark_mode'),
      state: !app.session.user.preferences().fofNightMode,
      onchange: function onchange(value, component) {
        return _this.preferenceSaver('fofNightMode')(!value, component);
      }
    }));
  });
});

/***/ }),

/***/ "./src/forum/components/AutoThemeModal.js":
/*!************************************************!*\
  !*** ./src/forum/components/AutoThemeModal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutoThemeModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/KeyboardNavigatable */ "flarum/utils/KeyboardNavigatable");
/* harmony import */ var flarum_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_3__);





var AutoThemeModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AutoThemeModal, _Modal);

  function AutoThemeModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = AutoThemeModal.prototype;

  _proto.isDismissible = function isDismissible() {
    return false;
  };

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.selected = [];
    this.filter = m.prop("");
    this.focused = false;
    this.option = true; // TODO: Make keyboard accessible
    // this.navigator = new KeyboardNavigatable();
    // this.navigator
    //     .onUp(() => this.setIndex(this.getCurrentNumericIndex() - 1, true))
    //     .onDown(() =>
    //         this.setIndex(this.getCurrentNumericIndex() + 1, true)
    //     )
    //     .onSelect(this.select.bind(this))
    //     .onRemove(() => this.selected.splice(this.selected.length - 1, 1));
  };

  _proto.className = function className() {
    return "ggNightModeModal";
  };

  _proto.title = function title() {
    return app.translator.trans("fof-nightmode.forum.auto_theme.dialog.title");
  };

  _proto.content = function content() {
    var _this = this;

    return [m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "ggNightModeModal--auto-theme"
    }, m("p", {
      className: "ggNightModeModal--paragraph"
    }, app.translator.trans("fof-nightmode.forum.auto_theme.dialog.message")), m("p", {
      className: "ggNightModeModal--paragraph"
    }, m("strong", null, app.translator.trans("fof-nightmode.forum.auto_theme.dialog.prompt")))), m("div", {
      className: "Form Form--centered"
    }, m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: "Button Button--primary",
      icon: "fas fa-check",
      children: app.translator.trans("fof-nightmode.forum.auto_theme.dialog.keep_enabled_btn"),
      onclick: function onclick(e) {
        e.preventDefault();
        e.stopPropagation();

        _this.onButtonClick("keep");
      }
    })), m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: "Button Button--primary Button--cancel",
      icon: "fas fa-times",
      children: app.translator.trans("fof-nightmode.forum.auto_theme.dialog.turn_off_btn"),
      onclick: function onclick(e) {
        e.preventDefault();
        e.stopPropagation();

        _this.onButtonClick("undo");
      }
    })))), m("div", {
      className: "Modal-footer"
    }, m("p", {
      className: "ggNightModeModal--note"
    }, m("span", {
      className: "ggNightModeModal-note--large-screen"
    }, app.translator.trans("fof-nightmode.forum.auto_theme.dialog.note")), m("span", {
      className: "ggNightModeModal-note--small-screen"
    }, app.translator.trans("fof-nightmode.forum.auto_theme.dialog.note_mobile"))))];
  };

  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
  };

  _proto.onButtonClick = function onButtonClick(e) {
    if (this.props.onsubmit) this.props.onsubmit(e);
    app.modal.close();
    m.redraw.strategy("none");
  };

  return AutoThemeModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var _components_AutoThemeModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/AutoThemeModal */ "./src/forum/components/AutoThemeModal.js");
/* harmony import */ var _addSettingsItems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addSettingsItems */ "./src/forum/addSettingsItems.js");









flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add("fof-nightmode", function (app) {
  flarum_models_User__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.canUseDarkMode = flarum_Model__WEBPACK_IMPORTED_MODULE_4___default.a.attribute("canUseDarkMode");
  flarum_models_User__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.canChangeDarkModeType = flarum_Model__WEBPACK_IMPORTED_MODULE_4___default.a.attribute("canChangeDarkModeType");
  Object(_addSettingsItems__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, "init", function () {
    function HandleModalSubmit(e) {
      if (e === "keep") {
        // keep auto theme (i.e. i like my retinas being perfectly healthy)
        app.session.user.savePreferences({
          fofNightMode: true,
          fofNightModeOverrideAuto: false
        });
      } else {
        // go back to light mode (i.e. i like burning my retinas)
        app.session.user.savePreferences({
          fofNightMode: false,
          fofNightModeOverrideAuto: true
        });
        $("body").removeClass("dark");
      }
    }

    if (app.session.user && app.session.user.canUseDarkMode() && app.session.user.preferences().fofNightMode) {
      $("body").addClass("dark");
    } else if ((!app.session.user || app.session.user && !app.session.user.preferences().fofNightModeOverrideAuto) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      $("body").addClass("dark"); // show dialog asking logged in user if they wish
      // to override detected theme

      if (app.session.user) {
        app.modal.show(new _components_AutoThemeModal__WEBPACK_IMPORTED_MODULE_7__["default"]({
          onsubmit: HandleModalSubmit
        }));
      }
    } else {
      $("body").removeClass("dark");
    }

    if (app.session.user && app.session.user.canUseDarkMode() && app.session.user.canChangeDarkModeType() && app.session.user.preferences().fofNightModeOledType) {
      $("body").addClass("dark--oled");
    } else {
      $("body").removeClass("dark--oled");
    }
  });

  if (flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_3___default.a) {
    var HandleModalSubmit = function HandleModalSubmit(e) {};

    Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, "config", function () {
      if (app.session.user && app.session.user.canUseDarkMode() && app.session.user.preferences().fofNightMode) {
        $("body").addClass("dark");
      } else if ((!app.session.user || app.session.user && !app.session.user.preferences().fofNightModeOverrideAuto) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        $("body").addClass("dark"); // show dialog asking logged in user if they wish
        // to override detected theme

        if (app.session.user) {
          app.modal.show(new _components_AutoThemeModal__WEBPACK_IMPORTED_MODULE_7__["default"]({
            onsubmit: HandleModalSubmit
          }));
        }
      } else {
        $("body").removeClass("dark");
      }

      if (app.session.user && app.session.user.canUseDarkMode() && app.session.user.canChangeDarkModeType() && app.session.user.preferences().fofNightModeOledType) {
        $("body").addClass("dark--oled");
      } else {
        $("body").removeClass("dark--oled");
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

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

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

/***/ "flarum/components/SettingsPage":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/SettingsPage']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SettingsPage'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

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

/***/ }),

/***/ "flarum/utils/KeyboardNavigatable":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['utils/KeyboardNavigatable']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/KeyboardNavigatable'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map