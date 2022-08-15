onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/thermal/smelter/';

    var data = {
        recipes: [
            {
                inputs: ['#forge:ingots/enderium', Item.of('fluxnetworks:flux_dust', 8)],
                outputs: [Item.of('compactmachines:wall', 32)]
            },
            {
                inputs: ['#forge:dusts/refined_obsidian', '#forge:ingots/osmium'],
                outputs: [Item.of('mekanism:ingot_refined_obsidian')]
            },
            {
                inputs: ['#forge:dusts/glowstone', '#forge:ingots/osmium'],
                outputs: [Item.of('mekanism:ingot_refined_glowstone')]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        fallback_id(event.recipes.thermal.smelter(recipe.outputs, recipe.inputs), id_prefix);
    });
});
