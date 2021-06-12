onEvent('item.tags', (event) => {
    event.get('atum:relic_non_dirty/idol').add(/atum:relic_(?!dirty)\w+_idol/);
    event.get('atum:relic_non_dirty/necklace').add(/atum:relic_(?!dirty)\w+_necklace/);
    event.get('atum:relic_non_dirty/ring').add(/atum:relic_(?!dirty)\w+_ring/);
    event.get('atum:relic_non_dirty/brooch').add(/atum:relic_(?!dirty)\w+_brooch/);
    event.get('atum:relic_non_dirty/bracelet').add(/atum:relic_(?!dirty)\w+_bracelet/);
});
