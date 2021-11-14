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
            output: 'buildinggadgets:gadget_building',
            pattern: ['ABA', 'CDC', 'ECE'],
            key: {
                A: '#forge:gems/ender',
                B: '#forge:glass_panes/lime',
                C: '#forge:plates/aluminum',
                D: 'thermal:flux_capacitor',
                E: '#forge:gears/lumium'
            },
            id: 'buildinggadgets:gadget_building'
        },
        {
            output: 'buildinggadgets:gadget_exchanging',
            pattern: ['ABA', 'CDC', 'ECE'],
            key: {
                A: '#forge:gems/ender',
                B: '#forge:glass_panes/lime',
                C: '#forge:plates/aluminum',
                D: 'thermal:flux_capacitor',
                E: '#forge:gears/signalum'
            },
            id: 'buildinggadgets:gadget_exchanging'
        },
        {
            output: 'buildinggadgets:gadget_copy_paste',
            pattern: ['ABA', 'CDC', 'ECE'],
            key: {
                A: '#forge:gems/ender',
                B: '#forge:glass_panes/lime',
                C: '#forge:plates/aluminum',
                D: 'thermal:flux_capacitor',
                E: '#forge:gears/osmium'
            },
            id: 'buildinggadgets:gadget_copy_paste'
        },
        {
            output: 'buildinggadgets:gadget_destruction',
            pattern: ['ABA', 'CDC', 'ECE'],
            key: {
                A: '#forge:gems/ender',
                B: '#forge:glass_panes/red',
                C: '#forge:plates/lead',
                D: 'thermal:flux_capacitor',
                E: '#forge:gears/enderium'
            },
            id: 'buildinggadgets:gadget_destruction'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
