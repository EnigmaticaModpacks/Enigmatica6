onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:plates/steel')],
            outputs: [Item.of('immersiveengineering:mold_plate', 1)],
            energy: 2400
        },
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:wires/steel')],
            outputs: [Item.of('immersiveengineering:mold_wire', 1)],
            energy: 2400
        },
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:gears/steel')],
            outputs: [Item.of('immersiveengineering:mold_gear', 1)],
            energy: 2400
        },
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:rods/steel')],
            outputs: [Item.of('immersiveengineering:mold_rod', 1)],
            energy: 2400
        },
        {
            inputs: [Ingredient.of('#forge:ingots/copper'), Ingredient.of('#thermal:crafting/dies/bullet_casing')],
            outputs: [Item.of('immersiveengineering:empty_casing', 2)],
            energy: 2400
        },
        {
            inputs: [Item.of('byg:pink_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('byg:pink_sand', 4)],
            energy: 2400
        },
        {
            inputs: [Item.of('byg:purple_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('byg:purple_sand', 4)],
            energy: 2400
        },
        {
            inputs: [Item.of('byg:blue_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('byg:blue_sand', 4)],
            energy: 2400
        },
        {
            inputs: [Item.of('byg:white_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('byg:white_sand', 4)],
            energy: 2400
        },
        {
            inputs: [Item.of('byg:black_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('byg:black_sand', 4)],
            energy: 2400
        },
        {
            inputs: [Item.of('atmospheric:arid_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('atmospheric:arid_sand', 4)],
            energy: 2400
        },
        {
            inputs: [Item.of('atmospheric:red_arid_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('atmospheric:red_arid_sand', 4)],
            energy: 2400
        },
        {
            inputs: [Item.of('betterendforge:dense_snow', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('minecraft:snow_block', 9)],
            energy: 2400
        },
        {
            inputs: [Item.of('minecraft:snow_block', 9), Ingredient.of('#thermal:crafting/dies/packing_3x3')],
            outputs: [Item.of('betterendforge:dense_snow', 1)],
            energy: 2400
        },
        {
            inputs: [Ingredient.of('#integrateddynamics:menril_logs', 1)],
            outputs: [
                Item.of('integrateddynamics:crystalized_menril_chunk', 4),
                Fluid.of('integrateddynamics:menril_resin', 1000)
            ],
            energy: 2400
        },
        {
            inputs: [Item.of('integrateddynamics:menril_planks', 1)],
            outputs: [
                Item.of('integrateddynamics:crystalized_menril_chunk', 1),
                Fluid.of('integrateddynamics:menril_resin', 250)
            ],
            energy: 2400
        },
        {
            inputs: [Item.of('minecraft:popped_chorus_fruit', 1)],
            outputs: [
                Item.of('integrateddynamics:crystalized_chorus_chunk', 4),
                Fluid.of('integrateddynamics:liquid_chorus', 125)
            ],
            energy: 2400
        },
        {
            inputs: [Item.of('integrateddynamics:proto_chorus', 1)],
            outputs: [
                Item.of('integrateddynamics:crystalized_chorus_chunk', 2),
                Fluid.of('integrateddynamics:liquid_chorus', 125)
            ],
            energy: 2400
        },
        {
            id: 'thermal:machine/press/packing2x2/press_honeycomb_packing',
            inputs: [Item.of('minecraft:honeycomb', 9), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('minecraft:honeycomb_block', 1)],
            energy: 2400
        },
        {
            id: 'thermal:machine/press/unpacking/press_honeycomb_unpacking',
            inputs: [Item.of('minecraft:honeycomb_block', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('minecraft:honeycomb', 9)],
            energy: 2400
        },
        {
            inputs: [Item.of('mekanism:hdpe_pellet')],
            outputs: [Item.of('mekanism:hdpe_sheet')],
            energy: 2400
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
            energy: 2400
        });
    });

    combVariants.forEach((variant) => {
        recipes.push(
            {
                inputs: [
                    Item.of('resourcefulbees:' + variant + '_honeycomb', 9),
                    Ingredient.of('#thermal:crafting/dies/packing_3x3')
                ],
                outputs: [Item.of('resourcefulbees:' + variant + '_honeycomb_block', 1)],
                energy: 2400
            },
            {
                inputs: [
                    Item.of('resourcefulbees:' + variant + '_honeycomb_block', 1),
                    Ingredient.of('#thermal:crafting/dies/unpacking')
                ],
                outputs: [Item.of('resourcefulbees:' + variant + '_honeycomb', 9)],
                energy: 2400
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy).id(recipe.id)
            : event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy);
    });
});
