onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/cutting/';
    const recipes = [
        {
            input: 'occultism:otherstone',
            output: Item.of('darkutils:blank_plate', 8),
            extraOutput: Item.of('darkutils:blank_plate').chance(0.5),
            id: `${id_prefix}blank_plate`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering
            .sawmill(recipe.output, recipe.input, [{ stripping: false, output: recipe.extraOutput }])
            .id(recipe.id);
    });
});
