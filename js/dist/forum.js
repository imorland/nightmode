module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=10)}([function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.Model},function(e,t){e.exports=flarum.core.compat["models/User"]},function(e,t){e.exports=flarum.core.compat["components/SettingsPage"]},function(e,t){e.exports=flarum.core.compat["components/LoadingIndicator"]},function(e,t){e.exports=flarum.core.compat["components/Select"]},function(e,t){e.exports=flarum.core.compat["components/FieldSet"]},function(e,t){e.exports=flarum.core.compat["components/Page"]},,function(e,t,o){"use strict";o.r(t);var n=o(1),r=o.n(n),a=o(2),s=o.n(a),i=o(3),c=o.n(i),p=o(0),f=o(4),u=o.n(f),d=o(5),l=o.n(d),h=o(6),g=o.n(h),b=o(7),y=o.n(b),v=o(8),_=o.n(v);function x(){var e=app.session.user;function t(){$("body").removeClass("dark"),$("body").removeClass("dark--oled")}function o(){$("body").addClass("dark"),$("body").removeClass("dark--oled")}switch(e.preferences().davwheat_themer_themetype?e.preferences().davwheat_themer_themetype:0){case 0:window.matchMedia("(prefers-color-scheme: dark)").matches?o():t();break;case 1:t();break;case 2:o();break;case 3:o(),$("body").addClass("dark--oled")}}var k=function(){Object(p.extend)(u.a.prototype,"settingsItems",(function(e){var t=app.session.user;if(t.canUseDarkMode()){var o=t.preferences().davwheat_themer_themetype?t.preferences().davwheat_themer_themetype:0;e.add("theme",y.a.component({label:app.translator.trans("fof-nightmode.forum.user.settings.heading"),className:"Settings-theme",children:[m("p",{className:"description"},app.translator.trans("fof-nightmode.forum.user.settings.description")),g.a.component({value:o||0,label:"test",key:"selected_theme",className:"Settings-theme--input",onchange:function(e){m.redraw(),t.savePreferences({davwheat_themer_themetype:e}).then((function(){console.info("SAVED",e),console.log(t),m.redraw(),x()}))},options:[app.translator.trans("fof-nightmode.forum.user.settings.options.auto"),app.translator.trans("fof-nightmode.forum.user.settings.options.light"),app.translator.trans("fof-nightmode.forum.user.settings.options.dark"),app.translator.trans("fof-nightmode.forum.user.settings.options.oled")]}),m("p",{className:"Settings-theme--selection_description"},0===o?app.translator.trans("fof-nightmode.forum.user.settings.option_descriptions.auto"):1===o?app.translator.trans("fof-nightmode.forum.user.settings.option_descriptions.light"):2===o?app.translator.trans("fof-nightmode.forum.user.settings.option_descriptions.dark"):3===o?app.translator.trans("fof-nightmode.forum.user.settings.option_descriptions.oled"):l.a.component())]}))}}))};r.a.initializers.add("fof-nightmode",(function(e){c.a.prototype.canUseDarkMode=s.a.attribute("canUseDarkMode"),k(),Object(p.extend)(_.a.prototype,"init",x)}))}]);
//# sourceMappingURL=forum.js.map