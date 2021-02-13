events.listen('recipes', (event) => {
    honeyVarieties.forEach((honeyVariety) => {
        if (honeyVariety == 'resourcefulbees:honey') {
            return;
        }

        event.recipes.create.emptying(
            [fluid.of(honeyVariety, 250), Item.of('minecraft:glass_bottle')],
            Item.of(honeyVariety + '_bottle')
        );
    });
});
