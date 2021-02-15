events.listen('item.tags', (event) => {
    var items = ['immersiveengineering:axe_steel', 'bloodmagic:soulaxe'];
    var exceptions = ['betterendforge:aeternium_axe_head'];

    var tags = ['forge:tools', 'forge:tools/axe'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_axe/)
            .add(/_paxel/)
            .add(/_aiot/)
            .remove(exceptions);
    });
});
