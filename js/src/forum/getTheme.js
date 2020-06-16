import Themes from "./Themes";

const LocalStorageKey = `giffgaffcommunity_themer_themetype`;

export default function GetTheme(app) {
    const { user } = app.session;

    const PerDevice = user.preferences().giffgaffcommunity_themer_use_per_device
        ? user.preferences().giffgaffcommunity_themer_use_per_device
        : false;

    if (PerDevice) {
        // fetch through LS is per device enabled
        return parseInt(localStorage.getItem(LocalStorageKey));
    } else {
        if (
            typeof user.preferences().giffgaffcommunity_themer_themetype ===
            "number"
        ) {
            // use user prefs
            return user.preferences().giffgaffcommunity_themer_themetype;
        } else {
            if (user.preferences().fofNightMode) {
                // migrate previous preferences

                const preMigration = user.preferences().fofNightMode;
                let migrated = Themes.LIGHT;

                if (preMigration === true) {
                    // user selected dark before migration
                    migrated = Themes.DARK;
                }

                user.savePreferences({
                    fofNightMode: null,
                    giffgaffcommunity_themer_themetype: migrated,
                });

                // assume the prefs will be saved correctly and just return what the value should have been
                return migrated;
            } else {
                // user never set a pref

                user.savePreferences({
                    fofNightMode: null,
                    giffgaffcommunity_themer_themetype: Themes.DEFAULT,
                });

                // assume the prefs will be saved correctly and just return default
                return Themes.DEFAULT;
            }
        }
    }
}
