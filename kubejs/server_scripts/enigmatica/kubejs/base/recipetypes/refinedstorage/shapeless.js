onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/refinedstorage/';
    const recipes = [
        {
            output: 'refinedstorage:crafter',
            inputs: [Item.of('refinedstorage:crafter').ignoreNBT()],
            id: `${id_prefix}crafter_reset`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
