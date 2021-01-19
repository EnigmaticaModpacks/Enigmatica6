events.listen('item.tags', function (event) {
    var items = [
        'botania:bauble_box',
        'botania:ender_hand',
        'botania:flower_bag',
        'chiselsandbits:bit_bag',
        'quantumstorage:quantum_bag_black',
        'quantumstorage:quantum_bag_blue',
        'quantumstorage:quantum_bag_brown',
        'quantumstorage:quantum_bag_cyan',
        'quantumstorage:quantum_bag_gray',
        'quantumstorage:quantum_bag_green',
        'quantumstorage:quantum_bag_light_blue',
        'quantumstorage:quantum_bag_light_gray',
        'quantumstorage:quantum_bag_lime',
        'quantumstorage:quantum_bag_magenta',
        'quantumstorage:quantum_bag_orange',
        'quantumstorage:quantum_bag_pink',
        'quantumstorage:quantum_bag_purple',
        'quantumstorage:quantum_bag_red',
        'quantumstorage:quantum_bag_white',
        'quantumstorage:quantum_bag_yellow',
        'quark:backpack',
        'usefulbackpacks:backpack_enderchest',
        'usefulbackpacks:backpack_large',
        'usefulbackpacks:backpack_medium',
        'usefulbackpacks:backpack_small',
        'sophisticatedbackpacks:diamond_backpack',
        'sophisticatedbackpacks:gold_backpack',
        'sophisticatedbackpacks:iron_backpack',
        'sophisticatedbackpacks:backpack',
        'industrialforegoing:infinity_backpack'
    ];

    event.get('forge:storage').add(items);
    event.get('forge:storage/bag').add(items);
});
