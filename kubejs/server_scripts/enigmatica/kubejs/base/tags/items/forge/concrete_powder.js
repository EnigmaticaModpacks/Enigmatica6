onEvent('item.tags', (event) => {
    for (var i = 0; i < colors.length; i++) {
        event.get('forge:concrete_powder').add('minecraft:' + colors[i] + '_concrete_powder');
    }
});
