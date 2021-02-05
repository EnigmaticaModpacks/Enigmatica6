events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                inputs: [ingredient.of('#forge:plates/steel', 3), ingredient.of('#forge:plates/steel')],
                output: item.of('immersiveengineering:mold_plate', 1)
            },
            {
                inputs: [ingredient.of('#forge:plates/steel', 3), ingredient.of('#forge:wires/steel')],
                output: item.of('immersiveengineering:mold_wire', 1)
            },
            {
                inputs: [ingredient.of('#forge:plates/steel', 3), ingredient.of('#forge:gears/steel')],
                output: item.of('immersiveengineering:mold_gear', 1)
            },
            {
                inputs: [ingredient.of('#forge:plates/steel', 3), ingredient.of('#forge:rods/steel')],
                output: item.of('immersiveengineering:mold_rod', 1)
            },
            {
                inputs: [item.of('byg:pink_sandstone', 1), item.of('thermal:press_unpacking_die')],
                output: item.of('byg:pink_sand', 4)
            },
            {
                inputs: [item.of('byg:purple_sandstone', 1), item.of('thermal:press_unpacking_die')],
                output: item.of('byg:purple_sand', 4)
            },
            {
                inputs: [item.of('byg:blue_sandstone', 1), item.of('thermal:press_unpacking_die')],
                output: item.of('byg:blue_sand', 4)
            },
            {
                inputs: [item.of('byg:white_sandstone', 1), item.of('thermal:press_unpacking_die')],
                output: item.of('byg:white_sand', 4)
            },
            {
                inputs: [item.of('byg:black_sandstone', 1), item.of('thermal:press_unpacking_die')],
                output: item.of('byg:black_sand', 4)
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.output, recipe.inputs).energy(2400);
    });
});
