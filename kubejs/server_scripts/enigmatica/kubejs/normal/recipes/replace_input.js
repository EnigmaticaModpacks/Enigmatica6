events.listen('recipes', (event) => {
    if (!normalMode) {
        return;
    }

    event.replaceInput(
        { id: 'compactmachines:personal_shrinking_device' },
        'minecraft:book',
        'shrink:shrinking_device'
    );
});
