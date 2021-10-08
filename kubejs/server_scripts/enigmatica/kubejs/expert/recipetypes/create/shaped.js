onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/';
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
            output: 'create:millstone',
            pattern: [' A ', 'BCB', 'DDD'],
            key: {
                A: '#forge:gears/copper',
                B: '#forge:ingots/andesite_alloy',
                C: 'create:cogwheel',
                D: 'minecraft:smooth_stone_slab'
            },
            id: 'create:crafting/kinetics/millstone'
        },
        {
            output: 'create:windmill_bearing',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'create:turntable',
                B: 'minecraft:sticky_piston',
                C: 'create:shaft'
            },
            id: 'create:crafting/kinetics/windmill_bearing'
        },
        {
            output: Item.of('create:white_sail', 8),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'create:sail_frame',
                B: '#thermal:rockwool'
            },
            id: 'create:crafting/kinetics/white_sail'
        },
        {
            output: Item.of('create:brass_casing', 4),
            pattern: ['ABA', 'BBB', 'ABA'],
            key: {
                A: '#forge:plates/brass',
                B: 'eidolon:polished_planks'
            },
            id: 'create:crafting/materials/brass_casing'
        },
        {
            output: Item.of('create:encased_chain_drive', 2),
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: 'minecraft:chain',
                B: 'create:shaft',
                C: 'create:andesite_casing'
            },
            id: 'create:crafting/kinetics/encased_chain_drive'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
