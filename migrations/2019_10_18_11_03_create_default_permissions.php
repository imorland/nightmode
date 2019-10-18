<?php

use Flarum\Database\Migration;
use Flarum\Group\Group;

return Migration::addPermissions([
    'user.canUseDarkMode' => Group::ADMINISTRATOR_ID,
]);
