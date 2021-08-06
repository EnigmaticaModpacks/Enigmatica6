onEvent('recipes', (event) => {
    const recipes = [
        {
            input: '#minecraft:planks',
            output: Item.of('minecraft:stick', 6),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.25)
        },
        {
            input: '#minecraft:wooden_slabs',
            output: Item.of('minecraft:stick', 3),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.125)
        },
        {
            input: '#minecraft:wooden_stairs',
            output: Item.of('minecraft:stick', 9),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.375)
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.sawmill(recipe.output, recipe.input, [
            {
                stripping: false,
                output: recipe.extraOutput
            }
        ]);
    });
});
