onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            output: 'kubejs:smoldering_lapis_lazuli_compound',
            input: 'kubejs:coarse_lapis_lazuli_compound',
            slag: '#forge:slag'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.immersiveengineering.blast_furnace(recipe.output, recipe.input, recipe.slag).id(recipe.id)
            : event.recipes.immersiveengineering.blast_furnace(recipe.output, recipe.input, recipe.slag);
    });
});
