onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'byg:blueberry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/blueberries'
            },
            id: 'byg:blueberry_pie'
        },
        {
            output: 'byg:nightshade_berry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'byg:nightshade_berries'
            },
            id: 'byg:nightshade_berry_pie'
        },
        {
            output: 'byg:crimson_berry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'byg:crimson_berries'
            },
            id: 'byg:crimson_berry_pie'
        },
        {
            output: 'byg:green_apple_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'byg:green_apple'
            },
            id: 'byg:green_apple_pie'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
