onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [Item.of('4x kubejs:superheated_steel_ingot'), Ingredient.of('#thermal:crafting/dies/packing_2x2')],
            outputs: Item.of('2x kubejs:hot_compressed_iron_ingot'),
            energy: 1000,
            id: 'enigmatica:expert/thermal/hot_compressed_iron_ingot'
        },
        {
            inputs: [Item.of('4x kubejs:superheated_steel_block'), Ingredient.of('#thermal:crafting/dies/packing_2x2')],
            outputs: Item.of('2x kubejs:hot_compressed_iron_block'),
            energy: 9000,
            id: 'enigmatica:expert/thermal/hot_compressed_iron_block'
        },
        {
            inputs: ['refinedstorage:raw_basic_processor', Ingredient.of('#thermal:crafting/dies/coin')],
            outputs: 'refinedstorage:basic_processor',
            energy: 9000,
            id: 'refinedstorage:basic_processor'
        },
        {
            inputs: ['refinedstorage:raw_improved_processor', Ingredient.of('#thermal:crafting/dies/coin')],
            outputs: 'refinedstorage:improved_processor',
            energy: 18000,
            id: 'refinedstorage:improved_processor'
        },
        {
            inputs: ['refinedstorage:raw_advanced_processor', Ingredient.of('#thermal:crafting/dies/coin')],
            outputs: 'refinedstorage:advanced_processor',
            energy: 27000,
            id: 'refinedstorage:advanced_processor'
        },
        {
            inputs: ['extrastorage:raw_neural_processor', Ingredient.of('#thermal:crafting/dies/coin')],
            outputs: 'extrastorage:neural_processor',
            energy: 36000,
            id: 'extrastorage:neural_processor'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy).id(recipe.id)
            : event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy);
    });
});
