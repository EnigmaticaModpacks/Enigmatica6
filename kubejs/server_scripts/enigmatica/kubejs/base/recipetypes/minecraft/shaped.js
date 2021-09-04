onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'minecraft:pumpkin_pie',
            pattern: ['CDC', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: '#forge:eggs',
                D: 'minecraft:pumpkin'
            },
            id: 'minecraft:pumpkin_pie'
        },
        {
            output: 'minecraft:beehive',
            pattern: ['AAA', 'BBB', 'AAA'],
            key: {
                A: '#minecraft:planks',
                B: '#resourcefulbees:resourceful_honeycomb'
            },
            id: 'minecraft:beehive'
        },
        {
            output: Item.of('minecraft:honeycomb_block'),
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'minecraft:honeycomb'
            },
            id: 'minecraft:honeycomb_block'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
