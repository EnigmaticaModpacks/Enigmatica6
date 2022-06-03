onEvent('item.tags', (event) => {
    const items = ['atum:nebu_hammer'];
    event.get('atum:nebu_hammer').add(items);
});
