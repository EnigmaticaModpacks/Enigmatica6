onEvent('item.tags', (event) => {
    let items = ['atum:quail_egg'];
    event.get('forge:eggs').add(items);
});
