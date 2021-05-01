events.listen('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    var data = {
        recipes: [
            {
                inputs: ['#forge:ingots/enderium', Item.of('fluxnetworks:flux_dust', 8)],
                outputs: [Item.of('compactmachines:wall', 32)]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs);
    });
});
