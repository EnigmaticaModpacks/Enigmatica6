onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/pulverizer/';
    const recipes = [
        {
            input: '#forge:ores/netherite',
            experience: 0.2,
            outputs: [Item.of('minecraft:netherite_scrap', 2)],
            id: 'thermal:machine/pulverizer/pulverizer_netherite'
        },
        {
            input: 'byg:pink_sandstone',
            experience: 0.2,
            outputs: [Item.of('byg:pink_sand', 2), Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)],
            id: 'thermal:machine/pulverizer/pulverizer_pink_sandstone'
        },
        {
            input: 'byg:purple_sandstone',
            experience: 0.2,
            outputs: [Item.of('byg:purple_sand', 2), Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)],
            id: 'thermal:machine/pulverizer/pulverizer_purple_sandstone'
        },
        {
            input: 'byg:blue_sandstone',
            experience: 0.2,
            outputs: [Item.of('byg:blue_sand', 2), Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)],
            id: 'thermal:machine/pulverizer/pulverizer_blue_sandstone'
        },
        {
            input: 'byg:white_sandstone',
            experience: 0.2,
            outputs: [Item.of('byg:white_sand', 2), Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)],
            id: 'thermal:machine/pulverizer/pulverizer_white_sandstone'
        },
        {
            input: 'byg:black_sandstone',
            experience: 0.2,
            outputs: [Item.of('byg:black_sand', 2), Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)],
            id: 'thermal:machine/pulverizer/pulverizer_black_sandstone'
        },
        {
            input: 'atmospheric:arid_sandstone',
            experience: 0.2,
            outputs: [
                Item.of('atmospheric:arid_sand', 2),
                Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
            ],
            id: 'thermal:machine/pulverizer/pulverizer_arid_sandstone'
        },
        {
            input: 'atmospheric:red_arid_sandstone',
            experience: 0.2,
            outputs: [
                Item.of('atmospheric:red_arid_sand', 2),
                Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
            ],
            id: 'thermal:machine/pulverizer/pulverizer_red_arid_sandstone'
        },
        {
            input: 'buildinggadgets:construction_block_dense',
            experience: 0.2,
            outputs: [
                Item.of('buildinggadgets:construction_paste', 3),
                Item.of('buildinggadgets:construction_paste', 2).chance(0.5)
            ],
            id: 'thermal:machine/pulverizer/pulverizer_construction_block'
        },
        {
            input: 'create:limesand',
            experience: 0.2,
            outputs: [
                Item.of('emendatusenigmatica:silicon_gem').chance(0.5),
                Item.of('emendatusenigmatica:silicon_gem').chance(0.25)
            ],
            id: 'thermal:machine/pulverizer/pulverizer_limesand'
        },
        {
            input: '#forge:storage_blocks/aurora',
            experience: 0.2,
            outputs: [Item.of('betterendforge:crystal_shards', 4)],
            id: 'thermal:machine/pulverizer/pulverizer_aurora'
        },
        {
            input: '#forge:end_stones',
            experience: 0.2,
            outputs: [Item.of('occultism:crushed_end_stone', 4)],
            id: 'thermal:machine/pulverizer/pulverizer_end_stone'
        },
        {
            input: '#forge:obsidian',
            experience: 0.2,
            outputs: [Item.of('emendatusenigmatica:obsidian_dust', 4)],
            id: 'thermal:machine/pulverizer/pulverizer_obsidian'
        },
        {
            input: '#forge:grain',
            experience: 0.2,
            outputs: [Item.of('create:wheat_flour'), Item.of('create:wheat_flour').chance(0.25)],
            id: `${id_prefix}wheat_flour`
        },
        {
            input: 'atum:emmer',
            experience: 0.2,
            outputs: [Item.of('atum:emmer_flour'), Item.of('atum:emmer_flour').chance(0.25)],
            id: `${id_prefix}emmer_flour`
        },
        {
            input: 'byg:raw_quartz_block',
            experience: 0.2,
            outputs: [Item.of('byg:quartzite_sand', 2), Item.of('byg:quartzite_sand').chance(0.5)],
            id: `${id_prefix}quartzite_sand`
        },
        {
            input: 'byg:quartzite_sand',
            experience: 0.2,
            outputs: [Item.of('minecraft:sand'), Item.of('minecraft:quartz').chance(0.2)],
            id: `${id_prefix}quartz`
        },
        {
            input: 'minecraft:sugar_cane',
            experience: 0.2,
            outputs: [Item.of('minecraft:sugar', 2), Item.of('minecraft:sugar').chance(0.1)],
            id: `${id_prefix}sugar`
        },
        {
            input: '#forge:rods/blaze',
            experience: 0.2,
            outputs: [Item.of('minecraft:blaze_powder', 3), Item.of('emendatusenigmatica:sulfur_dust').chance(0.25)],
            id: 'thermal:machine/pulverizer/pulverizer_blaze_rod'
        },
        {
            input: '#forge:coal_petcoke',
            experience: 0.2,
            outputs: ['immersivepetroleum:petcoke_dust'],
            id: `${id_prefix}petcoke_dust`
        },
        {
            input: '#forge:storage_blocks/coal_petcoke',
            experience: 1.8,
            outputs: [Item.of('9x immersivepetroleum:petcoke_dust')],
            id: `${id_prefix}petcoke_dust_from_block`
        },
        {
            input: '#forge:storage_blocks/coal_coke',
            experience: 1.8,
            outputs: [Item.of('9x emendatusenigmatica:coke_dust')],
            id: `${id_prefix}coke_dust_from_block`
        },
        {
            input: '#forge:ores/starmetal',
            experience: 0.2,
            outputs: [
                Item.of('astralsorcery:stardust', 2).chance(1.0),
                Item.of('astralsorcery:stardust').chance(0.1),
                Item.of('minecraft:gravel').chance(0.2)
            ],
            id: 'thermal:machine/pulverizer/pulverizer_starmetal_ore'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.pulverizer(recipe.outputs, recipe.input).experience(recipe.experience).id(recipe.id);
    });
});
