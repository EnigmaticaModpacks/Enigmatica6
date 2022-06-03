onEvent('block.tags', (event) => {
    event.get('forge:honey').remove('create:honey');
});
