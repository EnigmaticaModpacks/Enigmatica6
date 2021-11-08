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

    const recipes = [
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
            output: 'thermal:charge_bench',
            pattern: ['AAA', 'BCB', 'DBD'],
            key: {
                A: '#forge:ingots/electrum',
                B: 'thermal:rf_coil',
                C: 'thermal:energy_cell_frame',
                D: '#forge:ingots/lead'
            },
            id: 'thermal:charge_bench'
        },
        {
            output: 'thermal:upgrade_augment_1',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:gears/invar',
                B: 'thermal:energy_cell',
                C: '#xnet:connectors',
                D: 'pneumaticcraft:advanced_pcb',
                E: 'thermal:fluid_cell'
            },
            id: 'thermal:augments/upgrade_augment_1'
        },
        {
            output: 'thermal:upgrade_augment_2',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:gears/lumium',
                B: 'rftoolscontrol:cpu_core_1000',
                C: 'kubejs:memory_advanced_filled',
                D: 'thermal:upgrade_augment_1',
                E: 'powah:capacitor_hardened'
            },
            id: 'thermal:augments/upgrade_augment_2'
        },
        {
            output: 'thermal:upgrade_augment_3',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:gears/enderium',
                B: 'rftoolscontrol:cpu_core_2000',
                C: 'kubejs:memory_elite_filled',
                D: 'thermal:upgrade_augment_2',
                E: 'powah:capacitor_niotic'
            },
            id: 'thermal:augments/upgrade_augment_3'
        },
        {
            output: 'thermal:tinker_bench',
            pattern: ['ABC', 'DED', 'FGF'],
            key: {
                A: 'immersiveengineering:screwdriver',
                B: 'immersiveengineering:wirecutter',
                C: 'immersiveengineering:hammer',
                D: '#forge:plates/lead',
                E: '#create:toolboxes',
                F: 'thermal:rf_coil',
                G: 'engineersdecor:metal_crafting_table'
            },
            id: 'thermal:tinker_bench'
        },
        {
            output: 'thermal:device_collector',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:sheetmetals/lead',
                B: 'minecraft:lodestone',
                C: '#thermal:glass/hardened',
                D: 'pneumaticcraft:omnidirectional_hopper',
                E: 'thermal:redstone_servo'
            },
            id: 'thermal:device_collector'
        },
        {
            output: 'thermal:device_tree_extractor',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'create:andesite_casing',
                B: 'supplementaries:faucet',
                C: 'create:fluid_pipe',
                D: 'create:fluid_tank',
                E: 'create:tree_fertilizer'
            },
            id: 'thermal:device_tree_extractor'
        },
        {
            output: 'thermal:device_rock_gen',
            pattern: ['ABA', 'CDC', 'ECE'],
            key: {
                A: 'immersiveengineering:toolupgrade_drill_lube',
                B: 'immersiveengineering:rockcutter',
                C: 'minecraft:observer',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'powah:thermoelectric_plate'
            },
            id: 'thermal:device_rock_gen'
        },
        {
            output: 'thermal:device_water_gen',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'create:brass_casing',
                B: 'bloodmagic:reagentwater',
                C: 'create:fluid_pipe',
                D: 'create:fluid_tank',
                E: 'create:mechanical_pump'
            },
            id: 'thermal:device_water_gen'
        },
        {
            output: 'thermal:device_nullifier',
            pattern: [' A ', 'ABA', 'ACA'],
            key: {
                A: 'engineersdecor:halfslab_sheetmetal_aluminum',
                B: 'quark:cactus_block',
                C: 'create:item_drain'
            },
            id: 'thermal:device_nullifier'
        },
        {
            output: 'thermal:machine_sawmill',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'create:shaft',
                B: 'thermal:saw_blade',
                C: 'create:metal_bracket',
                D: 'thermal:machine_frame',
                E: '#forge:gears/invar',
                F: 'thermal:rf_coil'
            },
            id: 'thermal:machine_sawmill'
        },
        {
            output: 'thermal:machine_smelter',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:plates/aluminum',
                B: 'environmental:kiln',
                C: 'immersiveengineering:coil_lv',
                D: 'thermal:machine_frame',
                E: '#forge:gears/invar',
                F: 'thermal:rf_coil'
            },
            id: 'thermal:machine_smelter'
        },
        {
            output: 'thermal:machine_pulverizer',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:ingots/andesite_alloy',
                B: 'minecraft:hopper',
                C: 'create:filter',
                D: 'thermal:machine_frame',
                E: '#forge:gears/iron',
                F: 'thermal:rf_coil'
            },
            id: 'thermal:machine_pulverizer'
        },
        {
            output: 'thermal:machine_crucible',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'tconstruct:seared_bricks',
                B: 'create:basin',
                C: 'immersiveengineering:coil_lv',
                D: 'thermal:fluid_cell_frame',
                E: '#forge:gears/uranium',
                F: 'thermal:rf_coil'
            },
            id: 'thermal:machine_crucible'
        },
        {
            output: 'thermal:machine_bottler',
            pattern: ['ABC', 'ADC', 'EFC'],
            key: {
                A: '#thermal:glass/hardened',
                B: 'create:spout',
                C: 'create:fluid_pipe',
                D: 'create:depot',
                E: 'thermal:fluid_cell_frame',
                F: 'mekanism:electric_pump'
            },
            id: 'thermal:machine_bottler'
        },
        {
            output: 'thermal:machine_chiller',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'cookingforblockheads:ice_unit',
                B: 'engineersdecor:small_freezer',
                C: 'create:propeller',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'mekanismgenerators:saturating_condenser',
                F: '#forge:circuits/basic'
            },
            id: 'thermal:machine_chiller'
        },
        {
            output: 'thermal:machine_pyrolyzer',
            pattern: ['ABA', 'BCB', 'BDB'],
            key: {
                A: '#forge:sheetmetals/steel',
                B: 'immersiveengineering:blastbrick',
                C: 'thermal:fluid_cell',
                D: 'thermal:machine_furnace'
            },
            id: 'thermal:machine_pyrolyzer'
        },
        {
            output: 'thermal:machine_centrifuge',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: 'immersiveengineering:alu_wallmount',
                B: '#forge:fences/aluminum',
                C: 'thermal:fluid_cell',
                D: 'immersiveengineering:turntable',
                E: '#forge:storage_blocks/lead',
                F: '#forge:gears/constantan',
                G: 'thermal:rf_coil'
            },
            id: 'thermal:machine_centrifuge'
        },
        {
            output: 'thermal:machine_refinery',
            pattern: ['ABC', 'CBC', 'DEF'],
            key: {
                A: 'immersivepetroleum:flarestack',
                B: 'create:fluid_pipe',
                C: 'thermal:fluid_cell',
                D: 'create:blaze_burner',
                E: 'thermal:rf_coil',
                F: '#immersiveengineering:scaffoldings/steel'
            },
            id: 'thermal:machine_refinery'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
