<?php

use Symfony\Component\Finder\Finder;

require __DIR__ . '/vendor/autoload.php';

const REPOSITORY_ROOT = __DIR__ . '/../../';

$bee_files = Finder::create()->in(REPOSITORY_ROOT . 'config/resourcefulbees/bees')->files()->name('*.json');

/**
 * KubeJS expects the color to be an integer, and `#70522e` doesn't look like one,
 * so this function replaces the `#` with `0x`, so javascript sees it as a number.
 * (also converts all the hexadecimal characters to lowercase, looks a bit better)
 */
function color(string $hex) {
    return strtolower(str_replace('#', '0x', $hex));
}

/**
 * Helper function that js-serializes this bee, custom padding is used & colors do not get quoted out.
 */
function beeline(string $name, string $band, string $outline): string { // pun intended ^-^
    return str_pad("{name: '{$name}',", 25) . "band: {$band}, outline: {$outline}},";
}

$lines = [];
$last_directory = null;

foreach ($bee_files->sortByName() as $bee_file) {

    if ($last_directory != $bee_file->getRelativePath()) {
        $last_directory  = $bee_file->getRelativePath();
        $lines[] = '// ' . $bee_file->getRelativePath();
    }

    $name = str_replace(' ', '_', strtolower($bee_file->getFilenameWithoutExtension()));

    $json = json_decode($bee_file->getContents());

    // `??` in php means to take the thing on the right in case the left thing is null.
    $band = color($json->ColorData->primaryColor ?? $json->ColorData->honeycombColor);
    $outline = color($json->ColorData->secondaryColor ?? $json->ColorData->honeycombColor);

    $lines[] = beeline($name, $band, $outline);
}

$lines[] = '// manual';
$lines[] = beeline('abbee', '0xe5ded5', '0xffb1c5');

foreach ($lines as $line) {
    echo $line . PHP_EOL;
}
