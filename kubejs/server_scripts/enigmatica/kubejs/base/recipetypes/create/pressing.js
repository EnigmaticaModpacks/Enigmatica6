events.listen('recipes', (event) => {
    const recipes = [{ output: 'mekanism:hdpe_sheet', inputs: ['mekanism:hdpe_pellet'] }];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id)
            : event.recipes.create.pressing(recipe.output, recipe.inputs);
    });
});
