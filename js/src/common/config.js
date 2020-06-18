/*

    JS enum equivalent. Makes sure no value mix-ups are made!

    DEFAULT is used when an invalid value has been set, as well as for guest and new users.

*/

const Themes = {
    AUTO: 0,
    LIGHT: 1,
    DARK: 2,
    OLED: 3,

    // adds an "ultra default" of 0 if the admins don't set a default tsk tsk tsk
    DEFAULT: (app) => Number.parseInt(app.data['giffgaffcommunity-nightmode_default_theme']) || 0,
};

const Constants = {
    localStorageKey: `giffgaffcommunity_themer_themetype`,
};

export default Themes;

export { Themes, Constants };
