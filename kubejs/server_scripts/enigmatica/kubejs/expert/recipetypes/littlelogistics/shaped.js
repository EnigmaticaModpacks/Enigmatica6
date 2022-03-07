onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/littlelogistics/';
    const recipes = [
        {
            output: 'littlelogistics:barge',
            pattern: ['ABA', 'CCC'],
            key: {
                A: '#forge:plates/aluminum',
                B: '#forge:chests',
                C: 'immersiveengineering:sheetmetal_colored_red'
            },
            id: 'littlelogistics:barge'
        },
        {
            output: 'littlelogistics:fishing_barge',
            pattern: ['D D', 'ABA', 'CCC'],
            key: {
                A: '#forge:plates/aluminum',
                B: Item.of('aquaculture:tackle_box').ignoreNBT(),
                C: 'immersiveengineering:sheetmetal_colored_red',
                D: 'farmersdelight:safety_net'
            },
            id: 'littlelogistics:fishing_barge'
        },
        {
            output: 'littlelogistics:fluid_barge',
            pattern: ['ABA', 'CCC'],
            key: {
                A: '#forge:plates/aluminum',
                B: 'create:fluid_tank',
                C: 'immersiveengineering:sheetmetal_colored_red'
            },
            id: 'littlelogistics:fluid_barge'
        },
        {
            output: 'littlelogistics:seater_barge',
            pattern: ['ABA', 'CCC'],
            key: {
                A: '#forge:plates/aluminum',
                B: '#create:seats',
                C: 'immersiveengineering:sheetmetal_colored_red'
            },
            id: 'littlelogistics:seater_barge'
        },
        {
            output: 'littlelogistics:tug',
            pattern: ['ABA', 'CCC'],
            key: {
                A: '#forge:plates/aluminum',
                B: 'thermal:dynamo_stirling',
                C: 'immersiveengineering:sheetmetal_colored_red'
            },
            id: 'littlelogistics:tug'
        },
        {
            output: 'littlelogistics:energy_tug',
            pattern: ['ABA', 'CCC'],
            key: {
                A: '#forge:plates/aluminum',
                B: Item.of('thermal:energy_cell').ignoreNBT(),
                C: 'immersiveengineering:sheetmetal_colored_red'
            },
            id: 'littlelogistics:energy_tug'
        },
        {
            output: 'littlelogistics:chunk_loader_barge',
            pattern: ['ABA', 'CCC'],
            key: {
                A: '#forge:plates/aluminum',
                B: 'botania:ender_eye_block',
                C: 'immersiveengineering:sheetmetal_colored_purple'
            },
            id: 'littlelogistics:chunk_loader_barge'
        },
        {
            output: 'littlelogistics:vessel_charger',
            pattern: [' C ', 'ABA', 'CCC'],
            key: {
                A: 'thermal:rf_coil',
                B: Item.of('thermal:energy_cell').ignoreNBT(),
                C: 'immersiveengineering:sheetmetal_colored_red'
            },
            id: 'littlelogistics:vessel_charger'
        },
        {
            output: 'littlelogistics:spring',
            pattern: ['  A', ' B ', 'A  '],
            key: {
                A: '#forge:ingots/andesite_alloy',
                B: 'minecraft:chain'
            },
            id: 'littlelogistics:spring'
        },
        {
            output: 'littlelogistics:fluid_hopper',
            pattern: ['A', 'B'],
            key: {
                A: 'create:fluid_tank',
                B: 'minecraft:hopper'
            },
            id: 'littlelogistics:fluid_hopper'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
