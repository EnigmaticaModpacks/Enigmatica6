events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: {
                    tag: 'forge:grain'
                },
                results: [
                    {
                        item: 'create:wheat_flour'
                    }
                ],
                loss_rate: 50
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'pneumaticcraft:explosion_crafting',
            input: recipe.input,
            results: recipe.results,
            loss_rate: recipe.loss_rate
        });
    });
});
