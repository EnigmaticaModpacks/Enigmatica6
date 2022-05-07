onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/industrialforegoing/laser_drill_fluid/';
    let nether_end_biomes = end_biomes.concat(nether_biomes);

    const recipes = [
        {
            output: '{FluidName:"bloodmagic:life_essence_fluid",Amount:500}',
            rarity: [
                {
                    whitelist: { type: 'minecraft:worldgen/biome', values: nether_biomes },
                    blacklist: {},
                    depth_min: 5,
                    depth_max: 10,
                    weight: 14
                },
                {
                    output: '{FluidName:"astralsorcery:liquid_starlight",Amount:100}',
                    rarity: [
                        {
                            whitelist: {},
                            blacklist: { type: 'minecraft:worldgen/biome', values: nether_end_biomes },
                            depth_min: 250,
                            depth_max: 255,
                            weight: 10
                        }
                    ],
                    pointer: 0,
                    catalyst: { item: industrialforegoing.laser_lens.white },
                    entity: 'minecraft:empty',
                    id: `${id_prefix}liquid_starlight`
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.red },
            entity: 'minecraft:villager',
            id: `${id_prefix}life_essence_fluid`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_fluid';
        event.custom(recipe).id(recipe.id);
    });
});
