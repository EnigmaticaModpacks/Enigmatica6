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
            pattern: [' AC', 'ABA', 'CA '],
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
                B: Item.of('thermal:energy_cell').ignoreNBT(),
                C: '#xnet:connectors',
                D: 'pneumaticcraft:advanced_pcb',
                E: Item.of('thermal:fluid_cell').ignoreNBT()
            },
            id: 'thermal:augments/upgrade_augment_1'
        },
        {
            output: 'thermal:upgrade_augment_2',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:gears/lumium',
                B: 'kubejs:cpu_core_eg_28222',
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
                B: 'kubejs:cpu_core_as_81221',
                C: 'kubejs:memory_elite_filled',
                D: 'thermal:upgrade_augment_2',
                E: 'powah:capacitor_niotic'
            },
            id: 'thermal:augments/upgrade_augment_3'
        },
        {
            output: 'thermal:tinker_bench',
            pattern: ['AE ', 'DDD', 'FGF'],
            key: {
                A: Item.of('immersiveengineering:maintenance_kit', '{Damage:0}').weakNBT(),
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
                A: '#forge:plates/iron_aluminum',
                B: 'minecraft:blast_furnace',
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
                C: '#sophisticatedbackpacks:upgrades/filter',
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
            output: 'thermal:machine_centrifuge',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: 'immersiveengineering:alu_wallmount',
                B: '#forge:fences/aluminum',
                C: Item.of('thermal:fluid_cell').ignoreNBT(),
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
                C: Item.of('thermal:fluid_cell').ignoreNBT(),
                D: 'create:blaze_burner',
                E: 'thermal:rf_coil',
                F: '#immersiveengineering:scaffoldings/steel'
            },
            id: 'thermal:machine_refinery'
        },
        {
            output: 'thermal:machine_press',
            pattern: ['ABC', 'ADC', 'EFC'],
            key: {
                A: '#forge:ingots/bronze',
                B: 'create:mechanical_press',
                C: '#forge:gears/constantan',
                D: 'thermal:machine_frame',
                E: 'thermal:rf_coil',
                F: '#forge:storage_blocks/steel'
            },
            id: 'thermal:machine_press'
        },
        {
            output: 'thermal:machine_insolator',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: 'architects_palette:abyssaline_lamp',
                B: '#botania:runes/midgard',
                C: '#botanypots:botany_pots/simple',
                D: '#forge:gears/lumium',
                E: '#industrialforegoing:machine_frame/supreme'
            },
            id: 'thermal:machine_insolator'
        },
        {
            output: 'thermal:machine_crafter',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:gears/brass',
                B: 'rftoolscontrol:craftingstation',
                C: 'thermal:redstone_servo',
                D: 'thermal:machine_frame',
                E: 'thermal:rf_coil'
            },
            id: 'thermal:machine_crafter'
        },
        {
            output: 'thermal:dynamo_stirling',
            pattern: [' A ', 'BCD', 'EFE'],
            key: {
                A: 'thermal:rf_coil',
                B: 'minecraft:glass_bottle',
                C: '#forge:rods/copper',
                D: '#forge:gears/copper',
                E: 'minecraft:smooth_stone',
                F: 'minecraft:piston'
            },
            id: 'thermal:dynamo_stirling'
        },
        {
            output: 'thermal:dynamo_compression',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'thermal:rf_coil',
                B: 'pneumaticcraft:pressure_tube',
                C: 'pneumaticcraft:pneumatic_cylinder',
                D: '#forge:gears/compressed_iron',
                E: Item.of('thermal:fluid_cell').ignoreNBT()
            },
            id: 'thermal:dynamo_compression'
        },
        {
            output: 'thermal:dynamo_magmatic',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'thermal:rf_coil',
                B: 'pneumaticcraft:reinforced_brick_tile',
                C: 'powah:thermoelectric_plate',
                D: '#forge:gears/compressed_iron',
                E: Item.of('thermal:fluid_cell').ignoreNBT()
            },
            id: 'thermal:dynamo_magmatic'
        },
        {
            output: 'thermal:dynamo_numismatic',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'thermal:rf_coil',
                B: 'ars_nouveau:warding_stone',
                C: 'minecraft:brewing_stand',
                D: 'atum:coin_gold',
                E: 'farmersdelight:cooking_pot'
            },
            id: 'thermal:dynamo_numismatic'
        },
        {
            output: 'thermal:dynamo_lapidary',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'thermal:rf_coil',
                B: 'astralsorcery:rock_crystal',
                C: 'ars_nouveau:enchanting_apparatus',
                D: '#forge:gears/cobalt',
                E: 'ars_nouveau:arcane_core'
            },
            id: 'thermal:dynamo_lapidary'
        },
        {
            output: 'thermal:machine_furnace',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'environmental:kiln',
                B: 'immersiveengineering:wirecoil_redstone',
                C: 'thermal:machine_frame',
                D: '#forge:gears/invar',
                E: 'thermal:rf_coil'
            },
            id: 'thermal:machine_furnace'
        },
        {
            output: 'thermal:dynamo_disenchantment',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'thermal:rf_coil',
                B: 'ars_nouveau:greater_experience_gem',
                C: 'ars_nouveau:enchanting_apparatus',
                D: '#forge:gears/cobalt',
                E: '#botania:runes/mana'
            },
            id: 'thermal:dynamo_disenchantment'
        },
        {
            output: 'thermal:dynamo_gourmand',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'thermal:rf_coil',
                B: '#forge:plates/cobalt',
                C: 'powah:thermoelectric_plate',
                D: '#forge:gears/uranium',
                E: 'engineersdecor:small_waste_incinerator'
            },
            id: 'thermal:dynamo_gourmand'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
