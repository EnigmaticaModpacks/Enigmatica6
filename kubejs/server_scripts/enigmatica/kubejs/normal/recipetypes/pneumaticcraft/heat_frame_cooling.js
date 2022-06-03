onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/pneumaticcraft/heat_frame_cooling/';
    recipes = [
        {
            input: { type: 'pneumaticcraft:fluid', fluid: 'integrateddynamics:menril_resin', amount: 1000 },
            output: { item: 'integrateddynamics:crystalized_menril_block' },
            max_temp: 273,
            bonus_output: { multiplier: 0.025, limit: 0.25 },
            id: `${id_prefix}crystalized_menril_block`
        },
        {
            input: { type: 'pneumaticcraft:fluid', fluid: 'integrateddynamics:liquid_chorus', amount: 1000 },
            output: { item: 'integrateddynamics:crystalized_chorus_block' },
            max_temp: 273,
            bonus_output: { multiplier: 0.025, limit: 0.25 },
            id: `${id_prefix}crystalized_chorus_block`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pneumaticcraft:heat_frame_cooling',
                input: recipe.input,
                max_temp: recipe.max_temp,
                result: recipe.output,
                bonus_output: recipe.bonus_output
            })
            .id(recipe.id);
    });
});
