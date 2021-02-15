events.listen('block.tags', (event) => {
    event.add('forge:storage_blocks', ['minecraft:glowstone', 'betterendforge:aurora_crystal']);

    event.add('forge:storage_blocks/glowstone', ['minecraft:glowstone']);
    event.add('forge:storage_blocks/aurora', ['betterendforge:aurora_crystal']);
});
