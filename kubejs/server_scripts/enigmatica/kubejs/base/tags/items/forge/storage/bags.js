events.listen('item.tags', (event) => {
    var items = [
        'botania:bauble_box',
        'botania:ender_hand',
        'botania:flower_bag',
        'chiselsandbits:bit_bag',
        'quark:backpack',
        'sophisticatedbackpacks:diamond_backpack',
        'sophisticatedbackpacks:gold_backpack',
        'sophisticatedbackpacks:iron_backpack',
        'sophisticatedbackpacks:backpack',
        'industrialforegoing:infinity_backpack'
    ];

    event.get('forge:storage').add(items);
    event.get('forge:storage/bag').add(items);
});
