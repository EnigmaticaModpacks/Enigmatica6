onEvent('item.tags', (event) => {
    var items = [
        'immersiveengineering:sword_steel',
        'wstweaks:blaze_blade',
        'wstweaks:lava_blade',
        'atum:nepthys_banishing',
        'atum:atems_will',
        'atum:anubis_wrath',
        'atum:iron_khopesh',
        'atum:stoneguard_khopesh',
        'atum:stoneguard_greatsword',
        'atum:iron_greatsword'
    ];
    var exceptions = [
        'betterendforge:aeternium_sword_handle',
        'betterendforge:aeternium_sword_blade',
        'betterendforge:thallasium_sword_handle',
        'betterendforge:thallasium_sword_blade',
        'betterendforge:terminite_sword_handle',
        'betterendforge:terminite_sword_blade'
    ];

    event
        .get('forge:weapons/sword')
        .add(items)
        .add(/_sword/)
        .remove(exceptions);
});
