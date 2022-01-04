onEvent('block.registry', (event) => {
    const blocks = [
        { name: 'firmament', material: 'rock', hardness: 2 },
        { name: 'superheated_steel_block', material: 'iron', hardness: 5 },
        { name: 'hot_compressed_iron_block', material: 'iron', hardness: 5 },
        { name: 'partial_alloybrick', material: 'rock', hardness: 2 },
        { name: 'partial_blastbrick', material: 'rock', hardness: 2 },
        { name: 'partial_cokebrick', material: 'rock', hardness: 2 }
    ];

    blocks.forEach((block) => {
        event.create(block.name).material(block.material).hardness(block.hardness);
    });
});
