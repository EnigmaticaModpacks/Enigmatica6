events.listen('recipes', (event) => {
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

    event.recipes.industrialforegoing.laser_drill_fluid({
        type: 'industrialforegoing.laser_drill_fluid',
        output: '{FluidName:"astralsorcery:liquid_starlight",Amount:10}',
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
                depth_min: 250,
                depth_max: 255,
                weight: 10
            }
        ],
        pointer: 0,
        catalyst: {
            item: 'industrialforegoing:laser_lens0'
        },
        entity: 'minecraft:empty',
        type: 'industrialforegoing:laser_drill_fluid'
    });

    event.recipes.industrialforegoing.laser_drill_fluid({
        type: 'industrialforegoing.laser_drill_fluid',
        output: '{FluidName:"industrialforegoing:essence",Amount:5}',
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
                depth_max: 10,
                weight: 4
            }
        ],
        pointer: 0,
        catalyst: {
            item: 'industrialforegoing:laser_lens13'
        },
        entity: 'minecraft:empty',
        type: 'industrialforegoing:laser_drill_fluid'
    });

    event.recipes.industrialforegoing.laser_drill_fluid({
        type: 'industrialforegoing.laser_drill_fluid',
        output: '{FluidName:"bloodmagic:life_essence_fluid",Amount:5}',
        rarity: [
            {
                whitelist: {
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
                        'byg:crimson_gardens'
                    ]
                },
                blacklist: {},
                depth_min: 5,
                depth_max: 10,
                weight: 14
            }
        ],
        pointer: 0,
        catalyst: {
            item: 'industrialforegoing:laser_lens14'
        },
        entity: 'minecraft:empty',
        type: 'industrialforegoing:laser_drill_fluid'
    });

    event.recipes.industrialforegoing.laser_drill_fluid({
        type: 'industrialforegoing.laser_drill_fluid',
        output: '{FluidName:"resourcefulbees:honey",Amount:50}',
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
                depth_max: 100,
                weight: 10
            }
        ],
        pointer: 0,
        catalyst: {
            item: 'industrialforegoing:laser_lens4'
        },
        entity: 'minecraft:empty',
        type: 'industrialforegoing:laser_drill_fluid'
    });
});
