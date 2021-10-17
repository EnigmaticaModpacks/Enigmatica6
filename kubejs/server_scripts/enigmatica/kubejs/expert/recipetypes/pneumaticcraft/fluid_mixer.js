onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/fluid_mixer/';
    const recipes = [
        {
            input1: { type: 'pneumaticcraft:fluid', fluid: 'tconstruct:sky_slime', amount: 250 },
            input2: { type: 'pneumaticcraft:fluid', fluid: 'integrateddynamics:menril_resin', amount: 750 },
            item_output: { item: 'integrateddynamics:crystalized_menril_block' },
            pressure: 4.0,
            time: 300,
            id: `${id_prefix}crystalized_menril_block`
        },
        {
            input1: { type: 'pneumaticcraft:fluid', fluid: 'tconstruct:ender_slime', amount: 250 },
            input2: { type: 'pneumaticcraft:fluid', fluid: 'integrateddynamics:liquid_chorus', amount: 750 },
            item_output: { item: 'integrateddynamics:crystalized_chorus_block' },
            pressure: 4.0,
            time: 300,
            id: `${id_prefix}crystalized_chorus_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:fluid_mixer';
        event.custom(recipe).id(recipe.id);
    });
});
