onEvent('block.tags', (event) => {
    // Documentation: https://github.com/Direwolf20-MC/BuildingGadgets/tree/master/src/main/resources/data/buildinggadgets/tags/blocks/blacklist
    // Generic affects all tools
    const blocks = [
        'bloodmagic:altar',
        'bloodmagic:alchemytable',
        'bloodmagic:demoncrucible',
        'bloodmagic:demoncrystallizer',
        'bloodmagic:alchemytable',
        'bloodmagic:soulforge',
        'bloodmagic:alchemicalreactionchamber',
        'bloodmagic:incensealtar',
        'bloodmagic:accelerationrune',
        'bloodmagic:orbcapacityrune',
        'bloodmagic:bettercapacityrune',
        'bloodmagic:altarcapacityrune',
        'bloodmagic:dislocationrune',
        'bloodmagic:selfsacrificerune',
        'bloodmagic:sacrificerune',
        'bloodmagic:speedrune',
        'bloodmagic:chargingrune',
        'bloodmagic:blankrune',
        'eidolon:soul_enchanter',
        'occultism:sacrificial_bowl',
        'occultism:chalk_glyph_white',
        'occultism:chalk_glyph_purple',
        'occultism:chalk_glyph_red',
        'occultism:chalk_glyph_gold'
    ];
    event.get('buildinggadgets:blacklist/generic').add(blocks);
});
