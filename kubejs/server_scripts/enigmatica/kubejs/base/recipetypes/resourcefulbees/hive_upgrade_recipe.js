onEvent('recipes', (event) => {
    const recipes = [
        {
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: [{ item: 'minecraft:honey_block' }, { tag: 'resourcefulbees:resourceful_honey_block' }],
                C: { item: 'resourcefulbees:t3_beehive' }
            },
            result: { item: 'resourcefulbees:t4_beehive' },
            id: 'resourcefulbees:t4_beehive'
        },
        {
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: [{ item: 'minecraft:honey_block' }, { tag: 'resourcefulbees:resourceful_honey_block' }],
                C: { item: 'resourcefulbees:t4_beehive' }
            },
            result: { item: 'resourcefulbees:t1_apiary' },
            id: 'resourcefulbees:t1_apiary'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'resourcefulbees:hive_upgrade_recipe',
            pattern: recipe.pattern,
            nbt: recipe.nbt,
            key: recipe.key,
            result: recipe.result
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
