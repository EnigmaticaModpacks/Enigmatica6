events.listen('recipes', (event) => {
    data = {
        recipes: [
            {
                input: 'forge:stone',
                result: 'occultism:otherstone'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'occultism:spirit_fire',
            ingredient: [
                {
                    tag: recipe.input
                }
            ],
            result: {
                item: recipe.result
            }
        });
    });
});
