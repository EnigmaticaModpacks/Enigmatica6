onEvent('block.registry', (event) => {
    const blocks = [
        { name: 'firmament', material: 'rock', hardness: 2 },
        { name: 'superheated_steel_block', material: 'iron', hardness: 5 },
        { name: 'hot_compressed_iron_block', material: 'iron', hardness: 5 },
        { name: 'rough_machine_frame_top', material: 'iron', hardness: 5 },
        { name: 'coated_machine_frame_top', material: 'iron', hardness: 5 },
        { name: 'rough_machine_frame', material: 'iron', hardness: 5 }
    ];

    blocks.forEach((block) => {
        event.create(block.name).material(block.material).hardness(block.hardness);
    });
});
