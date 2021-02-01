events.listen('item.registry', function (event) {
    const items = [
        'rare_lootbox',
        'epic_lootbox',
        'legendary_lootbox',
        'miners_delight',
        'sorcerers_delight',
        'farmers_delight',
        'blacksmiths_delight',
        'scavengers_delight',
        'alchemists_delight'
    ];

    items.forEach((item) => {
        event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
    });
});
