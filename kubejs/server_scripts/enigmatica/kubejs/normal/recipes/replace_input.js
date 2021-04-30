events.listen('recipes', (event) => {
    event.replaceInput(
        { id: 'compactmachines:personal_shrinking_device' },
        'minecraft:book',
        'shrink:shrinking_device'
    );
});
