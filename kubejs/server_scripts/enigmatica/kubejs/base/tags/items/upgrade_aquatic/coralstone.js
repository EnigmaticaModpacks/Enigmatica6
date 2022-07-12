onEvent('item.tags', (event) => {
    let items = [/upgrade_aquatic:\w+_coralstone$/, 'upgrade_aquatic:coralstone'];
    event.get('upgrade_aquatic:coralstone').add(items);

    items = [/upgrade_aquatic:\w+_coralstone$/];
    let exceptions = [
        'upgrade_aquatic:dead_coralstone',
        'upgrade_aquatic:chiseled_coralstone',
        'upgrade_aquatic:chiseled_dead_coralstone'
    ];
    event.get('upgrade_aquatic:coralstone/infused').add(items).remove(exceptions);
});
