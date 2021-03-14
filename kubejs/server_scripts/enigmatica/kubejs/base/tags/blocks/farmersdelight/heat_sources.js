events.listen('block.tags', (event) => {
    event.add('farmersdelight:heat_sources', heatSources);
});
