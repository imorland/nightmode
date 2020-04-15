import { extend } from "flarum/extend";
import app from "flarum/app";
import Page from "flarum/components/Page";
import TagsPage from "flarum/tags/components/TagsPage";
import Model from "flarum/Model";
import User from "flarum/models/User";

import addMenuItems from "./addMenuItems";
import AutoThemeModal from "./components/AutoThemeModal";
import addSettingsItems from "./addSettingsItems";

app.initializers.add("fof-nightmode", app => {
    User.prototype.canUseDarkMode = Model.attribute("canUseDarkMode");
    User.prototype.canChangeDarkModeType = Model.attribute(
        "canChangeDarkModeType"
    );

    addSettingsItems();

    extend(Page.prototype, "init", function() {
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

        if (
            app.session.user &&
            app.session.user.canUseDarkMode() &&
            app.session.user.preferences().fofNightMode
        ) {
            $("body").addClass("dark");
        } else if (
            (!app.session.user ||
                (app.session.user &&
                    !app.session.user.preferences()
                        .fofNightModeOverrideAuto)) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            $("body").addClass("dark");

            // show dialog asking logged in user if they wish
            // to override detected theme
            if (app.session.user) {
                app.modal.show(
                    new AutoThemeModal({ onsubmit: HandleModalSubmit })
                );
            }
        } else {
            $("body").removeClass("dark");
        }

        if (
            app.session.user &&
            app.session.user.canUseDarkMode() &&
            app.session.user.canChangeDarkModeType() &&
            app.session.user.preferences().fofNightModeOledType
        ) {
            $("body").addClass("dark--oled");
        } else {
            $("body").removeClass("dark--oled");
        }
    });

    if (TagsPage) {
        function HandleModalSubmit(e) {}

        extend(TagsPage.prototype, "config", function() {
            if (
                app.session.user &&
                app.session.user.canUseDarkMode() &&
                app.session.user.preferences().fofNightMode
            ) {
                $("body").addClass("dark");
            } else if (
                (!app.session.user ||
                    (app.session.user &&
                        !app.session.user.preferences()
                            .fofNightModeOverrideAuto)) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            ) {
                $("body").addClass("dark");

                // show dialog asking logged in user if they wish
                // to override detected theme
                if (app.session.user) {
                    app.modal.show(
                        new AutoThemeModal({ onsubmit: HandleModalSubmit })
                    );
                }
            } else {
                $("body").removeClass("dark");
            }

            if (
                app.session.user &&
                app.session.user.canUseDarkMode() &&
                app.session.user.canChangeDarkModeType() &&
                app.session.user.preferences().fofNightModeOledType
            ) {
                $("body").addClass("dark--oled");
            } else {
                $("body").removeClass("dark--oled");
            }
        });
    }

    addMenuItems();
});
