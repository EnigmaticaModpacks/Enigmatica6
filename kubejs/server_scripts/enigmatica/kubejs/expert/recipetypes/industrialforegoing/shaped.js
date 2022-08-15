onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/shaped/';

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
            output: 'industrialforegoing:marine_fisher',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: '#forge:plastic',
                B: Item.of('aquaculture:neptunium_fishing_rod', '{Damage:0}').weakNBT(),
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
        },
        {
            output: 'industrialforegoing:mob_imprisonment_tool',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#forge:plastic',
                B: 'pneumaticcraft:spawner_core'
            },
            id: 'industrialforegoing:mob_imprisonment_tool'
        },
        {
            output: 'industrialforegoing:wither_builder',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: 'ars_nouveau:glyph_wither',
                B: 'rftoolsutility:matter_beamer',
                C: 'rftoolsutility:spawner',
                D: Item.of('rftoolsutility:syringe', '{mobName:"minecraft:wither",mobId:"minecraft:wither",level:10}'),
                E: '#industrialforegoing:machine_frame/supreme'
            },
            id: 'industrialforegoing:wither_builder'
        },
        {
            output: 'industrialforegoing:sewer',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: 'quark:grate',
                B: 'create:fluid_pipe',
                C: 'industrialforegoing:common_black_hole_tank',
                D: 'environmental:mud_bricks',
                E: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:sewer'
        },
        {
            output: 'industrialforegoing:sewage_composter',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'aquaculture:worm',
                B: 'minecraft:composter',
                C: '#minecraft:sand',
                D: 'environmental:kiln',
                E: 'environmental:mud_bricks',
                F: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:sewage_composter'
        },
        {
            output: 'industrialforegoing:animal_baby_separator',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: 'immersiveengineering:sheetmetal_colored_white',
                B: 'minecraft:golden_carrot',
                C: 'minecraft:tripwire_hook',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'create:weighted_ejector',
                F: '#forge:gears/invar',
                G: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:animal_baby_separator'
        },
        {
            output: 'industrialforegoing:animal_rancher',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: 'immersiveengineering:sheetmetal_colored_white',
                B: 'minecraft:milk_bucket',
                C: 'minecraft:shears',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'create:deployer',
                F: '#forge:gears/invar',
                G: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:animal_rancher'
        },
        {
            output: Item.of('industrialforegoing:range_addon0', '{TitaniumAugment:{Range:0.0f}}'),
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#forge:dyes/gray',
                B: '#forge:dusts/redstone',
                C: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip']
            },
            id: `${id_prefix}range_addon0`
        },
        {
            output: Item.of('industrialforegoing:range_addon1', '{TitaniumAugment:{Range:1.0f}}'),
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#forge:dyes/blue',
                B: '#forge:dusts/redstone',
                C: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip']
            },
            id: `${id_prefix}range_addon1`
        },
        {
            output: Item.of('industrialforegoing:range_addon2', '{TitaniumAugment:{Range:2.0f}}'),
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#forge:dyes/light_gray',
                B: '#forge:dusts/redstone',
                C: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip']
            },
            id: `${id_prefix}range_addon2`
        },
        {
            output: 'industrialforegoing:fluid_placer',
            pattern: ['AAA', 'ABC', 'DED'],
            key: {
                A: 'immersiveengineering:fluid_pipe',
                B: 'create:propeller',
                C: 'industrialforegoing:common_black_hole_tank',
                D: 'minecraft:smooth_stone',
                E: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:fluid_placer'
        },
        {
            output: 'industrialforegoing:water_condensator',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:sheetmetals/aluminum',
                B: 'industrialforegoing:common_black_hole_tank',
                C: 'create:fluid_pipe',
                D: 'create:mechanical_pump',
                E: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:water_condensator'
        },
        {
            output: 'industrialforegoing:block_placer',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:plastic',
                B: 'minecraft:dispenser',
                C: 'industrialforegoing:dryrubber',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:block_placer'
        },
        {
            output: 'industrialforegoing:block_breaker',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:plastic',
                B: 'immersiveengineering:drillhead_steel',
                C: '#forge:gears/steel',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:block_breaker'
        },
        {
            output: 'industrialforegoing:spores_recreator',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:plastic',
                B: 'astralsorcery:nocturnal_powder',
                C: '#forge:mushrooms',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'minecraft:mycelium',
                F: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:spores_recreator'
        },
        {
            output: 'industrialforegoing:plant_sower',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:plastic',
                B: 'create:weighted_ejector',
                C: '#forge:slimeballs',
                D: '#industrialforegoing:machine_frame/pity',
                E: '#forge:gears/lumium',
                F: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:plant_sower'
        },
        {
            output: 'industrialforegoing:plant_gatherer',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: '#forge:plastic',
                B: 'create:mechanical_arm',
                C: 'naturesaura:infused_iron_axe',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'naturesaura:infused_iron_hoe',
                F: '#forge:gears/lumium',
                G: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:plant_gatherer'
        },
        {
            output: 'industrialforegoing:sludge_refiner',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:plastic',
                B: '#forge:plates/brass',
                C: 'immersiveengineering:alloybrick',
                D: 'create:basin',
                E: '#forge:gears/uranium',
                F: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:sludge_refiner'
        },
        {
            output: 'industrialforegoing:fluid_extractor',
            pattern: ['AAA', 'BCD', 'AEA'],
            key: {
                A: 'immersiveengineering:sheetmetal_colored_white',
                B: 'industrialforegoing:common_black_hole_tank',
                C: 'tconstruct:seared_channel',
                D: 'create:mechanical_drill',
                E: '#industrialforegoing:machine_frame/pity'
            },
            id: 'industrialforegoing:fluid_extractor'
        },
        {
            output: 'industrialforegoing:latex_processing_unit',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: 'immersiveengineering:fluid_pipe',
                B: 'industrialforegoing:common_black_hole_tank',
                C: '#industrialforegoing:machine_frame/pity',
                D: '#forge:gears/uranium',
                E: 'thermal:rf_coil'
            },
            id: 'industrialforegoing:latex_processing_unit'
        },
        {
            output: 'industrialforegoing:infinity_backpack',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: 'mekanism:hdpe_sheet',
                B: Item.of('thermal:fluid_cell').ignoreNBT(),
                C: 'tconstruct:piggy_backpack',
                D: 'dankstorage:dank_3',
                E: Item.of('thermal:energy_cell').ignoreNBT()
            },
            id: 'industrialforegoing:dissolution_chamber/infinity_backpack'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
