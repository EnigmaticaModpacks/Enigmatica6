events.listen('item.tags', (event) => {
    event.add('diet:grains', [
        'pneumaticcraft:sourdough_bread',
        'pneumaticcraft:salmon_tempura',
        'resourcefulbees:oreo_cookie',
        'meetyourfight:aether_glazed_cupcake',
        'meetyourfight:velvet_fortune'
    ]);
});
