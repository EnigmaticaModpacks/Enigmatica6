onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'rftoolscontrol:workbench',
            pattern: ['C', 'F', 'X'],
            key: {
                C: '#forge:workbenches',
                X: '#forge:chests/wooden',
                F: 'rftoolsbase:machine_frame'
            },
            id: 'rftoolscontrol:workbench'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
