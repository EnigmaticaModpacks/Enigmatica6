<?php

namespace App\Misc;

class Directory
{
    static function repository() {
        return __DIR__ . '/../../../../../..';
    }

    static function mods() {
        return self::repository() . '/mods';
    }

    static function mods_unzipped() {
        return self::repository() . '/mods_unzipped';
    }
}
