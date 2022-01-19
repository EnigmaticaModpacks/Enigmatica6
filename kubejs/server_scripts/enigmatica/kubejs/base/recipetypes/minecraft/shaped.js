onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/minecraft/shaped/';
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
        },
        {
            output: Item.of('4x minecraft:stone_bricks'),
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:stone'
            },
            id: 'minecraft:stone_bricks'
        },
        {
            output: Item.of('2x minecraft:stick'),
            pattern: ['A', 'A'],
            key: {
                A: 'naturesaura:ancient_stick'
            },
            id: `${id_prefix}stick`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
