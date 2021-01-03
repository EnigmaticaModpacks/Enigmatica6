events.listen('recipes', (event) => {
    event.recipes.pedestals.pedestal_crushing({
        type: 'pedestals.pedestal_crushing',
        ingredient: {
            tag: 'forge:ores/zinc'
        },
        result: {
            item: 'emendatusenigmatica:zinc_dust',
            count: 2
        }
    });
});
