onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [];
    recipes.forEach((recipe) => {
        const re = event.recipes.create.crushing(recipe.outputs, recipe.input);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
