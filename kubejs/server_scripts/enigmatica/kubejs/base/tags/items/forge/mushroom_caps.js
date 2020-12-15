events.listen('item.tags', function (event) {
    var items = [
        'byg:shulkren_wart_block',
        'byg:death_cap_mushroom_block',
        'byg:soul_shroom_block',
        'byg:weeping_milkcap_mushroom_block',
        'byg:wood_blewit_mushroom_block',
        'byg:black_puff_mushroom_block',
        'biomesoplenty:toadstool_block',
        'biomesoplenty:glowshroom_block',
        'byg:green_mushroom_block',
        'byg:sythian_wart_block',
        'quark:glowshroom_block',
        'byg:purple_shroomlight',
        'undergarden:blood_mushroom_cap',
        'undergarden:ink_mushroom_cap',
        'undergarden:veil_mushroom_cap',
        'undergarden:indigo_mushroom_cap'
    ];
	event.get('forge:mushroom_caps').add(items);
});