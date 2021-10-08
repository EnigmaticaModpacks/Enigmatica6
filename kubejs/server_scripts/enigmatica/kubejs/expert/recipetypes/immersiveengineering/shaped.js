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
        {
            output: Item.of('immersiveengineering:cokebrick', 3),
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: '#forge:stones/basalt',
                B: 'create:cinder_flour',
                C: '#forge:clay'
            },
            id: 'immersiveengineering:crafting/cokebrick'
        },
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
            output: Item.of('immersiveengineering:alloybrick', 4),
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: '#forge:ingots/brick',
                B: 'kubejs:smoldering_lapis_lazuli_compound',
                C: 'immersiveengineering:blastbrick'
            },
            id: 'immersiveengineering:crafting/alloybrick'
        },
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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
