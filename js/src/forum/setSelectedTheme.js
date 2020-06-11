import { extend } from "flarum/extend";

// import app from "flarum/app";
import Page from "flarum/components/Page";
import fixInvalidThemeSetting from "./fixInvalidThemeSetting";
import Themes from "./Themes";

const LocalStorageKey = `giffgaffcommunity_themer_themetype`;

export default function () {
    extend(Page.prototype, "init", SetTheme);
}

export function SetTheme() {
    const { user } = app.session;

    if (!user) {
        // Default to automatic theme when visiting as guest
        SetThemeFromID(Themes.DEFAULT);
        return;
    }

    const PerDevice = user.preferences()
        .giffgaffcommunity_themer_use_per_device;

    if (PerDevice) {
        fixInvalidThemeSetting();
    }

    const CurrentTheme = PerDevice
        ? // fetch through LS is per device enabled
          parseInt(localStorage.getItem(LocalStorageKey))
        : user.preferences().giffgaffcommunity_themer_themetype
        ? user.preferences().giffgaffcommunity_themer_themetype
        : 0;

    SetThemeFromID(CurrentTheme);
}

export function SetThemeFromID(theme) {
    switch (theme) {
        case Themes.AUTO: // auto
            setAuto();
            break;
        case Themes.LIGHT: // light
            setLight();
            break;
        case Themes.DARK: // dark
            setDark();
            break;
        case Themes.OLED: // oled
            setOLED();
            break;

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
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setDark();
    } else {
        setLight();
    }
}

function setLight() {
    $("body").removeClass("dark");
    $("body").removeClass("dark--oled");
}

function setDark() {
    $("body").addClass("dark");
    $("body").removeClass("dark--oled");
}

function setOLED() {
    setDark();
    $("body").addClass("dark--oled");
}
