events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:plates/steel')],
                output: Item.of('immersiveengineering:mold_plate', 1)
            },
            {
                inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:wires/steel')],
                output: Item.of('immersiveengineering:mold_wire', 1)
            },
            {
                inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:gears/steel')],
                output: Item.of('immersiveengineering:mold_gear', 1)
            },
            {
                inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:rods/steel')],
                output: Item.of('immersiveengineering:mold_rod', 1)
            },
            {
                inputs: [Item.of('byg:pink_sandstone', 1), Item.of('thermal:press_unpacking_die')],
                output: Item.of('byg:pink_sand', 4)
            },
            {
                inputs: [Item.of('byg:purple_sandstone', 1), Item.of('thermal:press_unpacking_die')],
                output: Item.of('byg:purple_sand', 4)
            },
            {
                inputs: [Item.of('byg:blue_sandstone', 1), Item.of('thermal:press_unpacking_die')],
                output: Item.of('byg:blue_sand', 4)
            },
            {
                inputs: [Item.of('byg:white_sandstone', 1), Item.of('thermal:press_unpacking_die')],
                output: Item.of('byg:white_sand', 4)
            },
            {
                inputs: [Item.of('byg:black_sandstone', 1), Item.of('thermal:press_unpacking_die')],
                output: Item.of('byg:black_sand', 4)
            },
            {
                inputs: [Item.of('atmospheric:arid_sandstone', 1), Item.of('thermal:press_unpacking_die')],
                output: Item.of('atmospheric:arid_sand', 4)
            },
            {
                inputs: [Item.of('atmospheric:red_arid_sandstone', 1), Item.of('thermal:press_unpacking_die')],
                output: Item.of('atmospheric:red_arid_sand', 4)
            },

            //ID Overrides
            {
                id: 'thermal:machine/press/packing2x2/press_honeycomb_packing',
                inputs: [Item.of('minecraft:honeycomb', 9), Item.of('thermal:press_packing_3x3_die')],
                output: Item.of('minecraft:honeycomb_block', 1)
            },
            {
                id: 'thermal:machine/press/unpacking/press_honeycomb_unpacking',
                inputs: [Item.of('minecraft:honeycomb_block', 1), Item.of('thermal:press_unpacking_die')],
                output: Item.of('minecraft:honeycomb', 9)
            }
        ]
    };

    combVariants.forEach((variant) => {
        data.recipes.push({
            inputs: [Item.of('resourcefulbees:' + variant + '_honeycomb', 9), Item.of('thermal:press_packing_3x3_die')],
            output: Item.of('resourcefulbees:' + variant + '_honeycomb_block', 1)
        },
        {
            inputs: [Item.of('resourcefulbees:' + variant + '_honeycomb_block', 1), Item.of('thermal:press_unpacking_die')],
            output: Item.of('resourcefulbees:' + variant + '_honeycomb', 9)
        });
    });

    data.recipes.forEach((recipe) => {
        if(recipe.id) {
            event.recipes.thermal.press(recipe.output, recipe.inputs).energy(2400).id(recipe.id);
        } else {
            event.recipes.thermal.press(recipe.output, recipe.inputs).energy(2400);
        }
    });
});
