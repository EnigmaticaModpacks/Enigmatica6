onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/refinedcrafterproxy/shaped/';

    const recipes = [];

    for (let tier of ['iron', 'gold', 'diamond', 'netherite']) {
        recipes.push({
            output: Item.of('refinedcrafterproxy:crafter_proxy', { Tier: `extrastorage_${tier}` }),
            pattern: [
                'C C',
                'LXR',
                'C C'
            ],
            key: {
                C: 'refinedstorage:quartz_enriched_iron',
                X: `extrastorage:${tier}_crafter`,
                L: 'refinedstorage:improved_processor',
                R: 'refinedstorage:advanced_processor',
            },
            id: `${id_prefix}${tier}_crafter_proxy`
        })
    }

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
