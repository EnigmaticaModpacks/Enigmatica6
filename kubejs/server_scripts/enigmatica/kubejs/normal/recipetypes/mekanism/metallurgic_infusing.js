onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/mekanism/metallurgic_infusing/';

    var data = {
        recipes: [
            {
                output: Item.of('compactmachines:wall', 32),
                inputItem: '#forge:storage_blocks/ender',
                infusionInput: 'mekanism:refined_obsidian',
                infusionAmount: 80,
                id: `${id_prefix}compactmachines_wall`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.mekanism
            .metallurgic_infusing(recipe.output, recipe.inputItem, recipe.infusionInput, recipe.infusionAmount)
            .id(recipe.id);
    });
});
