events.listen('block.tags', (event) => {
    event.add('forge:mushrooms', [
        'minecraft:brown_mushroom',
        'minecraft:red_mushroom',
        'quark:glowshroom',
        'byg:death_cap',
        'byg:shulkren_fungus',
        'byg:soul_shroom_spore_end',
        'byg:soul_shroom',
        'byg:purple_glowshroom',
        'byg:blue_glowshroom',
        'byg:green_mushroom',
        'byg:weeping_milkcap',
        'byg:wood_blewit',
        'byg:black_puff',
        'undergarden:indigo_mushroom',
        'byg:sythian_fungus',
        'undergarden:veil_mushroom',
        'undergarden:blood_mushroom'
    ]);
});
