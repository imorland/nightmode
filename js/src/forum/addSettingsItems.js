import {extend} from 'flarum/extend';
import SettingsPage from 'flarum/components/SettingsPage';
import Switch from "flarum/components/Switch";

export default function () {
    extend(SettingsPage.prototype, 'accountItems', function (items) {
        items.add('theme-switch',
            Switch.component({
                children: app.translator.trans('fof-nightmode.forum.user.settings.dark_mode'),
                state: !app.session.user.preferences().fofNightMode,
                onchange: (value, component) => this.preferenceSaver('fofNightMode')(!value, component)
            })
        )
    });
}
