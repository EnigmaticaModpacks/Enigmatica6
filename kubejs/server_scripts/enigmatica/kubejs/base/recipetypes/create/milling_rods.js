events.listen('recipes', (event) => {
    var data = {
        recipes: [
            { input: 'thermal:blizz_rod', primary: 'thermal:blizz_powder', secondary: 'minecraft:snowball' },
            {
                input: 'thermal:blitz_rod',
                primary: 'thermal:blitz_powder',
                secondary: 'emendatusenigmatica:potassium_nitrate_gem'
            },
            { input: 'thermal:basalz_rod', primary: 'thermal:basalz_powder', secondary: 'thermal:slag' }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.create.milling({
            type: 'create:milling',
            ingredients: [
                {
                    item: recipe.input
                }
            ],
            results: [
                {
                    item: recipe.primary,
                    count: 3
                },
                {
                    item: recipe.secondary,
                    count: 1,
                    chance: 0.25
                }
            ],
            processingTime: 50
        });
    });
});
