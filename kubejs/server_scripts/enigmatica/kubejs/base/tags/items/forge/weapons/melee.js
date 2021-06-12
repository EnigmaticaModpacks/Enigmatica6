onEvent('item.tags', (event) => {
    var items = [
        'botania:ender_dagger',
        'byg:pendorite_battleaxe',
        'immersiveengineering:sword_steel',
        'industrialforegoing:infinity_hammer',
        'meetyourfight:cocktail_cutlass',
        'mekanism:atomic_disassembler',
        'mekanism:meka_tool',
        'wstweaks:blaze_blade',
        'wstweaks:lava_blade',
        'undergarden:cloggrum_battleaxe',
        'bloodmagic:soulsword',
        'bloodmagic:soulscythe',
        'meetyourfight:depth_star',
        'eidolon:reaper_scythe',
        'atum:shus_exile',
        'atum:seths_sting',
        'atum:nuits_quarter',
        'atum:nuits_ire',
        'atum:nepthys_banishing',
        'atum:montus_strike',
        'atum:gebs_might',
        'atum:atems_will',
        'atum:anubis_wrath',
        'atum:anputs_hunger',
        'atum:stoneguard_khopesh',
        'atum:stoneguard_club',
        'atum:stoneguard_greatsword',
        'atum:iron_khopesh',
        'atum:iron_club',
        'atum:iron_greatsword',
        'atum:iron_scimitar',
        'atum:dagger_poison',
        'atum:iron_dagger'
    ];
    var exceptions = [
        'betterendforge:aeternium_hammer_head',
        'betterendforge:aeternium_sword_handle',
        'betterendforge:aeternium_sword_blade',
        'betterendforge:thallasium_sword_handle',
        'betterendforge:thallasium_sword_blade',
        'betterendforge:terminite_sword_handle',
        'betterendforge:terminite_sword_blade'
    ];

    var tags = ['forge:weapons', 'forge:weapons/melee'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_sword/)
            .add(/_paxel/)
            .add(/_aiot/)
            .add(/betterendforge:\w+_hammer/)
            .remove(exceptions);
    });
});
