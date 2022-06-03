onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/occultism/crushing/';
    const recipes = [
        {
            input: { item: 'minecraft:basalt' },
            output: 'byg:black_sand',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}black_sand_from_basalt`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'occultism:crushing',
                ingredient: recipe.input,
                result: {
                    item: recipe.output,
                    count: recipe.count
                },
                crushing_time: recipe.time,
                ignore_crushing_multiplier: recipe.ignore_crushing_multiplier
            })
            .id(recipe.id);
    });
});
