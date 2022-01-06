onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/mekanism/crushing/';
    const recipes = [
        {
            input: 'byg:pink_sandstone',
            output: Item.of('byg:pink_sand', 2),
            id: `${id_prefix}pink_sand`
        },
        {
            input: 'byg:purple_sandstone',
            output: Item.of('byg:purple_sand', 2),
            id: `${id_prefix}purple_sand`
        },
        {
            input: 'byg:blue_sandstone',
            output: Item.of('byg:blue_sand', 2),
            id: `${id_prefix}blue_sand`
        },
        {
            input: 'byg:white_sandstone',
            output: Item.of('byg:white_sand', 2),
            id: `${id_prefix}white_sand`
        },
        {
            input: 'byg:black_sandstone',
            output: Item.of('byg:black_sand', 2),
            id: `${id_prefix}black_sand`
        },
        {
            input: 'atmospheric:arid_sandstone',
            output: item.of('atmospheric:arid_sand', 2),
            id: `${id_prefix}arid_sand`
        },
        {
            input: 'atmospheric:red_arid_sandstone',
            output: item.of('atmospheric:red_arid_sand', 2),
            id: `${id_prefix}red_arid_sand`
        },
        {
            input: '#forge:stone',
            output: 'minecraft:cobblestone',
            id: `${id_prefix}cobblestone`
        },
        {
            input: 'buildinggadgets:construction_block_dense',
            output: Item.of('buildinggadgets:construction_paste', 3),
            id: `${id_prefix}construction_paste`
        },
        {
            input: Item.of('create:limesand', 3),
            output: Item.of('emendatusenigmatica:silicon_gem'),
            id: `${id_prefix}silicon_gem`
        },
        {
            input: '#forge:end_stones',
            output: Item.of('occultism:crushed_end_stone', 4),
            id: `${id_prefix}crushed_end_stone`
        },
        {
            input: 'byg:raw_quartz_block',
            output: Item.of('byg:quartzite_sand', 2),
            id: `${id_prefix}quartzite_sand`
        },
        {
            input: '#forge:ores/netherite',
            output: Item.of('mekanism:dirty_netherite_scrap', 3),
            id: 'mekanism:processing/netherite/ancient_debris_to_dirty_scrap'
        },
        {
            input: '#forge:coal_petcoke',
            output: 'immersivepetroleum:petcoke_dust',
            id: `${id_prefix}petcoke_dust`
        },
        {
            input: '#forge:storage_blocks/coal_petcoke',
            output: Item.of('9x immersivepetroleum:petcoke_dust'),
            id: `${id_prefix}petcoke_dust_from_block`
        },
        {
            input: '#forge:storage_blocks/coal_coke',
            output: Item.of('9x emendatusenigmatica:coke_dust'),
            id: `${id_prefix}coke_dust_from_block`
        }
    ];

    const biofuels = [
        {
            count: 2,
            inputs: [
                '#minecraft:leaves',
                'byg:flower_patch',
                'byg:clover_patch',
                'byg:leaf_pile',
                'byg:beach_grass',
                'byg:short_beach_grass',
                'byg:wilted_grass',
                'byg:weed_grass',
                'byg:winter_grass',
                'byg:winter_succulent',
                'byg:water_silk',
                'byg:tiny_lilypads',
                'byg:tall_prairie_grass',
                'byg:short_grass',
                'byg:reeds',
                'byg:prairie_grass',
                'byg:poison_ivy',
                'byg:horseweed',
                'byg:cattail',
                'projectvibrantjourneys:cattail',
                'environmental:cattail',
                'byg:black_puff',
                'byg:shulkren_moss_blanket',
                'byg:shulkren_fungus',
                'byg:vermilion_sculk_growth',
                'byg:oddity_bush',
                'byg:nightshade_berries',
                'byg:ether_bush',
                'byg:ether_grass',
                'byg:ender_lily',
                'byg:ivis_sprout',
                'byg:ivis_roots',
                'byg:embur_lily',
                'byg:tall_embur_roots',
                'byg:embur_roots',
                'byg:embur_sprouts',
                'byg:hanging_sythian_roots',
                'byg:sythian_stalk_block',
                'byg:sythian_sprout',
                'byg:sythian_roots',
                'byg:nether_bristle',
                'byg:weeping_roots',
                'byg:soul_shroom_spore_end',
                'byg:scorched_grass',
                'byg:scorched_bush',
                'byg:whaling_grass',
                'byg:warped_bush',
                'byg:crimson_berries',
                'byg:tall_crimson_roots',
                'byg:blueberries',
                'byg:crimson_berries',
                'simplefarming:strawberries',
                'simplefarming:raspberries',
                'simplefarming:blueberries',
                'simplefarming:blackberries',
                'byg:holly_berries'
            ]
        },
        {
            count: 4,
            inputs: [
                'byg:warped_cactus',
                'byg:red_glowcane',
                'byg:purple_glowcane',
                'byg:pink_glowcane',
                'byg:blue_glowcane',
                'byg:shulkren_vine',
                'byg:whaling_vine',
                'byg:embur_gel_vines',
                'byg:skyris_vine',
                'byg:lament_vine'
            ]
        },
        {
            count: 5,
            inputs: [
                '#minecraft:small_flowers',
                '#minecraft:tall_flowers',
                '#forge:mushroom_stems',
                '#forge:mushrooms',
                'byg:green_apple',
                'farmersdelight:cabbage_leaf',
                'farmersdelight:onion',
                'farmersdelight:tomato',
                'farmersdelight:cabbage',
                'simplefarming:rice',
                'simplefarming:rye',
                'simplefarming:oat',
                'simplefarming:barley',
                'simplefarming:cotton',
                'simplefarming:zucchini',
                'simplefarming:yam',
                'simplefarming:turnip',
                'simplefarming:tomato',
                'simplefarming:sweet_potato',
                'simplefarming:squash',
                'simplefarming:spinach',
                'simplefarming:soybean',
                'simplefarming:sorghum',
                'simplefarming:radish',
                'simplefarming:pepper',
                'simplefarming:peanut',
                'simplefarming:pea_pod',
                'simplefarming:onion',
                'simplefarming:lettuce',
                'simplefarming:ginger',
                'simplefarming:eggplant',
                'simplefarming:cucumber',
                'simplefarming:corn',
                'simplefarming:cassava',
                'simplefarming:broccoli',
                'simplefarming:honeydew',
                'simplefarming:cantaloupe'
            ]
        },
        {
            count: 7,
            inputs: ['#forge:mushroom_caps']
        }
    ];

    biofuels.forEach((biofuel) => {
        biofuel.inputs.forEach((input) => {
            recipes.push({
                input: input,
                output: Item.of('mekanism:bio_fuel', biofuel.count),
                id: `${id_prefix}bio_fuel_from_${input.split(':')[0].replace('#', '')}_${input.split(':')[1]}`
            });
        });
    });

    recipes.forEach((recipe) => {
        event.recipes.mekanism.crushing(recipe.output, recipe.input).id(recipe.id);
    });
});
