events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                outputs: [Item.of('emendatusenigmatica:obsidian_dust'), Item.of('minecraft:obsidian').withChance(0.75)],
                input: 'minecraft:obsidian'
            },
            {
                outputs: [Item.of('buildinggadgets:construction_paste', 3), Item.of('buildinggadgets:construction_paste').withChance(0.75), Item.of('buildinggadgets:construction_paste').withChance(0.50)],
                input: 'buildinggadgets:construction_block_dense'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.create.crushing(recipe.outputs, recipe.input);
    });
});
