events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                count: 2,
                output: 'mekanism:bio_fuel',
                input: 'minecraft:leaves'
            },
            {
                count: 5,
                output: 'mekanism:bio_fuel',
                input: 'minecraft:small_flowers'
            },
            {
                count: 5,
                output: 'mekanism:bio_fuel',
                input: 'minecraft:tall_flowers'
            },
            {
                count: 5,
                output: 'mekanism:bio_fuel',
                input: 'forge:mushroom_stems'
            },
            {
                count: 5,
                output: 'mekanism:bio_fuel',
                input: 'forge:mushrooms'
            },
            {
                count: 7,
                output: 'mekanism:bio_fuel',
                input: 'forge:mushroom_caps'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.mekanism.crushing({
            type: 'mekanism.crushing',
            input: {
                ingredient: {
                    tag: recipe.input
                }
            },
            output: {
                item: recipe.output,
                count: recipe.count
            }
        });
    });
});
