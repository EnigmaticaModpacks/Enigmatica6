onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/create/milling/';
    const recipes = [
        {
            input: 'thermal:blizz_rod',
            outputs: [Item.of('thermal:blizz_powder', 3), Item.of('minecraft:snowball', 1).withChance(0.25)],
            processingTime: 30,
            id: `${id_prefix}blizz_powder`
        },
        {
            input: 'thermal:blitz_rod',
            outputs: [
                Item.of('thermal:blitz_powder', 3),
                Item.of('emendatusenigmatica:potassium_nitrate_gem', 1).withChance(0.25)
            ],
            processingTime: 30,
            id: `${id_prefix}blitz_powder`
        },
        {
            input: 'thermal:basalz_rod',
            outputs: [Item.of('thermal:basalz_powder', 3), Item.of('thermal:slag', 1).withChance(0.25)],
            processingTime: 30,
            id: `${id_prefix}basalz_powder`
        },
        {
            input: 'byg:pink_sandstone',
            outputs: [Item.of('byg:pink_sand')],
            processingTime: 150,
            id: `${id_prefix}pink_sand`
        },
        {
            input: 'byg:purple_sandstone',
            outputs: [Item.of('byg:purple_sand')],
            processingTime: 150,
            id: `${id_prefix}purple_sand`
        },
        {
            input: 'byg:blue_sandstone',
            outputs: [Item.of('byg:blue_sand')],
            processingTime: 150,
            id: `${id_prefix}blue_sand`
        },
        {
            input: 'byg:white_sandstone',
            outputs: [Item.of('byg:white_sand')],
            processingTime: 150,
            id: `${id_prefix}white_sand`
        },
        {
            input: 'byg:black_sandstone',
            outputs: [Item.of('byg:black_sand')],
            processingTime: 150,
            id: `${id_prefix}black_sand`
        },
        {
            input: 'atmospheric:arid_sandstone',
            outputs: [Item.of('atmospheric:arid_sand')],
            processingTime: 150,
            id: `${id_prefix}arid_sand`
        },
        {
            input: 'atmospheric:red_arid_sandstone',
            outputs: [Item.of('atmospheric:red_arid_sand')],
            processingTime: 150,
            id: `${id_prefix}red_arid_sand`
        },
        {
            input: '#forge:end_stones',
            outputs: [Item.of('occultism:crushed_end_stone', 4)],
            processingTime: 150,
            id: `${id_prefix}crushed_end_stone`
        },
        {
            input: 'byg:quartzite_sand',
            outputs: ['minecraft:quartz'],
            processingTime: 50,
            id: `${id_prefix}quartz`
        },
        {
            input: 'minecraft:ancient_debris',
            outputs: ['minecraft:netherite_scrap', Item.of('minecraft:ancient_debris', 1).withChance(0.66)],
            processingTime: 200,
            id: `${id_prefix}netherite_scrap`
        },
        {
            input: 'atum:emmer',
            outputs: [
                Item.of('atum:emmer_flour'),
                Item.of('atum:emmer_flour', 2).withChance(0.25),
                Item.of('atum:emmer_seeds').withChance(0.25)
            ],
            processingTime: 150,
            id: `${id_prefix}emmer_flour`
        },
        {
            input: 'simplefarming:barley',
            outputs: [
                Item.of('create:wheat_flour'),
                Item.of('create:wheat_flour', 2).withChance(0.25),
                Item.of('simplefarming:barley_seeds').withChance(0.25)
            ],
            processingTime: 150,
            id: `${id_prefix}wheat_flour_from_barley`
        },
        {
            input: 'simplefarming:rice',
            outputs: [
                Item.of('create:wheat_flour'),
                Item.of('create:wheat_flour', 2).withChance(0.25),
                Item.of('simplefarming:rice_seeds').withChance(0.25)
            ],
            processingTime: 150,
            id: `${id_prefix}wheat_flour_from_rice`
        },
        {
            input: 'simplefarming:rye',
            outputs: [
                Item.of('create:wheat_flour'),
                Item.of('create:wheat_flour', 2).withChance(0.25),
                Item.of('simplefarming:rye_seeds').withChance(0.25)
            ],
            processingTime: 150,
            id: `${id_prefix}wheat_flour_from_rye`
        },
        {
            input: 'simplefarming:oat',
            outputs: [
                Item.of('create:wheat_flour'),
                Item.of('create:wheat_flour', 2).withChance(0.25),
                Item.of('simplefarming:oat_seeds').withChance(0.25)
            ],
            processingTime: 150,
            id: `${id_prefix}wheat_flour_from_oat`
        },
        {
            input: '#forge:coal_petcoke',
            outputs: ['immersivepetroleum:petcoke_dust'],
            processingTime: 150,
            id: `${id_prefix}petcoke_dust`
        },
        {
            input: '#forge:storage_blocks/coal_petcoke',
            outputs: [Item.of('9x immersivepetroleum:petcoke_dust')],
            processingTime: 1200,
            id: `${id_prefix}petcoke_dust_from_block`
        },
        {
            input: '#forge:storage_blocks/coal_coke',
            outputs: [Item.of('9x emendatusenigmatica:coke_dust')],
            processingTime: 1200,
            id: `${id_prefix}coke_dust_from_block`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.milling(recipe.outputs, recipe.input).processingTime(recipe.processingTime).id(recipe.id);
    });
});
