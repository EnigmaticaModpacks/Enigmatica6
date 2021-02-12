events.listen('item.tags', (event) => {
    const knives = [
        'farmersdelight:flint_knife',
        'farmersdelight:iron_knife',
        'farmersdelight:diamond_knife',
        'farmersdelight:netherite_knife',
        'farmersdelight:golden_knife'
    ];
    event.get('forge:tools').add(knives);
    event.get('forge:tools/knife').add(knives);
    event.get('forge:fillet_knife').add(knives);
});
