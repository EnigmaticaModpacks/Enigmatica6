events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                outputs: [Item.of('emendatusenigmatica:obsidian_dust'), Item.of('minecraft:obsidian').withChance(0.75)],
                input: 'minecraft:obsidian',
                id: 'create:crushing/obsidian'
            },
            {
                outputs: [
                    Item.of('buildinggadgets:construction_paste', 3),
                    Item.of('buildinggadgets:construction_paste').withChance(0.75),
                    Item.of('buildinggadgets:construction_paste').withChance(0.5)
                ],
                input: 'buildinggadgets:construction_block_dense'
            },
            {
                outputs: [
                    Item.of('betterendforge:crystal_shards', 3),
                    Item.of('betterendforge:crystal_shards').withChance(0.5)
                ],
                input: '#forge:storage_blocks/aurora'
            },
            {
                outputs: [Item.of('byg:quartzite_sand', 2), Item.of('byg:quartzite_sand').withChance(0.5)],
                input: 'byg:raw_quartz_block'
            },
            {
                outputs: [Item.of('minecraft:sand'), Item.of('minecraft:quartz').withChance(0.1)],
                input: 'byg:quartzite_sand'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        const re = event.recipes.create.crushing(recipe.outputs, recipe.input);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
