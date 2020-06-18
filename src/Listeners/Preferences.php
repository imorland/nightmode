<?php
/*
 * This file is part of GiffgaffCommunity/nightmode
 * This file is derived from the reflar/nightmode extension.
 *
 * Copyright (c) ReFlar.
 * Copyright (c) giffgaff
 *
 * http://reflar.io
 * https://giffgaff.com
 *
 * For the full copyright and license information, please view the license.md
 * file that was distributed with this source code.
 */

namespace GiffgaffCommunity\NightMode\Listeners;

use Flarum\Event\ConfigureUserPreferences;
use Illuminate\Contracts\Events\Dispatcher;

class Preferences
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureUserPreferences::class, [$this, 'addUserPreference']);
    }

    public function addUserPreference(ConfigureUserPreferences $event)
    {
        $event->add('giffgaffcommunity_themer_themetype', 'intval', (int) app('flarum.settings')->get('giffgaffcommunity-nightmode.default_theme', 0));
        $event->add('giffgaffcommunity_themer_use_per_device', 'boolval', false);
    }
}
