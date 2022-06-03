onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefex = 'enigmatica:normal/';
    const recipes = [
        {
            output: 'minecraft:furnace',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: '#quark:stone_tool_materials'
            },
            id: 'minecraft:furnace'
        },
        {
            output: Item.of('minecraft:stick', 16),
            pattern: ['A', 'A'],
            key: {
                A: '#minecraft:logs'
            },
            id: `${id_prefex}sticks_16`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
