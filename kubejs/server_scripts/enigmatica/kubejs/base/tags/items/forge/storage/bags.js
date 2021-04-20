events.listen('item.tags', (event) => {
    var items = [
        'botania:bauble_box',
        'botania:ender_hand',
        'botania:flower_bag',
        'sophisticatedbackpacks:backpack',
        'industrialforegoing:infinity_backpack'
    ];

    var tags = ['forge:storage', 'forge:storage/bag'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/bit_bag/)
            .add(/sophisticatedbackpacks:\w+backpack/);
    });
});
