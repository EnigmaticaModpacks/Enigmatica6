events.listen('recipes', (event) => {
    const recipes = [];

    recipes.forEach((recipe) => {
        if (recipe.heated) {
            event.recipes.create.mixing(recipe.output, recipe.inputs).heated();
        } else if (recipe.superheated) {
            event.recipes.create.mixing(recipe.output, recipe.inputs).superheated();
        } else {
            event.recipes.create.mixing(recipe.output, recipe.inputs);
        }
    });
});
