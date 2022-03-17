onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/integratedtunnels/';
    const recipes = [
        {
            output: Item.of('integratedtunnels:part_interface_energy', 2),
            pattern: ['ABA', 'CDC'],
            key: {
                A: 'integrateddynamics:menril_wood',
                B: 'powah:capacitor_blazing',
                C: 'integratedterminals:menril_glass',
                D: 'thermal:rf_coil'
            },
            id: 'integratedtunnels:crafting/part_interface_energy'
        },
        {
            output: Item.of('integratedtunnels:part_interface_fluid', 2),
            pattern: ['ABA', 'CDC'],
            key: {
                A: 'integrateddynamics:menril_wood',
                B: 'pneumaticcraft:large_tank',
                C: 'integratedterminals:menril_glass',
                D: 'pneumaticcraft:logistics_core'
            },
            id: 'integratedtunnels:crafting/part_interface_fluid'
        },
        {
            output: Item.of('integratedtunnels:part_interface_item', 2),
            pattern: ['ABA', 'CDC'],
            key: {
                A: 'integrateddynamics:menril_wood',
                B: 'ironchest:silver_chest',
                C: 'glassential:glass_ghostly',
                D: 'botania:corporea_funnel'
            },
            id: `integratedtunnels:crafting/part_interface_item`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
