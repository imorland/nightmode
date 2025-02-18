import { Themes, Constants } from '../common/config';

export default function getTheme(app) {
    const { user } = app.session;

    const IsUsingPerDeviceSettings = !!user.preferences().giffgaffcommunity_themer_use_per_device;
    const SelectedTheme = user.preferences().giffgaffcommunity_themer_themetype;

    //* Theme selection for previous extension users.
    //? This could have been better off as a migration, but
    //? this is far less hassle imo, and works just as easily.
    const OldThemeSelection = user.preferences().fofNightMode;

    if (IsUsingPerDeviceSettings) {
        // fetch through LS is per device enabled
        return parseInt(localStorage.getItem(Constants.localStorageKey));
    } else {
        if (typeof SelectedTheme === 'number') {
            // use user prefs
            return SelectedTheme;
        } else {
            if (OldThemeSelection) {
                // migrate previous preferences
                let migrated = Themes.LIGHT;

                if (OldThemeSelection === true) {
                    // user selected dark before migration
                    migrated = Themes.DARK;
                }

                // save migrated pref and erase old pref
                user.savePreferences({
                    fofNightMode: null,
                    giffgaffcommunity_themer_themetype: migrated,
                });

                // assume the prefs will be saved correctly and just return
                // what the value should have been for better "performance"
                return migrated;
            } else {
                // user never set a pref, so use the default

                user.savePreferences({
                    fofNightMode: null,
                    giffgaffcommunity_themer_themetype: Themes.DEFAULT(app),
                });

                // assume the prefs will be saved correctly and just return
                // what the value should have been for better "performance"
                return Themes.DEFAULT(app);
            }
        }
    }
}
