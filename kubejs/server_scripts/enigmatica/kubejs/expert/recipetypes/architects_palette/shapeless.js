onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/architects_palette/shapeless/';
    const recipes = [
        {
            output: Item.of('architects_palette:sunmetal_brick', 9),
            inputs: ['architects_palette:sunmetal_block'],
            id: `${id_prefix}sunmetal_bricks_from_sunmetal_block`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
