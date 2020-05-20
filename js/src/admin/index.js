import app from "flarum/app";
import { extend } from "flarum/extend";
import PermissionGrid from "flarum/components/PermissionGrid";

app.initializers.add("fof-nightmode", () => {
    extend(PermissionGrid.prototype, "startItems", (items) => {
        items.add(
            "use-dark-mode",
            {
                icon: "fas fa-moon",
                label: app.translator.trans(
                    "fof-nightmode.admin.permissions.use"
                ),
                permission: "user.canUseDarkMode",
            },
            1
        );
    });
});
