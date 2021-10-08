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
                M: 'kubejs:spirit_heat_exchanger',
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
