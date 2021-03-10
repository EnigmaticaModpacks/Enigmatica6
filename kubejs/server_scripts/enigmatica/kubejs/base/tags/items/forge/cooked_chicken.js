events.listen('item.tags', (event) => {
	event.add('forge:cooked_chicken', [
		'simplefarming:cooked_chicken_wings',
		'autumnity:cooked_turkey_piece'
	]);
});