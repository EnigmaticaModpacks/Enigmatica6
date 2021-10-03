onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/cutting/';
    const recipes = [
        {
            input: 'occultism:otherstone',
            outputs: [Item.of('darkutils:blank_plate', 8), Item.of('darkutils:blank_plate').chance(0.5)],
            id: `${id_prefix}blank_plate`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.cutting(recipe.outputs, recipe.input).id(recipe.id);
    });
});
