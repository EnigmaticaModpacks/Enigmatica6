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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
