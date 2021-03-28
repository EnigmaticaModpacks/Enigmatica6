events.listen('recipes', (event) => {
    if (!expertMode) {
        return;
    }

    const newRecipes = [
        {
            output: 'thermal:machine_frame',
            pattern: ['ABA', 'B B', 'ABA'],
            key: {
                A: '#forge:plates/iron_tin',
                B: '#forge:glass_panes',
                C: '#forge:gears/iron_aluminum'
            },
            id: 'thermal:machine_frame'
        }
    ];

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
