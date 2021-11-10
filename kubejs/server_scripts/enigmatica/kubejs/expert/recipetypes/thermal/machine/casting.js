onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    var data = {
        recipes: [
            {
                inputs: [Item.of('#forge:ingots/cobalt', 3), 'thermal:blizz_powder'],
                outputs: [Item.of('undergarden:froststeel_ingot', 3)]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.thermal.smelter(recipe.outputs, recipe.inputs);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
