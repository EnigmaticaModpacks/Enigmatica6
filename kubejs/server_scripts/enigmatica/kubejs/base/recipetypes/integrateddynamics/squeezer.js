/*events.listen('recipes', function (event) {
    // Item Inputs
    var data = {
        recipes: [
            {
                input: 'byg:pink_sandstone',
                output: 'byg:pink_sand',
                count: 2,
                duration: 10
            },
            {
                input: 'byg:purple_sandstone',
                output: 'byg:purple_sand',
                count: 2,
                duration: 10
            },
            {
                input: 'byg:blue_sandstone',
                output: 'byg:blue_sand',
                count: 2,
                duration: 10
            },
            {
                input: 'byg:white_sandstone',
                output: 'byg:white_sand',
                count: 2,
                duration: 10
            },
            {
                input: 'byg:black_sandstone',
                output: 'byg:black_sand',
                count: 2,
                duration: 10
            },
            {
                input: 'atmospheric:arid_sandstone',
                output: 'atmospheric:arid_sand',
                count: 2,
                duration: 10
            },
            {
                input: 'atmospheric:red_arid_sandstone',
                output: 'atmospheric:red_arid_sand',
                count: 2,
                duration: 10
            },
            {
                input: 'buildinggadgets:construction_block_dense',
                output: 'buildinggadgets:construction_paste',
                count: 3,
                duration: 20
            },
            {
                input: 'minecraft:obsidian',
                output: 'emendatusenigmatica:obsidian_dust',
                count: 4,
                duration: 60
            },
            {
                input: 'betterendforge:aurora_crystal',
                output: 'betterendforge:crystal_shards',
                count: 4,
                duration: 30
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

        event.custom({
            type: 'integrateddynamics:mechanical_squeezer',
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
            },
            duration: recipe.duration
        });
    });

    // Tag Inputs
    data = {
        recipes: [
            {
                input: 'forge:stone',
                output: 'minecraft:cobblestone',
                count: 1,
                duration: 20
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'integrateddynamics:squeezer',
            item: {
                tag: recipe.input
            },
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

        event.custom({
            type: 'integrateddynamics:mechanical_squeezer',
            item: {
                tag: recipe.input
            },
            result: {
                items: [
                    {
                        item: {
                            item: recipe.output,
                            count: recipe.count
                        }
                    }
                ]
            },
            duration: recipe.duration
        });
    });
});
*/
