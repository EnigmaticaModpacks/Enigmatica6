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
            },
            {
                input: '#forge:ores/ender',
                output: Item.of('#forge:shards/ender', 3)
            },
            {
                input: '#forge:ores/amber',
                output: Item.of('#forge:shards/amber', 3)
            },
            {
                input: 'byg:quartzite_sand',
                output: Item.of('minecraft:quartz')
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input);
    });
});
