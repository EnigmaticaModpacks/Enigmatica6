onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'simplefarming:strawberry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/strawberries'
            },
            id: 'simplefarming:strawberry_pie'
        },
        {
            output: 'simplefarming:raspberry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/raspberries'
            },
            id: 'simplefarming:raspberry_pie'
        },
        {
            output: 'simplefarming:plum_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/plum'
            },
            id: 'simplefarming:plum_pie'
        },
        {
            output: 'simplefarming:pear_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/pear'
            },
            id: 'simplefarming:pear_pie'
        },
        {
            output: 'simplefarming:peanut_butter_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:crops/peanut'
            },
            id: 'simplefarming:peanut_butter_pie'
        },
        {
            output: 'simplefarming:cherry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/cherries'
            },
            id: 'simplefarming:cherry_pie'
        },
        {
            output: 'simplefarming:blackberry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/blackberries'
            },
            id: 'simplefarming:blackberry_pie'
        },
        {
            output: 'simplefarming:apricot_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/apricot'
            },
            id: 'simplefarming:apricot_pie'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
