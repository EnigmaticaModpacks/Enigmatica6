events.listen('item.tags', (event) => {
	event.add('forge:raw_chicken', [
		'simplefarming:raw_chicken_wings',
		'autumnity:turkey_piece'
	]);
});