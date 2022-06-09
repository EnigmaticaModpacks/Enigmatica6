onEvent('block.tags', (event) => {
    // Documentation: https://github.com/Direwolf20-MC/BuildingGadgets/tree/master/src/main/resources/data/buildinggadgets/tags/blocks/blacklist

    const blocks = [
        'bloodmagic:altar',
        'bloodmagic:alchemytable',
        'bloodmagic:demoncrucible',
        'bloodmagic:demoncrystallizer',
        'bloodmagic:alchemytable',
        'bloodmagic:soulforge',
        'bloodmagic:alchemicalreactionchamber',
        'bloodmagic:incensealtar',
        'eidolon:soul_enchanter',
        'occultism:sacrificial_bowl',
        'occultism:chalk_glyph_white',
        'occultism:chalk_glyph_purple',
        'occultism:chalk_glyph_red',
        'occultism:chalk_glyph_gold'
    ];
    event.get('buildinggadgets:blacklist/building').add(blocks);
    event.get('buildinggadgets:blacklist/copy_paste').add(blocks);
    event.get('buildinggadgets:blacklist/exchanging').add(blocks);
});
