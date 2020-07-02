<?php

/*
 * This file is part of giffgaffcommunity/nightmode.
 *
 * Copyright (c) 2020 FriendsOfFlarum
 * Copyright (c) 2020 giffgaff
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */

use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        /**
         * @var \Flarum\Settings\SettingsRepositoryInterface
         */
        $settings = app('flarum.settings');

        $settings->set('giffgaffcommunity-nightmode.default_theme', '0');
    },
    'down' => function (Builder $schema) {
        $settings = app('flarum.settings');

        $settings->delete('giffgaffcommunity-nightmode.default_theme');
    },
];
