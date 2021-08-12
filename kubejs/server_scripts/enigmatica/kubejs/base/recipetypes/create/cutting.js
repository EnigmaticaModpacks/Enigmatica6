onEvent('recipes', (event) => {
    const recipes = [
        {
            input: '#minecraft:planks',
            outputs: [Item.of('minecraft:stick', 6), Item.of('emendatusenigmatica:wood_dust').chance(0.25)]
        },
        {
            input: '#minecraft:wooden_slabs',
            outputs: [Item.of('minecraft:stick', 3), Item.of('emendatusenigmatica:wood_dust').chance(0.125)]
        },
        {
            input: '#minecraft:wooden_stairs',
            outputs: [Item.of('minecraft:stick', 9), Item.of('emendatusenigmatica:wood_dust').chance(0.375)]
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.cutting(recipe.outputs, recipe.input);
    });
});
