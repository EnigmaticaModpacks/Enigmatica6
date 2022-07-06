onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/sawmill/';
    const recipes = [
        {
            input: 'occultism:dimensional_matrix',
            outputs: [
                Item.of('kubejs:dimensional_storage_crystal', 6),
                Item.of('kubejs:dimensional_storage_crystal').chance(0.25)
            ],
            id: `${id_prefix}dimensional_storage_crystal`
        },
        {
            input: 'occultism:otherstone',
            outputs: [Item.of('darkutils:blank_plate', 8), Item.of('darkutils:blank_plate').chance(0.5)],
            id: `${id_prefix}blank_plate`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.sawmill(recipe.outputs, recipe.input).id(recipe.id);
    });
});
