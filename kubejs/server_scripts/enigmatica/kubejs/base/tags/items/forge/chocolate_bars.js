events.listen('item.tags', (event) => {
	event.add('forge:chocolate_bars', [
		'create:bar_of_chocolate',
		'simplefarming:chocolate'
	]);
});