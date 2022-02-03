onEvent('item.tags', (event) => {
    event
        .get('mininggadgets:mininggadgets')
        .add(['mininggadgets:mininggadget', 'mininggadgets:mininggadget_simple', 'mininggadgets:mininggadget_fancy']);
});
