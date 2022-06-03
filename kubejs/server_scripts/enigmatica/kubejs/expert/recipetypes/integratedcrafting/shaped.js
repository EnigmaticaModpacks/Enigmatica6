onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/integratedcrafting/';
    const recipes = [
        {
            output: Item.of('3x integratedcrafting:part_interface_crafting'),
            pattern: [' A ', 'BAC', ' A '],
            key: {
                A: 'create:mechanical_crafter',
                B: 'integrateddynamics:variable_transformer_output',
                C: 'integrateddynamics:variable_transformer_input'
            },
            id: 'integratedcrafting:crafting/part_interface_crafting'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
