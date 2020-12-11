events.listen('item.tags', (event) => {
    event.get('forge:cooked_eggs').add('simplefarming:cooked_egg');
});
