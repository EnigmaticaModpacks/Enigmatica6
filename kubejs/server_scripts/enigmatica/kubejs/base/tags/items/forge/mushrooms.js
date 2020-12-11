events.listen('item.tags', function (event) {
    var items = [
        'byg:death_cap',
        'byg:shulkren_fungus',
        'byg:soul_shroom_spore_end',
        'byg:soul_shroom',
        'byg:purple_glowshroom',
        'byg:blue_glowshroom'
    ];
	event.get('forge:mushrooms').add(items);
});
