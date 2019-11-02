import { extend } from 'flarum/extend';
import app from 'flarum/app';
import Page from 'flarum/components/Page';
import TagsPage from 'flarum/tags/components/TagsPage';
import Model from 'flarum/Model';
import User from 'flarum/models/User';

import addMenuItems from './addMenuItems'

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

    addMenuItems();
});
