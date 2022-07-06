onEvent('item.tags', (event) => {
    stonecuttables.forEach((stoneType) => {
        let tag = `enigmatica:stonecuttables/${stoneType.name}`;
        event.add('enigmatica:stonecuttables', ['#' + tag]);
        event.add(tag, stoneType.stones);
        event.add(tag, stoneType.onlyAsInput);
    });
});
