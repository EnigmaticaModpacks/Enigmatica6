onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/resourcefulbees/';
    const recipes = [
        {
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: [{ item: 'minecraft:honey_block' }, { tag: 'resourcefulbees:resourceful_honey_block' }],
                C: { type: "resourcefulbees:hive", tier: 4 }
            },
            result: { item: 'resourcefulbees:t1_apiary' },
            id: `${id_prefix}t1_apiary_nest`
        },
        {   //Allow hive reuse for crafting the in-world upgrades
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb' },
                B: { item: 'resourcefulbees:wax'},
                C: { type: "resourcefulbees:hive", tier: 1 }
            },
            result: { item: 'resourcefulbees:t2_hive_upgrade' },
            id: `${id_prefix}t2_hive_upgrade_nest`
        },
        {
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: { item: 'resourcefulbees:wax_block'},
                C: { type: "resourcefulbees:hive", tier: 2 }
            },
            result: { item: 'resourcefulbees:t3_hive_upgrade' },
            id: `${id_prefix}t3_hive_upgrade_nest`,
        },
        {
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: [{ item: 'minecraft:honey_block' }, { tag: 'resourcefulbees:resourceful_honey_block' }],
                C: { type: "resourcefulbees:hive", tier: 3 }
            },
            result: { item: 'resourcefulbees:t4_hive_upgrade' },
            id: `${id_prefix}t4_hive_upgrade_nest`,
        },
        {   //Old Tiered Hives -> Upgrade conversions
            pattern: ['A'],
            key: {
                A: { item: "resourcefulbees:t1_beehive" }
            },
            result: { item: 'resourcefulbees:t1_hive_upgrade' },
            id: `${id_prefix}t1_hive_upgrade_beehive`
        },
        {
            pattern: ['   ', ' A ','   '],
            key: {
                A: { item: "resourcefulbees:t2_beehive" }
            },
            result: { item: 'resourcefulbees:t2_hive_upgrade' },
            id: `${id_prefix}t2_hive_upgrade_beehive`
        },
        {   
            pattern: ['   ', ' A ','   '],
            key: {
                A: { item: "resourcefulbees:t3_beehive" }
            },
            result: { item: 'resourcefulbees:t3_hive_upgrade' },
            id: `${id_prefix}t3_hive_upgrade_beehive`
        },
        {   
            pattern: ['   ', ' A ','   '],
            key: {
                A: { item: "resourcefulbees:t4_beehive" }
            },
            result: { item: 'resourcefulbees:t4_hive_upgrade' },
            id: `${id_prefix}t4_hive_upgrade_beehive`
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
