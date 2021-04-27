events.listen('recipes', (event) => {
    const recipes = [];

    data.recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.result, recipe.pattern, recipe.key);
    });
});
