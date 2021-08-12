onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const newRecipes = [
        {
            output: 'bloodmagic:altar',
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: 'eidolon:gold_inlay',
                B: 'eidolon:crucible',
                C: 'occultism:otherstone',
                D: 'minecraft:heart_of_the_sea',
                E: '#forge:ingots/arcane_gold'
            },
            id: 'bloodmagic:blood_altar'
        },
        {
            output: 'bloodmagic:alchemytable',
            pattern: ['ABC', 'DDD', 'EEE'],
            key: {
                A: 'minecraft:brewing_stand',
                B: 'bloodmagic:blankslate',
                C: 'supplementaries:jar_tinted',
                D: 'eidolon:wicked_weave',
                E: 'eidolon:stone_altar'
            },
            id: 'bloodmagic:alchemy_table'
        },
        {
            output: 'bloodmagic:lavacrystal',
            pattern: ['BDB', 'CAC', 'BCB'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 2 },
                B: '#forge:dusts/obsidian',
                C: 'bloodmagic:reagentlava',
                D: 'minecraft:conduit'
            },
            id: 'bloodmagic:lava_crystal'
        },
        {
            output: 'bloodmagic:daggerofsacrifice',
            pattern: ['  A', 'BA ', 'CB '],
            key: {
                A: '#forge:ingots/gold_bronze',
                B: 'eidolon:pewter_inlay',
                C: '#forge:rods/wooden'
            },
            id: 'bloodmagic:altar/daggerofsacrifice'
        },
        {
            output: 'bloodmagic:incensealtar',
            pattern: ['CBC', 'CDC', 'EAE'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 1 },
                B: Item.of('botania:incense_stick', { brewKey: 'botania:soul_cross' }),
                C: 'eidolon:polished_planks',
                D: 'eidolon:crucible',
                E: 'eidolon:polished_wood_pillar'
            },
            id: 'bloodmagic:incense_altar'
        },
        {
            output: 'bloodmagic:blankrune',
            pattern: ['CBC', 'CAC', 'CBC'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 1 },
                B: 'bloodmagic:blankslate',
                C: 'occultism:otherstone'
            },
            id: 'bloodmagic:blood_rune_blank'
        },
        {
            output: 'bloodmagic:speedrune',
            pattern: ['CBC', 'DAD', 'CBC'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 1 },
                B: 'bloodmagic:blankslate',
                C: 'occultism:otherstone',
                D: 'ars_nouveau:glyph_accelerate'
            },
            id: 'bloodmagic:blood_rune_speed'
        },
        {
            output: 'bloodmagic:sacrificerune',
            pattern: ['CBC', 'EDF', 'CAC'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 1 },
                B: 'bloodmagic:reinforcedslate',
                C: 'occultism:otherstone',
                D: 'bloodmagic:blankrune',
                E: 'ars_nouveau:glyph_touch',
                F: 'ars_nouveau:glyph_harm'
            },
            id: 'bloodmagic:blood_rune_sacrifice'
        },
        {
            output: 'bloodmagic:selfsacrificerune',
            pattern: ['CBC', 'EDF', 'CAC'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 1 },
                B: 'bloodmagic:reinforcedslate',
                C: 'occultism:otherstone',
                D: 'bloodmagic:blankrune',
                E: 'ars_nouveau:glyph_self',
                F: 'ars_nouveau:glyph_harm'
            },
            id: 'bloodmagic:blood_rune_self_sacrifice'
        },
        {
            output: 'bloodmagic:dislocationrune',
            pattern: ['CBC', 'EDF', 'CAC'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 1 },
                B: 'bloodmagic:infusedslate',
                C: 'occultism:otherstone',
                D: 'bloodmagic:blankrune',
                E: 'ars_nouveau:glyph_extract',
                F: 'ars_nouveau:glyph_accelerate'
            },
            id: 'bloodmagic:blood_rune_displacement'
        },
        {
            output: 'bloodmagic:altarcapacityrune',
            pattern: ['CBC', 'EDE', 'CAC'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 1 },
                B: 'bloodmagic:infusedslate',
                C: 'occultism:otherstone',
                D: 'bloodmagic:blankrune',
                E: 'bloodmagic:reagentholding'
            },
            id: 'bloodmagic:blood_rune_capacity'
        },
        {
            output: 'bloodmagic:bettercapacityrune',
            pattern: ['CBC', 'EDE', 'CAC'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 4 },
                B: 'bloodmagic:demonslate',
                C: 'minecraft:dark_prismarine',
                D: 'bloodmagic:altarcapacityrune',
                E: 'ars_nouveau:glyph_amplify'
            },
            id: 'bloodmagic:blood_rune_aug_capacity'
        },
        {
            output: 'bloodmagic:orbcapacityrune',
            pattern: ['CAC', 'DBD', 'CAC'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 4 },
                B: 'bloodmagic:blankrune',
                C: 'minecraft:dark_prismarine',
                D: 'ars_nouveau:glyph_amplify'
            },
            id: 'bloodmagic:blood_rune_orb'
        },
        {
            output: 'bloodmagic:accelerationrune',
            pattern: ['CBC', 'EDE', 'CAC'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 4 },
                B: 'bloodmagic:demonslate',
                C: 'minecraft:dark_prismarine',
                D: 'bloodmagic:speedrune',
                E: 'ars_nouveau:glyph_amplify'
            },
            id: 'bloodmagic:blood_rune_acceleration'
        },
        {
            output: 'bloodmagic:chargingrune',
            pattern: ['CBC', 'EDE', 'CAC'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 4 },
                B: 'bloodmagic:demonslate',
                C: 'minecraft:dark_prismarine',
                D: 'bloodmagic:blankrune',
                E: 'ars_nouveau:glyph_delay'
            },
            id: 'bloodmagic:blood_rune_charging'
        },
        {
            output: 'bloodmagic:ritualstone',
            pattern: ['CBC', 'BAB', 'CBC'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 2 },
                B: 'bloodmagic:reinforcedslate',
                C: 'architects_palette:abyssaline'
            },
            id: 'bloodmagic:ritual_stone_blank'
        },
        {
            output: 'bloodmagic:masterritualstone',
            pattern: ['CBC', 'BAB', 'CBC'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 3 },
                B: 'bloodmagic:ritualstone',
                C: 'architects_palette:abyssaline'
            },
            id: 'bloodmagic:ritual_stone_master'
        }
    ];

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
