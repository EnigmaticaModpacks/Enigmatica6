onEvent('item.tags', (event) => {
    event
        .get('enigmatica:candle_materials')
        .add('minecraft:honeycomb')
        .add('resourcefulbees:wax')
        .add('occultism:tallow');
});
