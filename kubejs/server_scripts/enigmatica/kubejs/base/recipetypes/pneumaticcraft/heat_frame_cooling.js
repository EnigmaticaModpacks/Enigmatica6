onEvent('recipes', (event) => {
    const recipes = [];

    const id_prefix = 'enigmatica:base/pneumaticcraft/heat_frame_cooling/';

    honeyVarieties.forEach((honeyVariety) => {
        var output = `${honeyVariety}_block`;

        if (honeyVariety == 'resourcefulbees:honey') {
            output = 'minecraft:honey_block';
        }

        recipes.push({
            input: { type: 'pneumaticcraft:fluid', tag: honeyVariety, amount: 1000 },
            output: { item: output },
            max_temp: 273,
            id: `${id_prefix}${output.split(':')[1]}`
        });
    });

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
