import { extend } from 'flarum/extend';

import SettingsPage from 'flarum/components/SettingsPage';

import LoadingIndicator from 'flarum/components/LoadingIndicator';
import Select from 'flarum/components/Select';
import FieldSet from 'flarum/components/FieldSet';
import Switch from 'flarum/components/Switch';

import { SetTheme as setTheme } from './setSelectedTheme';
import fixInvalidThemeSetting from './fixInvalidThemeSetting';
import getTheme from './getTheme';
import Themes, { Constants } from '../common/config';

const LocalStorageKey = Constants.localStorageKey;

// custom function for translations makes it a lot cleaner
const trans = (key) => app.translator.trans(`giffgaffcommunity-nightmode.forum.user.settings.${key}`);

export default function () {
    extend(SettingsPage.prototype, 'settingsItems', function (items) {
        const { user } = app.session;

        const CanChangeTheme = user.canUseDarkMode();

        if (!CanChangeTheme) return;

        const PerDevice = !!user.preferences().giffgaffcommunity_themer_use_per_device;

        if (PerDevice) {
            fixInvalidThemeSetting();
        }

        const CurrentTheme = getTheme(app);

        items.add(
            'theme',
            FieldSet.component({
                label: trans('heading'),
                className: 'Settings-theme',
                children: [
                    <p className="description">{trans('description')}</p>,
                    <p className="description">{trans('description2')}</p>,
                    Switch.component({
                        children: trans('device_specific_setting_checkbox'),
                        className: 'Settings-theme--per_device_cb',
                        state: PerDevice,
                        onchange: (checked) => {
                            if (checked) {
                                // save current theme as this device's default
                                localStorage.setItem(LocalStorageKey, CurrentTheme);
                            }

                            user.savePreferences({
                                giffgaffcommunity_themer_use_per_device: checked,
                            }).then(() => {
                                if (checked) {
                                    // need to force-update selected theme (as it's only set
                                    // on a page load and redraw doesn't count as a page load)
                                    setTheme();
                                } else {
                                    // set user theme to that of current device
                                    user.savePreferences({
                                        giffgaffcommunity_themer_themetype: Number.parseInt(CurrentTheme),
                                    }).then(() => {
                                        // need to force-update selected theme (as it's only set
                                        // on a page load and redraw doesn't count as a page load)
                                        setTheme();
                                    });
                                }
                            });
                        },
                    }),
                    Select.component({
                        value: CurrentTheme || Themes.DEFAULT(app),
                        label: 'test',
                        key: 'selected_theme',
                        className: 'Settings-theme--input',
                        onchange: (e) => {
                            if (PerDevice) {
                                localStorage.setItem(LocalStorageKey, e);

                                setTheme();
                                return;
                            }

                            user.savePreferences({
                                giffgaffcommunity_themer_themetype: Number.parseInt(e),
                            }).then(() => {
                                // need to force-update selected theme (as it's only set
                                // on a page load and redraw doesn't count as a apge load)
                                setTheme();
                            });
                        },
                        options: [trans('options.auto'), trans('options.light'), trans('options.dark'), trans('options.oled')],
                    }),
                    <p className="Settings-theme--selection_description">
                        {CurrentTheme === Themes.AUTO
                            ? trans('option_descriptions.auto')
                            : CurrentTheme === Themes.LIGHT
                            ? trans('option_descriptions.light')
                            : CurrentTheme === Themes.DARK
                            ? trans('option_descriptions.dark')
                            : CurrentTheme === Themes.OLED
                            ? trans('option_descriptions.oled')
                            : // prevents nasty paragraph switching
                              LoadingIndicator.component()}
                    </p>,
                ],
            })
        );
    });
}
