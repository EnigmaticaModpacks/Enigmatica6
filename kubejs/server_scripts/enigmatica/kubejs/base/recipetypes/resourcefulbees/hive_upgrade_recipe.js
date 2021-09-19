onEvent('recipes', (event) => {
    const recipes = [
        {
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: [{ item: 'minecraft:honey_block' }, { tag: 'resourcefulbees:resourceful_honey_block' }],
                C: { type: "resourcefulbees:hive", tier: 3 }
            },
            result: { item: 'resourcefulbees:t4_beehive' },
            id: 'resourcefulbees:t4_beehive'
        },
        {
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: [{ item: 'minecraft:honey_block' }, { tag: 'resourcefulbees:resourceful_honey_block' }],
                C: { type: "resourcefulbees:hive", tier: 4 }
            },
            result: { item: 'resourcefulbees:t1_apiary' },
            id: 'resourcefulbees:t1_apiary'
        },
        {   //These recipes are direct overrides without changes; they just add the "type/tier" setup to make in-world crafted hives compatible
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb' },
                B: { item: 'resourcefulbees:wax'},
                C: { type: "resourcefulbees:hive", tier: 1 }
            },
            result: { item: 'resourcefulbees:t2_beehive' },
            id: 'resourcefulbees:t2_beehive'
        },
        {
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: { item: 'resourcefulbees:wax_block'},
                C: { type: "resourcefulbees:hive", tier: 2 }
            },
            result: { item: 'resourcefulbees:t3_beehive' },
            id: 'resourcefulbees:t3_beehive',
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
