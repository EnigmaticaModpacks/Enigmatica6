onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/press/';
    const recipes = [
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:plates/steel')],
            outputs: [Item.of('immersiveengineering:mold_plate', 1)],
            energy: 2400,
            id: `${id_prefix}mold_plate`
        },
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:wires/steel')],
            outputs: [Item.of('immersiveengineering:mold_wire', 1)],
            energy: 2400,
            id: `${id_prefix}mold_wire`
        },
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:gears/steel')],
            outputs: [Item.of('immersiveengineering:mold_gear', 1)],
            energy: 2400,
            id: `${id_prefix}mold_gear`
        },
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:rods/steel')],
            outputs: [Item.of('immersiveengineering:mold_rod', 1)],
            energy: 2400,
            id: `${id_prefix}mold_rod`
        },
        {
            inputs: [Ingredient.of('#forge:ingots/copper'), Ingredient.of('#thermal:crafting/dies/bullet_casing')],
            outputs: [Item.of('immersiveengineering:empty_casing', 2)],
            energy: 2400,
            id: `${id_prefix}empty_casing`
        },
        {
            inputs: [Item.of('byg:pink_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('byg:pink_sand', 4)],
            energy: 2400,
            id: `${id_prefix}pink_sand`
        },
        {
            inputs: [Item.of('byg:purple_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('byg:purple_sand', 4)],
            energy: 2400,
            id: `${id_prefix}purple_sand`
        },
        {
            inputs: [Item.of('byg:blue_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('byg:blue_sand', 4)],
            energy: 2400,
            id: `${id_prefix}blue_sand`
        },
        {
            inputs: [Item.of('byg:white_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('byg:white_sand', 4)],
            energy: 2400,
            id: `${id_prefix}white_sand`
        },
        {
            inputs: [Item.of('byg:black_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('byg:black_sand', 4)],
            energy: 2400,
            id: `${id_prefix}black_sand`
        },
        {
            inputs: [Item.of('atmospheric:arid_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('atmospheric:arid_sand', 4)],
            energy: 2400,
            id: `${id_prefix}arid_sand`
        },
        {
            inputs: [Item.of('atmospheric:red_arid_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('atmospheric:red_arid_sand', 4)],
            energy: 2400,
            id: `${id_prefix}red_arid_sand`
        },
        {
            inputs: [Item.of('betterendforge:dense_snow', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('minecraft:snow_block', 9)],
            energy: 2400,
            id: `${id_prefix}snow_block`
        },
        {
            inputs: [Item.of('minecraft:snow_block', 9), Ingredient.of('#thermal:crafting/dies/packing_3x3')],
            outputs: [Item.of('betterendforge:dense_snow', 1)],
            energy: 2400,
            id: `${id_prefix}dense_snow`
        },
        {
            id: 'thermal:machine/press/packing2x2/press_honeycomb_packing',
            inputs: [Item.of('minecraft:honeycomb', 9), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('minecraft:honeycomb_block', 1)],
            energy: 2400,
            id: `${id_prefix}honeycomb_block`
        },
        {
            id: 'thermal:machine/press/unpacking/press_honeycomb_unpacking',
            inputs: [Item.of('minecraft:honeycomb_block', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('minecraft:honeycomb', 9)],
            energy: 2400,
            id: `${id_prefix}honeycomb`
        },
        {
            inputs: [Item.of('mekanism:hdpe_pellet')],
            outputs: [Item.of('mekanism:hdpe_sheet')],
            energy: 2400,
            id: `${id_prefix}hdpe_sheet`
        },
        {
            inputs: [Item.of('minecraft:vine')],
            outputs: [Fluid.of('industrialforegoing:latex', 50)],
            energy: 400,
            id: 'thermal:machine/press/press_vine_to_latex'
        },
        {
            inputs: [Item.of('minecraft:dandelion')],
            outputs: [Fluid.of('industrialforegoing:latex', 50)],
            energy: 400,
            id: 'thermal:machine/press/press_dandelion_to_latex'
        }
    ];

    ['osmium', 'aluminum', 'uranium'].forEach((metal) => {
        recipes.push({
            inputs: [
                Item.of(`emendatusenigmatica:${metal}_ingot`, 9),
                Ingredient.of('#thermal:crafting/dies/packing_3x3')
            ],
            outputs: [Item.of(`emendatusenigmatica:${metal}_block`)],
            energy: 2400,
            id: `${id_prefix}${metal}_block`
        });
    });

    combVariants.forEach((variant) => {
        recipes.push(
            {
                inputs: [
                    Item.of(`resourcefulbees:${variant}_honeycomb`, 9),
                    Ingredient.of('#thermal:crafting/dies/packing_3x3')
                ],
                outputs: [Item.of(`resourcefulbees:${variant}_honeycomb_block`, 1)],
                energy: 2400,
                id: `${id_prefix}${variant}_honeycomb_block`
            },
            {
                inputs: [
                    Item.of(`resourcefulbees:${variant}_honeycomb_block`, 1),
                    Ingredient.of('#thermal:crafting/dies/unpacking')
                ],
                outputs: [Item.of(`resourcefulbees:${variant}_honeycomb`, 9)],
                energy: 2400,
                id: `${id_prefix}${variant}_honeycomb`
            }
        );
    });

    recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
