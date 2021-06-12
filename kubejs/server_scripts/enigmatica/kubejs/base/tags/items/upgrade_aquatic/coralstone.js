onEvent('item.tags', (event) => {
    event
        .get('upgrade_aquatic:coralstone')
        .add('upgrade_aquatic:coralstone')
        .add(/upgrade_aquatic:\w+_coralstone$/);
    event.get('upgrade_aquatic:coralstone/infused').add(/upgrade_aquatic:\w+_coralstone$/);
});
