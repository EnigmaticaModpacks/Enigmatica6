events.listen('item.tags', (event) => {
    var items = ['immersiveengineering:sword_steel', 'wstweaks:blaze_blade', 'wstweaks:lava_blade'];
    var exceptions = ['betterendforge:aeternium_sword_handle', 'betterendforge:aeternium_sword_blade'];

    event
        .get('forge:weapons/sword')
        .add(items)
        .add(/_sword/)
        .remove(exceptions);
});
