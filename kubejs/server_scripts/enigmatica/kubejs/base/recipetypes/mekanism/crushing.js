events.listen('recipes', function (event) {
    var data = {
        recipes: [
            {
                input: '#forge:gems/ender',
                output: item.of('emendatusenigmatica:ender_dust')
            },
            {
                input: 'byg:pink_sandstone',
                output: item.of('byg:pink_sand', 2)
            },
            {
                input: 'byg:purple_sandstone',
                output: item.of('byg:purple_sand', 2)
            },
            {
                input: 'byg:blue_sandstone',
                output: item.of('byg:blue_sand', 2)
            },
            {
                input: 'byg:white_sandstone',
                output: item.of('byg:white_sand', 2)
            },
            {
                input: 'byg:black_sandstone',
                output: item.of('byg:black_sand', 2)
            },
            {
                input: 'atmospheric:arid_sandstone',
                output: item.of('atmospheric:arid_sand', 2)
            },
            {
                input: 'atmospheric:red_arid_sandstone',
                output: item.of('atmospheric:red_arid_sand', 2)
            },
            {
                input: '#forge:stone',
                output: 'minecraft:cobblestone'
            },
            {
                input: 'buildinggadgets:construction_block_dense',
                output: Item.of('buildinggadgets:construction_paste', 3)
            },
            {
                input: item.of('create:limesand', 3),
                output: item.of('emendatusenigmatica:silicon_gem')
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.mekanism.crushing(recipe.output, recipe.input);
    });
});
