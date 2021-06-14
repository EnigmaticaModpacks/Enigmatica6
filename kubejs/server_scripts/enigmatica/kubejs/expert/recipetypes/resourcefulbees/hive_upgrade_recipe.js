onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            //Gate Beehive behind starting Nature's Aura
            pattern: ['ACA', 'ABA', 'ACA'],
            key: {
                A: { item: 'minecraft:grass' },
                B: { tag: 'forge:beehives/tier_0' },
                C: { item: 'naturesaura:gold_powder' }
            },
            result: { item: 'resourcefulbees:t1_beehive' },
            id: 'resourcefulbees:t1_beehive'
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
