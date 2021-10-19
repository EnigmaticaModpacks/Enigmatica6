onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
