onEvent('item.tags', (event) => {
    event.get('waystones:waystone').add(/waystones:(\w+_)?waystone$/);
});
