onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('fluxnetworks:flux_core', 8),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'fluxnetworks:flux_dust',
                B: '#forge:obsidian',
                C: 'powah:ender_core'
            },
            id: 'fluxnetworks:fluxcore'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
