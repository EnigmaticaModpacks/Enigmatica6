events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                output: 'buildinggadgets:construction_block_dense',
                input: 'buildinggadgets:construction_block_powder'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.create.splashing(recipe.output, recipe.input);
    });
});
