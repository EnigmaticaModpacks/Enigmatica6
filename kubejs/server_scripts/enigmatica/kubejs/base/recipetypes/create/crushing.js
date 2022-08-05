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
        },
        {
            outputs: [
                Item.of('minecraft:iron_ingot', 2),
                Item.of('minecraft:leather', 2).withChance(0.5),
                Item.of('minecraft:iron_ingot', 2).withChance(0.5),
                Item.of('minecraft:string', 2).withChance(0.25),
                Item.of('minecraft:iron_nugget', 8).withChance(0.25)
            ],
            input: 'atum:camel_iron_armor',
            id: `${id_prefix}iron_from_camel_iron_armor`
        },
        {
            outputs: [
                Item.of('minecraft:gold_ingot', 2),
                Item.of('minecraft:leather', 2).withChance(0.5),
                Item.of('minecraft:gold_ingot', 2).withChance(0.5),
                Item.of('minecraft:string', 2).withChance(0.25),
                Item.of('minecraft:gold_nugget', 8).withChance(0.25)
            ],
            input: 'atum:camel_gold_armor',
            id: `${id_prefix}gold_from_camel_gold_armor`
        },
        {
            outputs: [
                Item.of('minecraft:diamond'),
                Item.of('minecraft:leather', 2).withChance(0.5),
                Item.of('minecraft:diamond', 3).withChance(0.1),
                Item.of('minecraft:string', 2).withChance(0.25)
            ],
            input: 'atum:camel_diamond_armor',
            id: `${id_prefix}diamond_from_camel_diamond_armor`
        },
        {
            outputs: [
                Item.of('minecraft:iron_ingot', 2),
                Item.of('minecraft:leather').withChance(0.5),
                Item.of('minecraft:iron_ingot').withChance(0.5),
                Item.of('minecraft:string', 2).withChance(0.25),
                Item.of('minecraft:iron_nugget', 4).withChance(0.25)
            ],
            input: 'atum:desert_wolf_iron_armor',
            id: `${id_prefix}iron_from_desert_wolf_iron_armor`
        },
        {
            outputs: [
                Item.of('minecraft:gold_ingot', 2),
                Item.of('minecraft:leather', 2).withChance(0.5),
                Item.of('minecraft:gold_ingot', 2).withChance(0.5),
                Item.of('minecraft:string', 2).withChance(0.25),
                Item.of('minecraft:gold_nugget', 8).withChance(0.25)
            ],
            input: 'atum:desert_wolf_gold_armor',
            id: `${id_prefix}gold_from_desert_wolf_gold_armor`
        },
        {
            outputs: [
                Item.of('minecraft:diamond'),
                Item.of('minecraft:leather', 2).withChance(0.5),
                Item.of('minecraft:diamond', 3).withChance(0.1),
                Item.of('minecraft:string', 2).withChance(0.25)
            ],
            input: 'atum:desert_wolf_diamond_armor',
            id: `${id_prefix}diamond_from_desert_wolf_diamond_armor`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.crushing(recipe.outputs, recipe.input).id(recipe.id);
    });
});
