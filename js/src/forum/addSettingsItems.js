import { extend } from "flarum/extend";

import SettingsPage from "flarum/components/SettingsPage";

import LoadingIndicator from "flarum/components/LoadingIndicator";
import Select from "flarum/components/Select";
import FieldSet from "flarum/components/FieldSet";

import { SetTheme } from "./setSelectedTheme";

export default function () {
    extend(SettingsPage.prototype, "settingsItems", function (items) {
        const { user } = app.session;

        const CanChangeTheme = user.canUseDarkMode();

        if (!CanChangeTheme) return;

        const CurrentTheme = user.preferences().davwheat_themer_themetype
            ? user.preferences().davwheat_themer_themetype
            : 0;

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
                            m.redraw();
                            user.savePreferences({
                                davwheat_themer_themetype: e,
                            }).then(() => {
                                console.info("SAVED", e);
                                console.log(user);
                                m.redraw();

                                // need to force-update selected theme (as it's only set
                                // on a page load and redraw doesn't count as a apge load)
                                SetTheme();
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
                            : CurrentTheme === 3
                            ? app.translator.trans(
                                  "fof-nightmode.forum.user.settings.option_descriptions.oled"
                              )
                            : // prevents nasty paragraph switching
                              LoadingIndicator.component()}
                    </p>,
                ],
            })
        );
    });
}
