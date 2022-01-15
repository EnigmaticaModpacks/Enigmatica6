onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/pedestals/pedestal_sawing/';
    const recipes = [
        {
            input: 'naturesaura:ancient_log',
            output: '6x naturesaura:ancient_planks',
            id: `${id_prefix}stick`
        }
    ];
    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pedestals:pedestal_sawing',
                ingredient: Ingredient.of(recipe.input),
                result: Item.of(recipe.output)
            })
            .id(recipe.id);
    });
});
