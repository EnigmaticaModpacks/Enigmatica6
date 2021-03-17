events.listen('item.tags', (event) => {
    combVariants.forEach((comb) => {
        event.get('diet:sugars').add('resourcefulbees:' + comb + '_honeycomb');
    });

    honeyVarieties.forEach((honey) => {
        if (honey == 'resourcefulbees:honey') {
            honey = 'minecraft:honey';
        }
        event.get('diet:sugars').add(honey + '_bottle');
    });

    event.add('diet:sugars', ['mekanism:canteen']);
});
