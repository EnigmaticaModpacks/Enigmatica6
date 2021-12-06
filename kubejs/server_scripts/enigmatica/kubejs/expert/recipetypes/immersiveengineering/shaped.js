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
                E: 'thermal:energy_cell'
            },
            id: 'immersiveengineering:crafting/circuit_table'
        },
        {
            output: Item.of('2x immersiveengineering:rs_engineering'),
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'thermal:signalum_glass',
                B: 'rftoolscontrol:ram_chip',
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
                D: 'thermal:fluid_cell',
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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
