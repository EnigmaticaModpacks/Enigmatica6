events.listen('recipes', (event) => {
    if (!expertMode) {
        return;
    }

    const idRemovals = [
        'pneumaticcraft:explosion_crafting/compressed_iron_ingot',
        'pneumaticcraft:explosion_crafting/compressed_iron_block'
    ];

    const outputRemovals = ['create:andesite_alloy'];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
