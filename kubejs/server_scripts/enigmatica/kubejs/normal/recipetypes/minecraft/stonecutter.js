onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    event.stonecutting('atum:crystal_glass', 'minecraft:glass');
});
