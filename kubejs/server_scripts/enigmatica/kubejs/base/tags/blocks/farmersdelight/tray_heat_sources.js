events.listen('block.tags', (event) => {
    event.add('farmersdelight:tray_heat_sources', [
        '#minecraft:fire',
        '#minecraft:campfires'
    ]);
    event.add('farmersdelight:tray_heat_sources', nonSolidHeatSources);
});
