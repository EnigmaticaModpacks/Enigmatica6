events.listen('recipes', (event) => {
    honeyVarieties.forEach((honeyVariety) => {
        if (honeyVariety == 'resourcefulbees:honey') {
            return;
        }
        event.recipes.thermal.chiller(item.of(honeyVariety + '_block'), fluid.of(honeyVariety, 1000));
    });
});
