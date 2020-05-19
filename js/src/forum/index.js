import app from "flarum/app";
import Model from "flarum/Model";
import User from "flarum/models/User";

import addSettingsItems from "./addSettingsItems";

app.initializers.add("fof-nightmode", (app) => {
    User.prototype.canUseDarkMode = Model.attribute("canUseDarkMode");

    addSettingsItems();
});
