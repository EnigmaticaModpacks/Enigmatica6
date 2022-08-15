onEvent('item.tags', (event) => {
    event.add('ftbultimine:excluded_tools/strict', [
        'mininggadgets:mininggadget',
        'mininggadgets:mininggadget_simple',
        'mininggadgets:mininggadget_fancy',
        'mekanism:cardboard_box'
    ]);
});
