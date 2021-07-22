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

    const newRecipes = [
        {
            output: 'naturesaura:grated_chute',
            pattern: ['A A', 'ABA', ' A '],
            key: {
                A: 'naturesaura:infused_iron',
                B: '#forge:chests'
            },
            id: 'naturesaura:grated_chute'
        },
        {
            output: 'naturesaura:offering_table',
            pattern: ['BAB', 'CBD', 'EEE'],
            key: {
                A: '#forge:ingots/infused_iron',
                B: 'naturesaura:infused_stone',
                C: 'naturesaura:token_fear',
                D: 'naturesaura:token_sorrow',
                E: 'naturesaura:ancient_bark'
            },
            id: 'naturesaura:offering_table'
        },
        {
            output: Item.of('naturesaura:field_creator', 2),
            pattern: ['AAA', 'ACA', 'ABA'],
            key: {
                A: 'atum:crystal_glass',
                B: 'naturesaura:token_anger',
                C: 'botania:corporea_block'
            },
            id: 'naturesaura:field_creator'
        },
        {
            output: 'naturesaura:pickup_stopper',
            pattern: ['CAC', 'CBC', 'CAC'],
            key: {
                A: '#forge:ingots/infused_iron',
                B: '#forge:storage_blocks/lead',
                C: 'naturesaura:gold_brick'
            },
            id: 'naturesaura:pickup_stopper'
        },
        {
            output: 'naturesaura:hopper_upgrade',
            pattern: ['BAB', 'ACA', 'BAB'],
            key: {
                A: '#forge:ingots/infused_iron',
                B: '#forge:plates/lead',
                C: 'minecraft:lodestone'
            },
            id: 'naturesaura:hopper_upgrade'
        }
    ];

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
