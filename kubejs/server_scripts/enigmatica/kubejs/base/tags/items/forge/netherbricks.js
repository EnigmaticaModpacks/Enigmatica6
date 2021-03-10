events.listen('item.tags', (event) => {
    event.add('forge:netherbricks', [
        'byg:blue_nether_bricks',
        'byg:yellow_nether_bricks'
    ]);
});