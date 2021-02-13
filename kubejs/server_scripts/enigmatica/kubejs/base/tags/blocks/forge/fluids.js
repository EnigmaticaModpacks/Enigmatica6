events.listen('block.tags', (event) => {
    event.get('forge:honey').remove('create:honey');
});
