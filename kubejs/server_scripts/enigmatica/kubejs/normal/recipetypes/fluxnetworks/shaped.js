onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
