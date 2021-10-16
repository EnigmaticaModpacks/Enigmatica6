onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/integratedtunnels/';
    const recipes = [
        {
            output: Item.of('integratedtunnels:part_interface_energy', 2),
            pattern: ['ABA', 'AAA'],
            key: {
                A: 'integrateddynamics:crystalized_menril_chunk',
                B: 'powah:capacitor_blazing'
            },
            id: 'integratedtunnels:crafting/part_interface_energy'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
