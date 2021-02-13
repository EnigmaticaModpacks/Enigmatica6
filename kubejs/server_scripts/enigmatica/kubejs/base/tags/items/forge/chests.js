events.listen('item.tags', (event) => {
    event.remove('forge:chests', [
        '#pneumaticcraft:chests',
        '#forge:chests/electric',
        '#forge:chests/personal',
        '#forge:chests/ender'
    ]);
});
