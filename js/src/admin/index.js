import app from 'flarum/app';
import { extend } from 'flarum/extend';
import PermissionGrid from 'flarum/components/PermissionGrid';
import addSettingsModal from './addSettingsModal';

app.initializers.add('giffgaffcommunity-nightmode', () => {
    extend(PermissionGrid.prototype, 'startItems', (items) => {
        items.add(
            'use-dark-mode',
            {
                icon: 'fas fa-moon',
                label: app.translator.trans('giffgaffcommunity-nightmode.admin.permissions.use'),
                permission: 'user.canUseDarkMode',
            },
            1
        );
    });

    addSettingsModal();
});
