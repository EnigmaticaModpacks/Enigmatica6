onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'resourcefulbees:t2_apiary',
            pattern: ['ACA', 'BDB', 'ACA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: { item: 'resourcefulbees:t4_hive_upgrade' },
                C: { item: 'resourcefulbees:t1_apiary' },
                D: { item: 'minecraft:nether_star' }
            },
            id: 'resourcefulbees:t2_apiary'
        },
        {
            output: 'resourcefulbees:t3_apiary',
            pattern: ['ACA', 'BDB', 'ACA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: { item: 'resourcefulbees:t4_hive_upgrade' },
                C: { item: 'resourcefulbees:t2_apiary' },
                D: { item: 'minecraft:nether_star' }
            },
            id: 'resourcefulbees:t3_apiary'
        },
        {
            output: 'resourcefulbees:t4_apiary',
            pattern: ['ACA', 'BDB', 'ACA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: { item: 'resourcefulbees:t4_hive_upgrade' },
                C: { item: 'resourcefulbees:t3_apiary' },
                D: { item: 'minecraft:nether_star' }
            },
            id: 'resourcefulbees:t4_apiary'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
