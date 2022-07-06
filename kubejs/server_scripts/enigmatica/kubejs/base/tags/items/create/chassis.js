onEvent('item.tags', (event) => {
    event.add('create:chassis', [/create:\w+_chassis/]);
});
