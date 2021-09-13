onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/metal_press/';
    const recipes = [
        {
            output: 'powah:thermoelectric_plate',
            input: 'immersiveengineering:thermoelectric_generator',
            mold: '#thermal:crafting/dies/plate',
            id: `${id_prefix}thermoelectric_plate`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold).id(recipe.id);
    });
});
