onEvent('block.tags', (event) => {
    event.get('minecraft:water').remove(['create:honey', 'create:chocolate']);
});
