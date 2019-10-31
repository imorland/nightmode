import { extend } from 'flarum/extend';
import app from 'flarum/app';
import SessionDropdown from 'flarum/components/SessionDropdown';
import Button from 'flarum/components/Button';
import Page from 'flarum/components/Page';
import TagsPage from 'flarum/tags/components/TagsPage';
import Model from 'flarum/Model';
import User from 'flarum/models/User';

import addDarkModeTypeSetting from './addDarkModeTypeSetting'

app.initializers.add('fof-nightmode', app => {

    User.prototype.canUseDarkMode = Model.attribute('canUseDarkMode');
    User.prototype.canChangeDarkModeType = Model.attribute('canChangeDarkModeType');

    extend(Page.prototype, 'init', function () {
        if (app.session.user && app.session.user.canUseDarkMode() && app.session.user.preferences().fofNightMode) {
            $('body').addClass('dark');
        } else {
            $('body').removeClass('dark');
        }
        
        if (app.session.user && app.session.user.canUseDarkMode() && app.session.user.canChangeDarkModeType() && app.session.user.preferences().fofNightModeOledType) {
            $('body').addClass('dark--oled');
        } else {
            $('body').removeClass('dark--oled');
        }
    });

    if (TagsPage) {
        extend(TagsPage.prototype, 'config', function () {
            if (app.session.user && app.session.user.canUseDarkMode() && app.session.user.preferences().fofNightMode) {
                $('body').addClass('dark');
            } else {
                $('body').removeClass('dark');
            }

            if (app.session.user && app.session.user.canUseDarkMode() && app.session.user.canChangeDarkModeType() && app.session.user.preferences().fofNightModeOledType) {
                $('body').addClass('dark--oled');
            } else {
                $('body').removeClass('dark--oled');
            }
        });
    }

    extend(SessionDropdown.prototype, 'items', function (items) {
        if (app.session.user.canUseDarkMode()) {
            let lightState = app.session.user.preferences().fofNightMode == true ? false : true;

            // Add night mode link to session dropdown
            items.add(app.session.user && app.session.user.preferences().fofNightMode ? 'nightmode' : 'daymode',
                Button.component({
                    icon: lightState == true ? 'fas fa-moon' : 'fas fa-sun',
                    href: 'javascript:;',
                    children: lightState == true ? app.translator.trans('fof-nightmode.forum.night') : app.translator.trans('fof-nightmode.forum.day'),
                    onclick: function () {
                        // Toggle night mode on or off by changing the user preference
                        app.session.user.savePreferences({ 'fofNightMode': lightState });

                        $('body').toggleClass('dark');
                    }
                }),
                -1
            );
        }
    });

    addDarkModeTypeSetting();
});
