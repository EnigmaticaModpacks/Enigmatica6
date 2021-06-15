onEvent('recipes', (event) => {
    const recipes = [
        {
            pattern: ['SE', 'BS'],
            key: {
                B: { tag: 'forge:ingots/brass' },
                S: { item: 'minecraft:sugar' },
                E: { item: 'create:handheld_blockzapper' }
            },
            result: 'create:handheld_blockzapper',
            component: 'Accelerator',
            tier: 'Brass',
            id: 'create:blockzapper_upgrade/gold_accelerator'
        },
        {
            pattern: ['E ', 'BR'],
            key: {
                B: { tag: 'forge:ingots/brass' },
                R: { item: 'create:refined_radiance' },
                E: { item: 'create:handheld_blockzapper' }
            },
            result: 'create:handheld_blockzapper',
            component: 'Amplifier',
            tier: 'Brass',
            id: 'create:blockzapper_upgrade/gold_amplifier'
        },
        {
            pattern: [' B ', 'BEB', ' B '],
            key: {
                B: { tag: 'forge:ingots/brass' },
                E: { item: 'create:handheld_blockzapper' }
            },
            result: 'create:handheld_blockzapper',
            component: 'Body',
            tier: 'Brass',
            id: 'create:blockzapper_upgrade/gold_body'
        },
        {
            pattern: ['E ', 'BR'],
            key: {
                B: { tag: 'forge:ingots/brass' },
                R: { tag: 'forge:dusts/redstone' },
                E: { item: 'create:handheld_blockzapper' }
            },
            result: 'create:handheld_blockzapper',
            component: 'Retriever',
            tier: 'Brass',
            id: 'create:blockzapper_upgrade/gold_retriever'
        },
        {
            pattern: ['GBG', ' E '],
            key: {
                B: { tag: 'forge:ingots/brass' },
                G: { tag: 'forge:glass' },
                E: { item: 'create:handheld_blockzapper' }
            },
            result: 'create:handheld_blockzapper',
            component: 'Scope',
            tier: 'Brass',
            id: 'create:blockzapper_upgrade/gold_scope'
        },
        {
            pattern: ['GBG', ' E '],
            key: {
                B: { item: 'create:chromatic_compound' },
                G: { tag: 'forge:glass' },
                E: { item: 'create:handheld_blockzapper' }
            },
            result: 'create:handheld_blockzapper',
            component: 'Scope',
            tier: 'Chromatic',
            id: 'create:blockzapper_upgrade/purpur_scope'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'create:blockzapper_upgrade',
            pattern: recipe.pattern,
            key: recipe.key,
            result: Item.of(recipe.result, 1).toJson(),
            component: recipe.component,
            tier: recipe.tier
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
