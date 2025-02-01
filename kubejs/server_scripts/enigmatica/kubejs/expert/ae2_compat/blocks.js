

onEvent('recipes', (event) => {
    if (!isAE2Loaded) {
        return;
    }
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ae2_compat/blocks/';
    const recipesIDs = [
        "appliedenergistics2:network/blocks/interfaces_interface",
        "appliedenergistics2:network/blocks/fluid_interfaces_interface",
        "appliedenergistics2:network/blocks/quantum_link",
        "appliedenergistics2:network/blocks/energy_energy_acceptor",
        "appliedenergistics2:network/blocks/controller",
        "appliedenergistics2:network/blocks/energy_energy_cell",
        "appliedenergistics2:network/blocks/storage_drive",
        "appliedenergistics2:network/blocks/spatial_io_pylon",
        "appliedenergistics2:network/parts/storage_bus",
        "appliedenergistics2:network/parts/import_bus",
        "appliedenergistics2:network/parts/export_bus",
        "appliedenergistics2:network/cables/glass_fluix",
        "appliedenergistics2:network/crafting/molecular_assembler",
        "appliedenergistics2:network/wireless_access_point",
        "appliedenergistics2:network/parts/storage_bus_fluid",
        "appliedenergistics2:network/parts/import_bus_fluid",
        "appliedenergistics2:network/parts/export_bus_fluid"
    ]
    recipesIDs.forEach((recipesID) => {
        event.remove({ id: recipesID });
    });
    const recipes = [
        {
            output: 'fluid_interface',
            patterns: [
                'IA ',
                'GB ',
                '   '
            ],
            inputs: {
                I: 'appliedenergistics2:interface',
                G: 'minecraft:green_dye',
                A: 'refinedstorage:advanced_processor',
                B: 'minecraft:bucket'
            }
        },
        {
            output: 'interface',
            patterns: [
                'EAE',
                'DSC',
                'EAE'
            ],
            inputs: {
                S: 'create:empty_schematic',
                E: 'refinedstorage:quartz_enriched_iron',
                A: 'refinedstorage:advanced_processor',
                D: 'refinedstorage:destruction_core',
                C: 'refinedstorage:construction_core'
            }
        },
        {
            output: 'energy_acceptor',
            patterns: [
                'SES',
                'ECE',
                'SES'
            ],
            inputs: {
                S: 'tconstruct:slimesteel_ingot',
                E: 'mekanism:elite_universal_cable',
                C: 'powah:capacitor_basic_large'
            }
        },
        {
            output: 'energy_cell',
            patterns: [
                'ACA',
                'CQC',
                'ACA'
            ],
            inputs: {
                C: 'powah:capacitor_basic_large',
                A: 'astralsorcery:aquamarine',
                Q: 'appliedenergistics2:quartz_glass'
            }
        },
        {
            output: 'drive',
            patterns: [
                'ENE',
                'LSL',
                'ENE'
            ],
            inputs: {
                N: 'extrastorage:neural_processor',
                E: 'mekanism:elite_control_circuit',
                L: 'immersiveengineering:logic_unit',
                S: 'appliedenergistics2:sky_dust'
            }
        },
        {
            output: 'storage_bus',
            patterns: [
                'SC ',
                'IB ',
                'SD '
            ],
            inputs: {
                B: '#xnet:connectors',
                C: 'refinedstorage:construction_core',
                I: 'refinedstorage:improved_processor',
                D: 'refinedstorage:destruction_core',
                S: 'occultism:spirit_attuned_gem'
            }
        },
        {
            output: 'import_bus',
            patterns: [
                'SD ',
                'IC ',
                'SD '
            ],
            inputs: {
                D: 'refinedstorage:destruction_core',
                I: 'refinedstorage:improved_processor',
                S: 'occultism:spirit_attuned_gem',
                C: '#xnet:connectors'
            }
        },
        {
            output: 'export_bus',
            patterns: [
                'SD ',
                'IC ',
                'SD '
            ],
            inputs: {
                D: 'refinedstorage:construction_core',
                I: 'refinedstorage:improved_processor',
                S: 'occultism:spirit_attuned_gem',
                C: '#xnet:connectors'
            }
        },
        {
            output: 'fluid_storage_bus',
            patterns: [
                'SB ',
                'G  ',
                '   '
            ],
            inputs: {
                S: 'appliedenergistics2:storage_bus',
                G: 'minecraft:green_dye',
                B: 'minecraft:bucket'
            }
        },
        {
            output: 'fluid_import_bus',
            patterns: [
                'IB ',
                'G  ',
                '   '
            ],
            inputs: {
                I: 'appliedenergistics2:import_bus',
                G: 'minecraft:green_dye',
                B: 'minecraft:bucket'
            }
        },
        {
            output: 'fluid_export_bus',
            patterns: [
                'EB ',
                'G  ',
                '   '
            ],
            inputs: {
                E: 'appliedenergistics2:export_bus',
                G: 'minecraft:green_dye',
                B: 'minecraft:bucket'
            }
        },
        {
            output: 'spatial_pylon',
            patterns: [
                'QFQ',
                'CTC',
                'QFQ'
            ],
            inputs: {
                T:'bloodmagic:teleposer', 
                C:'botania:corporea_spark', 
                F:'appliedenergistics2:fluix_glass_cable', 
                Q:'appliedenergistics2:quartz_glass'
            }
        },
        {
            output: 'molecular_assembler',
            patterns: [
                'MQM',
                'DWC',
                'MQM'
            ],
            inputs: {
                C:'refinedstorage:construction_core', 
                D:'refinedstorage:destruction_core', 
                Q:'appliedenergistics2:quartz_glass', 
                W:'#forge:workbenches', 
                M:'create:mechanical_crafter'
            }
        }
    ]
    recipes.forEach((recipe) => {
        event.shaped('appliedenergistics2:' + recipe.output, recipe.patterns, recipe.inputs).id(id_prefix + recipe.output);
    });


    event.shaped('2x appliedenergistics2:quantum_link',[
            'ETE',
            'ACA',
            'ERE'
        ],{
            T: 'rftoolsutility:matter_transmitter',
            C: 'kubejs:cpu_core_as_81221',
            R: 'rftoolsutility:matter_receiver',
            A: 'betterendforge:aeternium_ingot',
            E: '#forge:gears/enderium'
        }).id(id_prefix + 'quantum_link');
    
    event.shaped('8x appliedenergistics2:fluix_glass_cable',[
            'CCC',
            'CSC',
            'CCC'
        ],{
            C: 'refinedstorage:cable',
            S: 'appliedenergistics2:sky_dust'
        }).id(id_prefix + 'fluix_glass_cable');
    
});
