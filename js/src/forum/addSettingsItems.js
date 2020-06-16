import { extend } from "flarum/extend";

import SettingsPage from "flarum/components/SettingsPage";

import LoadingIndicator from "flarum/components/LoadingIndicator";
import Select from "flarum/components/Select";
import FieldSet from "flarum/components/FieldSet";
import Switch from "flarum/components/Switch";

import { SetTheme } from "./setSelectedTheme";
import fixInvalidThemeSetting from "./fixInvalidThemeSetting";
import GetTheme from "./getTheme";
import Themes from "./Themes";

const LocalStorageKey = `giffgaffcommunity_themer_themetype`;

export default function () {
    extend(SettingsPage.prototype, "settingsItems", function (items) {
        const { user } = app.session;

        const CanChangeTheme = user.canUseDarkMode();

        if (!CanChangeTheme) return;

        const PerDevice = user.preferences()
            .giffgaffcommunity_themer_use_per_device
            ? user.preferences().giffgaffcommunity_themer_use_per_device
            : false;

        if (PerDevice) {
            fixInvalidThemeSetting();
        }

        const CurrentTheme = GetTheme(app);

        items.add(
            "theme",
            FieldSet.component({
                label: app.translator.trans(
                    "giffgaffcommunity-nightmode.forum.user.settings.heading"
                ),
                className: "Settings-theme",
                children: [
                    <p className="description">
                        {app.translator.trans(
                            "giffgaffcommunity-nightmode.forum.user.settings.description"
                        )}
                    </p>,
                    <p className="description">
                        {app.translator.trans(
                            "giffgaffcommunity-nightmode.forum.user.settings.description2"
                        )}
                    </p>,
                    Switch.component({
                        children: app.translator.trans(
                            "giffgaffcommunity-nightmode.forum.user.settings.device_specific_setting_checkbox"
                        ),
                        className: "Settings-theme--per_device_cb",
                        state: PerDevice,
                        onchange: (checked) => {
                            if (checked) {
                                // save current theme as this device's default
                                localStorage.setItem(
                                    LocalStorageKey,
                                    CurrentTheme
                                );
                            }

                            user.savePreferences({
                                giffgaffcommunity_themer_use_per_device: checked,
                            }).then(() => {
                                if (checked) {
                                    // need to force-update selected theme (as it's only set
                                    // on a page load and redraw doesn't count as a page load)
                                    SetTheme();
                                } else {
                                    // set user theme to that of current device
                                    user.savePreferences({
                                        giffgaffcommunity_themer_themetype: Number.parseInt(
                                            CurrentTheme
                                        ),
                                    }).then(() => {
                                        // need to force-update selected theme (as it's only set
                                        // on a page load and redraw doesn't count as a page load)
                                        SetTheme();
                                    });
                                }
                            });
                        },
                    }),
                    Select.component({
                        value: CurrentTheme ? CurrentTheme : Themes.DEFAULT,
                        label: "test",
                        key: "selected_theme",
                        className: "Settings-theme--input",
                        onchange: (e) => {
                            if (PerDevice) {
                                localStorage.setItem(LocalStorageKey, e);

                                SetTheme();
                                return;
                            }

                            console.log(Number.parseInt(e));

                            user.savePreferences({
                                giffgaffcommunity_themer_themetype: Number.parseInt(
                                    e
                                ),
                            }).then(() => {
                                // need to force-update selected theme (as it's only set
                                // on a page load and redraw doesn't count as a apge load)
                                SetTheme();
                            });
                        },
                        options: [
                            app.translator.trans(
                                "giffgaffcommunity-nightmode.forum.user.settings.options.auto"
                            ),
                            app.translator.trans(
                                "giffgaffcommunity-nightmode.forum.user.settings.options.light"
                            ),
                            app.translator.trans(
                                "giffgaffcommunity-nightmode.forum.user.settings.options.dark"
                            ),
                            app.translator.trans(
                                "giffgaffcommunity-nightmode.forum.user.settings.options.oled"
                            ),
                        ],
                    }),
                    <p className="Settings-theme--selection_description">
                        {CurrentTheme === Themes.AUTO
                            ? app.translator.trans(
                                  "giffgaffcommunity-nightmode.forum.user.settings.option_descriptions.auto"
                              )
                            : CurrentTheme === Themes.LIGHT
                            ? app.translator.trans(
                                  "giffgaffcommunity-nightmode.forum.user.settings.option_descriptions.light"
                              )
                            : CurrentTheme === Themes.DARK
                            ? app.translator.trans(
                                  "giffgaffcommunity-nightmode.forum.user.settings.option_descriptions.dark"
                              )
                            : CurrentTheme === Themes.OLED
                            ? app.translator.trans(
                                  "giffgaffcommunity-nightmode.forum.user.settings.option_descriptions.oled"
                              )
                            : // prevents nasty paragraph switching
                              LoadingIndicator.component()}
                    </p>,
                ],
            })
        );
    });
}
