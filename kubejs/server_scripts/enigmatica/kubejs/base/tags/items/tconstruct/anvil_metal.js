onEvent('item.tags', (event) => {
    let anvil_blocks = [
        '#forge:storage_blocks/refined_obsidian',
        '#forge:storage_blocks/refined_glowstone',
        '#forge:storage_blocks/alfsteel',
        '#forge:storage_blocks/energized_steel',
        '#forge:storage_blocks/enderium',
        '#forge:storage_blocks/lumium',
        '#forge:storage_blocks/signalum',
        '#forge:storage_blocks/arcane_gold',
        '#forge:storage_blocks/terminite',
        '#forge:storage_blocks/aeternium',
        '#forge:storage_blocks/terrasteel'
    ];
    event.add('tconstruct:anvil_metal', anvil_blocks);
});
