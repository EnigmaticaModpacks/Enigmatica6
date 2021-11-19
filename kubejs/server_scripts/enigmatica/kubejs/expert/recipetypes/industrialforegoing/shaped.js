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
            output: 'industrialforegoing:machine_frame_pity',
            pattern: ['CDC', 'ABA', 'CDC'],
            key: {
                A: 'immersiveengineering:concrete_leaded',
                B: 'thermal:machine_frame',
                C: 'create:andesite_casing',
                D: 'immersiveengineering:component_iron'
            },
            id: 'industrialforegoing:machine_frame_pity'
        },
        {
            output: 'industrialforegoing:laser_drill',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: '#forge:plastic',
                B: 'mekanismgenerators:laser_focus_matrix',
                C: '#forge:gears/enderium',
                D: 'mekanism:laser'
            },
            id: 'industrialforegoing:laser_drill'
        },
        {
            output: 'industrialforegoing:ore_laser_base',
            pattern: ['ABA', 'CDC', 'BEB'],
            key: {
                A: '#forge:plastic',
                B: '#forge:gears/lumium',
                C: 'thermal:enderium_glass',
                D: '#industrialforegoing:machine_frame/supreme',
                E: 'pneumaticcraft:smart_chest'
            },
            id: 'industrialforegoing:ore_laser_base'
        },
        {
            output: 'industrialforegoing:fluid_laser_base',
            pattern: ['ABA', 'CDC', 'BEB'],
            key: {
                A: '#forge:plastic',
                B: '#forge:gears/lumium',
                C: 'thermal:enderium_glass',
                D: '#industrialforegoing:machine_frame/advanced',
                E: 'pneumaticcraft:large_tank'
            },
            id: 'industrialforegoing:fluid_laser_base'
        },
        {
            output: 'industrialforegoing:plant_fertilizer',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: ['#forge:plastic', 'mekanism:hdpe_sheet'],
                B: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                C: 'create:mechanical_pump',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'create:nozzle',
                F: '#forge:gears/lumium',
                G: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:plant_fertilizer'
        },
        {
            output: 'industrialforegoing:hydroponic_bed',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: ['#forge:plastic', 'mekanism:hdpe_sheet'],
                B: 'industrialforegoing:fertilizer',
                C: 'mekanism:dynamic_tank',
                D: 'supplementaries:planter_rich',
                E: '#industrialforegoing:machine_frame/pity',
                F: '#forge:gears/lumium'
            },
            id: 'industrialforegoing:hydroponic_bed'
        },
        {
            output: 'industrialforegoing:mob_detector',
            pattern: ['ABA', 'CDE', 'ABA'],
            key: {
                A: '#forge:plastic',
                B: 'minecraft:comparator',
                C: 'pneumaticcraft:advanced_pcb',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'botania:ender_eye_block'
            },
            id: 'industrialforegoing:mob_detector'
        },
        {
            output: 'industrialforegoing:enchantment_sorter',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:plastic',
                B: 'pneumaticcraft:advanced_pcb',
                C: '#forge:storage_blocks/mana',
                D: '#industrialforegoing:machine_frame/pity',
                E: '#forge:gears/osmium',
                F: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:enchantment_sorter'
        },
        {
            output: 'industrialforegoing:potion_brewer',
            pattern: [' B ', 'ACA', 'DED'],
            key: {
                A: '#forge:plastic',
                B: 'minecraft:brewing_stand',
                C: '#industrialforegoing:machine_frame/pity',
                D: '#forge:gears/constantan',
                E: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:potion_brewer'
        },
        {
            output: 'industrialforegoing:common_black_hole_tank',
            pattern: ['AAA', 'A A', 'ABA'],
            key: {
                A: '#forge:sheetmetals/aluminum',
                B: 'thermal:fluid_cell_frame'
            },
            id: 'industrialforegoing:common_black_hole_tank'
        },
        {
            output: 'industrialforegoing:common_black_hole_unit',
            pattern: ['AAA', 'A A', 'ABA'],
            key: {
                A: '#forge:sheetmetals/aluminum',
                B: 'thermal:machine_frame'
            },
            id: 'industrialforegoing:common_black_hole_unit'
        },
        {
            output: 'industrialforegoing:marine_fisher',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: '#forge:plastic',
                B: 'aquaculture:neptunium_fishing_rod',
                C: 'aquaculture:nether_star_hook',
                D: '#industrialforegoing:machine_frame/simple',
                E: 'aquaculture:worm',
                F: '#forge:gears/bronze',
                G: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:marine_fisher'
        },
        {
            output: 'industrialforegoing:enchantment_extractor',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:plastic',
                B: '#botania:runes/mana',
                C: 'botania:pump',
                D: '#industrialforegoing:machine_frame/simple',
                E: '#forge:gears/osmium',
                F: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:enchantment_extractor'
        },
        {
            output: 'industrialforegoing:washing_factory',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:plastic',
                B: '#forge:ingots/slimesteel',
                C: 'create:fluid_tank',
                D: 'thermal:machine_frame',
                E: '#forge:gears/compressed_iron',
                F: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:washing_factory'
        },
        {
            output: 'industrialforegoing:fermentation_station',
            pattern: ['ABA', 'CDC', 'CEC'],
            key: {
                A: '#forge:plastic',
                B: '#forge:ingots/slimesteel',
                C: 'pneumaticcraft:reinforced_bricks',
                D: 'sushigocrafting:fermentation_barrel',
                E: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:fermentation_station'
        },
        {
            output: 'industrialforegoing:fluid_sieving_machine',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: '#forge:plastic',
                B: '#forge:ingots/slimesteel',
                C: 'create:fluid_tank',
                D: 'thermal:machine_frame',
                E: 'create:smart_fluid_pipe',
                F: '#forge:gears/compressed_iron',
                G: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:fluid_sieving_machine'
        },
        {
            output: 'industrialforegoing:material_stonework_factory',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: '#forge:plastic',
                B: 'rftoolsutility:crafter1',
                C: 'immersiveengineering:drillhead_steel',
                D: '#industrialforegoing:machine_frame/advanced',
                E: 'mekanism:energized_smelter',
                F: '#forge:gears/compressed_iron',
                G: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:material_stonework_factory'
        },
        {
            output: 'industrialforegoing:stasis_chamber',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: '#forge:plastic',
                B: 'rftoolsutility:regenerationplus_module',
                C: 'rftoolsutility:noteleport_module',
                D: '#industrialforegoing:machine_frame/advanced',
                E: 'rftoolsutility:slowness_module',
                F: '#forge:gears/uranium',
                G: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:stasis_chamber'
        },
        {
            output: 'industrialforegoing:mob_crusher',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: '#forge:plastic',
                B: 'thermal:device_collector',
                C: 'create:mechanical_arm',
                D: '#industrialforegoing:machine_frame/advanced',
                E: 'industrialforegoing:infinity_hammer',
                F: '#forge:gears/uranium',
                G: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:mob_crusher'
        },
        {
            output: 'industrialforegoing:black_hole_controller',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:plastic',
                B: 'portality:module_items',
                C: 'portality:frame',
                D: 'enderstorage:ender_chest',
                E: 'portality:controller'
            },
            id: 'industrialforegoing:black_hole_controller'
        },
        {
            output: 'industrialforegoing:infinity_charger',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: '#forge:plastic',
                B: 'mekanism:ultimate_universal_cable',
                C: 'mekanism:ultimate_induction_cell',
                D: '#forge:gears/signalum',
                E: '#industrialforegoing:machine_frame/advanced'
            },
            id: 'industrialforegoing:infinity_charger'
        },
        {
            output: 'industrialforegoing:enchantment_factory',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:plastic',
                B: 'botania:rosa_arcana',
                C: 'kubejs:memory_ultimate_filled',
                D: 'botania:enchanted_soil',
                E: 'botania:mana_pylon',
                F: '#industrialforegoing:machine_frame/advanced'
            },
            id: 'industrialforegoing:enchantment_factory'
        },
        {
            output: 'industrialforegoing:enchantment_applicator',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:plastic',
                B: 'betterendforge:aeternium_anvil',
                C: 'kubejs:memory_ultimate_filled',
                D: 'pneumaticcraft:small_tank',
                E: '#forge:gears/osmium',
                F: '#industrialforegoing:machine_frame/simple'
            },
            id: 'industrialforegoing:enchantment_applicator'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
