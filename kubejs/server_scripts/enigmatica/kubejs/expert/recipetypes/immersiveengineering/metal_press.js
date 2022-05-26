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
        },
        {
            output: 'refinedstorage:basic_processor',
            input: 'refinedstorage:raw_basic_processor',
            mold: '#thermal:crafting/dies/coin',
            id: `${id_prefix}basic_processor`
        },
        {
            output: 'refinedstorage:improved_processor',
            input: 'refinedstorage:raw_improved_processor',
            mold: '#thermal:crafting/dies/coin',
            id: `${id_prefix}improved_processor`
        },
        {
            output: 'refinedstorage:advanced_processor',
            input: 'refinedstorage:raw_advanced_processor',
            mold: '#thermal:crafting/dies/coin',
            id: `${id_prefix}advanced_processor`
        },
        {
            output: 'extrastorage:neural_processor',
            input: 'extrastorage:raw_neural_processor',
            mold: '#thermal:crafting/dies/coin',
            id: `${id_prefix}neural_processor`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold).id(recipe.id);
    });
});
