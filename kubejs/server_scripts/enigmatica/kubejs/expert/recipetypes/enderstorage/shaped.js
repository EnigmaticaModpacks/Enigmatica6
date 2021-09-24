onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const newRecipes = [
        {
            output: 'enderstorage:ender_pouch',
            pattern: ['ABA', 'CEC', 'ADA'],
            key: {
                A: { tag: 'forge:leather' },
                B: { tag: 'forge:wool' },
                C: { tag: 'forge:inlays/arcane_gold' },
                D: { item: 'botania:corporea_spark' },
                E: { item: 'occultism:satchel' }
            },
            id: 'enderstorage:ender_pouch'
        },
        {
            output: 'enderstorage:ender_chest',
            pattern: ['ABA', 'CEC', 'ADA'],
            key: {
                A: { tag: 'forge:plates/lumium' },
                B: { tag: 'forge:wool' },
                C: { item: 'minecraft:crying_obsidian' },
                D: { item: 'botania:corporea_spark' },
                E: { item: 'occultism:satchel' }
            },
            id: 'enderstorage:ender_chest'
        },
        {
            output: 'enderstorage:ender_tank',
            pattern: ['ABA', 'CEC', 'ADA'],
            key: {
                A: { tag: 'forge:rods/lumium' },
                B: { tag: 'forge:wool' },
                C: { tag: 'thermal:glass/hardened' },
                D: { item: 'botania:corporea_spark' },
                E: { item: 'occultism:satchel' }
            },
            id: 'enderstorage:ender_tank'
        }
    ];

    newRecipes.forEach((recipe) => {
        const re = event.custom({
            type: 'enderstorage:create_recipe',
            result: { item: recipe.output },
            pattern: recipe.pattern,
            key: recipe.key
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
