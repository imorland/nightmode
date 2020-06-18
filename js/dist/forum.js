module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var o={AUTO:0,LIGHT:1,DARK:2,OLED:3,DEFAULT:function(e){return Number.parseInt(e.data["giffgaffcommunity-nightmode_default_theme"])||0}},r={localStorageKey:"giffgaffcommunity_themer_themetype"};t.c=o},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat.app},,function(e,t){e.exports=flarum.core.compat.Model},function(e,t){e.exports=flarum.core.compat["models/User"]},function(e,t){e.exports=flarum.core.compat["components/SettingsPage"]},function(e,t){e.exports=flarum.core.compat["components/LoadingIndicator"]},function(e,t){e.exports=flarum.core.compat["components/Select"]},function(e,t){e.exports=flarum.core.compat["components/FieldSet"]},function(e,t){e.exports=flarum.core.compat["components/Switch"]},function(e,t){e.exports=flarum.core.compat["components/Page"]},,function(e,t,n){"use strict";n.r(t);var o=n(2),r=n.n(o),a=n(4),c=n.n(a),i=n(5),s=n.n(i),f=n(1),u=n(6),p=n.n(u),l=n(7),d=n.n(l),g=n(8),h=n.n(g),y=n(9),_=n.n(y),b=n(10),v=n.n(b),S=n(11),x=n.n(S),k=n(0),D=k.a.localStorageKey;function I(){var e=Array.from(new Set(Object.values(k.b))),t=parseInt(localStorage.getItem(D));isNaN(t)||!t?T("Theme is not a valid integer! Resetting..."):e.includes(t)||T("Theme is out of bounds! Resetting...")}function T(e){console.warn(e),localStorage.setItem(D,k.b.DEFAULT(app))}function O(e){var t=e.session.user,n=!!t.preferences().giffgaffcommunity_themer_use_per_device,o=t.preferences().giffgaffcommunity_themer_themetype,r=t.preferences().fofNightMode;if(n)return parseInt(localStorage.getItem(k.a.localStorageKey));if("number"==typeof o)return o;if(r){var a=k.b.LIGHT;return!0===r&&(a=k.b.DARK),t.savePreferences({fofNightMode:null,giffgaffcommunity_themer_themetype:a}),a}return t.savePreferences({fofNightMode:null,giffgaffcommunity_themer_themetype:k.b.DEFAULT(e)}),k.b.DEFAULT(e)}k.a.localStorageKey;function L(){var e=app.session.user;e?(e.preferences().giffgaffcommunity_themer_use_per_device&&I(),N(O(app))):N(k.c.DEFAULT(app))}function N(e){switch(e){case k.c.LIGHT:A();break;case k.c.DARK:M();break;case k.c.OLED:M(),$("body").addClass("dark--oled");break;default:window.matchMedia("(prefers-color-scheme: dark)").matches?M():A()}}function A(){$("body").removeClass("dark"),$("body").removeClass("dark--oled")}function M(){$("body").addClass("dark"),$("body").removeClass("dark--oled")}var P=k.a.localStorageKey,U=function(e){return app.translator.trans("giffgaffcommunity-nightmode.forum.user.settings."+e)};r.a.initializers.add("giffgaffcommunity-nightmode",(function(){s.a.prototype.canUseDarkMode=c.a.attribute("canUseDarkMode"),Object(f.extend)(p.a.prototype,"settingsItems",(function(e){var t=app.session.user;if(t.canUseDarkMode()){var n=!!t.preferences().giffgaffcommunity_themer_use_per_device;n&&I();var o=O(app);e.add("theme",_.a.component({label:U("heading"),className:"Settings-theme",children:[m("p",{className:"description"},U("description")),m("p",{className:"description"},U("description2")),v.a.component({children:U("device_specific_setting_checkbox"),className:"Settings-theme--per_device_cb",state:n,onchange:function(e){e&&localStorage.setItem(P,o),t.savePreferences({giffgaffcommunity_themer_use_per_device:e}).then((function(){e?L():t.savePreferences({giffgaffcommunity_themer_themetype:Number.parseInt(o)}).then((function(){L()}))}))}}),h.a.component({value:o||k.c.DEFAULT(app),label:"test",key:"selected_theme",className:"Settings-theme--input",onchange:function(e){if(n)return localStorage.setItem(P,e),void L();t.savePreferences({giffgaffcommunity_themer_themetype:Number.parseInt(e)}).then((function(){L()}))},options:[U("options.auto"),U("options.light"),U("options.dark"),U("options.oled")]}),m("p",{className:"Settings-theme--selection_description"},o===k.c.AUTO?U("option_descriptions.auto"):o===k.c.LIGHT?U("option_descriptions.light"):o===k.c.DARK?U("option_descriptions.dark"):o===k.c.OLED?U("option_descriptions.oled"):d.a.component())]}))}})),Object(f.extend)(x.a.prototype,"init",L)}))}]);
//# sourceMappingURL=forum.js.map