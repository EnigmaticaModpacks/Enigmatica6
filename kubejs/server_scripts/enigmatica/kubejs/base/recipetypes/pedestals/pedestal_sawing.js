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
        },
        {
            input: 'astralsorcery:infused_wood',
            output: '6x astralsorcery:infused_wood_planks',
            id: `${id_prefix}infused_wood_planks_from_infused_wood`
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
