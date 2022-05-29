onEvent('server.datapack.high_priority', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    /*          
                Negative values permitted
                maxEterna: max 50,
                eterna: max 50,             // Enchanting Level
                quanta: max 100,            // Increases variability 
                arcana: max 100,            // Increases Rarity
                clues: max useful probably around 10,
                rectification: max 100      // Reduces variance from Quanta
    */
    let enchantingBlocks = [];

    let bookshelves = getItemsInTag(Ingredient.of('#forge:bookshelves'));
    bookshelves.forEach((bookshelf) => {
        enchantingBlocks.push({
            block: bookshelf.id,
            stats: {
                maxEterna: 7.5,
                eterna: 1
            }
        });
    });

    let candles = getItemsInTag(Ingredient.of('#forge:candles'));
    candles.forEach((candle) => {
        if (candle.id == 'eidolon:candlestick' || candle.id == 'eidolon:candle') {
            return;
        }

        enchantingBlocks.push({
            block: candle.id,
            stats: {
                maxEterna: 7.5,
                eterna: 0.5
            }
        });
    });

    enchantingBlocks.forEach((enchantingBlock) => {
        event.addJson(`apotheosis:enchanting_stats/${enchantingBlock.block.replace(':', '_')}.json`, enchantingBlock);
    });
});
