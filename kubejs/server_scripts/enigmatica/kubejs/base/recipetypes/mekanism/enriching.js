onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/mekanism/enriching/';
    const recipes = [
        {
            input: '#forge:storage_blocks/aurora',
            output: Item.of('betterendforge:crystal_shards', 4),
            id: `${id_prefix}crystal_shards`
        },
        {
            input: '#forge:ores/ender',
            output: Item.of('#forge:shards/ender', 3),
            id: `${id_prefix}ender_shards`
        },
        {
            input: '#forge:ores/amber',
            output: Item.of('#forge:shards/amber', 3),
            id: `${id_prefix}amber_shards`
        },
        {
            input: 'byg:quartzite_sand',
            output: Item.of('minecraft:quartz'),
            id: `${id_prefix}quartz`
        },
        {
            input: '#forge:grain',
            output: Item.of('create:wheat_flour', 1),
            id: `${id_prefix}wheat_flour`
        },
        {
            input: 'atum:emmer',
            output: Item.of('atum:emmer_flour', 1),
            id: `${id_prefix}emmer_flour`
        },
        {
            input: 'minecraft:sugar_cane',
            output: Item.of('minecraft:sugar', 2),
            id: `${id_prefix}sugar`
        },
        {
            input: 'thermal:blizz_rod',
            output: Item.of('thermal:blizz_powder', 4),
            id: `${id_prefix}blizz_powder`
        },
        {
            input: 'thermal:blitz_rod',
            output: Item.of('thermal:blitz_powder', 4),
            id: `${id_prefix}blitz_powder`
        },
        {
            input: 'thermal:basalz_rod',
            output: Item.of('thermal:basalz_powder', 4),
            id: `${id_prefix}basalz_powder`
        },
        {
            input: 'minecraft:blaze_rod',
            output: Item.of('minecraft:blaze_powder', 4),
            id: `${id_prefix}blaze_powder`
        },
        {
            input: '#forge:ores/quartz',
            output: Item.of('minecraft:quartz', 3),
            id: 'mekanism:processing/quartz/from_ore'
        },
        {
            input: 'mekanism:hdpe_pellet',
            output: 'mekanism:hdpe_sheet',
            id: 'mekanism:enriching/hdpe_sheet'
        },
        {
            input: '#forge:ores/netherite',
            output: Item.of('minecraft:netherite_scrap', 2),
            id: 'mekanism:processing/netherite/ancient_debris_to_scrap'
        },
        {
            input: 'mekanism:dirty_netherite_scrap',
            output: Item.of('minecraft:netherite_scrap'),
            id: 'mekanism:processing/netherite/dirty_scrap_to_scrap'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input).id(recipe.id);
    });
});
