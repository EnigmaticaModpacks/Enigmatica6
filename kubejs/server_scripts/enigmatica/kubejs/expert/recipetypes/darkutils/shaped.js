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
            output: Item.of('6x darkutils:vector_plate'),
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'darkutils:blank_plate',
                B: 'bloodmagic:reagentair',
                C: '#forge:nuggets/queens_slime'
            },
            id: 'darkutils:crafting/vector_plate'
        },
        {
            output: Item.of('6x darkutils:vector_plate_fast'),
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'darkutils:vector_plate',
                B: '#botania:runes/air',
                C: '#forge:nuggets/queens_slime'
            },
            id: 'darkutils:crafting/vector_plate_fast'
        },
        {
            output: Item.of('6x darkutils:vector_plate_extreme'),
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'darkutils:vector_plate_fast',
                B: 'astralsorcery:colored_lens_push',
                C: '#forge:nuggets/queens_slime'
            },
            id: 'darkutils:crafting/vector_plate_extreme'
        },
        {
            output: Item.of('4x darkutils:import_plate'),
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'darkutils:vector_plate',
                B: 'naturesaura:grated_chute'
            },
            id: 'darkutils:crafting/import_plate'
        },
        {
            output: Item.of('4x darkutils:import_plate_fast'),
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'darkutils:vector_plate_fast',
                B: 'naturesaura:grated_chute'
            },
            id: 'darkutils:crafting/import_plate_fast'
        },
        {
            output: Item.of('4x darkutils:import_plate_extreme'),
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'darkutils:vector_plate_extreme',
                B: 'naturesaura:grated_chute'
            },
            id: 'darkutils:crafting/import_plate_extreme'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
