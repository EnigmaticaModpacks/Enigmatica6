onEvent('block.tags', (event) => {
    event.get('enigmatica:cobbleworks/stone').add(generatableStone);
    event.get('enigmatica:cobbleworks/cobblestone').add(generatableCobblestone);
    event.get('enigmatica:cobbleworks/basalt').add(generatableBasalt);
});
