onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('fluxnetworks:flux_controller', 1),
            pattern: ['ABA', 'CDC', 'AAA'],
            key: {
                A: 'fluxnetworks:flux_block',
                B: 'fluxnetworks:flux_core',
                C: 'fluxnetworks:flux_dust',
                D: 'powah:player_transmitter_nitro'
            },
            id: 'fluxnetworks:fluxcontroller'
        },
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
