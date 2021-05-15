events.listen('item.registry', (event) => {
    const generalItems = [
        'rare_lootbox',
        'epic_lootbox',
        'legendary_lootbox',
        'miners_delight',
        'sorcerers_delight',
        'farmers_delight',
        'blacksmiths_delight',
        'scavengers_delight',
        'alchemists_delight',
        'quintuple_alfsteel_ingot',
        'altered_recipe_indicator'
    ];
    
    const chunkItems = [
        'iesnium_chunk',
        'thallasium_chunk',
        'starmetal_chunk',
        'froststeel_chunk',
        'cloggrum_chunk',
        'utherium_chunk',
        'regalium_chunk',
        'elementium_chunk'
    ];

    generalItems.forEach((item) => {
        event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
    });
    
    chunkItems.forEach((item) => {
        event.create(item).group('KubeJS').texture(`kubejs:item/chunks/${item}`);
    });
});
