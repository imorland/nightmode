import { extend } from "flarum/extend";

import SettingsPage from "flarum/components/SettingsPage";

import Select from "flarum/components/Select";
import FieldSet from "flarum/components/FieldSet";

export default function () {
    extend(SettingsPage.prototype, "settingsItems", function (items) {
        const { user } = app.session;

        const CanChangeTheme = user.canUseDarkMode();

        if (!CanChangeTheme) return;

        const CurrentTheme =
            typeof user.preferences().fofNightModeThemeType !== "boolean"
                ? 0
                : user.preferences().fofNightModeThemeType;

        items.add(
            "theme",
            FieldSet.component({
                label: app.translator.trans(
                    "fof-nightmode.forum.user.settings.heading"
                ),
                className: "Settings-theme",
                children: [
                    <p className="description">
                        {app.translator.trans(
                            "fof-nightmode.forum.user.settings.description"
                        )}
                    </p>,
                    Select.component({
                        value: CurrentTheme ? CurrentTheme : 0,
                        label: "test",
                        key: "selected_theme",
                        className: "Settings-theme--input",
                        onchange: (e) => {
                            let auto = false,
                                light = false,
                                dark = false,
                                oled = false;

                            user.savePreferences({
                                fofNightModeThemeType: e.toString(),
                            }).then(() => {
                                console.info("SAVED", e);
                                console.log(user);
                                m.redraw();
                            });
                        },
                        options: [
                            app.translator.trans(
                                "fof-nightmode.forum.user.settings.options.auto"
                            ),
                            app.translator.trans(
                                "fof-nightmode.forum.user.settings.options.light"
                            ),
                            app.translator.trans(
                                "fof-nightmode.forum.user.settings.options.dark"
                            ),
                            app.translator.trans(
                                "fof-nightmode.forum.user.settings.options.oled"
                            ),
                        ],
                    }),
                    <p className="Settings-theme--selection_description">
                        {CurrentTheme === 0
                            ? app.translator.trans(
                                  "fof-nightmode.forum.user.settings.option_descriptions.auto"
                              )
                            : CurrentTheme === 1
                            ? app.translator.trans(
                                  "fof-nightmode.forum.user.settings.option_descriptions.light"
                              )
                            : CurrentTheme === 2
                            ? app.translator.trans(
                                  "fof-nightmode.forum.user.settings.option_descriptions.dark"
                              )
                            : app.translator.trans(
                                  "fof-nightmode.forum.user.settings.option_descriptions.oled"
                              )}
                    </p>,
                ],
            })
        );
    });
}
