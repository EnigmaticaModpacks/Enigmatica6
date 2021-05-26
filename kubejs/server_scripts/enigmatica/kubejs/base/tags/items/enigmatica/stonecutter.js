events.listen('item.tags', (event) => {
    stonecuttables.forEach((stoneType) => {
        var tag = `enigmatica:stonecuttables/${stoneType.name}`;
        event.add('enigmatica:stonecuttables', ['#' + tag]);
        event.add(tag, stoneType.stones);
        event.add(tag, stoneType.onlyAsInput);
    });
});
