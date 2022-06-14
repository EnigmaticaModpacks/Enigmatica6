<?php

use Symfony\Component\Finder\Finder;

require __DIR__ . '/vendor/autoload.php';

const REPOSITORY_ROOT = __DIR__ . '/../../';

$bee_files = Finder::create()->in(REPOSITORY_ROOT . 'config/resourcefulbees/bees')->files()->name('*.json');

$lines = [];
$last_directory = null;

foreach ($bee_files->sortByName() as $bee_file) {

    $name = str_replace(' ', '_', strtolower($bee_file->getFilenameWithoutExtension()));

    // keep dev bees out of the `combVariants`, except for the kitten, who's comb is called catnip:
    if ($name == 'kitten') {
        $name = 'catnip';
    } else if ($bee_file->getRelativePath() == 'dev') {
        continue;
    }

    if ($last_directory != $bee_file->getRelativePath()) {
        $last_directory  = $bee_file->getRelativePath();
        $lines[] = '// ' . $bee_file->getRelativePath();
    }

    $lines[] = "'${name}',";
}

foreach ($lines as $line) {
    echo $line . PHP_EOL;
}
