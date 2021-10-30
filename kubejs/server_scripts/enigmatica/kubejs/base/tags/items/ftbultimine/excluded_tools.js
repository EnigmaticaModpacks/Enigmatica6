onEvent('item.tags', (event) => {
    event.add('ftbultimine:excluded_tools', [
        'mininggadgets:mininggadget',
        'mininggadgets:mininggadget_simple',
        'mininggadgets:mininggadget_fancy'
    ]);
});
