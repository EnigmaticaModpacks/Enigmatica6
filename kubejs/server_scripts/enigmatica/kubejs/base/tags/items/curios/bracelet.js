onEvent('item.tags', (event) => {
    event.remove('curios:bracelet', [
        'atum:relic_silver_bracelet',
        'atum:relic_gold_bracelet',
        'atum:relic_sapphire_bracelet',
        'atum:relic_ruby_bracelet',
        'atum:relic_emerald_bracelet',
        'atum:relic_diamond_bracelet'
    ]);
});
