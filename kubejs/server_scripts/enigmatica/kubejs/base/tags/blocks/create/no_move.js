events.listen('block.tags', (event) => {
    event.add('create:no_move', [/refinedstorage:/, /prettypipes:/]);
});
