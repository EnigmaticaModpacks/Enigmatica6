onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/pedestals/pedestal_crushing/';
    const recipes = [
        {
            input: 'thermal:blizz_rod',
            output: 'thermal:blizz_powder',
            count: 3,
            id: 'pedestals:pedestal_crushing/blizz_rod'
        },
        {
            input: 'thermal:blitz_rod',
            output: 'thermal:blitz_powder',
            count: 3,
            id: 'pedestals:pedestal_crushing/blitz_rod'
        },
        {
            input: 'thermal:basalz_rod',
            output: 'thermal:basalz_powder',
            count: 3,
            id: 'pedestals:pedestal_crushing/basalz_rod'
        },
        {
            input: 'minecraft:end_stone',
            output: 'occultism:crushed_end_stone',
            count: 4,
            id: 'pedestals:pedestal_crushing/end_stone'
        },
        {
            input: 'minecraft:obsidian',
            output: 'emendatusenigmatica:obsidian_dust',
            count: 4,
            id: 'pedestals:pedestal_crushing/obsidian'
        },
        {
            input: '#forge:grain',
            output: 'create:wheat_flour',
            count: 1,
            id: `${id_prefix}wheat_flour`
        },
        {
            input: 'atum:emmer',
            output: 'atum:emmer_flour',
            count: 1,
            id: `${id_prefix}emmer_flour`
        },
        {
            input: 'byg:raw_quartz_block',
            output: 'byg:quartzite_sand',
            count: 2,
            id: `${id_prefix}quartzite_sand`
        },
        {
            input: '#forge:coal_petcoke',
            output: 'immersivepetroleum:petcoke_dust',
            count: 1,
            id: `${id_prefix}petcoke_dust`
        },
        {
            input: '#forge:storage_blocks/coal_petcoke',
            output: 'immersivepetroleum:petcoke_dust',
            count: 9,
            id: `${id_prefix}petcoke_dust_from_block`
        },
        {
            input: '#forge:storage_blocks/coal_coke',
            output: 'emendatusenigmatica:coke_dust',
            count: 9,
            id: `${id_prefix}coke_dust_from_block`
        }
    ];
    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pedestals:pedestal_crushing',
                ingredient: Ingredient.of(recipe.input),
                result: Item.of(recipe.output, recipe.count)
            })
            .id(recipe.id);
    });
});
