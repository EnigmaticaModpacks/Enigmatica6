onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/portality/shaped/';
    const recipes = [
        {
            output: Item.of('4x portality:frame'),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#enigmatica:stonecuttables/arcane_stone',
                B: 'immersiveengineering:coil_lv',
                C: 'immersiveengineering:electron_tube'
            },
            id: 'portality:frame'
        },
        {
            output: Item.of('portality:module_energy'),
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'portality:frame',
                B: Item.of('thermal:energy_cell').ignoreNBT(),
                C: 'pneumaticcraft:logistics_core',
                D: 'xnet:wireless_router'
            },
            id: 'portality:energy_input'
        },
        {
            output: Item.of('portality:module_items'),
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'portality:frame',
                B: 'immersiveengineering:sorter',
                C: 'pneumaticcraft:logistics_core',
                D: 'xnet:wireless_router'
            },
            id: 'portality:items_input'
        },
        {
            output: Item.of('portality:module_fluids'),
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'portality:frame',
                B: 'immersiveengineering:fluid_sorter',
                C: 'pneumaticcraft:logistics_core',
                D: 'xnet:wireless_router'
            },
            id: 'portality:fluids_input'
        },
        {
            output: Item.of('portality:module_interdimensional'),
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'portality:frame',
                B: 'occultism:stable_wormhole',
                C: 'pneumaticcraft:logistics_core',
                D: 'xnet:wireless_router'
            },
            id: 'portality:interdimensional'
        },
        {
            output: Item.of('portality:controller'),
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'portality:frame',
                B: 'immersiveengineering:coil_hv',
                C: 'immersiveengineering:current_transformer',
                D: '#industrialforegoing:machine_frame/simple'
            },
            id: `${id_prefix}controller_alternate`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
