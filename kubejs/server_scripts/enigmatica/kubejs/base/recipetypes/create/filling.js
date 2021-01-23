events.listen('recipes', (event) => {
    honeyVarieties.forEach((honeyVariety) => {
        if (honeyVariety == 'resourcefulbees:honey') {
            return;
        }

        event.recipes.create.filling(item.of(honeyVariety + '_bottle'), [
            fluid.of(honeyVariety, 250),
            item.of('minecraft:glass_bottle')
        ]);
    });
});
