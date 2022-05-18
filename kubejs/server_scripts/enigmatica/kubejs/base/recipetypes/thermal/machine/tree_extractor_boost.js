onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/tree_extractor_boost/';

    var data = {
        recipes: [
            {
                type: 'thermal:tree_extractor_boost',
                ingredient: {
                    item: 'industrialforegoing:fertilizer'
                },
                output: 1.7,
                cycles: 12,
                id: `${id_prefix}fertilizer`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom(recipe).id(recipe.id);
    });
});
