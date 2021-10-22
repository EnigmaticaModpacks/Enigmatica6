onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/arc_furnace';
    var data = {
        recipes: [
            {
                input1: Item.of('#forge:ingots/cobalt', 3),
                secondaries: ['thermal:blizz_powder'],
                outputs: [Item.of('undergarden:froststeel_ingot', 3)],
                id: `${id_prefix}froststeel_ingot`
            },
            {
                input1: Ingredient.of('3x #forge:ingots/aluminum'),
                secondaries: [Ingredient.of('4x #forge:dusts/lithium'), Ingredient.of('#forge:ingots/copper')],
                outputs: [Item.of('4x mekanism:alloy_reinforced')],
                id: `${id_prefix}alloy_reinforced`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.arc_furnace(recipe.outputs, recipe.input1, recipe.secondaries).id(recipe.id);
    });
});
