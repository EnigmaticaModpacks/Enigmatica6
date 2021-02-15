events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: '#forge:storage_blocks/aurora',
                output: Item.of('betterendforge:crystal_shards', 4)
            },
            {
                input: '#forge:ores/dimensional',
                output: Item.of('emendatusenigmatica:dimensional_gem', 8)
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input);
    });
});
