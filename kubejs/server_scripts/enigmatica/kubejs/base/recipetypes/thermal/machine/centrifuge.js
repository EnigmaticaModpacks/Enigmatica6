onEvent('recipes', (event) => {
    const recipes = [
        {
            input: '#forge:ores/bitumen',
            outputs: [
                Item.of('minecraft:gravel').withChance(0.75),
                Item.of('emendatusenigmatica:bitumen_gem').withChance(1.5),
                Item.of('thermal:tar').withCount(1),
                fluid.of('pneumaticcraft:oil', 100)
            ]
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.recipes.thermal.centrifuge(recipe.outputs, recipe.input);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
