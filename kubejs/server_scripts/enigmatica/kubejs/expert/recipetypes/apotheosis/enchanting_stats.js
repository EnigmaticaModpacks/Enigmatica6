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

    bookshelves.forEach((bookshelf) => {
        enchantingBlocks.push({
            block: bookshelf,
            stats: {
                maxEterna: 7.5,
                eterna: 1
            }
        });
    });

    candles.forEach((candle) => {
        if (candle == 'eidolon:candlestick' || candle == 'eidolon:candle') {
            return;
        }

        enchantingBlocks.push({
            block: candle,
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
