onEvent('block.registry', (event) => {
    const blocks = [{ name: 'firmament', material: 'rock', hardness: 2 }];

    blocks.forEach((block) => {
        event.create(block.name).material(block.material).hardness(block.hardness);
    });
});
