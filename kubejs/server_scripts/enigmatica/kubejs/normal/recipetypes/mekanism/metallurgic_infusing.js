events.listen('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    var data = {
        recipes: [
            {
                output: Item.of('compactmachines:wall', 32),
                inputItem: '#forge:storage_blocks/ender',
                infusionInput: 'mekanism:refined_obsidian',
                infusionAmount: 80
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.mekanism.metallurgic_infusing(
            recipe.output,
            recipe.inputItem,
            recipe.infusionInput,
            recipe.infusionAmount
        );
    });
});
