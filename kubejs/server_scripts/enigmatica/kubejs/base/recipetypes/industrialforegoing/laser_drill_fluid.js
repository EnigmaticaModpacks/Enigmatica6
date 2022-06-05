onEvent('recipes', (event) => {
    var nether_end_biomes = end_biomes.concat(nether_biomes);

    const id_prefix = 'enigmatica:base/industrialforegoing/laser_drill_fluid/';
    const recipes = [
        {
            output: '{FluidName:"pneumaticcraft:oil",Amount:10}',
            rarity: [
                {
                    whitelist: {},
                    blacklist: { type: 'minecraft:worldgen/biome', values: nether_end_biomes },
                    depth_min: 5,
                    depth_max: 20,
                    weight: 8
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.black },
            entity: 'minecraft:empty',
            id: `${id_prefix}oil`
        },
        {
            output: '{FluidName:"industrialforegoing:essence",Amount:5}',
            rarity: [
                {
                    whitelist: {},
                    blacklist: { type: 'minecraft:worldgen/biome', values: nether_end_biomes },
                    depth_min: 5,
                    depth_max: 10,
                    weight: 4
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.green },
            entity: 'minecraft:empty',
            id: `${id_prefix}essence`
        },
        {
            output: '{FluidName:"resourcefulbees:honey",Amount:50}',
            rarity: [
                {
                    whitelist: {},
                    blacklist: { type: 'minecraft:worldgen/biome', values: nether_end_biomes },
                    depth_min: 5,
                    depth_max: 100,
                    weight: 10
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.yellow },
            entity: 'minecraft:empty',
            id: `${id_prefix}honey`
        },
        {
            output: '{FluidName:"industrialforegoing:pink_slime",Amount:50}',
            rarity: [
                {
                    whitelist: {},
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 256,
                    weight: 10
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.pink },
            entity: 'botania:pink_wither',
            id: `${id_prefix}pink_slime`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_fluid';
        event.custom(recipe).id(recipe.id);
    });
});
