<?php

namespace GiffgaffCommunity\NightMode\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\UserSerializer;
use Illuminate\Contracts\Events\Dispatcher;

class Permissions
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'addPermission']);
    }

    public function addPermission(Serializing $event)
    {
        if ($event->isSerializer(UserSerializer::class)) {
            $event->attributes['canUseDarkMode'] = $event
                ->actor
                ->hasPermissionLike('user.canUseDarkMode');
        }
    }
}
