onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/insolator/';
    const recipes = [
        {
            input: '#forge:dusts/silver',
            outputs: [Item.of('architects_palette:sunmetal_blend').chance(1.0)],
            water: 1000,
            energy: 10000,
            id: `${id_prefix}sunmetal_blend`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal
            .insolator(recipe.outputs, recipe.input)
            .water(recipe.water)
            .energy(recipe.energy)
            .id(recipe.id);
    });
});
