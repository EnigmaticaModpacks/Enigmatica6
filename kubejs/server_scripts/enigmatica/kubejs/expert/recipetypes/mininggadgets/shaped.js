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
            output: 'mininggadgets:upgrade_silk',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: 'tconstruct:silky_cloth',
                B: '#forge:circuits/basic',
                C: '#forge:alloys/elite',
                D: 'mekanism:module_base'
            },
            id: 'mininggadgets:upgrade_silk'
        },
        {
            output: 'mininggadgets:upgrade_void_junk',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: 'trashcans:item_trash_can',
                B: '#forge:circuits/basic',
                C: '#forge:ingots/andesite_alloy',
                D: 'mekanism:module_base'
            },
            id: 'mininggadgets:upgrade_void_junk'
        },
        {
            output: 'mininggadgets:upgrade_magnet',
            pattern: ['ABA', 'ADA', 'ACA'],
            key: {
                A: 'immersiveengineering:coil_lv',
                B: '#forge:circuits/basic',
                C: 'thermal:flux_magnet',
                D: 'mekanism:module_base'
            },
            id: 'mininggadgets:upgrade_magnet'
        },
        {
            output: 'mininggadgets:upgrade_three_by_three',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: 'immersiveengineering:insulating_glass',
                B: '#forge:circuits/basic',
                C: 'mekanismgenerators:laser_focus_matrix',
                D: 'mekanism:module_base'
            },
            id: 'mininggadgets:upgrade_three_by_three'
        },
        {
            output: 'mininggadgets:upgrade_light_placer',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: '#forge:gears/lumium',
                B: '#forge:circuits/basic',
                C: 'thermal:lumium_glass',
                D: 'mekanism:module_base'
            },
            id: 'mininggadgets:upgrade_light_placer'
        },
        {
            output: 'mininggadgets:upgrade_light_placer',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: '#forge:gears/lumium',
                B: '#forge:circuits/basic',
                C: 'thermal:lumium_glass',
                D: 'mekanism:module_base'
            },
            id: 'mininggadgets:upgrade_light_placer'
        },
        {
            output: 'mininggadgets:upgrade_freezing',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: 'cookingforblockheads:preservation_chamber',
                B: '#forge:circuits/basic',
                C: 'powah:dry_ice',
                D: 'mekanism:module_base'
            },
            id: 'mininggadgets:upgrade_freezing'
        },
        {
            output: 'mininggadgets:upgrade_fortune_1',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:storage_blocks/emerald',
                B: '#forge:circuits/basic',
                C: 'create:polished_rose_quartz',
                D: 'mekanism:module_base',
                E: 'bloodmagic:fortune_anointment'
            },
            id: 'mininggadgets:upgrade_fortune_1'
        },
        {
            output: 'mininggadgets:upgrade_fortune_2',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:storage_blocks/gold',
                B: '#forge:circuits/advanced',
                C: 'create:polished_rose_quartz',
                D: 'mininggadgets:upgrade_fortune_1',
                E: 'atum:ptah_godshard'
            },
            id: 'mininggadgets:upgrade_fortune_2'
        },
        {
            output: 'mininggadgets:upgrade_fortune_3',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:storage_blocks/rose_gold',
                B: '#forge:circuits/elite',
                C: 'create:polished_rose_quartz',
                D: 'mininggadgets:upgrade_fortune_2',
                E: 'tconstruct:jeweled_apple'
            },
            id: 'mininggadgets:upgrade_fortune_3'
        },

        {
            output: 'mininggadgets:upgrade_range_1',
            pattern: ['ABA', 'ADA', 'ACA'],
            key: {
                A: 'immersiveengineering:coil_lv',
                B: '#forge:circuits/basic',
                C: 'mekanism:laser_amplifier',
                D: 'mekanism:module_base'
            },
            id: 'mininggadgets:upgrade_range_1'
        },
        {
            output: 'mininggadgets:upgrade_range_2',
            pattern: ['ABA', 'ADA', 'ACA'],
            key: {
                A: 'immersiveengineering:coil_mv',
                B: '#forge:circuits/advanced',
                C: 'mekanism:laser_amplifier',
                D: 'mininggadgets:upgrade_range_1'
            },
            id: 'mininggadgets:upgrade_range_2'
        },
        {
            output: 'mininggadgets:upgrade_range_3',
            pattern: ['ABA', 'ADA', 'ACA'],
            key: {
                A: 'immersiveengineering:coil_hv',
                B: '#forge:circuits/elite',
                C: 'mekanism:laser_amplifier',
                D: 'mininggadgets:upgrade_range_2'
            },
            id: 'mininggadgets:upgrade_range_3'
        },

        {
            output: 'mininggadgets:upgrade_battery_1',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: 'immersiveengineering:insulating_glass',
                B: '#forge:circuits/basic',
                C: 'mekanism:basic_energy_cube',
                D: 'mekanism:module_base'
            },
            id: 'mininggadgets:upgrade_battery_1'
        },
        {
            output: 'mininggadgets:upgrade_battery_2',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: 'immersiveengineering:insulating_glass',
                B: '#forge:circuits/advanced',
                C: 'mekanism:advanced_energy_cube',
                D: 'mininggadgets:upgrade_battery_1'
            },
            id: 'mininggadgets:upgrade_battery_2'
        },
        {
            output: 'mininggadgets:upgrade_battery_3',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: 'immersiveengineering:insulating_glass',
                B: '#forge:circuits/elite',
                C: 'mekanism:elite_energy_cube',
                D: 'mininggadgets:upgrade_battery_2'
            },
            id: 'mininggadgets:upgrade_battery_3'
        },

        {
            output: 'mininggadgets:upgrade_efficiency_1',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'mekanism:basic_thermodynamic_conductor',
                B: '#forge:circuits/basic',
                C: 'immersiveengineering:toolupgrade_railgun_capacitors',
                D: 'mekanism:module_base',
                E: 'powah:energizing_rod_hardened'
            },
            id: 'mininggadgets:upgrade_efficiency_1'
        },
        {
            output: 'mininggadgets:upgrade_efficiency_2',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'mekanism:advanced_thermodynamic_conductor',
                B: '#forge:circuits/advanced',
                C: 'immersiveengineering:toolupgrade_railgun_capacitors',
                D: 'mininggadgets:upgrade_efficiency_1',
                E: 'powah:energizing_rod_blazing'
            },
            id: 'mininggadgets:upgrade_efficiency_2'
        },
        {
            output: 'mininggadgets:upgrade_efficiency_3',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'mekanism:advanced_thermodynamic_conductor',
                B: '#forge:circuits/advanced',
                C: 'immersiveengineering:toolupgrade_railgun_capacitors',
                D: 'mininggadgets:upgrade_efficiency_2',
                E: 'powah:energizing_rod_niotic'
            },
            id: 'mininggadgets:upgrade_efficiency_3'
        },
        {
            output: 'mininggadgets:upgrade_efficiency_4',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'mekanism:elite_thermodynamic_conductor',
                B: '#forge:circuits/elite',
                C: 'immersiveengineering:toolupgrade_railgun_capacitors',
                D: 'mininggadgets:upgrade_efficiency_3',
                E: 'powah:energizing_rod_spirited'
            },
            id: 'mininggadgets:upgrade_efficiency_4'
        },
        {
            output: 'mininggadgets:upgrade_efficiency_5',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'mekanism:elite_thermodynamic_conductor',
                B: '#forge:circuits/elite',
                C: 'immersiveengineering:toolupgrade_railgun_capacitors',
                D: 'mininggadgets:upgrade_efficiency_4',
                E: 'powah:energizing_rod_nitro'
            },
            id: 'mininggadgets:upgrade_efficiency_5'
        },
        {
            output: 'mininggadgets:modificationtable',
            pattern: ['BAB', 'BCB'],
            key: {
                A: 'rftoolsbase:tablet',
                B: 'mekanism:hdpe_sheet',
                C: 'thermal:tinker_bench'
            },
            id: 'mininggadgets:modificationtable'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
