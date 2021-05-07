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
                loss_rate: 50,
                id: 'wheat_flour'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        let re = event.custom({
            type: 'pneumaticcraft:explosion_crafting',
            input: recipe.input,
            results: recipe.results,
            loss_rate: recipe.loss_rate
        });
        if (recipe.id) {
            re.id(`pneumaticcraft:explosion_crafting/${recipe.id}`);
        }
    });
});
