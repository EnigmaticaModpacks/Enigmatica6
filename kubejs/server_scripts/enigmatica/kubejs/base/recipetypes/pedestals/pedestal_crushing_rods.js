events.listen('recipes', (event) => {
    var data = {
        recipes: [
            { input: 'thermal:blizz_rod', output: 'thermal:blizz_powder', count: 3 },
            { input: 'thermal:blitz_rod', output: 'thermal:blitz_powder', count: 3 },
            { input: 'thermal:basalz_rod', output: 'thermal:basalz_powder', count: 3 }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.pedestals.pedestal_crushing({
            type: 'pedestals.pedestal_crushing',
            ingredient: {
                item: recipe.input
            },
            result: {
                item: recipe.output,
                count: recipe.count
            }
        });
    });
});
