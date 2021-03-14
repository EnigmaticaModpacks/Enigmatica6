events.listen('block.tags', (event) => {
    event.add('minecraft:campfires', campfires);
});
