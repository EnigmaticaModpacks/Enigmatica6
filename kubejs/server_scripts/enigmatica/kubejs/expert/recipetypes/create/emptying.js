onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/emptying/';
    const recipes = [
        {
            input: 'thermal:syrup_bottle',
            container: 'minecraft:glass_bottle',
            fluid: Fluid.of('thermal:syrup', 250),
            id: `${id_prefix}syrup_bottle`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.emptying([recipe.fluid, recipe.container], recipe.input).id(recipe.id);
    });
});
