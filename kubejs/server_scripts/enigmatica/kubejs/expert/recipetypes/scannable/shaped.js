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
            output: 'scannable:scanner',
            pattern: ['ABA', 'CDC', 'CEC'],
            key: {
                A: '#forge:rods/copper',
                B: 'occultism:spirit_attuned_gem',
                C: '#forge:plates/aluminum',
                D: '#forge:glass_panes/cyan',
                E: 'tconstruct:sky_slime_crystal'
            },
            id: 'scannable:scanner'
        },
        {
            output: 'scannable:module_blank',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:nuggets/silver',
                B: 'tconstruct:greenheart_pressure_plate',
                C: 'ars_nouveau:magic_clay',
                D: 'ars_nouveau:ritual_scrying',
                E: '#forge:nuggets/copper',
                F: 'create:polished_rose_quartz'
            },
            id: 'scannable:module_blank'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
