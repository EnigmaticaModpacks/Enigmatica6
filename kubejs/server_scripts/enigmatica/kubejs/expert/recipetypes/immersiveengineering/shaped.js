onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/';
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
        /*{
            output: Item.of('immersiveengineering:cokebrick', 3),
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: '#forge:stones/basalt',
                B: 'create:cinder_flour',
                C: '#forge:clay'
            },
            id: 'immersiveengineering:crafting/cokebrick'
        },*/
        {
            output: 'immersiveengineering:workbench',
            pattern: ['A  ', 'BCC', 'E D'],
            key: {
                A: '#forge:rods/steel',
                B: '#forge:plates/steel',
                C: '#forge:treated_wood_slab',
                D: 'immersiveengineering:treated_fence',
                E: 'immersiveengineering:craftingtable'
            },
            id: 'immersiveengineering:crafting/workbench'
        },
        {
            output: 'immersiveengineering:turntable',
            pattern: ['ABA', 'CDC'],
            key: {
                A: '#forge:plates/iron',
                B: 'create:brass_casing',
                C: '#forge:dusts/redstone',
                D: 'immersiveengineering:coil_lv'
            },
            id: 'immersiveengineering:crafting/turntable'
        },

        /*{
            output: Item.of('immersiveengineering:alloybrick', 4),
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: '#forge:ingots/brick',
                B: 'kubejs:smoldering_lapis_lazuli_compound',
                C: 'immersiveengineering:blastbrick'
            },
            id: 'immersiveengineering:crafting/alloybrick'
        },*/
        {
            output: 'immersiveengineering:furnace_heater',
            pattern: ['ABA', 'ACD', 'ABA'],
            key: {
                A: '#forge:sheetmetals/aluminum',
                B: 'immersiveengineering:coil_lv',
                C: 'powah:dielectric_casing',
                D: 'thermal:rf_coil'
            },
            id: 'immersiveengineering:crafting/furnace_heater'
        },
        {
            output: Item.of('12x immersiveengineering:conveyor_basic'),
            pattern: ['ABA', 'CDC'],
            key: {
                A: 'create:shaft',
                B: 'create:belt_connector',
                C: '#forge:gears/iron_aluminum',
                D: 'thermal:redstone_servo'
            },
            id: 'immersiveengineering:crafting/conveyor_basic'
        },
        {
            output: 'immersiveengineering:circuit_table',
            pattern: [' AB', 'CCC', 'D E'],
            key: {
                A: 'thermal:diving_fabric',
                B: 'immersiveengineering:screwdriver',
                C: '#forge:treated_wood_slab',
                D: 'immersiveengineering:craftingtable',
                E: Item.of('thermal:energy_cell').ignoreNBT()
            },
            id: 'immersiveengineering:crafting/circuit_table'
        },
        {
            output: Item.of('2x immersiveengineering:rs_engineering'),
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'thermal:signalum_glass',
                B: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
                C: 'immersiveengineering:wirecoil_redstone',
                D: '#forge:sheetmetals/aluminum'
            },
            id: 'immersiveengineering:crafting/rs_engineering'
        },
        {
            output: Item.of('2x immersiveengineering:heavy_engineering'),
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:gears/steel',
                B: 'immersiveengineering:component_steel',
                C: 'immersiveengineering:wirecoil_electrum',
                D: '#forge:sheetmetals/steel'
            },
            id: 'immersiveengineering:crafting/heavy_engineering'
        },
        {
            output: Item.of('2x immersiveengineering:light_engineering'),
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:gears/invar',
                B: 'immersiveengineering:component_iron',
                C: 'immersiveengineering:wirecoil_copper',
                D: '#forge:sheetmetals/aluminum'
            },
            id: 'immersiveengineering:crafting/light_engineering'
        },
        {
            output: 'immersiveengineering:capacitor_lv',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:treated_wood',
                B: 'immersiveengineering:connector_lv',
                C: '#forge:plates/lead',
                D: Item.of('thermal:fluid_cell').ignoreNBT(),
                E: {
                    type: 'pneumaticcraft:fluid',
                    tag: 'pneumaticcraft:etching_acid',
                    amount: 1000
                }
            },
            id: 'immersiveengineering:crafting/capacitor_lv'
        },
        {
            output: 'immersiveengineering:capacitor_mv',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:treated_wood',
                B: 'immersiveengineering:connector_mv',
                C: 'immersiveengineering:capacitor_lv',
                D: '#forge:plates/lead',
                E: '#forge:storage_blocks/electrum'
            },
            id: 'immersiveengineering:crafting/capacitor_mv'
        },
        {
            output: 'immersiveengineering:capacitor_hv',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:treated_wood',
                B: 'immersiveengineering:connector_hv',
                C: 'immersiveengineering:capacitor_mv',
                D: '#forge:plates/lead',
                E: '#forge:storage_blocks/steel'
            },
            id: 'immersiveengineering:crafting/capacitor_hv'
        },
        {
            output: 'immersiveengineering:windmill_blade',
            pattern: ['AA ', 'BBA', 'BB '],
            key: {
                A: 'eidolon:polished_planks',
                B: 'create:sail_frame'
            },
            id: 'immersiveengineering:crafting/windmill_blade'
        },
        {
            output: 'immersiveengineering:windmill',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'immersiveengineering:windmill_blade',
                B: 'create:mechanical_bearing'
            },
            id: 'immersiveengineering:crafting/windmill'
        },
        {
            output: 'immersiveengineering:watermill',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'immersiveengineering:waterwheel_segment',
                B: 'create:mechanical_bearing'
            },
            id: 'immersiveengineering:crafting/watermill'
        },
        {
            output: 'immersiveengineering:waterwheel_segment',
            pattern: [' A ', 'ABA', 'BAB'],
            key: {
                A: '#forge:rods/brass',
                B: 'eidolon:polished_planks'
            },
            id: 'immersiveengineering:crafting/waterwheel_segment'
        },
        {
            output: 'immersiveengineering:dynamo',
            pattern: [' A ', 'BCD', ' A '],
            key: {
                A: '#forge:gears/brass',
                B: 'immersiveengineering:coil_lv',
                C: 'thermal:machine_frame',
                D: '#forge:ingots/andesite_alloy'
            },
            id: 'immersiveengineering:crafting/dynamo'
        },
        {
            output: 'immersiveengineering:radiator',
            pattern: ['BBB', 'BAB', 'BCB'],
            key: {
                A: '#forge:sheetmetals/steel',
                B: 'create:fluid_pipe',
                C: {
                    type: 'pneumaticcraft:fluid',
                    fluid: 'minecraft:water',
                    amount: 1000
                }
            },
            id: 'immersiveengineering:crafting/radiator'
        },
        {
            output: 'immersiveengineering:generator',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: '#forge:sheetmetals/steel',
                B: 'immersiveengineering:coil_mv',
                C: 'immersiveengineering:dynamo'
            },
            id: 'immersiveengineering:crafting/generator'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
