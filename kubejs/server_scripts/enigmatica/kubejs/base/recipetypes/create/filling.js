events.listen('recipes', (event) => {
    honeyVarieties.forEach((honeyVariety) => {
        if (honeyVariety == 'resourcefulbees:honey') {
            return;
        }

        event.recipes.create.filling(Item.of(honeyVariety + '_bottle'), [
            fluid.of(honeyVariety, 250),
            Item.of('minecraft:glass_bottle')
        ]);
    });
});
