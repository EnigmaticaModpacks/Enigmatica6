onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'enderstorage:ender_pouch',
            pattern: ['ABA', 'CDC', 'ECE'],
            key: {
                A: { item: 'ars_nouveau:end_fiber' },
                B: { tag: 'forge:wool' },
                C: { item: 'alexsmobs:kangaroo_hide' },
                D: { item: 'kubejs:dimensional_storage_crystal' },
                E: { tag: 'forge:inlays/arcane_gold' }
            },
            id: 'enderstorage:ender_pouch'
        },
        {
            output: 'enderstorage:ender_chest',
            pattern: ['ABA', 'CDC', 'ECE'],
            key: {
                A: { item: 'ars_nouveau:end_fiber' },
                B: { tag: 'forge:wool' },
                C: { item: 'create:shadow_steel_casing' },
                D: { item: 'kubejs:dimensional_storage_crystal' },
                E: { tag: 'forge:plates/lumium' }
            },
            id: 'enderstorage:ender_chest'
        },
        {
            output: 'enderstorage:ender_tank',
            pattern: ['ABA', 'FDF', 'ECE'],
            key: {
                A: { item: 'ars_nouveau:end_fiber' },
                B: { tag: 'forge:wool' },
                C: { item: 'create:shadow_steel_casing' },
                D: { item: 'kubejs:dimensional_storage_crystal' },
                E: { tag: 'forge:rods/lumium' },
                F: { item: 'integratedterminals:chorus_glass' }
            },
            id: 'enderstorage:ender_tank'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'enderstorage:create_recipe',
                result: { item: recipe.output },
                pattern: recipe.pattern,
                key: recipe.key
            })
            .id(recipe.id);
    });
});
