events.listen('item.tags', (event) => {
    event.add('forge:dirt', ['minecraft:dirt', 'byg:meadow_dirt']);
    evemt.remove('forge:dirt', ['supplementaries:fodder']);
});
