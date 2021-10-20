onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/centrifuge/';
    const recipes = [
        {
            input: 'kubejs:ground_meat',
            outputs: [Item.of('minecraft:bone_meal').withChance(0.15), Fluid.of('industrialforegoing:meat', 100)],
            id: `${id_prefix}meat`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.centrifuge(recipe.outputs, recipe.input).id(recipe.id);
    });
});
