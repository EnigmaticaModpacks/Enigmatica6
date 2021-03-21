events.listen('block.tags', (event) => {
    event.add('create:fan_heaters', [
        '#minecraft:fire',
        '#minecraft:campfires',
    ]);
    event.add('create:fan_heaters', heatSources);
});
