events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                outputs: ['buildinggadgets:construction_block_dense'],
                input: 'buildinggadgets:construction_block_powder'
            },
            {
                outputs: [
                    Item.of('emendatusenigmatica:silicon_gem').chance(0.5),
                    Item.of('emendatusenigmatica:silicon_gem').chance(0.25)
                ],
                input: 'create:limesand'
            },
            {
                outputs: [
                    Item.of('minecraft:quartz', 2),
                    Item.of('minecraft:quartz').chance(0.25)
                ],
                input: 'byg:quartzite_sand'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.create.splashing(recipe.outputs, recipe.input);
    });
});
