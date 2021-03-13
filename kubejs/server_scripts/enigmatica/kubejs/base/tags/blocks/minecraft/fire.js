events.listen('block.tags', (event) => {
    event.add('minecraft:fire', fires);
});
