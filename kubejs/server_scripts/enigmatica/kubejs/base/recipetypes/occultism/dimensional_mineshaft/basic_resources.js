onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/occultism/miners/basic_resources/';
    const recipes = [
        {
            output: 'minecraft:granite',
            weight: 2000,
            id: `${id_prefix}granite`
        },
        {
            output: 'minecraft:diorite',
            weight: 2000,
            id: `${id_prefix}diorite`
        },
        {
            output: 'minecraft:stone',
            weight: 2000,
            id: `${id_prefix}stone`
        },
        {
            output: 'minecraft:andesite',
            weight: 2000,
            id: `${id_prefix}andesite`
        },
        {
            output: 'minecraft:mossy_cobblestone',
            weight: 200,
            id: `${id_prefix}mossy_cobblestone`
        },
        {
            output: 'minecraft:mossy_stone_bricks',
            weight: 200,
            id: `${id_prefix}mossy_stone_bricks`
        },
        {
            output: 'atum:marl',
            weight: 500,
            id: `${id_prefix}marl`
        },
        {
            output: 'minecraft:gravel',
            weight: 1000,
            id: `${id_prefix}gravel`
        },
        {
            output: 'minecraft:end_stone',
            weight: 200,
            id: `${id_prefix}end_stone`
        },
        {
            output: 'betterendforge:aurora_crystal',
            weight: 50,
            id: `${id_prefix}aurora_crystal`
        },
        {
            output: 'minecraft:blue_ice',
            weight: 50,
            id: `${id_prefix}blue_ice`
        },
        {
            output: 'minecraft:packed_ice',
            weight: 100,
            id: `${id_prefix}packed_ice`
        },
        {
            output: 'minecraft:snow_block',
            weight: 200,
            id: `${id_prefix}snow_block`
        },
        {
            output: 'minecraft:clay_ball',
            weight: 200,
            id: `${id_prefix}clay_ball`
        },
        {
            output: 'minecraft:sand',
            weight: 1000,
            id: `${id_prefix}sand`
        },
        {
            output: 'byg:quartzite_sand',
            weight: 200,
            id: `${id_prefix}quartzite_sand`
        },
        {
            output: 'undergarden:sediment',
            weight: 1000,
            id: `${id_prefix}sediment`
        },
        {
            output: 'minecraft:soul_sand',
            weight: 500,
            id: `${id_prefix}soul_sand`
        },
        {
            output: 'minecraft:basalt',
            weight: 750,
            id: `${id_prefix}basalt`
        },
        {
            output: 'minecraft:blackstone',
            weight: 750,
            id: `${id_prefix}blackstone`
        },
        {
            output: 'minecraft:netherrack',
            weight: 1000,
            id: `${id_prefix}netherrack`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:miner';
        recipe.ingredient = { tag: 'occultism:miners/basic_resources' };
        recipe.result = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
