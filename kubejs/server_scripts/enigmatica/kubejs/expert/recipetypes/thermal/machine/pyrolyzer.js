onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/pyrolyzer/';
    const recipes = [
        {
            input: 'minecraft:coal',
            outputs: ['emendatusenigmatica:coke_gem', 'thermal:tar', Fluid.of('immersiveengineering:creosote', 250)],
            energy: 12000,
            id: 'thermal:machine/pyrolyzer/pyrolyzer_coal'
        },
        {
            input: 'minecraft:coal_block',
            outputs: [
                'emendatusenigmatica:coke_block',
                'thermal:tar_block',
                Fluid.of('immersiveengineering:creosote', 250 * 9)
            ],
            energy: 12000 * 8,
            id: `${id_prefix}coke_block_from_coal_block`
        },
        {
            input: '#minecraft:logs',
            outputs: ['minecraft:charcoal', Fluid.of('immersiveengineering:creosote', 125)],
            energy: 6000,
            id: 'thermal:machine/pyrolyzer/pyrolyzer_logs'
        },
        {
            input: '#forge:gems/bitumen',
            outputs: ['emendatusenigmatica:coke_gem', 'thermal:tar', Fluid.of('thermal:heavy_oil', 50)],
            energy: 12000,
            id: 'thermal:machine/pyrolyzer/pyrolyzer_bitumen'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.pyrolyzer(recipe.outputs, recipe.input).energy(recipe.energy).id(recipe.id);
    });
});
