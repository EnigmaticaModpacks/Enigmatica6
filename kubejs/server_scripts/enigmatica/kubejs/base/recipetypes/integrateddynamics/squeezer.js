events.listen('recipes', function (event) {
    var data = {
        recipes: [
            {
                input: '#forge:gems/ender',
                output: 'emendatusenigmatica:ender_dust',
                count: 1
            },
            {
                input: 'byg:pink_sandstone',
                output: 'byg:pink_sand',
                count: 2
            },
            {
                input: 'byg:purple_sandstone',
                output: 'byg:purple_sand',
                count: 2
            },
            {
                input: 'byg:blue_sandstone',
                output: 'byg:blue_sand',
                count: 2
            },
            {
                input: 'byg:white_sandstone',
                output: 'byg:white_sand',
                count: 2
            },
            {
                input: 'byg:black_sandstone',
                output: 'byg:black_sand',
                count: 2
            },
            {
                input: 'atmospheric:arid_sandstone',
                output: 'atmospheric:arid_sand',
                count: 2
            },
            {
                input: 'atmospheric:red_arid_sandstone',
                output: 'atmospheric:red_arid_sand',
                count: 2
            },
            {
                input: '#forge:stone',
                output: 'minecraft:cobblestone',
                count: 1
            },
            {
                input: 'buildinggadgets:construction_block_dense',
                output: 'buildinggadgets:construction_paste',
                count: 3
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'integrateddynamics:squeezer',
            item: recipe.input,
            result: {
                items: [
                    {
                        item: {
                            item: recipe.output,
                            count: recipe.count
                        }
                    }
                ]
            }
        });
    });
});
