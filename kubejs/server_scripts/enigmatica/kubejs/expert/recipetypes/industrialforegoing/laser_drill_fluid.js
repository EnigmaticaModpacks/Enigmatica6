onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/laser_drill_fluids/';
    let nether_end_biomes = end_biomes.concat(nether_biomes);

    const recipes = [
        {
            output: '{FluidName:"industrialforegoing:meat",Amount:1000}',
            rarity: [
                {
                    whitelist: {},
                    blacklist: {},
                    depth_min: 0,
                    depth_max: 256,
                    weight: 1
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.brown },
            entity: 'minecraft:cow',
            type: 'industrialforegoing:laser_drill_fluid',
            id: `${id_prefix}liquid_meat`
        },
        {
            output: '{FluidName:"bloodmagic:life_essence_fluid",Amount:1000}',
            rarity: [
                {
                    whitelist: { type: 'minecraft:worldgen/biome', values: nether_biomes },
                    blacklist: {},
                    depth_min: 5,
                    depth_max: 10,
                    weight: 14
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.red },
            entity: 'minecraft:villager',
            id: `${id_prefix}life_essence_fluid`
        },
        {
            output: '{FluidName:"astralsorcery:liquid_starlight",Amount:1000}',
            rarity: [
                {
                    whitelist: { type: 'minecraft:worldgen/biome', values: end_biomes },
                    blacklist: {},
                    depth_min: 250,
                    depth_max: 255,
                    weight: 10
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.white },
            entity: 'minecraft:empty',
            id: `${id_prefix}liquid_starlight`
        },
        {
            output: '{FluidName:"tconstruct:blazing_blood",Amount:1000}',
            rarity: [
                {
                    whitelist: { type: 'minecraft:worldgen/biome', values: nether_biomes },
                    blacklist: {},
                    depth_min: 0,
                    depth_max: 256,
                    weight: 1
                }
            ],
            pointer: 0,
            catalyst: { item: industrialforegoing.laser_lens.orange },
            entity: 'minecraft:blaze',
            type: 'industrialforegoing:laser_drill_fluid',
            id: `${id_prefix}blazing_blood`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_fluid';
        event.custom(recipe).id(recipe.id);
    });
});
