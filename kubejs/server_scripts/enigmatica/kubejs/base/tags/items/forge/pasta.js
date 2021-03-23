events.listen('item.tags', (event) => {
	event.add('forge:pasta/raw_pasta', [
		'simplefarming:noodles'
	]);
});