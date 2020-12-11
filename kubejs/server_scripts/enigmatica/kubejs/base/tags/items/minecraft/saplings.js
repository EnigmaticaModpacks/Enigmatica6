events.listen('item.tags', function (event) {
    var items = [
        'byg:yellow_spruce_sapling',
        'byg:joshua_sapling'        
    ];
	event.get('minecraft:saplings').add(items);
});
