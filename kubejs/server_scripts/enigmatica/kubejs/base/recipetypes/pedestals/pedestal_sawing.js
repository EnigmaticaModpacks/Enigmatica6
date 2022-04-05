onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/pedestals/pedestal_sawing/';
    const recipes = [
        {
            input: 'naturesaura:ancient_log',
            output: '6x naturesaura:ancient_planks',
            id: `${id_prefix}ancient_planks_from_log`
        },
        {
            input: 'naturesaura:ancient_bark',
            output: '6x naturesaura:ancient_planks',
            id: `${id_prefix}ancient_planks_from_bark`
        },
        {
            input: 'botania:livingwood',
            output: '6x botania:livingwood_planks',
            id: `${id_prefix}livingwood_planks_from_livingwood`
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
