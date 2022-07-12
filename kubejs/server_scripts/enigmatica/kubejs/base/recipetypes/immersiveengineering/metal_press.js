onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/metal_press/';

    const recipes = [
        {
            output: 'mekanism:hdpe_sheet',
            input: 'mekanism:hdpe_pellet',
            mold: '#thermal:crafting/dies/plate',
            id: `${id_prefix}hdpe_sheet`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold).id(recipe.id);
    });
});
