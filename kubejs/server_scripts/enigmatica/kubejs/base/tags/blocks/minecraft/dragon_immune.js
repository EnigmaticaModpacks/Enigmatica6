onEvent('block.tags', (event) => {
    const blocks = [
        'occultism:chalk_glyph_white',
        'occultism:chalk_glyph_gold',
        'occultism:chalk_glyph_purple',
        'occultism:chalk_glyph_red',
        '#forge:candles',
        'minecraft:skeleton_skull',
        'minecraft:wither_skeleton_skull',
        'occultism:spirit_attuned_crystal',
        'occultism:sacrificial_bowl',
        'occultism:golden_sacrificial_bowl'
    ];
    event.get('minecraft:dragon_immune').add(blocks);
});
