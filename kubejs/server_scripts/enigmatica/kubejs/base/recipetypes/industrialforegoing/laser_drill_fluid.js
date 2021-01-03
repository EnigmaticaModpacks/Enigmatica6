events.listen('recipes', function (event) {
    event.remove({ id: 'industrialforegoing:laser_drill_fluid/oil' });
    event.recipes.industrialforegoing.laser_drill_fluid({
        type: 'industrialforegoing.laser_drill_fluid',
        output: '{FluidName:"pneumaticcraft:oil",Amount:10}',
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: 'minecraft:worldgen/biome',
                    values: [
                        'minecraft:nether_wastes',
                        'minecraft:basalt_deltas',
                        'minecraft:warped_forest',
                        'minecraft:crimson_forest',
                        'minecraft:soul_sand_valley',
                        'byg:embur_bog',
                        'byg:glowstone_gardens',
                        'byg:sythian_torrids',
                        'byg:warped_desert',
                        'byg:subzero_hypogeal',
                        'byg:quartz_desert',
                        'byg:brimstone_caverns',
                        'byg:weeping_mire',
                        'byg:withering_woods',
                        'byg:magma_wastes',
                        'byg:wailing_garth',
                        'byg:crimson_gardens',
                        'biomesoplenty:crystalline_chasm',
                        'biomesoplenty:undergrowth',
                        'biomesoplenty:visceral_heap',
                        'biomesoplenty:withered_abyss',
                        'minecraft:the_end',
                        'minecraft:the_void',
                        'minecraft:small_end_islands',
                        'minecraft:end_barrens',
                        'minecraft:end_highlands',
                        'minecraft:end_midlands',
                        'byg:ivis_fields',
                        'byg:bulbis_gardens',
                        'byg:shattered_desert',
                        'byg:ethereal_islands',
                        'byg:purpur_peaks',
                        'byg:cryptic_wastes',
                        'byg:viscal_isles',
                        'byg:shulkren_forest',
                        'byg:nightshade_forest'
                    ]
                },
                depth_min: 5,
                depth_max: 20,
                weight: 8
            }
        ],
        pointer: 0,
        catalyst: {
            item: 'industrialforegoing:laser_lens15'
        },
        entity: 'minecraft:empty',
        type: 'industrialforegoing:laser_drill_fluid'
    });
});
