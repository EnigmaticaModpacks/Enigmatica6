onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/shaped';

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
            output: 'kubejs:pneumatic_helmet_package',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'pneumaticcraft:air_canister',
                B: 'pneumaticcraft:printed_circuit_board',
                C: Item.of('pneumaticcraft:compressed_iron_helmet', '{Damage:0}').weakNBT(),
                D: 'mekanism:cardboard_box'
            },
            id: 'pneumaticcraft:pneumatic_helmet'
        },
        {
            output: 'kubejs:pneumatic_chestplate_package',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'pneumaticcraft:air_canister',
                B: 'pneumaticcraft:printed_circuit_board',
                C: Item.of('pneumaticcraft:compressed_iron_chestplate', '{Damage:0}').weakNBT(),
                D: 'mekanism:cardboard_box'
            },
            id: 'pneumaticcraft:pneumatic_chestplate'
        },
        {
            output: 'kubejs:pneumatic_leggings_package',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'pneumaticcraft:air_canister',
                B: 'pneumaticcraft:printed_circuit_board',
                C: Item.of('pneumaticcraft:compressed_iron_leggings', '{Damage:0}').weakNBT(),
                D: 'mekanism:cardboard_box'
            },
            id: 'pneumaticcraft:pneumatic_leggings'
        },
        {
            output: 'kubejs:pneumatic_boots_package',
            pattern: ['ABA', 'ACA', ' D '],
            key: {
                A: 'pneumaticcraft:air_canister',
                B: 'pneumaticcraft:printed_circuit_board',
                C: Item.of('pneumaticcraft:compressed_iron_boots', '{Damage:0}').weakNBT(),
                D: 'mekanism:cardboard_box'
            },
            id: 'pneumaticcraft:pneumatic_boots'
        },
        {
            output: 'pneumaticcraft:armor_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#pneumaticcraft:upgrade_components',
                B: '#mekanism:enriched/diamond',
                C: '#forge:ingots/compressed_iron'
            },
            id: 'pneumaticcraft:armor_upgrade'
        },
        {
            output: 'pneumaticcraft:flippers_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#pneumaticcraft:upgrade_components',
                B: '#pneumaticcraft:plastic_sheets',
                C: Item.of('thermal:diving_boots', '{Damage:0}').weakNBT()
            },
            id: 'pneumaticcraft:flippers_upgrade'
        },
        {
            output: 'pneumaticcraft:magnet_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#pneumaticcraft:upgrade_components',
                B: '#pneumaticcraft:plastic_sheets',
                C: 'thermal:flux_magnet'
            },
            id: 'pneumaticcraft:magnet_upgrade'
        },
        {
            output: Item.of(
                'pneumaticcraft:liquid_compressor',
                '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'
            ),
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'supplementaries:bellows',
                B: 'pneumaticcraft:small_tank',
                C: '#forge:gears/compressed_iron',
                D: 'thermal:machine_frame',
                E: 'pneumaticcraft:pressure_tube',
                F: 'thermal:upgrade_augment_1'
            },
            id: 'pneumaticcraft:liquid_compressor'
        },
        {
            output: Item.of('12x pneumaticcraft:pressure_tube'),
            pattern: ['ABA'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: '#thermal:glass/hardened'
            },
            id: 'pneumaticcraft:pressure_tube'
        },
        {
            output: 'pneumaticcraft:small_tank',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'create:andesite_alloy',
                B: '#thermal:glass/hardened',
                C: 'mekanism:basic_fluid_tank'
            },
            id: 'pneumaticcraft:small_tank'
        },
        {
            output: Item.of(
                'pneumaticcraft:pressure_chamber_valve',
                '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'
            ),
            pattern: [' A ', 'CBC'],
            key: {
                A: 'thermal:upgrade_augment_1',
                B: 'pneumaticcraft:pressure_chamber_wall',
                C: 'pneumaticcraft:pressure_tube'
            },
            id: 'pneumaticcraft:pressure_chamber_valve'
        },
        {
            output: 'pneumaticcraft:pressure_chamber_interface',
            pattern: [' A ', 'CBC', ' A '],
            key: {
                A: 'thermal:redstone_servo',
                B: 'pneumaticcraft:pressure_chamber_wall',
                C: '#forge:gears/compressed_iron'
            },
            id: 'pneumaticcraft:pressure_chamber_interface'
        },
        {
            output: 'pneumaticcraft:safety_tube_module',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'pneumaticcraft:pressure_gauge',
                B: 'pneumaticcraft:pressure_tube',
                C: 'thermal:redstone_servo'
            },
            id: 'pneumaticcraft:safety_tube_module'
        },
        {
            output: 'pneumaticcraft:pressure_gauge',
            pattern: ['AB ', 'BCB', ' BA'],
            key: {
                A: 'minecraft:paper',
                B: '#forge:nuggets/signalum',
                C: '#forge:nuggets/iron'
            },
            id: 'pneumaticcraft:pressure_gauge'
        },
        {
            output: 'pneumaticcraft:pressure_gauge_module',
            pattern: [' A ', 'BCB'],
            key: {
                A: 'pneumaticcraft:pressure_gauge',
                B: '#forge:nuggets/signalum',
                C: 'pneumaticcraft:pressure_tube'
            },
            id: 'pneumaticcraft:pressure_gauge_module'
        },
        {
            output: Item.of(
                'pneumaticcraft:advanced_liquid_compressor',
                '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'
            ),
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'pneumaticcraft:heat_pipe',
                B: '#forge:circuits/basic',
                C: 'pneumaticcraft:advanced_pressure_tube',
                D: 'pneumaticcraft:liquid_compressor',
                E: 'thermal:upgrade_augment_2'
            },
            id: 'pneumaticcraft:advanced_liquid_compressor'
        },
        {
            output: Item.of(
                'pneumaticcraft:electrostatic_compressor',
                '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'
            ),
            pattern: ['ABA', 'FDG', 'CEC'],
            key: {
                A: '#botania:runes/air',
                B: '#forge:circuits/basic',
                C: 'pneumaticcraft:advanced_pressure_tube',
                D: 'thermal:machine_frame',
                E: 'thermal:upgrade_augment_3',
                F: 'supplementaries:bellows',
                G: 'pneumaticcraft:turbine_rotor'
            },
            id: 'pneumaticcraft:electrostatic_compressor'
        },
        {
            output: Item.of(
                'pneumaticcraft:thermal_compressor',
                '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'
            ),
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'pneumaticcraft:pressure_tube',
                C: 'powah:thermoelectric_plate',
                D: '#industrialforegoing:machine_frame/pity'
            },
            id: 'pneumaticcraft:thermal_compressor'
        },
        {
            output: 'pneumaticcraft:advanced_pcb',
            pattern: ['ABA', 'BCB', 'ADA'],
            key: {
                A: '#forge:wires/copper',
                B: 'rftoolscontrol:ram_chip',
                C: 'immersiveengineering:logic_circuit',
                D: 'immersiveengineering:connector_probe'
            },
            id: `${id_prefix}advanced_pcb_alternate`
        },
        {
            output: Item.of('24x pneumaticcraft:programming_puzzle'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#pneumaticcraft:plastic_sheets',
                B: 'pneumaticcraft:printed_circuit_board'
            },
            id: 'pneumaticcraft:programming_puzzle'
        },
        {
            output: 'pneumaticcraft:pneumatic_dynamo',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'thermal:rf_coil',
                B: 'pneumaticcraft:turbine_rotor',
                C: 'pneumaticcraft:printed_circuit_board',
                D: '#forge:gears/compressed_iron',
                E: 'thermal:machine_frame'
            },
            id: 'pneumaticcraft:pneumatic_dynamo'
        },
        {
            output: Item.of('6x pneumaticcraft:thermal_lagging'),
            pattern: ['AAA', 'BBB', 'AAA'],
            key: {
                A: '#forge:glass_panes/black',
                B: 'thermal:gray_rockwool'
            },
            id: 'pneumaticcraft:thermal_lagging'
        },
        {
            output: 'pneumaticcraft:refinery',
            pattern: ['ADA', 'BCB', 'ABA'],
            key: {
                A: 'pneumaticcraft:reinforced_bricks',
                B: 'mekanism:superheating_element',
                C: 'pneumaticcraft:small_tank',
                D: 'mekanism:basic_mechanical_pipe'
            },
            id: 'pneumaticcraft:refinery'
        },
        {
            output: 'pneumaticcraft:refinery_output',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: 'pneumaticcraft:reinforced_bricks',
                B: 'mekanism:basic_mechanical_pipe',
                C: 'pneumaticcraft:small_tank'
            },
            id: 'pneumaticcraft:refinery_output'
        },
        {
            output: 'pneumaticcraft:uv_light_box',
            pattern: ['AAA', 'CDE', 'BBB'],
            key: {
                A: 'architects_palette:abyssaline_lamp',
                B: 'pneumaticcraft:reinforced_stone_slab',
                C: 'glassential:glass_dark',
                D: 'pneumaticcraft:pcb_blueprint',
                E: 'pneumaticcraft:pressure_tube'
            },
            id: 'pneumaticcraft:uv_light_box'
        },
        {
            output: 'pneumaticcraft:jet_boots_upgrade_1',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'pneumaticcraft:upgrade_matrix',
                B: 'pneumaticcraft:advanced_pressure_tube',
                C: 'pneumaticcraft:vortex_cannon',
                D: 'pneumaticcraft:pressure_chamber_valve'
            },
            id: 'pneumaticcraft:jet_boots_upgrade_1'
        },
        {
            output: 'pneumaticcraft:jet_boots_upgrade_2',
            pattern: ['DCD', 'ABA', 'EFE'],
            key: {
                A: 'pneumaticcraft:vortex_cannon',
                B: 'pneumaticcraft:jet_boots_upgrade_1',
                C: 'tconstruct:sky_slime_crystal',
                D: '#forge:circuits/basic',
                E: 'pneumaticcraft:pneumatic_cylinder',
                F: Item.of('minecraft:potion', '{Potion:"undergarden:featherweight"}')
            },
            id: 'pneumaticcraft:jet_boots_upgrade_2'
        },
        {
            output: 'pneumaticcraft:jet_boots_upgrade_3',
            pattern: ['DCD', 'ABA', 'ECE'],
            key: {
                A: 'pneumaticcraft:vortex_cannon',
                B: 'pneumaticcraft:jet_boots_upgrade_2',
                C: '#forge:gems/blazing',
                D: '#forge:circuits/elite',
                E: 'thermal:lightning_charge'
            },
            id: 'pneumaticcraft:jet_boots_upgrade_3'
        },
        {
            output: 'pneumaticcraft:jet_boots_upgrade_4',
            pattern: ['DCD', 'ABA', 'ECE'],
            key: {
                A: 'pneumaticcraft:vortex_cannon',
                B: 'pneumaticcraft:jet_boots_upgrade_3',
                C: Item.of('tconstruct:copper_can', '{fluid:"industrialforegoing:ether_gas"}'),
                D: '#forge:circuits/ultimate',
                E: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:long_slow_falling"}')
            },
            id: 'pneumaticcraft:jet_boots_upgrade_4'
        },
        {
            output: 'pneumaticcraft:jet_boots_upgrade_5',
            pattern: ['DCD', 'ABA', 'ECE'],
            key: {
                A: 'pneumaticcraft:vortex_cannon',
                B: 'pneumaticcraft:jet_boots_upgrade_4',
                C: 'betterendforge:eternal_crystal',
                D: '#botania:runes/summer',
                E: Item.of('minecraft:lingering_potion', '{Potion:"minecraft:long_slow_falling"}')
            },
            id: 'pneumaticcraft:jet_boots_upgrade_5'
        },
        {
            output: 'pneumaticcraft:vacuum_trap',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'engineersdecor:iron_hatch',
                C: 'pneumaticcraft:reinforced_bricks',
                D: 'thermal:machine_frame',
                E: 'pneumaticcraft:pressure_tube',
                F: '#botania:runes/air',
                G: 'kubejs:dimensional_storage_crystal'
            },
            id: 'pneumaticcraft:vacuum_trap'
        },
        {
            output: 'pneumaticcraft:spawner_core_shell',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'kubejs:dimensional_storage_crystal',
                B: 'pneumaticcraft:pressure_chamber_glass',
                C: 'naturesaura:calling_spirit'
            },
            id: 'pneumaticcraft:spawner_core_shell'
        },
        {
            output: Item.of('6x pneumaticcraft:heat_pipe'),
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'pneumaticcraft:thermal_lagging',
                B: '#forge:storage_blocks/compressed_iron',
                C: '#forge:storage_blocks/copper'
            },
            id: 'pneumaticcraft:heat_pipe'
        },
        {
            output: Item.of('4x pneumaticcraft:speed_upgrade'),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'pneumaticcraft:upgrade_matrix',
                B: 'pneumaticcraft:glycerol',
                C: {
                    type: 'pneumaticcraft:fluid',
                    tag: 'forge:lubricant',
                    amount: 1000
                }
            },
            id: 'pneumaticcraft:speed_upgrade_from_glycerol'
        },
        {
            output: Item.of('4x pneumaticcraft:volume_upgrade'),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'pneumaticcraft:upgrade_matrix',
                B: 'pneumaticcraft:air_canister',
                C: '#thermal:glass/hardened'
            },
            id: 'pneumaticcraft:volume_upgrade'
        },
        {
            output: Item.of(
                'pneumaticcraft:vacuum_pump',
                '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'
            ),
            pattern: ['AEA', 'CBC', 'DFD'],
            key: {
                A: 'pneumaticcraft:pressure_gauge',
                B: 'pneumaticcraft:turbine_rotor',
                C: 'pneumaticcraft:pressure_tube',
                D: 'pneumaticcraft:reinforced_stone_slab',
                E: 'pneumaticcraft:pressure_chamber_glass',
                F: 'thermal:machine_frame'
            },
            id: 'pneumaticcraft:vacuum_pump'
        },
        {
            output: 'pneumaticcraft:item_life_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'pneumaticcraft:upgrade_matrix',
                B: 'atum:isis_godshard',
                C: 'naturesaura:calling_spirit'
            },
            id: 'pneumaticcraft:item_life_upgrade'
        },
        {
            output: Item.of('4x pneumaticcraft:inventory_upgrade'),
            pattern: ['ACA', 'DBE', 'ACA'],
            key: {
                A: 'pneumaticcraft:upgrade_matrix',
                B: 'thermal:energy_cell',
                C: 'thermal:hazmat_fabric',
                D: 'thermal:satchel',
                E: 'thermal:fluid_reservoir'
            },
            id: 'pneumaticcraft:inventory_upgrade'
        },
        {
            output: 'pneumaticcraft:entity_tracker_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'pneumaticcraft:upgrade_matrix',
                B: 'kubejs:memory_basic_filled',
                C: 'botania:forest_eye'
            },
            id: 'pneumaticcraft:entity_tracker_upgrade'
        },
        {
            output: 'pneumaticcraft:night_vision_upgrade',
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: 'pneumaticcraft:upgrade_matrix',
                B: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:long_night_vision"}'),
                C: 'occultism:infused_lenses',
                D: '#forge:wires/copper'
            },
            id: 'pneumaticcraft:night_vision_upgrade'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
