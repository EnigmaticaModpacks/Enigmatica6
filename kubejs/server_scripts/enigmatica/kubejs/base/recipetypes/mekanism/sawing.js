onEvent('recipes', (event) => {
    const recipes = [
        {
            input: '#minecraft:planks',
            output: Item.of('minecraft:stick', 6),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.25),
            id: 'mekanism:sawing/planks'
        },
        {
            input: '#minecraft:wooden_slabs',
            output: Item.of('minecraft:stick', 3),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.125),
            id: 'mekanism:sawing/slabs'
        },
        {
            input: '#minecraft:wooden_stairs',
            output: Item.of('minecraft:stick', 9),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.375),
            id: 'mekanism:sawing/stairs'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.recipes.mekanism.sawing(recipe.output, recipe.input, recipe.extraOutput);

        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
