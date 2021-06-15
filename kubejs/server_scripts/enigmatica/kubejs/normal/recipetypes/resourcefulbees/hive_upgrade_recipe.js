onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            // Adjust T1 Beehive Recipe to use beehive tag in Normal mode
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: { item: 'minecraft:grass' },
                B: { tag: 'forge:beehives/tier_0' }
            },
            nbt: {},
            result: { item: 'resourcefulbees:t1_beehive' /*, nbt: {BlockEntityTag: {Bees:[]}}*/ },
            id: 'resourcefulbees:t1_beehive'
        },
        {
            pattern: ['ACA', 'BDB', 'ACA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: { item: 'resourcefulbees:t4_beehive' },
                C: { item: 'resourcefulbees:t1_apiary' },
                D: { item: 'minecraft:nether_star' }
            },
            result: { item: 'resourcefulbees:t2_apiary' },
            id: 'resourcefulbees:t2_apiary'
        },
        {
            pattern: ['ACA', 'BDB', 'ACA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: { item: 'resourcefulbees:t4_beehive' },
                C: { item: 'resourcefulbees:t2_apiary' },
                D: { item: 'minecraft:nether_star' }
            },
            result: { item: 'resourcefulbees:t3_apiary' },
            id: 'resourcefulbees:t3_apiary'
        },
        {
            pattern: ['ACA', 'BDB', 'ACA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: { item: 'resourcefulbees:t4_beehive' },
                C: { item: 'resourcefulbees:t3_apiary' },
                D: { item: 'minecraft:nether_star' }
            },
            result: { item: 'resourcefulbees:t4_apiary' },
            id: 'resourcefulbees:t4_apiary'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'resourcefulbees:hive_upgrade_recipe',
            pattern: recipe.pattern,
            key: recipe.key,
            result: recipe.result
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
