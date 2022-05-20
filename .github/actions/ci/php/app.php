<?php

use App\Misc\Directory;
use Symfony\Component\Finder\Finder;

require __DIR__ . '/vendor/autoload.php';

if(!is_dir(Directory::mods_unzipped())) mkdir((Directory::mods_unzipped()));

//

$mods = Finder::create()->in(Directory::mods())->files()->name('*.jar');

foreach ($mods as $mod) {
    $unzip_in = Directory::mods_unzipped() .'/'. $mod->getFilenameWithoutExtension();
    echo $mod->getFilenameWithoutExtension() . PHP_EOL;
    exec(sprintf("unzip -o %s '*/patchouli_books/*' -d %s",
        escapeshellarg($mod->getPathname()),
        escapeshellarg($unzip_in),
    ));
}
echo PHP_EOL;

//

$entries = Finder::create()->in(Directory::mods_unzipped())->files()->path('en_us/entries')->name('*.json');

$patchouli_page = new \App\Patchouli\Page();

$mentioned_recipe_ids = collect();

foreach ($entries as $entry) {
    $contents = $entry->getContents();

    // some mods (*cough* thermal *cough*) only use \r to end their lines with
    $contents = str_replace(["\r\n", "\r", "\n"], PHP_EOL, $contents);

    // some mods (*cough* thermal *cough*) have `//` comments in their `json` file
    $contents = preg_replace('/(^\s+\/\/.*$)/m', '', $contents);

    $json = json_decode($contents, true);

    foreach ($json['pages'] as $page) {
        foreach ($patchouli_page->recipes(collect($page)) as $recipe_id) {
            $mentioned_recipe_ids->add($recipe_id);
        }
    }
}

$mentioned_recipe_ids = $mentioned_recipe_ids->unique()->sort()->values();

//

$txt = [];
$last_mod = null;

foreach ($mentioned_recipe_ids as $recipe_id) {
    if($last_mod != null && $last_mod != explode(':', $recipe_id)[0]) {
        $txt[] = null; // add a gap each time the mod: changes
    }
    $txt[] = $recipe_id;
    $last_mod = explode(':', $recipe_id)[0];
}

//

echo "::notice::Patchouli is referencing {$mentioned_recipe_ids->count()} recipe ids." . PHP_EOL;
file_put_contents('patchouli_mentioned_recipe_ids.txt', implode(PHP_EOL, $txt) . PHP_EOL);
