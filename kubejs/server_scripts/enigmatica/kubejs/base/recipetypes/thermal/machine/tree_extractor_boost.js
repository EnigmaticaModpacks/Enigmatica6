events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                type: 'thermal:tree_extractor_boost',
                ingredient: {
                    item: 'industrialforegoing:fertilizer'
                },
                output: 1.7,
                cycles: 12
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom(recipe);
    });
});
