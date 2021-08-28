/// High Priority required or Apotheosis over-writes these.
onEvent('server.datapack.high_priority', (event) => {
    let trades = [];

    trades.forEach((trade) => {
        event.addJson(`apotheosis:bosses/${trade.name}.json`, trade.recipe);
    });
});
