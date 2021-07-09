//todo remove in 0.6.0
/*onEvent('recipes', (event) => {
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

 /*   const newRecipes = [
        {
            output: 'thermal:machine_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/iron_tin',
                B: '#forge:glass_panes',
                C: '#forge:gears/iron_aluminum'
            },
            id: 'thermal:machine_frame'
        },
        {
            output: 'thermal:energy_cell_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/lead',
                B: '#forge:glass_panes',
                C: '#forge:gears/electrum'
            },
            id: 'thermal:energy_cell_frame'
        },
        {
            output: 'thermal:fluid_cell_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/copper',
                B: '#forge:glass_panes',
                C: '#forge:gears/bronze'
            },
            id: 'thermal:fluid_cell_frame'
        },
        {
            output: 'minecraft:furnace',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#quark:stone_tool_materials',
                B: '#minecraft:coals'
            },
            id: 'minecraft:furnace'
        },
        {
            output: Item.of('minecraft:piston', 2),
            pattern: ['EBE', 'ADA', 'ACA'],
            key: {
                A: 'minecraft:smooth_stone',
                B: [
                    '#forge:ingots/silver',
                    '#forge:ingots/lead',
                    '#forge:ingots/gold',
                    '#forge:ingots/nickel',
                    '#forge:ingots/zinc'
                ],
                C: '#forge:dusts/redstone',
                D: [
                    '#forge:rods/silver',
                    '#forge:rods/lead',
                    '#forge:rods/gold',
                    '#forge:rods/nickel',
                    '#forge:rods/zinc'
                ],
                E: '#minecraft:planks'
            },
            id: 'minecraft:piston_alternative'
        },
        {
            output: 'minecraft:piston',
            pattern: ['EBE', 'ADA', 'ACA'],
            key: {
                A: 'minecraft:smooth_stone',
                B: ['#forge:ingots/iron', '#forge:ingots/aluminum', '#forge:ingots/copper', '#forge:ingots/tin'],
                C: '#forge:dusts/redstone',
                D: ['#forge:rods/iron', '#forge:rods/aluminum', '#forge:rods/copper', '#forge:rods/tin'],
                E: '#minecraft:planks'
            },
            id: 'minecraft:piston'
        },
        {
            output: Item.of('minecraft:blast_furnace'),
            pattern: ['DDD', 'DBD', 'ACA'],
            key: {
                A: 'minecraft:smooth_stone',
                B: 'minecraft:furnace',
                C: 'minecraft:campfire',
                D: ['#forge:plates/iron', '#forge:plates/tin', '#forge:plates/aluminum']
            },
            id: 'minecraft:blast_furnace'
        },
        {
            output: Item.of('minecraft:smoker'),
            pattern: ['DAD', 'ABA', 'DCD'],
            key: {
                A: '#minecraft:logs',
                B: 'minecraft:furnace',
                C: 'minecraft:campfire',
                D: '#forge:rods/wooden'
            },
            id: 'minecraft:smoker'
        },
        {
            output: Item.of('thermal:rf_coil'),
            pattern: ['CA ', 'ABA', ' AC'],
            key: {
                A: '#forge:dusts/redstone',
                B: '#forge:rods/gold_copper',
                C: '#forge:nuggets/gold'
            },
            id: 'thermal:rf_coil'
        },
        {
            output: Item.of('thermal:rf_coil'),
            pattern: [' AC', 'ABA', 'CA '],
            key: {
                A: '#forge:dusts/redstone',
                B: '#forge:rods/gold_copper',
                C: '#forge:nuggets/gold'
            },
            id: 'thermal:rf_coil_mirrored'
        },
        {
            output: Item.of('thermal:redstone_servo'),
            pattern: ['A A', ' B ', 'A A'],
            key: {
                A: '#forge:dusts/redstone',
                B: ['#forge:rods/iron', '#forge:rods/tin']
            },
            id: 'thermal:redstone_servo'
        },
        {
            output: Item.of('thermal:redstone_servo', 2),
            pattern: ['A A', ' B ', 'A A'],
            key: {
                A: '#forge:dusts/redstone',
                B: '#forge:rods/lead'
            },
            id: 'kubejs:thermal_redstone_servo_with_lead'
        },
        {
            output: 'create:millstone',
            pattern: [' A ', 'BCB', 'DDD'],
            key: {
                A: '#forge:gears/copper',
                B: '#forge:ingots/andesite_alloy',
                C: 'create:cogwheel',
                D: 'minecraft:smooth_stone_slab'
            },
            id: 'create:crafting/kinetics/millstone'
        },
        {
            output: 'create:windmill_bearing',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'create:turntable',
                B: 'minecraft:sticky_piston',
                C: 'create:shaft'
            },
            id: 'create:crafting/kinetics/windmill_bearing'
        },
        {
            output: Item.of('immersiveengineering:cokebrick', 3),
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: '#forge:stones/basalt',
                B: 'create:cinder_flour',
                C: '#forge:clay'
            },
            id: 'immersiveengineering:crafting/cokebrick'
        },
        {
            output: 'ars_nouveau:mana_condenser',
            pattern: ['CAC', 'BDB', 'BEB'],
            key: {
                A: 'minecraft:conduit',
                B: '#forge:nuggets/gold_brass',
                C: '#forge:ingots/gold_brass',
                D: 'ars_nouveau:arcane_stone',
                E: 'minecraft:hopper'
            },
            id: 'ars_nouveau:mana_condenser'
        },
        {
            output: 'ars_nouveau:arcane_core',
            pattern: ['CAC', 'BDB', 'CAC'],
            key: {
                A: 'ars_nouveau:warding_stone',
                B: '#forge:nuggets/gold_brass',
                C: '#forge:ingots/gold_brass',
                D: ['#forge:storage_blocks/lapis', '#forge:storage_blocks/fluorite']
            },
            id: 'ars_nouveau:arcane_core'
        },
        {
            output: 'ars_nouveau:arcane_pedestal',
            pattern: ['CAC', 'BDB', 'CDC'],
            key: {
                A: 'ars_nouveau:arcane_stone',
                B: '#forge:nuggets/gold_brass',
                C: '#forge:ingots/gold_brass',
                D: ['#forge:gems/lapis', '#forge:gems/fluorite']
            },
            id: 'ars_nouveau:arcane_pedestal'
        },
        {
            output: 'ars_nouveau:enchanting_apparatus',
            pattern: ['CAC', 'BDB', 'CAC'],
            key: {
                A: 'ars_nouveau:warding_stone',
                B: '#forge:nuggets/gold_brass',
                C: '#forge:ingots/gold_brass',
                D: 'minecraft:conduit'
            },
            id: 'ars_nouveau:enchanting_apparatus'
        },
        {
            output: 'architects_palette:sunmetal_block',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'architects_palette:sunmetal_brick'
            },
            id: 'architects_palette:sunmetal_block'
        },
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
            output: 'occultism:divination_rod',
            pattern: [' CD', ' AC', 'AB '],
            key: {
                A: 'betterendforge:leather_wrapped_stick',
                B: 'eidolon:tattered_cloth',
                C: '#forge:rods/copper',
                D: 'occultism:spirit_attuned_gem'
            },
            id: 'occultism:crafting/divination_rod'
        },
        {
            output: 'meetyourfight:caged_heart',
            pattern: ['AAA', 'ABA', 'ACA'],
            key: {
                A: '#forge:bones',
                B: 'eidolon:zombie_heart',
                C: 'meetyourfight:mossy_tooth'
            },
            id: 'meetyourfight:caged_heart'
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
            output: 'ars_nouveau:mana_jar',
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: '#forge:nuggets/gold_brass',
                B: '#forge:ingots/gold_brass',
                C: 'supplementaries:jar',
                D: 'ars_nouveau:warding_stone'
            },
            id: 'ars_nouveau:mana_jar'
        },
        {
            output: 'ars_nouveau:glyph_press',
            pattern: ['BDB', 'ACA', 'BDB'],
            key: {
                A: '#forge:nuggets/gold_brass',
                B: '#forge:ingots/gold_brass',
                C: 'minecraft:piston',
                D: 'ars_nouveau:warding_stone'
            },
            id: 'ars_nouveau:glyph_press'
        },
        {
            output: 'naturesaura:grated_chute',
            pattern: ['A A', 'ABA', ' A '],
            key: {
                A: 'naturesaura:infused_iron',
                B: '#forge:chests'
            },
            id: 'naturesaura:grated_chute'
        },
        {
            output: 'kubejs:firmament',
            pattern: ['AAB', 'ABA', 'BAA'],
            key: {
                A: 'minecraft:prismarine',
                B: 'undergarden:tremblecrust'
            }
        },
        {
            output: 'eidolon:wooden_altar',
            pattern: ['AAA', 'B B', 'B B'],
            key: {
                A: 'eidolon:polished_planks_slab',
                B: 'eidolon:polished_planks'
            },
            id: 'eidolon:wooden_altar'
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
            output: 'botania:mana_pool',
            pattern: ['A A', 'ABA'],
            key: {
                A: 'botania:livingrock',
                B: 'ars_nouveau:warding_stone'
            },
            id: 'botania:mana_pool'
        },
        {
            output: 'botania:diluted_pool',
            pattern: ['A A', 'ABA'],
            key: {
                A: 'botania:livingrock_slab',
                B: 'ars_nouveau:warding_stone'
            },
            id: 'botania:diluted_pool'
        },
        {
            output: 'botania:fabulous_pool',
            pattern: ['A A', 'ABA'],
            key: {
                A: 'botania:shimmerrock',
                B: 'ars_nouveau:warding_stone'
            },
            id: 'botania:fabulous_pool'
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
            output: 'resourcefulbees:apiary_breeder',
            pattern: ['ACA', 'DBD', 'ACA'],
            key: {
                A: 'resourcefulbees:bee_jar',
                B: 'resourcefulbees:apiary_storage',
                C: 'naturesaura:token_joy',
                D: '#minecraft:flowers'
            },
            id: 'resourcefulbees:apiary_breeder'
        },
        {
            output: 'resourcefulbees:centrifuge',
            pattern: ['CBC', 'CAC', 'EDE'],
            key: {
                A: 'thermal:machine_frame',
                B: 'immersiveengineering:circuit_board',
                C: 'emendatusenigmatica:steel_ingot',
                D: 'minecraft:piston',
                E: 'minecraft:smooth_stone'
            },
            id: 'resourcefulbees:centrifuge'
        },
        {
            output: Item.of('resourcefulbees:centrifuge_casing', 4),
            pattern: ['CBC', 'BAB', 'CBC'],
            key: {
                A: 'rftoolsbase:machine_frame',
                B: 'minecraft:redstone',
                C: 'naturesaura:infused_iron'
            },
            id: 'resourcefulbees:centrifuge_casing'
        },
        {
            output: 'resourcefulbees:centrifuge_controller',
            pattern: ['EBE', 'CAC', 'EDE'],
            key: {
                A: 'rftoolsbase:machine_frame',
                B: 'immersiveengineering:rs_engineering',
                C: 'naturesaura:infused_iron',
                D: 'resourcefulbees:centrifuge',
                E: 'resourcefulbees:centrifuge_casing'
            },
            id: 'resourcefulbees:centrifuge_controller'
        },
        {
            output: Item.of('resourcefulbees:elite_centrifuge_casing', 4),
            pattern: ['CBC', 'BAB', 'CBC'],
            key: {
                A: 'resourcefulbees:centrifuge_casing',
                B: 'minecraft:redstone',
                C: 'occultism:iesnium_ingot'
            },
            id: 'resourcefulbees:elite_centrifuge_casing'
        },
        {
            output: 'resourcefulbees:elite_centrifuge_controller',
            pattern: ['EBE', 'CAC', 'EDE'],
            key: {
                A: 'industrialforegoing:machine_frame_advanced',
                B: 'pneumaticcraft:advanced_pcb',
                C: 'occultism:iesnium_ingot',
                D: 'resourcefulbees:centrifuge_controller',
                E: 'resourcefulbees:elite_centrifuge_casing'
            },
            id: 'resourcefulbees:elite_centrifuge_controller'
        },
        {
            output: 'astralsorcery:linking_tool',
            pattern: [' CD', ' AC', 'AB '],
            key: {
                A: 'betterendforge:leather_wrapped_stick',
                B: '#forge:gems/aquamarine',
                C: '#forge:rods/brass',
                D: [
                    'astralsorcery:rock_crystal',
                    'astralsorcery:celestial_crystal',
                    'astralsorcery:attuned_rock_crystal',
                    'astralsorcery:attuned_celestial_crystal'
                ]
            },
            id: 'astralsorcery:altar/linking_tool'
        },
        {
            output: 'eidolon:worktable',
            pattern: ['AAA', 'BCB', 'DDD'],
            key: {
                A: 'atum:linen_carpet_red',
                B: 'eidolon:pewter_inlay',
                C: 'minecraft:conduit',
                D: 'ars_nouveau:purple_archwood_wood'
            },
            id: 'eidolon:worktable'
        },
        {
            output: 'astralsorcery:wand',
            pattern: [' CD', ' AC', 'AB '],
            key: {
                A: '#forge:rods/silver',
                B: 'betterendforge:leather_stripe',
                C: '#forge:gems/aquamarine',
                D: 'eidolon:ender_calx'
            },
            id: 'astralsorcery:altar/wand'
        },
        {
            output: 'astralsorcery:grapple_wand',
            pattern: [' CD', 'CA ', 'AB '],
            key: {
                A: '#forge:rods/silver',
                B: 'betterendforge:leather_stripe',
                C: '#forge:gems/aquamarine',
                D: 'alexsmobs:guster_eye'
            },
            id: 'astralsorcery:altar/grapple_wand'
        },
        {
            output: 'botania:corporea_index',
            pattern: ['ABA', 'BCB', 'DBD'],
            key: {
                A: 'atum:ectoplasm',
                B: 'glassential:glass_ghostly',
                C: 'botania:corporea_block',
                D: 'occultism:spirit_attuned_gem'
            },
            id: 'botania:corporea_index'
        },
        {
            output: 'botania:corporea_crystal_cube',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'botania:corporea_spark',
                B: 'glassential:glass_ghostly',
                C: 'botania:corporea_block'
            },
            id: 'botania:corporea_crystal_cube'
        },
        {
            output: 'immersiveengineering:workbench',
            pattern: ['A  ', 'BCC', 'E D'],
            key: {
                A: '#forge:rods/steel',
                B: '#forge:plates/steel',
                C: '#forge:treated_wood_slab',
                D: 'immersiveengineering:treated_fence',
                E: 'immersiveengineering:craftingtable'
            },
            id: 'immersiveengineering:crafting/workbench'
        },
        {
            output: Item.of('immersiveengineering:alloybrick', 4),
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: '#forge:ingots/brick',
                B: 'kubejs:smoldering_lapis_lazuli_compound',
                C: 'immersiveengineering:blastbrick'
            },
            id: 'immersiveengineering:crafting/alloybrick'
        },
        {
            output: 'industrialforegoing:machine_frame_pity',
            pattern: ['CCC', 'ABA', 'CCC'],
            key: {
                A: 'immersiveengineering:concrete_leaded',
                B: 'thermal:machine_frame',
                C: 'create:andesite_casing'
            },
            id: 'industrialforegoing:machine_frame_pity'
        },
        {
            output: Item.of('prettypipes:pipe', 8),
            pattern: ['CCC', 'ABA', 'CCC'],
            key: {
                A: '#forge:plates/tin',
                B: '#forge:glass/colorless',
                C: 'create:shaft'
            }
        },
        {
            output: Item.of('ppfluids:fluid_pipe', 8),
            pattern: ['CCC', 'ABA', 'CCC'],
            key: {
                A: 'thermal:cured_rubber',
                B: '#forge:glass/colorless',
                C: 'create:shaft'
            }
        },
        {
            output: 'minecraft:observer',
            pattern: ['BBB', 'ACA', 'BBB'],
            key: {
                A: 'create:andesite_alloy',
                B: 'minecraft:stone_slab',
                C: 'minecraft:comparator'
            },
            id: 'minecraft:observer'
        },
        {
            output: 'eidolon:basic_belt',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'betterendforge:silk_fiber',
                B: 'betterendforge:leather_stripe',
                C: '#forge:gems/mana'
            },
            id: 'eidolon:basic_belt'
        },
        {
            output: 'eidolon:crucible',
            pattern: ['A A', 'ABA', 'AAA'],
            key: {
                A: '#forge:ingots/pewter',
                B: 'minecraft:conduit'
            },
            id: 'eidolon:crucible'
        },
        {
            //Gate T1 Hive Upgrade behind starting Nature's Aura
            output: 'resourcefulbees:t1_hive_upgrade',
            pattern: ['ACA', 'ABA', 'ACA'],
            key: {
                A: 'minecraft:grass',
                B: '#minecraft:planks',
                C: 'naturesaura:gold_powder'
            },
            id: 'resourcefulbees:t1_hive_upgrade'
        },
        {
            output: 'naturesaura:offering_table',
            pattern: ['BAB', 'CBD', 'EEE'],
            key: {
                A: '#forge:ingots/infused_iron',
                B: 'naturesaura:infused_stone',
                C: 'naturesaura:token_fear',
                D: 'naturesaura:token_sorrow',
                E: 'naturesaura:ancient_bark'
            },
            id: 'naturesaura:offering_table'
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
*/