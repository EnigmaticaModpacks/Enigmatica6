onEvent('item.tags', (event) => {
    for (var i = 0; i < colors.length; i++) {
        event.get('forge:terracotta').add('minecraft:' + colors[i] + '_terracotta');
    }
    event.get('forge:terracotta').add('minecraft:terracotta');
});
