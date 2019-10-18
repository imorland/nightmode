<?php

namespace FoF\NightMode\Listeners;


use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\BasicDiscussionSerializer;
use Flarum\Api\Serializer\PostSerializer;
use Flarum\Api\Serializer\UserSerializer;
use giffgaff\UserManager\Api\BannedUsers;
use Illuminate\Cache\Repository;
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
