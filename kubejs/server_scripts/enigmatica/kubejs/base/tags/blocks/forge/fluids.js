events.listen('block.tags', function (event) {
    event.get('forge:honey').remove('create:honey');
});
