events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                count: 2,
                output: 'mekanism:bio_fuel',
                inputs: [
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
                output: 'mekanism:bio_fuel',
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
                output: 'mekanism:bio_fuel',
                inputs: [
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
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        recipe.inputs.forEach((input) => {
            event.recipes.mekanism.crushing({
                type: 'mekanism.crushing',
                input: {
                    ingredient: {
                        item: input
                    }
                },
                output: {
                    item: recipe.output,
                    count: recipe.count
                }
            });
        });
    });
});
