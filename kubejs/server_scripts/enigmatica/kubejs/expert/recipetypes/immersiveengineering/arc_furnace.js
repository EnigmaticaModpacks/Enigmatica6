onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    var data = {
        recipes: [
            {
                input1: Item.of('#forge:ingots/cobalt', 3),
                secondaries: ['thermal:blizz_powder'],
                outputs: [Item.of('undergarden:froststeel_ingot', 3)]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineering.arc_furnace(recipe.outputs, recipe.input1, recipe.secondaries);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
