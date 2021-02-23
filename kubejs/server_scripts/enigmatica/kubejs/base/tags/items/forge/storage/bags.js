events.listen('item.tags', (event) => {
    var items = ['botania:bauble_box', 'botania:ender_hand'];

    var tags = ['forge:storage', 'forge:storage/bag'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_bag/)
            .add(/backpack/);
    });
});
