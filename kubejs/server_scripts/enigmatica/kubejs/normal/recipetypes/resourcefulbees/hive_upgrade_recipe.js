onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            pattern: ['ACA', 'BDB', 'ACA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: { type: "resourcefulbees:hive", tier: 4 },
                C: { item: 'resourcefulbees:t1_apiary' },
                D: { item: 'minecraft:nether_star' }
            },
            result: { item: 'resourcefulbees:t2_apiary' },
            id: 'enigmatica:base/resourcefulbees/t2_apiary_nest'
        },
        {
            pattern: ['ACA', 'BDB', 'ACA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: { type: "resourcefulbees:hive", tier: 4 },
                C: { item: 'resourcefulbees:t2_apiary' },
                D: { item: 'minecraft:nether_star' }
            },
            result: { item: 'resourcefulbees:t3_apiary' },
            id: 'enigmatica:base/resourcefulbees/t3_apiary_nest'
        },
        {
            pattern: ['ACA', 'BDB', 'ACA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: { type: "resourcefulbees:hive", tier: 4 },
                C: { item: 'resourcefulbees:t3_apiary' },
                D: { item: 'minecraft:nether_star' }
            },
            result: { item: 'resourcefulbees:t4_apiary' },
            id: 'enigmatica:base/resourcefulbees/t4_apiary_nest'
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
