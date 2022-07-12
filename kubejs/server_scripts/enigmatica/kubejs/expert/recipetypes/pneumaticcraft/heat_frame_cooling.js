onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/pneumaticcraft/heat_frame_cooling/';

    var data = {
        recipes: [
            {
                input: { type: 'pneumaticcraft:fluid', fluid: 'immersiveengineering:concrete', amount: 1000 },
                output: { item: 'immersiveengineering:concrete' },
                max_temp: 305,
                bonus_output: { multiplier: 0.085, limit: 0.1 },
                id: `${id_prefix}concrete`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
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
