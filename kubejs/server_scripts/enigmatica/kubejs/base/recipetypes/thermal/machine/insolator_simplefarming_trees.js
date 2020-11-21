events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'simplefarming:apple_sapling',
                outputs: ['simplefarming:fruit_log', 'simplefarming:apple_sapling', 'minecraft:apple'],
                chances: [6.0, 1.1, 0.5],
                energy_mod: 3.0,
                water_mod: 3.0
            },
            {
                input: 'simplefarming:apricot_sapling',
                outputs: ['simplefarming:fruit_log', 'simplefarming:apricot_sapling', 'simplefarming:apricot'],
                chances: [6.0, 1.1, 0.5],
                energy_mod: 3.0,
                water_mod: 3.0
            },
            {
                input: 'simplefarming:banana_sapling',
                outputs: ['simplefarming:fruit_log', 'simplefarming:banana_sapling', 'simplefarming:banana'],
                chances: [6.0, 1.1, 0.5],
                energy_mod: 3.0,
                water_mod: 3.0
            },
            {
                input: 'simplefarming:cherry_sapling',
                outputs: ['simplefarming:fruit_log', 'simplefarming:cherry_sapling', 'simplefarming:cherries'],
                chances: [6.0, 1.1, 0.5],
                energy_mod: 3.0,
                water_mod: 3.0
            },
            {
                input: 'simplefarming:mango_sapling',
                outputs: ['simplefarming:fruit_log', 'simplefarming:mango_sapling', 'simplefarming:mango'],
                chances: [6.0, 1.1, 0.5],
                energy_mod: 3.0,
                water_mod: 3.0
            },
            {
                input: 'simplefarming:olive_sapling',
                outputs: ['simplefarming:fruit_log', 'simplefarming:olive_sapling', 'simplefarming:olivesr'],
                chances: [6.0, 1.1, 0.5],
                energy_mod: 3.0,
                water_mod: 3.0
            },
            {
                input: 'simplefarming:orange_sapling',
                outputs: ['simplefarming:fruit_log', 'simplefarming:orange_sapling', 'simplefarming:orange'],
                chances: [6.0, 1.1, 0.5],
                energy_mod: 3.0,
                water_mod: 3.0
            },
            {
                input: 'simplefarming:pear_sapling',
                outputs: ['simplefarming:fruit_log', 'simplefarming:pear_sapling', 'simplefarming:pear'],
                chances: [6.0, 1.1, 0.5],
                energy_mod: 3.0,
                water_mod: 3.0
            },
            {
                input: 'simplefarming:plum_sapling',
                outputs: ['simplefarming:fruit_log', 'simplefarming:plum_sapling', 'simplefarming:plum'],
                chances: [6.0, 1.1, 0.5],
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
                },
                {
                    item: recipe.outputs[2],
                    chance: recipe.chances[2]
                }
            ],
            energy_mod: recipe.energy_mod,
            water_mod: recipe.water_mod
        });
    });
});
