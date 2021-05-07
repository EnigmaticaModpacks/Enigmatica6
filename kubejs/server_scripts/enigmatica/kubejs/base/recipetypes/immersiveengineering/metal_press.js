events.listen('recipes', (event) => {
    const recipes = [
        { output: 'mekanism:hdpe_sheet', input: 'mekanism:hdpe_pellet', mold: '#thermal:crafting/dies/plate' }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold).id(recipe.id)
            : event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold);
    });
});
