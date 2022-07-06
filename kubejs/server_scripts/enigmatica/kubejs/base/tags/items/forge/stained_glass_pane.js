onEvent('item.tags', (event) => {
    for (var i = 0; i < colors.length; i++) {
        event.get('forge:stained_glass_pane').add('minecraft:' + colors[i] + '_stained_glass_pane');
    }
});
