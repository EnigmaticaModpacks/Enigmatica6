events.listen('recipes', (event) => {
    const recipes = [];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.result, recipe.pattern, recipe.key);
    });
});
