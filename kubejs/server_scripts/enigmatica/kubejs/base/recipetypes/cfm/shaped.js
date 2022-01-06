onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'cfm:post_box',
            pattern: ['AAA', 'ABA', 'A A'],
            key: {
                A: '#forge:ingots/iron_aluminum',
                B: '#forge:chests'
            },
            id: 'cfm:post_box'
        },
        {
            output: Item.of('16x cfm:rock_path'),
            pattern: ['AB', 'BA'],
            key: {
                A: 'minecraft:stone',
                B: 'minecraft:andesite'
            },
            id: 'cfm:rock_path'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
