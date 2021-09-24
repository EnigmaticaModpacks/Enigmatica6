onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('farmersdelight:pie_crust', 3),
            pattern: ['A A', 'AAA'],
            key: {
                A: 'farmersdelight:wheat_dough'
            },
            id: 'farmersdelight:pie_crust'
        },
        {
            output: 'farmersdelight:chocolate_pie',
            pattern: ['DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                D: 'create:bar_of_chocolate'
            },
            id: 'farmersdelight:chocolate_pie'
        },
        {
            output: 'farmersdelight:apple_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'minecraft:apple'
            },
            id: 'farmersdelight:apple_pie'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
