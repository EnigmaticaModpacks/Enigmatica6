//priority: 1000

// used to generate stonecutting recipes
const stonecuttables = [
    {
        // stone type name (used for tag generation)
        name: 'stone',
        // items added here can be cut from other blocks of this stone type
        // and can also be cut into other blocks of this type
        stones: [
            'minecraft:stone_bricks',
            'minecraft:chiseled_stone_bricks',
            'masonry:stonecarvedcreeper',
            'masonry:stonecarvedderp',
            'masonry:stonecarvedvillager',
            'masonry:stonecarvedwither',
            'masonry:stonecarvedwriting',
            'masonry:stonecolumn',
            'masonry:stonecut',
            'masonry:stoneengraved',
            'masonry:stonepanels',
            'masonry:stonepavers',
            'masonry:stonepillar',
            'masonry:stonepolished',
            'masonry:stoneroughcut',
            'masonry:stonetiled',
            'masonry:stonediamondpavers'
        ],
        // items added here can be cut from other blocks of this stone type,
        // but cannot be cut into other blocks from this type
        onlyAsOutput: ['minecraft:cobblestone'],
        // items added here can be cut into other blocks of this stone type,
        // but cannot be cut from blocks other blocks of this type
        onlyAsInput: ['minecraft:stone']
    },
    {
        name: 'andesite',
        stones: [
            'minecraft:polished_andesite',
            'create:andesite_bricks',
            'create:andesite_pillar',
            'create:fancy_andesite_bricks',
            'create:paved_andesite',
            'create:layered_andesite',
            'create:mossy_andesite',
            'create:overgrown_andesite',
            'masonry:andesitetiled',
            'masonry:andesitecarvedcreeper',
            'masonry:andesitecarvedderp',
            'masonry:andesitecarvedvillager',
            'masonry:andesitecarvedwither',
            'masonry:andesitecarvedwriting',
            'masonry:andesitecolumn',
            'masonry:andesitecut',
            'masonry:andesiteengraved',
            'masonry:andesitepanels',
            'masonry:andesitepavers',
            'masonry:andesitepillar',
            'masonry:andesiteroughcut',
            'masonry:andesitechiseled',
            'masonry:andesitecobbled',
            'masonry:andesitecobbledmossy',
            'masonry:andesitediamondpavers',
            'masonry:andesitelargebricks',
            'masonry:andesitelargebrickscracked',
            'masonry:andesitelargebricksmossy',
            'masonry:andesitesmallbrick',
            'quark:andesite_bricks',
            'quark:chiseled_andesite_bricks',
            'quark:andesite_pavement',
            'quark:andesite_pillar'
        ],
        onlyAsOutput: ['create:andesite_cobblestone'],
        onlyAsInput: ['minecraft:andesite']
    },
    {
        name: 'arcane_stone',
        stones: [
            'ars_nouveau:arcane_stone',
            'ars_nouveau:arcane_bricks',
            'ars_nouveau:ab_smooth',
            'ars_nouveau:ab_smooth_slab',
            'ars_nouveau:ab_clover',
            'ars_nouveau:ab_mosaic',
            'ars_nouveau:ab_herring',
            'ars_nouveau:ab_basket',
            'ars_nouveau:ab_alternating'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'basalt',
        stones: [
            'minecraft:polished_basalt',
            'chisel:basalt/raw',
            'chisel:basalt/cracked',
            'chisel:basalt/solid_bricks',
            'chisel:basalt/small_bricks',
            'chisel:basalt/soft_bricks',
            'chisel:basalt/cracked_bricks',
            'chisel:basalt/triple_bricks',
            'chisel:basalt/encased_bricks',
            'chisel:basalt/chaotic_bricks',
            'chisel:basalt/array',
            'chisel:basalt/tiles_medium',
            'chisel:basalt/tiles_large',
            'chisel:basalt/tiles_small',
            'chisel:basalt/chaotic_medium',
            'chisel:basalt/chaotic_small',
            'chisel:basalt/braid',
            'chisel:basalt/dent',
            'chisel:basalt/french_1',
            'chisel:basalt/french_2',
            'chisel:basalt/jellybean',
            'chisel:basalt/layers',
            'chisel:basalt/mosaic',
            'chisel:basalt/ornate',
            'chisel:basalt/panel',
            'chisel:basalt/road',
            'chisel:basalt/slanted',
            'chisel:basalt/zag',
            'chisel:basalt/circular',
            'chisel:basalt/circularct',
            'chisel:basalt/weaver',
            'chisel:basalt/pillar',
            'chisel:basalt/twisted',
            'chisel:basalt/prism',
            'chisel:basalt/cuts'
        ],
        onlyAsOutput: [],
        onlyAsInput: ['minecraft:basalt']
    },
    {
        name: 'blackstone',
        stones: [
            'minecraft:polished_blackstone',
            'minecraft:chiseled_polished_blackstone',
            'minecraft:polished_blackstone_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: ['minecraft:blackstone']
    },
    {
        name: 'blaze_quartz',
        stones: ['botania:blaze_quartz', 'botania:blaze_quartz_pillar', 'botania:chiseled_blaze_quartz'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'bloodstone',
        stones: ['bloodmagic:largebloodstonebrick', 'bloodmagic:bloodstonebrick'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'cobblestone',
        stones: ['minecraft:cobblestone', 'byg:rocky_stone', 'quark:cobblestone_bricks'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'dacite',
        stones: ['byg:dacite', 'byg:dacite_bricks', 'byg:dacite_pillar', 'byg:dacite_tile'],
        onlyAsOutput: ['byg:dacite_cobblestone'],
        onlyAsInput: []
    },
    {
        name: 'dark_prismarine',
        stones: [
            'minecraft:dark_prismarine',
            'masonry:darkprismarinetiled',
            'masonry:darkprismarinecarvedcreeper',
            'masonry:darkprismarinecarvedderp',
            'masonry:darkprismarinecarvedvillager',
            'masonry:darkprismarinecarvedwither',
            'masonry:darkprismarinecarvedwriting',
            'masonry:darkprismarinecolumn',
            'masonry:darkprismarinecut',
            'masonry:darkprismarineengraved',
            'masonry:darkprismarinepavers',
            'masonry:darkprismarinepillar',
            'masonry:darkprismarinepolished',
            'masonry:darkprismarineroughcut',
            'masonry:darkprismarinechiseled',
            'masonry:darkprismarinecobbled',
            'masonry:darkprismarinecobbledmossy',
            'masonry:darkprismarinediamondpavers',
            'masonry:darkprismarinelargebricks',
            'masonry:darkprismarinelargebrickscracked',
            'masonry:darkprismarinelargebricksmossy',
            'masonry:darkprismarinesmallbrick'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'dark_scoria',
        stones: [
            'create:dark_scoria',
            'create:dark_scoria_bricks',
            'create:dark_scoria_pillar',
            'create:fancy_dark_scoria_bricks',
            'create:paved_dark_scoria',
            'create:chiseled_dark_scoria',
            'create:layered_dark_scoria',
            'create:polished_dark_scoria',
            'create:mossy_dark_scoria',
            'create:overgrown_dark_scoria'
        ],
        onlyAsOutput: ['create:dark_scoria_cobblestone'],
        onlyAsInput: []
    },
    {
        name: 'diorite',
        stones: [
            'minecraft:polished_diorite',
            'create:diorite_bricks',
            'create:diorite_pillar',
            'create:fancy_diorite_bricks',
            'create:paved_diorite',
            'create:layered_diorite',
            'create:mossy_diorite',
            'create:overgrown_diorite',
            'masonry:dioritetiled',
            'masonry:dioritecarvedcreeper',
            'masonry:dioritecarvedderp',
            'masonry:dioritecarvedvillager',
            'masonry:dioritecarvedwither',
            'masonry:dioritecarvedwriting',
            'masonry:dioritecolumn',
            'masonry:dioritecut',
            'masonry:dioriteengraved',
            'masonry:dioritepanels',
            'masonry:dioritepavers',
            'masonry:dioritepillar',
            'masonry:dioriteroughcut',
            'masonry:dioritechiseled',
            'masonry:dioritecobbled',
            'masonry:dioritecobbledmossy',
            'masonry:dioritediamondpavers',
            'masonry:dioritelargebricks',
            'masonry:dioritelargebrickscracked',
            'masonry:dioritelargebricksmossy',
            'masonry:dioritesmallbrick',
            'quark:diorite_bricks',
            'quark:chiseled_diorite_bricks',
            'quark:diorite_pavement',
            'quark:diorite_pillar'
        ],
        onlyAsOutput: ['create:diorite_cobblestone'],
        onlyAsInput: ['minecraft:diorite']
    },
    {
        name: 'dolomite',
        stones: [
            'create:dolomite',
            'create:dolomite_bricks',
            'create:dolomite_pillar',
            'create:fancy_dolomite_bricks',
            'create:paved_dolomite',
            'create:chiseled_dolomite',
            'create:layered_dolomite',
            'create:polished_dolomite',
            'create:mossy_dolomite',
            'create:overgrown_dolomite'
        ],
        onlyAsOutput: ['create:dolomite_cobblestone'],
        onlyAsInput: []
    },
    {
        name: 'elder_prismarine',
        stones: ['quark:elder_prismarine', 'quark:elder_prismarine_bricks'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'elf_quartz',
        stones: ['botania:elf_quartz', 'botania:elf_quartz_pillar', 'botania:chiseled_elf_quartz'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'gabbro',
        stones: [
            'create:gabbro',
            'create:gabbro_bricks',
            'create:gabbro_pillar',
            'create:fancy_gabbro_bricks',
            'create:paved_gabbro',
            'create:chiseled_gabbro',
            'create:layered_gabbro',
            'create:polished_gabbro',
            'create:mossy_gabbro',
            'create:overgrown_gabbro'
        ],
        onlyAsOutput: ['create:gabbro_cobblestone'],
        onlyAsInput: []
    },
    {
        name: 'granite',
        stones: [
            'minecraft:polished_granite',
            'create:granite_bricks',
            'create:granite_pillar',
            'create:fancy_granite_bricks',
            'create:paved_granite',
            'create:layered_granite',
            'create:mossy_granite',
            'create:overgrown_granite',
            'masonry:granitetiled',
            'masonry:granitecarvedcreeper',
            'masonry:granitecarvedderp',
            'masonry:granitecarvedvillager',
            'masonry:granitecarvedwither',
            'masonry:granitecarvedwriting',
            'masonry:granitecolumn',
            'masonry:granitecut',
            'masonry:graniteengraved',
            'masonry:granitepanels',
            'masonry:granitepavers',
            'masonry:granitepillar',
            'masonry:graniteroughcut',
            'masonry:granitechiseled',
            'masonry:granitecobbled',
            'masonry:granitecobbledmossy',
            'masonry:granitediamondpavers',
            'masonry:granitelargebricks',
            'masonry:granitelargebrickscracked',
            'masonry:granitelargebricksmossy',
            'masonry:granitesmallbrick',
            'quark:granite_bricks',
            'quark:chiseled_granite_bricks',
            'quark:granite_pavement',
            'quark:granite_pillar'
        ],
        onlyAsOutput: ['create:granite_cobblestone'],
        onlyAsInput: ['minecraft:granite']
    },
    {
        name: 'jasper',
        stones: [
            'quark:jasper',
            'quark:jasper_bricks',
            'quark:chiseled_jasper_bricks',
            'quark:jasper_pavement',
            'quark:jasper_pillar',
            'quark:polished_jasper'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'lavender_quartz',
        stones: ['botania:lavender_quartz', 'botania:lavender_quartz_pillar', 'botania:chiseled_lavender_quartz'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'limestone',
        stones: [
            'create:limestone',
            'create:limestone_bricks',
            'create:limestone_pillar',
            'create:fancy_limestone_bricks',
            'create:paved_limestone',
            'create:chiseled_limestone',
            'create:layered_limestone',
            'create:polished_limestone',
            'create:mossy_limestone',
            'create:overgrown_limestone',
            'quark:limestone',
            'quark:limestone_bricks',
            'quark:chiseled_limestone_bricks',
            'quark:limestone_pavement',
            'quark:limestone_pillar',
            'quark:polished_limestone',
            'chisel:limestone/raw',
            'chisel:limestone/cracked',
            'chisel:limestone/solid_bricks',
            'chisel:limestone/small_bricks',
            'chisel:limestone/soft_bricks',
            'chisel:limestone/cracked_bricks',
            'chisel:limestone/triple_bricks',
            'chisel:limestone/encased_bricks',
            'chisel:limestone/chaotic_bricks',
            'chisel:limestone/array',
            'chisel:limestone/tiles_medium',
            'chisel:limestone/tiles_large',
            'chisel:limestone/tiles_small',
            'chisel:limestone/chaotic_medium',
            'chisel:limestone/chaotic_small',
            'chisel:limestone/braid',
            'chisel:limestone/dent',
            'chisel:limestone/french_1',
            'chisel:limestone/french_2',
            'chisel:limestone/jellybean',
            'chisel:limestone/layers',
            'chisel:limestone/mosaic',
            'chisel:limestone/ornate',
            'chisel:limestone/panel',
            'chisel:limestone/road',
            'chisel:limestone/slanted',
            'chisel:limestone/zag',
            'chisel:limestone/circular',
            'chisel:limestone/circularct',
            'chisel:limestone/weaver',
            'chisel:limestone/pillar',
            'chisel:limestone/twisted',
            'chisel:limestone/prism',
            'chisel:limestone/cuts'
        ],
        onlyAsOutput: ['create:limestone_cobblestone'],
        onlyAsInput: []
    },
    {
        name: 'magma',
        stones: ['minecraft:magma_block', 'quark:magma_bricks'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'mana_quartz',
        stones: ['botania:mana_quartz', 'botania:mana_quartz_pillar', 'botania:chiseled_mana_quartz'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'marble',
        stones: [
            'astralsorcery:marble_bricks',
            'astralsorcery:marble_chiseled',
            'astralsorcery:marble_engraved',
            'astralsorcery:marble_raw',
            'astralsorcery:marble_runed',
            'astralsorcery:marble_arch',
            'astralsorcery:marble_pillar',
            'quark:marble',
            'quark:marble_bricks',
            'quark:chiseled_marble_bricks',
            'quark:marble_pavement',
            'quark:marble_pillar',
            'quark:polished_marble',
            'chisel:marble/raw',
            'chisel:marble/cracked',
            'chisel:marble/solid_bricks',
            'chisel:marble/small_bricks',
            'chisel:marble/soft_bricks',
            'chisel:marble/cracked_bricks',
            'chisel:marble/triple_bricks',
            'chisel:marble/encased_bricks',
            'chisel:marble/chaotic_bricks',
            'chisel:marble/array',
            'chisel:marble/tiles_medium',
            'chisel:marble/tiles_large',
            'chisel:marble/tiles_small',
            'chisel:marble/chaotic_medium',
            'chisel:marble/chaotic_small',
            'chisel:marble/braid',
            'chisel:marble/dent',
            'chisel:marble/french_1',
            'chisel:marble/french_2',
            'chisel:marble/jellybean',
            'chisel:marble/layers',
            'chisel:marble/mosaic',
            'chisel:marble/ornate',
            'chisel:marble/panel',
            'chisel:marble/road',
            'chisel:marble/slanted',
            'chisel:marble/zag',
            'chisel:marble/circular',
            'chisel:marble/circularct',
            'chisel:marble/weaver',
            'chisel:marble/pillar',
            'chisel:marble/twisted',
            'chisel:marble/prism',
            'chisel:marble/cuts'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'metamorphic_desert_stone',
        stones: [
            'botania:metamorphic_desert_stone',
            'botania:metamorphic_desert_bricks',
            'botania:chiseled_metamorphic_desert_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'metamorphic_forest_stone',
        stones: [
            'botania:metamorphic_forest_stone',
            'botania:metamorphic_forest_bricks',
            'botania:chiseled_metamorphic_forest_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'metamorphic_fungal_stone',
        stones: [
            'botania:metamorphic_fungal_stone',
            'botania:metamorphic_fungal_bricks',
            'botania:chiseled_metamorphic_fungal_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'metamorphic_mesa_stone',
        stones: [
            'botania:metamorphic_mesa_stone',
            'botania:metamorphic_mesa_bricks',
            'botania:chiseled_metamorphic_mesa_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'metamorphic_mountain_stone',
        stones: [
            'botania:metamorphic_mountain_stone',
            'botania:metamorphic_mountain_bricks',
            'botania:chiseled_metamorphic_mountain_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'metamorphic_plains_stone',
        stones: [
            'botania:metamorphic_plains_stone',
            'botania:metamorphic_plains_bricks',
            'botania:chiseled_metamorphic_plains_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'metamorphic_swamp_stone',
        stones: [
            'botania:metamorphic_swamp_stone',
            'botania:metamorphic_swamp_bricks',
            'botania:chiseled_metamorphic_swamp_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'metamorphic_taiga_stone',
        stones: [
            'botania:metamorphic_taiga_stone',
            'botania:metamorphic_taiga_bricks',
            'botania:chiseled_metamorphic_taiga_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'midori',
        stones: ['quark:midori_block', 'quark:midori_pillar'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'myalite',
        stones: [
            'quark:myalite',
            'quark:myalite_bricks',
            'quark:chiseled_myalite_bricks',
            'quark:myalite_pavement',
            'quark:myalite_pillar',
            'quark:polished_myalite'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'permafrost',
        stones: ['quark:permafrost', 'quark:permafrost_bricks'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'prismarine_brick',
        stones: [
            'minecraft:prismarine_bricks',
            'masonry:prismarinetiled',
            'masonry:prismarinecarvedcreeper',
            'masonry:prismarinecarvedderp',
            'masonry:prismarinecarvedvillager',
            'masonry:prismarinecarvedwither',
            'masonry:prismarinecarvedwriting',
            'masonry:prismarinecolumn',
            'masonry:prismarinecut',
            'masonry:prismarineengraved',
            'masonry:prismarinepanels',
            'masonry:prismarinepillar',
            'masonry:prismarinepolished',
            'masonry:prismarineroughcut',
            'masonry:prismarinechiseled',
            'masonry:prismarinediamondpavers',
            'masonry:prismarinelargebricks',
            'masonry:prismarinelargebrickscracked',
            'masonry:prismarinelargebricksmossy',
            'masonry:prismarinesmallbrick'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'prismarine',
        stones: ['minecraft:prismarine', 'masonry:prismarinecobbled', 'masonry:prismarinecobbledmossy'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'quartz',
        stones: [
            'minecraft:quartz_block',
            'minecraft:quartz_pillar',
            'minecraft:chiseled_quartz_block',
            'minecraft:quartz_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'red_quartz',
        stones: ['botania:red_quartz', 'botania:red_quartz_pillar', 'botania:chiseled_red_quartz'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'red_rock',
        stones: [
            'byg:red_rock',
            'byg:red_rock_bricks',
            'byg:mossy_red_rock_bricks',
            'byg:chiseled_red_rock_bricks',
            'byg:cracked_red_rock_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'red_sandstone',
        stones: [
            'minecraft:red_sandstone',
            'minecraft:cut_red_sandstone',
            'minecraft:chiseled_red_sandstone',
            'quark:red_sandstone_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'reinforced_stone',
        stones: [
            'pneumaticcraft:reinforced_stone',
            'pneumaticcraft:reinforced_bricks',
            'pneumaticcraft:reinforced_brick_tile',
            'pneumaticcraft:reinforced_brick_pillar'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'sandstone',
        stones: [
            'minecraft:sandstone',
            'minecraft:cut_sandstone',
            'minecraft:chiseled_sandstone',
            'quark:sandstone_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'scoria',
        stones: [
            'byg:scoria_pillar',
            'byg:scoria_stonebricks',
            'create:scoria',
            'create:scoria_bricks',
            'create:scoria_pillar',
            'create:fancy_scoria_bricks',
            'create:paved_scoria',
            'create:chiseled_scoria',
            'create:layered_scoria',
            'create:polished_scoria',
            'create:mossy_scoria',
            'create:overgrown_scoria'
        ],
        onlyAsOutput: ['byg:scoria_cobblestone', 'create:scoria_cobblestone'],
        onlyAsInput: []
    },
    {
        name: 'slate',
        stones: [
            'quark:slate',
            'quark:slate_bricks',
            'quark:chiseled_slate_bricks',
            'quark:slate_pavement',
            'quark:slate_pillar',
            'quark:polished_slate'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'soapstone',
        stones: ['byg:polished_soapstone', 'byg:soapstone_bricks', 'byg:soapstone_pillar', 'byg:soapstone_tile'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'soul_sandstone',
        stones: [
            'quark:soul_sandstone',
            'quark:soul_sandstone_bricks',
            'quark:chiseled_soul_sandstone',
            'quark:cut_soul_sandstone'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'sunny_quartz',
        stones: ['botania:sunny_quartz', 'botania:sunny_quartz_pillar', 'botania:chiseled_sunny_quartz'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'voidstone',
        stones: [
            'quark:basalt',
            'quark:basalt_bricks',
            'quark:chiseled_basalt_bricks',
            'quark:basalt_pavement',
            'quark:basalt_pillar',
            'quark:polished_basalt'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'weathered_limestone',
        stones: [
            'create:weathered_limestone',
            'create:weathered_limestone_bricks',
            'create:weathered_limestone_pillar',
            'create:fancy_weathered_limestone_bricks',
            'create:paved_weathered_limestone',
            'create:chiseled_weathered_limestone',
            'create:layered_weathered_limestone',
            'create:polished_weathered_limestone',
            'create:mossy_weathered_limestone',
            'create:overgrown_weathered_limestone'
        ],
        onlyAsOutput: ['create:weathered_limestone_cobblestone'],
        onlyAsInput: []
    },
    {
        name: 'flavolite',
        stones: [
            'betterendforge:flavolite_bricks',
            'betterendforge:flavolite_pedestal',
            'betterendforge:flavolite_pillar',
            'betterendforge:flavolite_tiles',
            'betterendforge:flavolite_polished',
            'betterendforge:flavolite'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'violecite',
        stones: [
            'betterendforge:violecite_bricks',
            'betterendforge:violecite_pedestal',
            'betterendforge:violecite_pillar',
            'betterendforge:violecite_tiles',
            'betterendforge:violecite_polished',
            'betterendforge:violecite'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'sulphuric_rock',
        stones: [
            'betterendforge:sulphuric_rock_pedestal',
            'betterendforge:sulphuric_rock_bricks',
            'betterendforge:sulphuric_rock_pillar',
            'betterendforge:sulphuric_rock_tiles',
            'betterendforge:sulphuric_rock_polished',
            'betterendforge:sulphuric_rock'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    }
];
