onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/create/crushing/';
    const recipes = [
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
            input: 'buildinggadgets:construction_block_dense',
            id: `${id_prefix}construction_paste`
        },
        {
            outputs: [
                Item.of('betterendforge:crystal_shards', 3),
                Item.of('betterendforge:crystal_shards').withChance(0.5)
            ],
            input: '#forge:storage_blocks/aurora',
            id: `${id_prefix}crystal_shards`
        },
        {
            outputs: [Item.of('byg:quartzite_sand', 2), Item.of('byg:quartzite_sand').withChance(0.5)],
            input: 'byg:raw_quartz_block',
            id: `${id_prefix}quartzite_sand`
        },
        {
            outputs: [Item.of('minecraft:sand'), Item.of('minecraft:quartz').withChance(0.1)],
            input: 'byg:quartzite_sand',
            id: `${id_prefix}quartz`
        },
        {
            outputs: [
                Item.of('atum:emmer_flour'),
                Item.of('atum:emmer_flour', 2).withChance(0.25),
                Item.of('atum:emmer_seeds').withChance(0.25)
            ],
            input: 'atum:emmer',
            id: `${id_prefix}emmer_flour`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.crushing(recipe.outputs, recipe.input).id(recipe.id);
    });
});
