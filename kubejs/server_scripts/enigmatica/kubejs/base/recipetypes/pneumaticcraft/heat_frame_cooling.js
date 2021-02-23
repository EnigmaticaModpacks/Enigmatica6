events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: { type: 'pneumaticcraft:fluid', fluid: 'integrateddynamics:menril_resin', amount: 1000 },
                output: { item: 'integrateddynamics:crystalized_menril_block' },
                max_temp: 273,
                bonus_output: { multiplier: 0.025, limit: 0.25 }
            },
            {
                input: { type: 'pneumaticcraft:fluid', fluid: 'integrateddynamics:liquid_chorus', amount: 1000 },
                output: { item: 'integrateddynamics:crystalized_chorus_block' },
                max_temp: 273,
                bonus_output: { multiplier: 0.025, limit: 0.25 }
            }
        ]
    };

    honeyVarieties.forEach((honeyVariety) => {
        var output = honeyVariety + '_block';

        if (honeyVariety == 'resourcefulbees:honey') {
            output = 'minecraft:honey_block';
        }

        data.recipes.push({
            input: { type: 'pneumaticcraft:fluid', tag: honeyVariety, amount: 1000 },
            output: { item: output },
            max_temp: 273
        });
    });

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'pneumaticcraft:heat_frame_cooling',
            input: recipe.input,
            max_temp: recipe.max_temp,
            result: recipe.output,
            bonus_output: recipe.bonus_output
        });
    });
});
