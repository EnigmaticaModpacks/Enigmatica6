events.listen('block.tags', function (event) {
    event.get('minecraft:water').remove(['create:honey', 'create:chocolate']);
});
