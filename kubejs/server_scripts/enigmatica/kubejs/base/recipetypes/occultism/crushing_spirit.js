events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'forge:end_stones',
                output: 'occultism:crushed_end_stone',
                count: 4,
                time: 200,
                id: 'occultism:crushing/crushed_end_stone'
            },
            {
                input: 'forge:obsidian',
                output: 'emendatusenigmatica:obsidian_dust',
                count: 4,
                time: 400,
                id: 'occultism:crushing/obsidian_dust'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'occultism:crushing',
            ingredient: {
                tag: recipe.input
            },
            result: {
                item: recipe.output,
                count: recipe.count
            },
            crushing_time: recipe.time
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
