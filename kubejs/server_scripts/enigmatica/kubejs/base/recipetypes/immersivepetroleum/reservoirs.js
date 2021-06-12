onEvent('recipes', (event) => {
    let data = {
        recipes: [
            {
                fluid: 'pneumaticcraft:oil',
                fluidminimum: 2500000,
                fluidcapacity: 15000000,
                fluidtrace: 6,
                weight: 40,
                dimension: {
                    whitelist: [],
                    blacklist: ['minecraft:the_end']
                },
                biome: {
                    whitelist: [],
                    blacklist: []
                },
                name: 'oil',
                id: 'oil'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:reservoirs';
        const re = event.custom(recipe);
        if (recipe.id) {
            re.id(`immersivepetroleum:reservoirs/${recipe.id}`);
        }
    });
});
