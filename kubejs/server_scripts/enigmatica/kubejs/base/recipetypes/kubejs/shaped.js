onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/kubejs/';
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
            output: 'kubejs:amadron_survey_tools',
            pattern: ['ABA', 'CDE', 'AFA'],
            key: {
                A: Item.of('pneumaticcraft:air_canister', '{"pneumaticcraft:air":30000}').weakNBT(),
                B: 'pneumaticcraft:reinforced_chest',
                C: Item.of('mekanismtools:steel_paxel', '{Damage:0}').weakNBT(),
                D: 'mekanism:cardboard_box',
                E: 'minecraft:compass',
                F: 'immersiveengineering:survey_tools'
            },
            id: `${id_prefix}amadron_survey_tools`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
