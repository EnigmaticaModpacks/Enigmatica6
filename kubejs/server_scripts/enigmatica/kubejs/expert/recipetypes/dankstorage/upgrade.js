onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            pattern: ['ABA', 'C1C', 'ABA'],
            key: {
                A: { item: 'resourcefulbees:redstone_honeycomb_block' },
                B: { item: 'ars_nouveau:magic_clay' },
                C: { item: 'farmersdelight:basket' },
                1: { item: 'dankstorage:dank_1' }
            },
            result: { item: 'dankstorage:dank_2' },
            id: 'dankstorage:2'
        },
        {
            pattern: ['ABA', 'C1C', 'ABA'],
            key: {
                A: { item: 'resourcefulbees:glowstone_honeycomb_block' },
                B: { item: 'ars_nouveau:marvelous_clay' },
                C: { tag: 'forge:storage_blocks/dimensional' },
                1: { item: 'dankstorage:dank_2' }
            },
            result: { item: 'dankstorage:dank_3' },
            id: 'dankstorage:3'
        },
        {
            pattern: ['ABA', 'C1C', 'ABA'],
            key: {
                A: { item: 'resourcefulbees:infused_honeycomb_block' },
                B: { item: 'ars_nouveau:mythical_clay' },
                C: { item: 'occultism:storage_stabilizer_tier1' },
                1: { item: 'dankstorage:dank_3' }
            },
            result: { item: 'dankstorage:dank_4' },
            id: 'dankstorage:4'
        },
        {
            pattern: ['ABA', 'C1C', 'ABA'],
            key: {
                A: { item: 'resourcefulbees:sky_honeycomb_block' },
                B: { tag: 'forge:ingots/iesnium' },
                C: { item: 'occultism:storage_stabilizer_tier2' },
                1: { item: 'dankstorage:dank_4' }
            },
            result: { item: 'dankstorage:dank_5' },
            id: 'dankstorage:5'
        },
        {
            pattern: ['ABA', 'C1C', 'ABA'],
            key: {
                A: { item: 'resourcefulbees:industrious_honeycomb_block' },
                B: { tag: 'forge:alloys/ultimate' },
                C: { item: 'occultism:storage_stabilizer_tier3' },
                1: { item: 'dankstorage:dank_5' }
            },
            result: { item: 'dankstorage:dank_6' },
            id: 'dankstorage:6'
        },
        {
            pattern: ['ABA', 'C1C', 'ADA'],
            key: {
                A: { item: 'resourcefulbees:pcbee_honeycomb_block' },
                B: { item: 'astralsorcery:shifting_star' },
                C: { item: 'occultism:storage_stabilizer_tier4' },
                D: { item: 'mekanism:module_gravitational_modulating_unit' },
                1: { item: 'dankstorage:dank_6' }
            },
            result: { item: 'dankstorage:dank_7' },
            id: 'dankstorage:7'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'dankstorage:upgrade';
        event.custom(recipe).id(recipe.id);
    });
});
