events.listen('item.tags', (event) => {
    event.get('forge:plates/lapis').add('create:lapis_sheet');
});
