events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const idRemovals = [
        'pneumaticcraft:explosion_crafting/compressed_iron_ingot',
        'pneumaticcraft:explosion_crafting/compressed_iron_block'
    ];

    const outputRemovals = ['create:andesite_alloy', 'tiab:timeinabottle'];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
