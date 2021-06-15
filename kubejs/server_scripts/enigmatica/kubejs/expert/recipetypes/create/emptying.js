onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            input: 'kubejs:syrup_bottle',
            container: 'minecraft:glass_bottle',
            fluid: Fluid.of('thermal:syrup', 250)
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.emptying([recipe.fluid, recipe.container], recipe.input);
    });
});
