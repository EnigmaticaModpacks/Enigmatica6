onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/filling/';
    const recipes = [
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('thermal:syrup', 250),
            output: 'thermal:syrup_bottle',
            id: `${id_prefix}syrup_bottle`
        },
        {
            input: 'minecraft:light_gray_concrete_powder',
            fluid: Fluid.of('kubejs:molten_compressed_iron', 18),
            output: 'pneumaticcraft:reinforced_stone',
            id: `${id_prefix}reinforced_stone`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});
