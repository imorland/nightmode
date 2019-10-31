<?php

use Flarum\Database\Migration;
use Flarum\Group\Group;

return Migration::addPermissions([
    'user.canUseDarkMode' => Group::MODERATOR_ID,
    'user.canChangeDarkModeType' => Group::MODERATOR_ID,
]);
