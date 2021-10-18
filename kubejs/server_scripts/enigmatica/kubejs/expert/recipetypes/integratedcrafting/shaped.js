onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/integratedcrafting/';
    const recipes = [
        {
            output: 'integratedcrafting:part_interface_crafting',
            pattern: ['ABA', 'CDE', 'ABA'],
            key: {
                A: 'botania:crafty_crate',
                B: 'refinedstorage:advanced_processor',
                C: 'integrateddynamics:variable_transformer_output',
                D: 'integrateddynamics:logic_director',
                E: 'integrateddynamics:variable_transformer_input'
            },
            id: 'integratedcrafting:crafting/part_interface_crafting'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
