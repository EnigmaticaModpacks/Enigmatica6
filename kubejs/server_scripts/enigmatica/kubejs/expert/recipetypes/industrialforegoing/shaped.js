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
            output: 'industrialforegoing:machine_frame_pity',
            pattern: ['CDC', 'ABA', 'CDC'],
            key: {
                A: 'immersiveengineering:concrete_leaded',
                B: 'thermal:machine_frame',
                C: 'create:andesite_casing',
                D: 'immersiveengineering:component_iron'
            },
            id: 'industrialforegoing:machine_frame_pity'
        },
        {
            output: 'industrialforegoing:laser_drill',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: '#forge:plastic',
                B: 'mekanismgenerators:laser_focus_matrix',
                C: '#forge:gears/enderium',
                D: 'mekanism:laser'
            },
            id: 'industrialforegoing:laser_drill'
        },
        {
            output: 'industrialforegoing:ore_laser_base',
            pattern: ['ABA', 'CDC', 'BEB'],
            key: {
                A: '#forge:plastic',
                B: '#forge:gears/lumium',
                C: 'thermal:enderium_glass',
                D: '#industrialforegoing:machine_frame/supreme',
                E: 'pneumaticcraft:smart_chest'
            },
            id: 'industrialforegoing:ore_laser_base'
        },
        {
            output: 'industrialforegoing:fluid_laser_base',
            pattern: ['ABA', 'CDC', 'BEB'],
            key: {
                A: '#forge:plastic',
                B: '#forge:gears/lumium',
                C: 'thermal:enderium_glass',
                D: '#industrialforegoing:machine_frame/advanced',
                E: 'pneumaticcraft:large_tank'
            },
            id: 'industrialforegoing:fluid_laser_base'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
