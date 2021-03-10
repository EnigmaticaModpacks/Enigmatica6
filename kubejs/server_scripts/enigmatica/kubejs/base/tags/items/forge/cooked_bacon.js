events.listen('item.tags', (event) => {
    event.add('forge:cooked_bacon', [
    	'simplefarming:cooked_bacon'
	]);
    event.add('forge:cooked_pork', ['#forge:cooked_bacon'])
});