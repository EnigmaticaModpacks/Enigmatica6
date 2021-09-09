onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const idPrefix = 'enigmatica:expert/immersiveengineering/alloy/';
    const recipes = [
        {
            input1: Item.of('#forge:ingots/cobalt', 3),
            input2: 'thermal:blizz_powder',
            output: Item.of('undergarden:froststeel_ingot', 3),
            id: `${idPrefix}froststeel_ingot_3`
        },
        {
            input1: 'minecraft:book',
            input2: 'pneumaticcraft:upgrade_matrix',
            output: Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'),
            id: `immersiveengineering:crafting/blueprint_components`
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.recipes.immersiveengineering.alloy(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
        } else {
            event.recipes.immersiveengineering.alloy(recipe.output, recipe.input1, recipe.input2);
        }
    });
});
