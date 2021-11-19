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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
