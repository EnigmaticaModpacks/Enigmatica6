events.listen('item.tags', (event) => {
    event.add('forge:mushroom_stems', [
        'byg:soul_shroom_stem',
        'byg:yellow_glowshroom_stem',
        'byg:red_glowshroom_stem',
        'byg:brown_mushroom_stem',
        'byg:white_mushroom_stem',
        'byg:imparius_stem',
        'byg:fungal_imparius_stem',
        'quark:glowshroom_stem',
        'undergarden:veil_mushroom_stalk',
        'undergarden:blood_mushroom_stalk',
        'undergarden:indigo_mushroom_stalk',
        'betterendforge:umbrella_tree_log',
        'betterendforge:mossy_glowshroom_log',
        'betterendforge:jellyshroom_log'
    ]);
});
