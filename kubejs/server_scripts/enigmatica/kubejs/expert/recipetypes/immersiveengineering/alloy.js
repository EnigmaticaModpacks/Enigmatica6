onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    var data = {
        recipes: [
            {
                input1: Item.of('#forge:ingots/cobalt', 3),
                input2: 'thermal:blizz_powder',
                output: Item.of('undergarden:froststeel_ingot', 3)
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineering.alloy(recipe.output, recipe.input1, recipe.input2);

        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
