events.listen('item.tags', (event) => {
    event.get('forge:slag').add('thermal:slag');
});
