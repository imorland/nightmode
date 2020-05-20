import app from "flarum/app";
import Model from "flarum/Model";
import User from "flarum/models/User";

import addSettingsItems from "./addSettingsItems";
import setSelectedTheme, { SetThemeFromID } from "./setSelectedTheme";

app.initializers.add("giffgaffcommunity-nightmode", (app) => {
    User.prototype.canUseDarkMode = Model.attribute("canUseDarkMode");

    addSettingsItems();
    setSelectedTheme();
});
