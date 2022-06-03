onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/occultism/crushing/';
    const recipes = [
        {
            input: { item: 'upgrade_aquatic:embedded_ammonite' },
            output: 'minecraft:nautilus_shell',
            count: 3,
            time: 100,
            ignore_crushing_multiplier: false,
            id: `${id_prefix}nautilus_shell`
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
