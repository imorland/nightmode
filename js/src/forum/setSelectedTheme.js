import { extend } from 'flarum/extend';

import Page from 'flarum/components/Page';

import fixInvalidThemeSetting from './fixInvalidThemeSetting';
import Themes, { Constants } from '../common/config';
import getTheme from './getTheme';

const LocalStorageKey = Constants.localStorageKey;

export default function () {
    extend(Page.prototype, 'init', SetTheme);
}

export function SetTheme() {
    const { user } = app.session;

    if (!user) {
        // Default to automatic theme when visiting as guest
        SetThemeFromID(Themes.DEFAULT(app));
        return;
    }

    const PerDevice = user.preferences().giffgaffcommunity_themer_use_per_device;

    if (PerDevice) {
        fixInvalidThemeSetting();
    }

    const CurrentTheme = getTheme(app);

    SetThemeFromID(CurrentTheme);
}

export function SetThemeFromID(theme) {
    switch (theme) {
        case Themes.LIGHT: // light
            setLight();
            break;
        case Themes.DARK: // dark
            setDark();
            break;
        case Themes.OLED: // oled
            setOLED();
            break;

        // Handles auto and other unexpected cases
        default:
            setAuto();
            break;
    }
}

/*
    We need to forcefully remove unused dark classes when switching theme as
    this function *could* be called from the Settings page where a dark theme
    is already chosen, and we're meant to be switching to a light theme.
*/

function setAuto() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDark();
    } else {
        setLight();
    }
}

function setLight() {
    $('body').removeClass('dark');
    $('body').removeClass('dark--oled');
}

function setDark() {
    $('body').addClass('dark');
    $('body').removeClass('dark--oled');
}

function setOLED() {
    setDark();
    $('body').addClass('dark--oled');
}
