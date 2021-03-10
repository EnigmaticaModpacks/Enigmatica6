events.listen('item.tags', (event) => {
    event.add('forge:raw_bacon', [
    	'simplefarming:raw_bacon'
	]);
    event.add('forge:raw_pork', ['#forge:raw_bacon'])
});