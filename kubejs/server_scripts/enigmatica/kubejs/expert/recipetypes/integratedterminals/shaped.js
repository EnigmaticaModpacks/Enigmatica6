onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/integratedterminals/';
    const recipes = [
        {
            output: 'integratedterminals:part_terminal_storage',
            pattern: ['AB', 'CD', 'AB'],
            key: {
                A: 'thermal:lumium_glass',
                B: 'botania:corporea_funnel',
                C: 'botania:corporea_index',
                D: 'integrateddynamics:part_display_panel'
            },
            id: 'integratedterminals:crafting/part_terminal_storage'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
