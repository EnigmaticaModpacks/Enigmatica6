onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/resourcefulbees/hive_upgrade/';
    const recipes = [
        {
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: [{ item: 'minecraft:honey_block' }, { tag: 'resourcefulbees:resourceful_honey_block' }],
                C: { type: 'resourcefulbees:hive', tier: 4 }
            },
            result: { item: 'resourcefulbees:t1_apiary' },
            id: `${id_prefix}t1_apiary_nest`
        },
        {
            //Allow hive reuse for crafting the in-world upgrades
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb' },
                B: { item: 'resourcefulbees:wax' },
                C: { type: 'resourcefulbees:hive', tier: 1 }
            },
            result: { item: 'resourcefulbees:t2_hive_upgrade' },
            id: `${id_prefix}t2_hive_upgrade_nest`
        },
        {
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: { item: 'resourcefulbees:wax_block' },
                C: { type: 'resourcefulbees:hive', tier: 2 }
            },
            result: { item: 'resourcefulbees:t3_hive_upgrade' },
            id: `${id_prefix}t3_hive_upgrade_nest`
        },
        {
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: [{ item: 'minecraft:honey_block' }, { tag: 'resourcefulbees:resourceful_honey_block' }],
                C: { type: 'resourcefulbees:hive', tier: 3 }
            },
            result: { item: 'resourcefulbees:t4_hive_upgrade' },
            id: `${id_prefix}t4_hive_upgrade_nest`
        },
        {
            //Old Tiered Hives -> Upgrade conversions
            pattern: ['BBB', 'BAB', 'BBB'],
            key: {
                A: { item: 'resourcefulbees:t1_beehive' },
                B: { item: 'minecraft:grass' }
            },
            result: { item: 'resourcefulbees:t1_hive_upgrade' },
            id: `${id_prefix}t1_hive_upgrade_beehive`
        },
        {
            pattern: ['BBB', 'BAB', 'BBB'],
            key: {
                A: { item: 'resourcefulbees:t2_beehive' },
                B: { item: 'minecraft:grass' }
            },
            result: { item: 'resourcefulbees:t2_hive_upgrade' },
            id: `${id_prefix}t2_hive_upgrade_beehive`
        },
        {
            pattern: ['BBB', 'BAB', 'BBB'],
            key: {
                A: { item: 'resourcefulbees:t3_beehive' },
                B: { item: 'minecraft:grass' }
            },
            result: { item: 'resourcefulbees:t3_hive_upgrade' },
            id: `${id_prefix}t3_hive_upgrade_beehive`
        },
        {
            pattern: ['BBB', 'BAB', 'BBB'],
            key: {
                A: { item: 'resourcefulbees:t4_beehive' },
                B: { item: 'minecraft:grass' }
            },
            result: { item: 'resourcefulbees:t4_hive_upgrade' },
            id: `${id_prefix}t4_hive_upgrade_beehive`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'resourcefulbees:hive_upgrade_recipe',
                pattern: recipe.pattern,
                key: recipe.key,
                result: recipe.result
            })
            .id(recipe.id);
    });
});
