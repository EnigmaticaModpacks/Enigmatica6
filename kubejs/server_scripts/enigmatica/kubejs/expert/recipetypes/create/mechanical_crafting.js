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
        /*{
            output: Item.of('immersiveengineering:blastbrick', 9),
            pattern: ['ADA', 'CBC', 'AEA'],
            key: {
                C: 'immersiveengineering:cokebrick',
                B: 'minecraft:blast_furnace',
                A: 'minecraft:red_nether_bricks',
                D: 'thermal:fire_tnt',
                E: '#forge:storage_blocks/coal_coke'
            },
            id: 'immersiveengineering:crafting/blastbrick'
        },*/
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
                B: 'powah:capacitor_nitro',
                C: 'pneumaticcraft:turbine_rotor',
                D: 'mekanism:basic_control_circuit',
                E: 'pneumaticcraft:advanced_pressure_tube',
                F: '#forge:gears/compressed_iron',
                G: 'powah:thermo_generator_nitro',
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
                E: 'pneumaticcraft:pneumatic_dynamo'
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
                E: 'pneumaticcraft:pneumatic_dynamo'
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
                E: 'pneumaticcraft:pneumatic_dynamo'
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
                E: 'pneumaticcraft:pneumatic_dynamo'
            },
            id: `${id_prefix}assembly_io_unit_export`
        },
        {
            output: 'pneumaticcraft:assembly_controller',
            pattern: ['AAA ', 'BCCA', '  CA', 'DDED'],
            key: {
                A: 'prettypipes:pipe',
                B: 'rftoolsutility:screen',
                C: 'pneumaticcraft:printed_circuit_board',
                D: 'pneumaticcraft:reinforced_stone_slab',
                E: 'pneumaticcraft:pneumatic_dynamo'
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
                C: 'powah:capacitor_blazing',
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
                A: 'pneumaticcraft:pressure_tube',
                B: 'alexsmobs:hemolymph_sac',
                C: '#industrialforegoing:machine_frame/advanced',
                D: 'alexsmobs:warped_muscle',
                E: 'pneumaticcraft:drill_pipe',
                F: 'pneumaticcraft:spawner_agitator'
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
            pattern: ['ABBBA', 'CDEDC', 'CFGFC', 'CHIHC', 'ABBBA'],
            key: {
                A: 'pneumaticcraft:logistics_core',
                B: 'integrateddynamics:crystalized_menril_block',
                C: 'integrateddynamics:menril_wood',
                D: 'extrastorage:neural_processor',
                E: '#forge:circuits/basic',
                F: 'pneumaticcraft:smart_chest',
                G: 'refinedstorage:machine_casing',
                H: 'pneumaticcraft:upgrade_matrix',
                I: 'pneumaticcraft:remote'
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
            pattern: ['ABC', 'DEF', 'DEF', 'DGF'],
            key: {
                A: 'pneumaticcraft:turbine_rotor',
                B: 'immersiveengineering:dynamo',
                C: '#forge:gears/compressed_iron',
                D: 'pneumaticcraft:plastic',
                E: 'engineersdecor:thick_steel_pole',
                F: 'powah:capacitor_basic_large',
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
                F: 'rftoolsbase:tablet',
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
                E: 'mekanism:ultimate_chemical_tank',
                F: 'rftoolsutility:environmental_controller',
                G: '#forge:circuits/ultimate',
                H: 'mekanism:ultimate_fluid_tank',
                I: 'rftoolsbase:tablet'
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
                D: 'rftoolsbase:tablet',
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
                F: 'industrialforegoing:laser_lens2',
                G: 'thermal:upgrade_augment_2',
                H: 'immersiveengineering:wooden_grip'
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
                F: 'industrialforegoing:laser_lens6',
                G: 'thermal:upgrade_augment_2',
                H: 'immersiveengineering:wooden_grip'
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
                F: 'industrialforegoing:laser_lens3',
                G: 'thermal:upgrade_augment_2',
                H: 'immersiveengineering:wooden_grip'
            },
            id: 'mininggadgets:mininggadget'
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
                C: `powah:energy_cell_${tier}`,
                D: `powah:thermo_generator_${tier}`,
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
                O: `powah:furnator_${tier}`,
                P: 'create:fluid_pipe'
            },
            id: `powah:crafting/reactor_${tier}`
        });
    });

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
