onEvent('item.tags', (event) => {
    colors.forEach((color) => {
        event.get('forge:carpet').add('minecraft:' + color + '_carpet');
    });
});
