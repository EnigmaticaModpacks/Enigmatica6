events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'biomesoplenty:maple_sapling',
                outputs: ['minecraft:oak_log', 'biomesoplenty:maple_sapling'],
                chances: [6.0, 1.1],
                energy_mod: 3.0,
                water_mod: 3.0
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.thermal.insolator({
            ingredient: {
                item: recipe.input
            },
            result: [
                {
                    item: recipe.outputs[0],
                    chance: recipe.chances[0]
                },
                {
                    item: recipe.outputs[1],
                    chance: recipe.chances[1]
                }
            ],
            energy_mod: recipe.energy_mod,
            water_mod: recipe.water_mod
        });
    });
});
