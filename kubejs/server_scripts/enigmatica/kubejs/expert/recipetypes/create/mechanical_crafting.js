onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/create/mechanical_crafting/';
    const recipes = [
        {
            output: 'astralsorcery:hand_telescope',
            pattern: ['    A ', '   ABA', '  CBA ', ' CDC  ', 'ACC   ', 'BA    '],
            key: {
                A: '#forge:plates/brass',
                B: 'astralsorcery:glass_lens',
                C: 'botania:livingwood_planks',
                D: '#botania:runes/autumn'
            },
            id: 'astralsorcery:altar/hand_telescope'
        },
        {
            output: 'astralsorcery:observatory',
            pattern: [
                '      ABC',
                '     DBCB',
                '    EBCBA',
                '   FBJBG ',
                '  ABKBH  ',
                ' LB BI   ',
                'M CBAO   ',
                'MN LPO   ',
                'MMMOOO   '
            ],
            key: {
                A: '#forge:inlays/arcane_gold',
                B: 'astralsorcery:marble_runed',
                C: 'kubejs:observatory_lens',
                D: 'quark:lime_rune',
                E: 'quark:orange_rune',
                F: 'quark:red_rune',
                G: 'quark:magenta_rune',
                H: 'quark:blue_rune',
                I: 'quark:light_blue_rune',
                J: 'quark:black_rune',
                K: '#botania:runes/asgard',
                L: '#forge:nuggets/brass',
                M: '#forge:plates/brass',
                N: '#create:seats',
                O: 'create:brass_casing',
                P: 'immersiveengineering:furnace_heater'
            },
            id: 'astralsorcery:observatory'
        },
        {
            output: 'refinedstorage:controller',
            pattern: ['ACACA', 'CDBDC', 'AFEFA', 'CDBDC', 'ACACA'],
            key: {
                A: 'refinedstorage:advanced_processor',
                B: '#forge:ingots/slimesteel',
                C: 'xnet:netcable_blue',
                D: 'refinedstorage:quartz_enriched_iron',
                E: 'refinedstorage:machine_casing',
                F: 'immersiveengineering:logic_unit'
            },
            id: 'refinedstorage:controller'
        },
        {
            output: Item.of('create:crushing_wheel', 2),
            pattern: [' AAA ', 'AAPAA', 'APSPA', 'AAPAA', ' AAA '],
            key: {
                A: 'create:andesite_alloy',
                S: 'create:shaft',
                P: 'create:brass_casing'
            },
            id: 'create:mechanical_crafting/crushing_wheel'
        },
        {
            output: 'refinedstorage:disk_drive',
            pattern: ['ABCBA', 'BDEDB', 'CFGFC', 'BDEDB', 'ABCBA'],
            key: {
                A: '#forge:circuits/basic',
                B: 'refinedstorage:advanced_processor',
                C: 'refinedstorage:quartz_enriched_iron',
                D: 'occultism:storage_stabilizer_tier1',
                E: '#xnet:advanced_connectors',
                F: 'immersiveengineering:logic_unit',
                G: 'refinedstorage:machine_casing'
            },
            id: 'refinedstorage:disk_drive'
        },
        {
            output: 'powah:energizing_orb',
            pattern: [' AAA ', ' A A ', ' CBC ', 'CCCCC'],
            key: {
                A: 'atum:crystal_glass',
                B: 'thermal:machine_frame',
                C: 'atum:ceramic_slab_black'
            },
            id: 'powah:crafting/energizing_orb'
        },
        {
            output: Item.of(
                'pneumaticcraft:flux_compressor',
                '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'
            ),
            pattern: ['ABBBA', 'ACDCA', 'EFGFE', 'HIJIH', 'HHKHH'],
            key: {
                A: 'thermal:hazmat_fabric',
                B: Item.of('powah:capacitor_nitro').ignoreNBT(),
                C: 'pneumaticcraft:turbine_rotor',
                D: 'mekanism:basic_control_circuit',
                E: 'pneumaticcraft:advanced_pressure_tube',
                F: '#forge:gears/compressed_iron',
                G: Item.of('powah:thermo_generator_nitro').ignoreNBT(),
                H: 'fluxnetworks:flux_block',
                I: 'supplementaries:bellows',
                J: 'thermal:upgrade_augment_3',
                K: 'thermal:rf_coil'
            },
            id: `${id_prefix}flux_compressor`
        },
        {
            output: 'pneumaticcraft:assembly_drill',
            pattern: ['AAA ', 'BCCA', '  CA', 'DDED'],
            key: {
                A: 'prettypipes:pipe',
                B: 'pneumaticcraft:drill_bit_diamond',
                C: 'pneumaticcraft:pneumatic_cylinder',
                D: 'pneumaticcraft:reinforced_stone_slab',
                E: Item.of('pneumaticcraft:pneumatic_dynamo').ignoreNBT()
            },
            id: `${id_prefix}assembly_drill`
        },
        {
            output: 'pneumaticcraft:assembly_laser',
            pattern: ['AAA ', 'BCCA', '  CA', 'DDED'],
            key: {
                A: 'prettypipes:pipe',
                B: '#powah:energizing_rod',
                C: 'pneumaticcraft:pneumatic_cylinder',
                D: 'pneumaticcraft:reinforced_stone_slab',
                E: Item.of('pneumaticcraft:pneumatic_dynamo').ignoreNBT()
            },
            id: `${id_prefix}assembly_laser`
        },
        {
            output: 'pneumaticcraft:assembly_io_unit_import',
            pattern: ['AAA ', 'BCCA', '  CA', 'DDED'],
            key: {
                A: 'prettypipes:pipe',
                B: 'create:brass_hand',
                C: 'pneumaticcraft:pneumatic_cylinder',
                D: 'pneumaticcraft:reinforced_stone_slab',
                E: Item.of('pneumaticcraft:pneumatic_dynamo').ignoreNBT()
            },
            id: `${id_prefix}assembly_io_unit_import`
        },
        {
            output: 'pneumaticcraft:assembly_io_unit_export',
            pattern: [' AAA', 'ACCB', 'AC  ', 'DEDD'],
            key: {
                A: 'prettypipes:pipe',
                B: 'create:brass_hand',
                C: 'pneumaticcraft:pneumatic_cylinder',
                D: 'pneumaticcraft:reinforced_stone_slab',
                E: Item.of('pneumaticcraft:pneumatic_dynamo').ignoreNBT()
            },
            id: `${id_prefix}assembly_io_unit_export`
        },
        {
            output: 'pneumaticcraft:assembly_controller',
            pattern: [' AAA', 'ACCB', 'AC  ', 'DEDD'],
            key: {
                A: 'prettypipes:pipe',
                B: 'computercraft:monitor_normal',
                C: 'pneumaticcraft:printed_circuit_board',
                D: 'pneumaticcraft:reinforced_stone_slab',
                E: Item.of('pneumaticcraft:pneumatic_dynamo').ignoreNBT()
            },
            id: `${id_prefix}assembly_controller`
        },
        {
            output: 'pneumaticcraft:assembly_platform',
            pattern: [' AA ', 'BCCB', 'DDDD'],
            key: {
                A: '#pneumaticcraft:plastic_sheets',
                B: '#forge:ingots/compressed_iron',
                C: 'pneumaticcraft:pneumatic_cylinder',
                D: 'pneumaticcraft:reinforced_stone_slab'
            },
            id: `${id_prefix}assembly_platform`
        },
        {
            output: 'pneumaticcraft:aerial_interface',
            pattern: ['AABAA', 'ACDEA', 'BCFGB', 'ACHEA', 'AABAA'],
            key: {
                A: 'pneumaticcraft:pressure_chamber_wall',
                B: 'pneumaticcraft:advanced_pressure_tube',
                C: Item.of('powah:capacitor_blazing').ignoreNBT(),
                D: 'pneumaticcraft:omnidirectional_hopper',
                E: 'pneumaticcraft:printed_circuit_board',
                F: '#industrialforegoing:machine_frame/supreme',
                G: 'extrastorage:neural_processor',
                H: 'powah:player_aerial_pearl'
            },
            id: `${id_prefix}aerial_interface`
        },
        {
            output: 'pneumaticcraft:spawner_extractor',
            pattern: ['  A  ', ' BCB ', ' DED ', 'F E F'],
            key: {
                A: 'pneumaticcraft:huge_tank',
                B: 'pneumaticcraft:pressure_tube',
                C: '#industrialforegoing:machine_frame/advanced',
                D: 'alexsmobs:hemolymph_sac',
                E: 'pneumaticcraft:drill_pipe',
                F: 'alexsmobs:warped_muscle'
            },
            id: `${id_prefix}spawner_extractor`
        },
        {
            output: 'create:flywheel',
            pattern: [' AAA ', 'ABCBA', 'ACDCA', 'ABEBA', ' AAA '],
            key: {
                A: '#forge:plates/brass',
                B: '#forge:rods/brass',
                C: '#forge:gears/enderium',
                D: 'create:brass_casing',
                E: 'ars_nouveau:carbuncle_charm'
            },
            id: 'create:mechanical_crafting/flywheel'
        },
        {
            output: 'integrateddynamics:logic_programmer',
            pattern: ['ABBBA', 'CDEDC', 'CFGFC', 'CIHJC', 'ABBBA'],
            key: {
                A: 'pneumaticcraft:logistics_core',
                B: 'integrateddynamics:crystalized_menril_block',
                C: 'integrateddynamics:menril_wood',
                D: 'extrastorage:neural_processor',
                E: 'kubejs:cpu_core_as_81221',
                F: 'pneumaticcraft:smart_chest',
                G: 'refinedstorage:machine_casing',
                H: 'pneumaticcraft:upgrade_matrix',
                I: 'pneumaticcraft:network_io_port',
                J: 'pneumaticcraft:network_data_storage'
            },
            id: 'integrateddynamics:crafting/logic_programmer'
        },
        {
            output: Item.of('2x portality:controller'),
            pattern: ['ABBBA', 'CDEDC', 'CFGFC', 'CDEDC', 'ABBBA'],
            key: {
                A: 'portality:frame',
                B: 'immersiveengineering:coil_lv',
                C: 'immersiveengineering:electron_tube',
                D: 'immersiveengineering:wirecoil_redstone',
                E: 'pneumaticcraft:advanced_pcb',
                F: 'immersiveengineering:current_transformer',
                G: 'xnet:controller'
            },
            id: 'portality:controller'
        },
        {
            output: 'rftoolsutility:environmental_controller',
            pattern: ['ABBBA', 'BCDCB', 'BEFEB', 'BGHGB', 'ABBBA'],
            key: {
                A: 'powah:dielectric_casing',
                B: 'thermal:enderium_glass',
                C: 'immersiveengineering:tesla_coil',
                D: 'powah:player_aerial_pearl',
                E: 'powah:aerial_pearl',
                F: '#industrialforegoing:machine_frame/supreme',
                G: '#forge:circuits/ultimate',
                H: 'kubejs:spirit_entropic_gateway'
            },
            id: 'rftoolsutility:environmental_controller'
        },
        {
            output: 'mekanismgenerators:wind_generator',
            pattern: ['ABC', ' E ', ' E ', ' G '],
            key: {
                A: 'pneumaticcraft:turbine_rotor',
                B: 'immersiveengineering:dynamo',
                C: '#forge:gears/compressed_iron',
                E: 'engineersdecor:thick_steel_pole',
                G: 'engineersdecor:thick_steel_pole_head'
            },
            id: 'mekanismgenerators:generator/wind'
        },
        {
            output: 'mekanismgenerators:rotational_complex',
            pattern: ['ABCCC', 'BDBFC', 'CBGBC', 'CEBDB', 'CCCBA'],
            key: {
                A: '#forge:circuits/elite',
                B: '#forge:gears/compressed_iron',
                C: '#xnet:cables',
                D: '#mekanism:alloys/reinforced',
                E: 'rftoolscontrol:node',
                F: Item.of('rftoolsbase:tablet').ignoreNBT(),
                G: '#industrialforegoing:machine_frame/advanced'
            },
            id: 'mekanismgenerators:rotational_complex'
        },
        {
            output: 'mekanismgenerators:fusion_reactor_controller',
            pattern: ['  ABA  ', ' ACDCA ', 'ACEFECA', 'BDGHGDB', 'ACEIECA', ' ACDCA ', '  ABA  '],
            key: {
                A: 'mekanismgenerators:reactor_glass',
                B: '#xnet:cables',
                C: 'mekanismgenerators:fusion_reactor_frame',
                D: '#xnet:advanced_connectors',
                E: Item.of('mekanism:ultimate_chemical_tank').ignoreNBT(),
                F: 'rftoolsutility:environmental_controller',
                G: '#forge:circuits/ultimate',
                H: Item.of('mekanism:ultimate_fluid_tank').ignoreNBT(),
                I: Item.of('rftoolsbase:tablet').ignoreNBT()
            },
            id: 'mekanismgenerators:reactor/controller'
        },
        {
            output: 'mekanism:digital_miner',
            pattern: ['AAAAA', 'BCDCB', 'EFGHE', 'AAAAA', 'II II'],
            key: {
                A: '#forge:sheetmetals/steel',
                B: 'pneumaticcraft:smart_chest',
                C: 'integrateddynamics:part_display_panel',
                D: Item.of('rftoolsbase:tablet').ignoreNBT(),
                E: 'integratedtunnels:part_importer_energy',
                F: 'rftoolsutility:matter_transmitter',
                G: 'mekanism:robit',
                H: 'rftoolsutility:matter_receiver',
                I: 'engineersdecor:thick_steel_pole_head'
            },
            id: 'mekanism:digital_miner'
        },
        {
            output: 'mininggadgets:mininggadget_simple',
            pattern: [' AAABBB', 'CDEFFF ', ' CGCBBB', 'H      '],
            key: {
                A: 'immersiveengineering:toolupgrade_revolver_electro',
                B: 'powah:dielectric_rod_horizontal',
                C: 'mekanism:hdpe_sheet',
                D: 'thermal:charge_bench',
                E: 'rftoolsbase:infused_diamond',
                F: industrialforegoing.laser_lens.magenta,
                G: 'thermal:upgrade_augment_2',
                H: Item.of('immersiveengineering:wooden_grip').ignoreNBT()
            },
            id: 'mininggadgets:mininggadget_simple'
        },
        {
            output: 'mininggadgets:mininggadget_fancy',
            pattern: [' AAABBB', 'CDEFFF ', ' CGCBBB', 'H      '],
            key: {
                A: 'immersiveengineering:toolupgrade_revolver_electro',
                B: 'powah:dielectric_rod_horizontal',
                C: 'mekanism:hdpe_sheet',
                D: 'thermal:charge_bench',
                E: 'rftoolsbase:infused_diamond',
                F: industrialforegoing.laser_lens.pink,
                G: 'thermal:upgrade_augment_2',
                H: Item.of('immersiveengineering:wooden_grip').ignoreNBT()
            },
            id: 'mininggadgets:mininggadget_fancy'
        },
        {
            output: 'mininggadgets:mininggadget',
            pattern: [' AAABBB', 'CDEFFF ', ' CGCBBB', 'H      '],
            key: {
                A: 'immersiveengineering:toolupgrade_revolver_electro',
                B: 'powah:dielectric_rod_horizontal',
                C: 'mekanism:hdpe_sheet',
                D: 'thermal:charge_bench',
                E: 'rftoolsbase:infused_diamond',
                F: industrialforegoing.laser_lens.light_blue,
                G: 'thermal:upgrade_augment_2',
                H: Item.of('immersiveengineering:wooden_grip').ignoreNBT()
            },
            id: 'mininggadgets:mininggadget'
        },
        {
            output: 'thermal:flux_saw',
            pattern: [' A  ', 'BACD', 'AEFD', ' GCC'],
            key: {
                A: '#forge:plates/steel',
                B: 'thermal:saw_blade',
                C: 'mekanism:hdpe_sheet',
                D: 'betterendforge:leather_stripe',
                E: 'create:precision_mechanism',
                F: Item.of('thermal:flux_capacitor').ignoreNBT(),
                G: 'mekanism:hdpe_stick'
            },
            id: 'thermal:flux_saw'
        },
        {
            output: 'thermal:flux_drill',
            pattern: ['B   ', ' AC ', ' EFD', ' GCD'],
            key: {
                A: '#forge:plates/steel',
                B: 'thermal:drill_head',
                C: 'mekanism:hdpe_sheet',
                D: 'betterendforge:leather_stripe',
                E: 'create:precision_mechanism',
                F: Item.of('thermal:flux_capacitor').ignoreNBT(),
                G: 'mekanism:hdpe_stick'
            },
            id: 'thermal:flux_drill'
        },
        {
            output: 'fluxnetworks:flux_controller',
            pattern: ['ABBBA', 'CDEDC', 'CFGFC', 'CHIHC', 'ABBBA'],
            key: {
                A: 'powah:dielectric_casing',
                B: 'fluxnetworks:flux_block',
                C: 'botania:bifrost_perm',
                D: '#botania:runes/air',
                E: '#botania:runes/asgard',
                F: 'thermal:lightning_charge',
                G: 'powah:player_transmitter_nitro',
                H: '#botania:runes/earth',
                I: '#forge:circuits/ultimate'
            },
            id: `${id_prefix}flux_controller`
        },
        {
            output: 'gunswithoutroses:iron_gun',
            pattern: ['  A ', 'BCDE', ' FGH'],
            key: {
                A: '#forge:plates/steel',
                B: Item.of('immersiveengineering:gunpart_barrel').ignoreNBT(),
                C: Item.of('immersiveengineering:gunpart_drum').ignoreNBT(),
                D: 'create:precision_mechanism',
                E: Item.of('immersiveengineering:gunpart_hammer').ignoreNBT(),
                F: '#forge:treated_wood_slab',
                G: '#forge:nuggets/steel',
                H: Item.of('immersiveengineering:wooden_grip').ignoreNBT()
            },
            id: 'gunswithoutroses:iron_gun'
        },
        {
            output: 'gunswithoutroses:gold_gun',
            pattern: ['  A ', 'BCDE', ' FGH'],
            key: {
                A: '#forge:plates/gold',
                B: Item.of('immersiveengineering:gunpart_barrel').ignoreNBT(),
                C: Item.of('immersiveengineering:gunpart_drum').ignoreNBT(),
                D: 'create:precision_mechanism',
                E: Item.of('immersiveengineering:gunpart_hammer').ignoreNBT(),
                F: '#forge:treated_wood_slab',
                G: '#forge:nuggets/steel',
                H: Item.of('immersiveengineering:wooden_grip').ignoreNBT()
            },
            id: 'gunswithoutroses:gold_gun'
        },
        {
            output: 'gunswithoutroses:diamond_shotgun',
            pattern: ['  ABA ', 'CCCDEF', 'CCCDEF', ' I GH '],
            key: {
                A: '#forge:plates/steel',
                B: '#forge:plates/diamond',
                C: 'pneumaticcraft:cannon_barrel',
                D: Item.of('immersiveengineering:gunpart_hammer').ignoreNBT(),
                E: 'create:precision_mechanism',
                F: '#forge:treated_wood',
                G: '#forge:nuggets/steel',
                H: Item.of('immersiveengineering:wooden_grip').ignoreNBT(),
                I: '#forge:wires/steel'
            },
            id: 'gunswithoutroses:diamond_shotgun'
        },
        {
            output: 'gunswithoutroses:diamond_sniper',
            pattern: ['   ABA ', 'CCCCDEF', ' IIIGHF'],
            key: {
                A: '#forge:plates/diamond',
                B: 'immersiveengineering:toolupgrade_railgun_scope',
                C: Item.of('immersiveengineering:gunpart_barrel').ignoreNBT(),
                D: Item.of('immersiveengineering:gunpart_hammer').ignoreNBT(),
                E: 'create:precision_mechanism',
                F: '#forge:treated_wood',
                G: '#forge:nuggets/steel',
                H: Item.of('immersiveengineering:wooden_grip').ignoreNBT(),
                I: '#forge:plates/steel'
            },
            id: 'gunswithoutroses:diamond_sniper'
        },
        {
            output: 'gunswithoutroses:diamond_gatling',
            pattern: ['   AAA ', 'BBBCDCE', 'BBBFGHE', 'III JK '],
            key: {
                A: '#forge:inlays/pewter',
                B: Item.of('immersiveengineering:gunpart_barrel').ignoreNBT(),
                C: 'create:encased_chain_drive',
                D: 'create:adjustable_chain_gearshift',
                E: '#forge:treated_wood',
                F: Item.of('immersiveengineering:gunpart_drum').ignoreNBT(),
                G: 'create:precision_mechanism',
                H: '#forge:gears/steel',
                I: '#forge:wires/steel',
                J: '#forge:nuggets/steel',
                K: Item.of('immersiveengineering:wooden_grip').ignoreNBT()
            },
            id: 'gunswithoutroses:diamond_gatling'
        },
        {
            output: 'meetyourfight:phantasmal_rifle',
            pattern: ['   ABA ', 'CCCCDEF', ' IIIGHF'],
            key: {
                A: '#forge:inlays/arcane_gold',
                B: 'meetyourfight:phantoplasm',
                C: Item.of('immersiveengineering:gunpart_barrel').ignoreNBT(),
                D: Item.of('immersiveengineering:gunpart_hammer').ignoreNBT(),
                E: 'create:precision_mechanism',
                F: '#forge:treated_wood',
                G: '#forge:nuggets/steel',
                H: Item.of('immersiveengineering:wooden_grip').ignoreNBT(),
                I: '#forge:plates/electrum'
            },
            id: 'meetyourfight:phantasmal_rifle'
        },
        {
            output: 'meetyourfight:cocktail_shotgun',
            pattern: ['   AAA ', 'BBBCDCE', 'BBBFGHE', 'ILI JK '],
            key: {
                A: '#forge:inlays/pewter',
                B: Item.of('immersiveengineering:gunpart_barrel').ignoreNBT(),
                C: 'create:encased_chain_drive',
                D: 'create:adjustable_chain_gearshift',
                E: '#forge:treated_wood',
                F: Item.of('immersiveengineering:gunpart_drum').ignoreNBT(),
                G: 'create:precision_mechanism',
                H: '#forge:gears/enderium',
                I: '#forge:wires/steel',
                J: '#forge:nuggets/steel',
                K: Item.of('immersiveengineering:wooden_grip').ignoreNBT(),
                L: 'meetyourfight:fortunes_favor'
            },
            id: 'meetyourfight:cocktail_shotgun'
        },
        {
            output: 'industrialforegoing:mob_duplicator',
            pattern: ['ABCBA', 'BDEFB', 'CGHGC', 'BFIDB', 'ABCBA'],
            key: {
                A: 'powah:dielectric_casing',
                B: '#forge:plastic',
                C: 'powah:capacitor_nitro',
                D: '#forge:circuits/elite',
                E: 'rftoolsutility:spawner',
                F: 'ars_nouveau:greater_experience_gem',
                G: Item.of('pneumaticcraft:huge_tank').ignoreNBT(),
                H: 'botania:spawner_mover',
                I: '#industrialforegoing:machine_frame/supreme'
            },
            id: 'industrialforegoing:mob_duplicator'
        },
        {
            output: 'industrialforegoing:mycelial_reactor',
            pattern: ['ABCCCBA', 'BDEFEDB', 'CEDGDEC', 'CFHIJFC', 'CEDKDEC', 'BDEFEDB', 'ABCCCBA'],
            key: {
                A: 'minecraft:shroomlight',
                B: 'thermal:enderium_glass',
                C: '#forge:plastic',
                D: 'kubejs:celestial_mycelium_filaments',
                E: 'mekanismgenerators:fusion_reactor_frame',
                F: '#forge:circuits/ultimate',
                G: 'undergarden:ink_mushroom_cap',
                H: 'betterendforge:mossy_glowshroom_cap',
                I: 'astralsorcery:shifting_star',
                J: 'minecraft:red_mushroom_block',
                K: 'byg:soul_shroom_block'
            },
            id: 'industrialforegoing:mycelial_reactor'
        },
        {
            output: 'immersiveengineering:cloche',
            pattern: [' AAA ', ' ABA ', ' A A ', ' CDC ', 'CEFEC'],
            key: {
                A: 'thermal:lumium_glass',
                B: 'immersiveengineering:electron_tube',
                C: '#forge:treated_wood',
                D: 'industrialforegoing:hydroponic_bed',
                E: 'immersiveengineering:component_steel',
                F: 'pneumaticcraft:fluid_mixer'
            },
            id: 'immersiveengineering:crafting/cloche'
        },
        {
            output: 'industrialforegoing:infinity_drill',
            pattern: ['  AAA', '  BBA', ' CDBA', 'CECF ', 'GCF  '],
            key: {
                A: 'rftoolsbase:infused_diamond',
                B: '#forge:storage_blocks/hepatizon',
                C: '#forge:plastic',
                D: Item.of('mekanism:elite_induction_cell').ignoreNBT(),
                E: 'thermal:upgrade_augment_3',
                F: Item.of('immersiveengineering:wooden_grip').ignoreNBT(),
                G: Item.of('pneumaticcraft:huge_tank').ignoreNBT()
            },
            id: 'industrialforegoing:dissolution_chamber/infinity_drill'
        },
        {
            output: 'industrialforegoing:infinity_trident',
            pattern: ['   AA', '  BBA', ' CDB ', 'CEC  ', 'GC   '],
            key: {
                A: 'rftoolsbase:infused_diamond',
                B: '#forge:storage_blocks/hepatizon',
                C: '#forge:plastic',
                D: Item.of('mekanism:elite_induction_cell').ignoreNBT(),
                E: 'thermal:upgrade_augment_3',
                G: Item.of('pneumaticcraft:huge_tank').ignoreNBT()
            },
            id: 'industrialforegoing:dissolution_chamber/infinity_trident'
        },
        {
            output: 'industrialforegoing:infinity_saw',
            pattern: ['   AB', '  ABA', ' CDA ', 'CECF ', 'GCF  '],
            key: {
                A: 'rftoolsbase:infused_diamond',
                B: '#forge:storage_blocks/hepatizon',
                C: '#forge:plastic',
                D: Item.of('mekanism:elite_induction_cell').ignoreNBT(),
                E: 'thermal:upgrade_augment_3',
                F: Item.of('immersiveengineering:wooden_grip').ignoreNBT(),
                G: Item.of('pneumaticcraft:huge_tank').ignoreNBT()
            },
            id: 'industrialforegoing:dissolution_chamber/infinity_saw'
        },
        {
            output: 'industrialforegoing:infinity_hammer',
            pattern: ['  BA ', '  ABA', ' CDAB', 'CEC  ', 'GC   '],
            key: {
                A: 'rftoolsbase:infused_diamond',
                B: '#forge:storage_blocks/hepatizon',
                C: '#forge:plastic',
                D: Item.of('mekanism:elite_induction_cell').ignoreNBT(),
                E: 'thermal:upgrade_augment_3',
                G: Item.of('pneumaticcraft:huge_tank').ignoreNBT()
            },
            id: 'industrialforegoing:dissolution_chamber/infinity_hammer'
        },
        {
            output: 'industrialforegoing:infinity_launcher',
            pattern: ['   A ', '  BAA', ' CDB ', 'CEC  ', 'GCF  '],
            key: {
                A: 'thermal:cured_rubber_block',
                B: '#forge:storage_blocks/hepatizon',
                C: '#forge:plastic',
                D: Item.of('mekanism:elite_induction_cell').ignoreNBT(),
                E: 'thermal:upgrade_augment_3',
                F: Item.of('immersiveengineering:wooden_grip').ignoreNBT(),
                G: Item.of('pneumaticcraft:huge_tank').ignoreNBT()
            },
            id: 'industrialforegoing:dissolution_chamber/infinity_launcher'
        },
        {
            output: 'industrialforegoing:infinity_nuke',
            pattern: [' CCC ', 'CAEAC', 'BFGFB', 'CAEAC', 'HDIDH'],
            key: {
                A: 'thermal:earth_tnt',
                B: '#forge:storage_blocks/hepatizon',
                C: '#forge:plastic',
                D: Item.of('mekanism:elite_induction_cell').ignoreNBT(),
                E: Item.of('tconstruct:copper_can', '{fluid:"industrialforegoing:ether_gas"}'),
                F: '#forge:alloys/ultimate',
                G: '#forge:pellets/plutonium',
                H: 'mekanism:hdpe_rod',
                I: Item.of('pneumaticcraft:huge_tank').ignoreNBT()
            },
            id: 'industrialforegoing:dissolution_chamber/infinity_nuke'
        },
        {
            output: 'industrialforegoing:dissolution_chamber',
            pattern: ['ABCBA', 'BDCDB', 'ECFCE', 'BGHGB', 'ABIBA'],
            key: {
                A: '#forge:alloys/elite',
                B: '#forge:plastic',
                C: 'mekanism:elite_mechanical_pipe',
                D: '#forge:gears/enderium',
                E: Item.of('mekanism:elite_fluid_tank').ignoreNBT(),
                F: Item.of('pneumaticcraft:smart_chest').ignoreNBT(),
                G: 'mekanism:superheating_element',
                H: Item.of('immersiveengineering:capacitor_hv').ignoreNBT(),
                I: '#industrialforegoing:machine_frame/pity'
            },
            id: 'industrialforegoing:dissolution_chamber'
        },
        {
            output: 'mekanism:meka_tool',
            pattern: ['AAABB', ' CDE ', 'AAABB', '  F  '],
            key: {
                A: 'mekanism:hdpe_sheet',
                B: 'powah:dielectric_rod_horizontal',
                C: 'immersiveengineering:toolupgrade_shield_magnet',
                D: [
                    Item.of('mininggadgets:mininggadget_simple').ignoreNBT(),
                    Item.of('mininggadgets:mininggadget').ignoreNBT(),
                    Item.of('mininggadgets:mininggadget_fancy').ignoreNBT()
                ],
                E: Item.of('mekanism:laser_amplifier').ignoreNBT(),
                F: 'thermal:upgrade_augment_3'
            },
            id: 'mekanism:meka_tool'
        },
        {
            output: 'masterfulmachinery:auto_iridescent_altar_controller',
            pattern: ['ABCBA', 'BDEDB', 'CJFKC', 'BGHGB', 'ABIBA'],
            key: {
                A: 'thermal:enderium_glass',
                B: '#forge:plates/steel',
                C: 'xnet:advanced_connector_green',
                D: 'xnet:netcable_green',
                E: Item.of('rftoolsbase:tablet').ignoreNBT(),
                F: '#industrialforegoing:machine_frame/supreme',
                G: 'xnet:netcable_red',
                H: '#forge:circuits/ultimate',
                I: 'xnet:advanced_connector_red',
                J: 'kubejs:bright_constellation_box',
                K: 'kubejs:dim_constellation_box'
            },
            id: `${id_prefix}auto_iridescent_altar_controller`
        },
        {
            output: 'masterfulmachinery:stellar_neutron_activator_controller',
            pattern: ['ABCBA', 'BDDDB', 'EDFDE', 'BDDDB', 'ABCBA'],
            key: {
                A: 'immersiveengineering:hempcrete',
                B: 'mekanism:thermal_evaporation_block',
                C: Item.of('mekanism:resistive_heater').ignoreNBT(),
                D: 'mekanism:ultimate_thermodynamic_conductor',
                E: 'mekanism:thermal_evaporation_valve',
                F: 'mekanism:thermal_evaporation_controller'
            },
            id: `${id_prefix}stellar_neutron_activator_controller`
        },
        {
            output: 'masterfulmachinery:industrial_deuterium_plant_controller',
            pattern: ['ABCBA', 'CDFDC', 'BFGFB', 'CDEDC', 'ABCBA'],
            key: {
                A: 'immersiveengineering:concrete_leaded',
                B: '#forge:plates/steel',
                C: '#forge:plates/osmium',
                D: '#forge:rods/osmium',
                E: '#forge:circuits/ultimate',
                F: 'mekanism:electrolytic_core',
                G: '#industrialforegoing:machine_frame/supreme'
            },
            id: `${id_prefix}industrial_deuterium_plant_controller`
        },
        {
            output: 'thermal:machine_pyrolyzer',
            pattern: ['AAAAA', 'AACAA', 'AADAA', 'AEFEA', 'AGGGA'],
            key: {
                A: 'immersiveengineering:cokebrick',
                C: 'thermal:machine_frame',
                D: Item.of('thermal:fluid_cell').ignoreNBT(),
                E: '#forge:gears/constantan',
                F: 'botania:blaze_block',
                G: 'immersiveengineering:coil_mv'
            },
            id: 'thermal:machine_pyrolyzer'
        }
    ];

    powahTiers.forEach(function (tier) {
        if (tier == 'starter') {
            return;
        }
        let casingMaterial = `#forge:storage_blocks/${tier}`;
        if (tier == 'basic') {
            casingMaterial = '#forge:storage_blocks/lead';
        } else if (tier == 'hardened') {
            casingMaterial = '#forge:storage_blocks/energized_steel';
        }

        recipes.push({
            output: Item.of(`powah:reactor_${tier}`, 36),
            pattern: ['ABBBA', 'CPPPP', 'CDDDE', 'FGMLE', 'NGOKE', 'HIIKJ', 'ABBBA'],
            key: {
                A: 'powah:dielectric_casing',
                B: casingMaterial,
                C: Item.of(`powah:energy_cell_${tier}`).ignoreNBT(),
                D: Item.of(`powah:thermo_generator_${tier}`).ignoreNBT(),
                E: 'thermal:fluid_cell_frame',
                F: 'xnet:advanced_connector_green',
                G: 'xnet:netcable_green',
                H: 'xnet:advanced_connector_red',
                I: 'xnet:netcable_red',
                J: 'xnet:advanced_connector_blue',
                K: 'xnet:netcable_blue',
                L: 'pneumaticcraft:heat_pipe',
                M: 'kubejs:spirit_entropic_gateway',
                N: 'xnet:controller',
                O: Item.of(`powah:furnator_${tier}`).ignoreNBT(),
                P: 'create:fluid_pipe'
            },
            id: `powah:crafting/reactor_${tier}`
        });
    });

    const compactmachines = [
        { tier: 'tiny', comb: 'forest' },
        { tier: 'small', comb: 'aluminum' },
        { tier: 'normal', comb: 'zinc' },
        { tier: 'large', comb: 'uranium' },
        { tier: 'giant', comb: 'cobalt' },
        { tier: 'maximum', comb: 'industrious' }
    ];

    compactmachines.forEach((compactmachine) => {
        recipes.push({
            output: `compactmachines:machine_${compactmachine.tier}`,
            pattern: ['AABAA', 'ACCCA', 'DCECF', 'ACCCA', 'AAGAA'],
            key: {
                A: 'compactmachines:wall',
                B: 'portality:module_energy',
                C: `resourcefulbees:${compactmachine.comb}_honeycomb_block`,
                D: 'portality:module_items',
                E: 'portality:controller',
                F: 'portality:module_fluids',
                G: 'portality:module_interdimensional'
            },
            id: `${id_prefix}compact_machine_${compactmachine.tier}`
        });
    });

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
