events.listen('item.tags', (event) => {
    event.get('forge:string').remove('undergarden:twistytwig');
});
