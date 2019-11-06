import { extend } from "flarum/extend";
import SessionDropdown from "flarum/components/SessionDropdown";
import Button from "flarum/components/Button";
import Page from "flarum/components/Page";

export default function() {
    function DisplayOledPromptIfNeeded(
        _app,
        oledSwitched = false,
        darkModeTurningOff = false,
        darkModeTurningOn = false
    ) {
        if (
            !_app.session.user.canUseDarkMode() ||
            !_app.session.user.canChangeDarkModeType()
        )
            return;

        let fofNightModeOledType = _app.session.user.preferences()
            .fofNightModeOledType;
        let fofNightMode = _app.session.user.preferences().fofNightMode;
        let ls = window.localStorage.getItem(
            "giffgaff_darkmode_oledpromptshown"
        )
            ? false
            : true;

        const shouldShowOledPrompt =
            !oledSwitched &&
            (!(darkModeTurningOff || !fofNightMode) || darkModeTurningOn) &&
            !fofNightModeOledType &&
            ls;

        // dark mode must be enabled, oled prompt should be shown, and isn't already shown
        if (
            shouldShowOledPrompt &&
            $("section.ggDarkModeBanner").length === 0
        ) {
            let banner = document.createElement("section");
            banner.className = "ggDarkModeBanner";
            banner.innerHTML = `If dark mode is still too light, you can <a href='#' class="blackmodebannershow">switch to black mode</a> (saves battery on OLED screens). <a href="#" class="dismiss-btn" title="Dismiss alert"><i class="fas fa-times"></i></a>`;

            document.body.appendChild(banner);

            $("section.ggDarkModeBanner a.blackmodebannershow").click(
                function() {
                    $(
                        "#header-secondary > ul > li.item-session > div > button"
                    ).click();
                    $(
                        "#header-secondary > ul > li.item-session > div > ul > li.item-toggleOledDarkMode > button"
                    ).focus();
                    return false;
                }
            );

            $("section.ggDarkModeBanner a.dismiss-btn").click(function() {
                $("section.ggDarkModeBanner").remove();

                window.localStorage.setItem(
                    "giffgaff_darkmode_oledpromptshown",
                    true
                );

                return false;
            });
        } else if ($("section.ggDarkModeBanner").length > 0) {
            $("section.ggDarkModeBanner").remove();
        }
    }

    extend(SessionDropdown.prototype, "items", function(items) {
        if (app.session.user.canUseDarkMode()) {
            let lightState =
                app.session.user.preferences().fofNightMode == true
                    ? false
                    : true;

            let oledState =
                app.session.user.canChangeDarkModeType() &&
                app.session.user.preferences().fofNightModeOledType == true
                    ? true
                    : false;

            // Add night mode link to session dropdown
            items.add(
                app.session.user && app.session.user.preferences().fofNightMode
                    ? "nightmode"
                    : "daymode",
                Button.component({
                    icon: lightState == true ? "fas fa-moon" : "fas fa-sun",
                    href: "javascript:;",
                    children:
                        lightState == true
                            ? app.translator.trans("fof-nightmode.forum.night")
                            : app.translator.trans("fof-nightmode.forum.day"),
                    onclick: function() {
                        DisplayOledPromptIfNeeded(
                            app,
                            false,
                            !lightState,
                            lightState
                        );

                        // Toggle night mode on or off by changing the user preference
                        app.session.user.savePreferences({
                            fofNightMode: lightState
                        });

                        $("body").toggleClass("dark");
                    }
                }),
                -1
            );

            if (app.session.user.canChangeDarkModeType() && !lightState) {
                // Add night mode link to session dropdown
                items.add(
                    "toggleOledDarkMode",
                    Button.component({
                        icon: "far fa-moon",
                        children: oledState
                            ? app.translator.trans(
                                  "fof-nightmode.forum.user.settings.oled_off"
                              )
                            : app.translator.trans(
                                  "fof-nightmode.forum.user.settings.oled_on"
                              ),
                        onclick: () => {
                            DisplayOledPromptIfNeeded(app, true);

                            // console.log(`OLED mode state: ${!oledState}`);

                            // Toggle night mode on or off by changing the user preference
                            app.session.user.savePreferences({
                                fofNightModeOledType: !oledState
                            });

                            $("body").toggleClass("dark--oled");
                        }
                    }),
                    -1
                );
            }
        }
    });

    extend(Page.prototype, "init", function() {
        DisplayOledPromptIfNeeded(app);
    });
}
