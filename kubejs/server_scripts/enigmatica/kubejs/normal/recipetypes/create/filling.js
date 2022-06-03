onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/create/filling/';
    const recipes = [
        {
            input: Ingredient.of('#forge:glass/colorless'),
            fluid: Fluid.of('integrateddynamics:menril_resin', 1000),
            output: 'integratedterminals:menril_glass',
            id: `${id_prefix}menril_glass`
        },
        {
            input: Ingredient.of('#forge:glass/colorless'),
            fluid: Fluid.of('integrateddynamics:liquid_chorus', 1000),
            output: 'integratedterminals:chorus_glass',
            id: `${id_prefix}chorus_glass`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});
