import { extend } from 'flarum/extend';
import SettingsPage from 'flarum/components/SettingsPage';
import Switch from "flarum/components/Switch";

export default function () {
    extend(SettingsPage.prototype, 'settingsItems', function (items) {
        if (app.session.user.canUseDarkMode() && app.session.user.canChangeDarkModeType() ) {
            let oledState = app.session.user.preferences().fofNightModeOledType == true ? true : false;

            // Add night mode link to session dropdown
            items.add('toggleOledDarkMode',
                Switch.component({
                    children: app.translator.trans('fof-nightmode.forum.user.settings.oled'),
                    state: oledState,
                    onchange: (value) => {
                        console.log(value);
                        
                        // Toggle night mode on or off by changing the user preference
                        app.session.user.savePreferences({ 'fofNightModeOledType': value });

                        $('body').toggleClass('dark--oled');
                    }
                }),
                -1
            );
        }
    });
}