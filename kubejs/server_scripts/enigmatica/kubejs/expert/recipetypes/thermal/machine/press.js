onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [
                Item.of('4x kubejs:superheated_steel_ingot'),
                Ingredient.of('#thermal:crafting/dies/packing_2x2')
            ],
            outputs: Item.of('2x kubejs:hot_compressed_iron_ingot'),
            energy: 1000,
            id: 'enigmatica:expert/thermal/hot_compressed_iron_ingot'
        },
        {
            inputs: [
                Item.of('4x kubejs:superheated_steel_block'),
                Ingredient.of('#thermal:crafting/dies/packing_2x2')
            ],
            outputs: Item.of('2x kubejs:hot_compressed_iron_block'),
            energy: 9000,
            id: 'enigmatica:expert/thermal/hot_compressed_iron_block'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy).id(recipe.id)
            : event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy);
    });
});
