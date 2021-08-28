/// High Priority required or Apotheosis over-writes these.
onEvent('server.datapack.high_priority', (event) => {
    let trades = [];

    trades.forEach((trade) => {
        event.addJson(`apotheosis:boss_gear/${trade.name}.json`, trade.recipe);
    });
});
