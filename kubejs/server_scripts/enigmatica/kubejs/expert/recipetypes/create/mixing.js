events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            heated: true,
            inputs: ['#forge:ingots/cobalt', '#forge:ingots/cobalt', '#forge:ingots/cobalt', 'thermal:blizz_powder'],
            output: Item.of('undergarden:froststeel_ingot', 3)
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.heated) {
            event.recipes.create.mixing(recipe.output, recipe.inputs).heated();
        } else if (recipe.superheated) {
            event.recipes.create.mixing(recipe.output, recipe.inputs).superheated();
        } else {
            event.recipes.create.mixing(recipe.output, recipe.inputs);
        }
    });
});
