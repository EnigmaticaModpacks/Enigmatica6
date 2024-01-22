onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'supplementaries:present_green',
            inputs: ['supplementaries:present', '#forge:dyes/green'],
            id: 'supplementaries:jei_present_green'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
