events.listen('recipes', function (event) {
    var data = {
        recipes: [
            {
                input: { tag: 'forge:gems/ender' },
                output: 'emendatusenigmatica:ender_dust',
                count: 1,
                duration: 10
            },
            {
                input: { item: 'byg:pink_sandstone' },
                output: 'byg:pink_sand',
                count: 2,
                duration: 10
            },
            {
                input: { item: 'byg:purple_sandstone' },
                output: 'byg:purple_sand',
                count: 2,
                duration: 10
            },
            {
                input: { item: 'byg:blue_sandstone' },
                output: 'byg:blue_sand',
                count: 2,
                duration: 10
            },
            {
                input: { item: 'byg:white_sandstone' },
                output: 'byg:white_sand',
                count: 2,
                duration: 10
            },
            {
                input: { item: 'byg:black_sandstone' },
                output: 'byg:black_sand',
                count: 2,
                duration: 10
            },
            {
                input: { item: 'atmospheric:arid_sandstone' },
                output: 'atmospheric:arid_sand',
                count: 2,
                duration: 10
            },
            {
                input: { item: 'atmospheric:red_arid_sandstone' },
                output: 'atmospheric:red_arid_sand',
                count: 2,
                duration: 10
            },
            {
                input: { tag: 'forge:stone' },
                output: 'minecraft:cobblestone',
                count: 1,
                duration: 20
            },
            {
                input: { item: 'buildinggadgets:construction_block_dense' },
                output: 'buildinggadgets:construction_paste',
                count: 3,
                duration: 20
            },
            {
                input: { item: 'minecraft:obsidian' },
                output: 'emendatusenigmatica:obsidian_dust',
                count: 4,
                duration: 60
            },
            {
                input: { item: 'betterendforge:aurora_crystal' },
                output: 'betterendforge:crystal_shards',
                count: 4,
                duration: 300
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'integrateddynamics:mechanical_squeezer',
            item: recipe.input,
            result: {
                items: [
                    {
                        item: recipe.output,
                        count: recipe.count
                    }
                ]
            },
            duration: recipe.duration
        });
    });
});
