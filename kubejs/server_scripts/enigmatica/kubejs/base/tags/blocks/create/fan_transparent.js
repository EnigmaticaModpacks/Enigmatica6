events.listen('block.tags', (event) => {
    event
        .get('create:fan_transparent')
        .add(/bars/)
        .add(/chain_link/)
        .add(/leaves/)
        .add('darkutils:item_grate')
        .add('engineersdecor:steel_floor_grating')
        .add('quark:grate')
        .add('minecraft:chain')
        .add('decorative_blocks:chain');
});
