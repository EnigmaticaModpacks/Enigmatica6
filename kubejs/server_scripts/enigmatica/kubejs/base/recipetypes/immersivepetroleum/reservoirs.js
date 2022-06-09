onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/immersivepetroleum/reservoirs/';

    const recipes = [
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
            id: 'immersivepetroleum:reservoirs/oil'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:reservoirs';
        event.custom(recipe).id(recipe.id);
    });
});
