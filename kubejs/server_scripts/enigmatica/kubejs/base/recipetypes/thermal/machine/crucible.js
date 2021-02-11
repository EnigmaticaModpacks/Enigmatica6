events.listen('recipes', (event) => {
    honeyVarieties.forEach((honeyVariety) => {
        if (honeyVariety == 'resourcefulbees:honey') {
            return;
        }
        event.recipes.thermal.crucible(fluid.of(honeyVariety, 1000), Item.of(honeyVariety + '_block'));
    });
});
