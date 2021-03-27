events.listen('item.tags', (event) => {
    event.add('forge:dirt', ['minecraft:dirt', 'byg:meadow_dirt']);

    event.remove('forge:dirt', ['supplementaries:fodder']);
});
