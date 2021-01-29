events.listen('recipes', (event) => {
    var energy = 20000;
    var water = 500;
    var data = {
        recipes: [
            {
                input: 'simplefarming:cactus_crop',
                outputs: [
                    item.of('simplefarming:cactus_crop').chance(2.0),
                    item.of('simplefarming:cactus_fruit').chance(1.1)
                ],
                energyModifier: 1.5,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:chicory_root',
                outputs: [item.of('simplefarming:chicory_root').chance(2.5)],
                energyModifier: 1.0,
                waterModifier: 1.0
            },
            {
                input: 'simplefarming:marshmallow_root',
                outputs: [item.of('simplefarming:marshmallow_root').chance(2.5)],
                energyModifier: 1.0,
                waterModifier: 1.0
            },
            {
                input: 'simplefarming:cumin_seeds',
                outputs: [item.of('simplefarming:cumin_seeds').chance(2.5)],
                energyModifier: 1.0,
                waterModifier: 1.0
            },
            {
                input: 'simplefarming:quinoa_seeds',
                outputs: [item.of('simplefarming:quinoa_seeds').chance(2.5)],
                energyModifier: 1.0,
                waterModifier: 1.0
            },
            {
                input: 'simplefarming:barley_seeds',
                outputs: [
                    item.of('simplefarming:barley').chance(2.0),
                    item.of('simplefarming:barley_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:broccoli_seeds',
                outputs: [
                    item.of('simplefarming:broccoli').chance(2.0),
                    item.of('simplefarming:broccoli_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:cassava_seeds',
                outputs: [
                    item.of('simplefarming:cassava').chance(2.0),
                    item.of('simplefarming:cassava_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:corn_seeds',
                outputs: [item.of('simplefarming:corn').chance(2.0), item.of('simplefarming:corn_seeds').chance(1.1)],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:cotton_seeds',
                outputs: [
                    item.of('simplefarming:cotton').chance(2.0),
                    item.of('simplefarming:cotton_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:cucumber_seeds',
                outputs: [
                    item.of('simplefarming:cucumber').chance(2.0),
                    item.of('simplefarming:cucumber_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:eggplant_seeds',
                outputs: [
                    item.of('simplefarming:eggplant').chance(2.0),
                    item.of('simplefarming:eggplant_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:ginger_seeds',
                outputs: [
                    item.of('simplefarming:ginger').chance(2.0),
                    item.of('simplefarming:ginger_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:kenaf_seeds',
                outputs: [
                    item.of('simplefarming:kenaf_fiber').chance(2.0),
                    item.of('simplefarming:kenaf_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:lettuce_seeds',
                outputs: [
                    item.of('simplefarming:lettuce').chance(2.0),
                    item.of('simplefarming:lettuce_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:oat_seeds',
                outputs: [item.of('simplefarming:oat').chance(2.0), item.of('simplefarming:oat_seeds').chance(1.1)],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:onion_seeds',
                outputs: [item.of('simplefarming:onion').chance(2.0), item.of('simplefarming:onion_seeds').chance(1.1)],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:pea_seeds',
                outputs: [item.of('simplefarming:pea_pod').chance(2.0), item.of('simplefarming:pea_seeds').chance(1.1)],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:peanut_seeds',
                outputs: [
                    item.of('simplefarming:peanut').chance(2.0),
                    item.of('simplefarming:peanut_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:pepper_seeds',
                outputs: [
                    item.of('simplefarming:pepper').chance(2.0),
                    item.of('simplefarming:pepper_seeds').chance(1.1),
                    item.of('simplefarming:habanero').chance(1.01)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:radish_seeds',
                outputs: [
                    item.of('simplefarming:radish').chance(2.0),
                    item.of('simplefarming:radish_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:rice_seeds',
                outputs: [item.of('simplefarming:rice').chance(2.0), item.of('simplefarming:rice_seeds').chance(1.1)],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:rye_seeds',
                outputs: [item.of('simplefarming:rye').chance(2.0), item.of('simplefarming:rye_seeds').chance(1.1)],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:sorghum_seeds',
                outputs: [
                    item.of('simplefarming:sorghum').chance(2.0),
                    item.of('simplefarming:sorghum_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:soybean_seeds',
                outputs: [
                    item.of('simplefarming:soybean').chance(2.0),
                    item.of('simplefarming:soybean_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:spinach_seeds',
                outputs: [
                    item.of('simplefarming:spinach').chance(2.0),
                    item.of('simplefarming:spinach_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:sweet_potato_seeds',
                outputs: [
                    item.of('simplefarming:sweet_potato').chance(2.0),
                    item.of('simplefarming:sweet_potato_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:tomato_seeds',
                outputs: [
                    item.of('simplefarming:tomato').chance(2.0),
                    item.of('simplefarming:tomato_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:turnip_seeds',
                outputs: [
                    item.of('simplefarming:turnip').chance(2.0),
                    item.of('simplefarming:turnip_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:yam_seeds',
                outputs: [item.of('simplefarming:yam').chance(2.0), item.of('simplefarming:yam_seeds').chance(1.1)],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:zucchini_seeds',
                outputs: [
                    item.of('simplefarming:zucchini').chance(2.0),
                    item.of('simplefarming:zucchini_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'simplefarming:squash_seeds',
                outputs: [
                    item.of('simplefarming:squash_block').chance(1.1),
                    item.of('simplefarming:squash_seeds').chance(1.1)
                ],
                energyModifier: 2.0,
                waterModifier: 2.0
            },
            {
                input: 'simplefarming:honeydew_seeds',
                outputs: [
                    item.of('simplefarming:honeydew_block').chance(1.1),
                    item.of('simplefarming:honeydew_seeds').chance(1.1)
                ],
                energyModifier: 2.0,
                waterModifier: 2.0
            },
            {
                input: 'simplefarming:cantaloupe_seeds',
                outputs: [
                    item.of('simplefarming:cantaloupe_block').chance(1.1),
                    item.of('simplefarming:cantaloupe_seeds').chance(1.1)
                ],
                energyModifier: 2.0,
                waterModifier: 2.0
            },
            {
                input: 'farmersdelight:cabbage_seeds',
                outputs: [
                    item.of('farmersdelight:cabbage').chance(2.0),
                    item.of('farmersdelight:cabbage_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'farmersdelight:tomato_seeds',
                outputs: [
                    item.of('farmersdelight:tomato').chance(2.0),
                    item.of('farmersdelight:tomato_seeds').chance(1.1)
                ],
                energyModifier: 1.0,
                waterModifier: 0.5
            },
            {
                input: 'farmersdelight:onion',
                outputs: [item.of('farmersdelight:onion').chance(2.5)],
                energyModifier: 1.0,
                waterModifier: 1.0
            },
            {
                input: 'farmersdelight:rice_panicle',
                outputs: [item.of('farmersdelight:rice_panicle').chance(2.5)],
                energyModifier: 1.0,
                waterModifier: 1.5
            },
            {
                input: 'biomesoplenty:maple_sapling',
                outputs: [item.of('minecraft:oak_log').chance(6.0), item.of('biomesoplenty:maple_sapling').chance(1.1)],
                energyModifier: 3.0,
                waterModifier: 3.0
            },
            {
                input: 'byg:ether_sapling',
                outputs: [item.of('byg:ether_log').chance(6.0), item.of('byg:ether_sapling').chance(1.1)],
                energyModifier: 3.0,
                waterModifier: 3.0
            },
            {
                input: 'byg:maple_sapling',
                outputs: [item.of('minecraft:oak_log').chance(6.0), item.of('byg:maple_sapling').chance(1.1)],
                energyModifier: 3.0,
                waterModifier: 3.0
            },
            {
                input: 'byg:brown_zelkova_sapling',
                outputs: [item.of('byg:zelkova_log').chance(6.0), item.of('byg:brown_zelkova_sapling').chance(1.1)],
                energyModifier: 3.0,
                waterModifier: 3.0
            },
            {
                input: 'byg:withering_oak_sapling',
                outputs: [
                    item.of('byg:withering_oak_log').chance(6.0),
                    item.of('byg:withering_oak_sapling').chance(1.1)
                ],
                energyModifier: 3.0,
                waterModifier: 3.0
            },
            {
                input: 'byg:palm_sapling',
                outputs: [item.of('byg:palm_log').chance(6.0), item.of('byg:palm_sapling').chance(1.1)],
                energyModifier: 3.0,
                waterModifier: 3.0
            },
            {
                input: 'byg:nightshade_sapling',
                outputs: [item.of('byg:nightshade_log').chance(6.0), item.of('byg:nightshade_sapling').chance(1.1)],
                energyModifier: 3.0,
                waterModifier: 3.0
            },
            {
                input: 'byg:lament_sapling',
                outputs: [item.of('byg:lament_log').chance(6.0), item.of('byg:lament_sapling').chance(1.1)],
                energyModifier: 3.0,
                waterModifier: 3.0
            },
            {
                input: 'byg:araucaria_sapling',
                outputs: [item.of('byg:pine_log').chance(6.0), item.of('byg:araucaria_sapling').chance(1.1)],
                energyModifier: 3.0,
                waterModifier: 3.0
            },
            {
                input: 'undergarden:smogstem_sapling',
                outputs: [
                    item.of('undergarden:smogstem_log').chance(6.0),
                    item.of('undergarden:smogstem_sapling').chance(1.1)
                ],
                energyModifier: 3.0,
                waterModifier: 3.0
            },
            {
                input: 'undergarden:wigglewood_sapling',
                outputs: [
                    item.of('undergarden:wigglewood_log').chance(6.0),
                    item.of('undergarden:wigglewood_sapling').chance(1.1)
                ],
                energyModifier: 3.0,
                waterModifier: 3.0
            },
            {
                input: 'undergarden:glowing_kelp',
                outputs: [item.of('undergarden:glowing_kelp').chance(2.0)],
                energyModifier: 1.0,
                waterModifier: 1.0
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.thermal
            .insolator(recipe.outputs, recipe.input)
            .water(water * recipe.waterModifier)
            .energy(energy * recipe.energyModifier);
    });
});
