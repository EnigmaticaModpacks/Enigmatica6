events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'byg:ether_sapling',
                outputs: ['byg:ether_log', 'byg:ether_sapling'],
                chances: [6.0, 1.1],
                energy_mod: 3.0,
                water_mod: 3.0
            },
            {
                input: 'byg:maple_sapling',
                outputs: ['minecraft:oak_log', 'byg:maple_sapling'],
                chances: [6.0, 1.1],
                energy_mod: 3.0,
                water_mod: 3.0
            },
            {
                input: 'byg:brown_zelkova_sapling',
                outputs: ['byg:zelkova_log', 'byg:brown_zelkova_sapling'],
                chances: [6.0, 1.1],
                energy_mod: 3.0,
                water_mod: 3.0
            },
            {
                input: 'byg:wihering_oak_sapling',
                outputs: ['byg:withering_oak_log', 'byg:wihering_oak_sapling'],
                chances: [6.0, 1.1],
                energy_mod: 3.0,
                water_mod: 3.0
            },
            {
                input: 'byg:palm_sapling',
                outputs: ['byg:palm_log', 'byg:palm_sapling'],
                chances: [6.0, 1.1],
                energy_mod: 3.0,
                water_mod: 3.0
            },
            {
                input: 'byg:nightshade_sapling',
                outputs: ['byg:nightshade_log', 'byg:nightshade_sapling'],
                chances: [6.0, 1.1],
                energy_mod: 3.0,
                water_mod: 3.0
            },
            {
                input: 'byg:lament_sapling',
                outputs: ['byg:lament_log', 'byg:lament_sapling'],
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
