events.listen('item.tags', (event) => {
	event.add('forge:jams', [
		'#forge:jams/mulberry',
		'simplefarming:jam'
	]);
});
events.listen('item.tags', (event) => {
	event.add('forge:jams/mulberry', [
		'upgrade_aquatic:mulberry_jam_bottle'
	]);
});