onEvent('item.tags', (event) => {
    event.add('forge:cobblestone', ['quark:cobbled_deepslate']);
    event.remove('forge:cobblestone', ['undergarden:shiverstone', 'undergarden:depthrock', 'undergarden:tremblecrust']);
});
