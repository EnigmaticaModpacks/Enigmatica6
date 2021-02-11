events.listen('recipes', (event) => {
    honeyVarieties.forEach((honeyVariety) => {
        if (honeyVariety == 'resourcefulbees:honey') {
            return;
        }
        event.recipes.thermal.chiller(Item.of(honeyVariety + '_block'), fluid.of(honeyVariety, 1000));
    });
});
