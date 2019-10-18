import app from 'flarum/app';
import { extend } from 'flarum/extend';
import PermissionGrid from 'flarum/components/PermissionGrid';

app.initializers.add('fof/nightmode', () => {
  extend(PermissionGrid.prototype, 'startItems', items => {
    items.add('dark-mode', {
      icon: 'far fa-moon',
      label: app.translator.trans('fof-nightmode.admin.permissions.use'),
      permission: 'user.useDarkMode'
    }, 1);
  });
});