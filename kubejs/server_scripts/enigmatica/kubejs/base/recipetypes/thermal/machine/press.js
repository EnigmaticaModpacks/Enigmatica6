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
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.output, recipe.inputs).energy(2400);
    });
});
