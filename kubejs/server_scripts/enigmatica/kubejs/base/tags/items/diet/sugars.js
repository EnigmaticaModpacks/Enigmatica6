events.listen('item.tags', (event) => {
    event.add('diet:sugars', [
        'resourcefulbees:oreo_cookie',
        'betterendforge:sweet_berry_jelly',
        'betterendforge:shadow_berry_jelly',
        'meetyourfight:aether_glazed_cupcake'
    ]);

    combVariants.forEach((comb) => {
        event.get('diet:sugars').add('resourcefulbees:' + comb + '_honeycomb');
    });

    honeyVarieties.forEach((honey) => {
        if (honey == 'resourcefulbees:honey') {
            honey = 'minecraft:honey';
        }
        event.get('diet:sugars').add(honey + '_bottle');
    });
});
