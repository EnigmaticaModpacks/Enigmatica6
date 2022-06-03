onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'chisel:iron_chisel',
            pattern: [' A', 'B '],
            key: {
                A: '#forge:ingots/iron',
                B: '#forge:rods/iron'
            },
            id: 'chisel:iron_chisel'
        },
        {
            output: 'chisel:diamond_chisel',
            pattern: [' A', 'B '],
            key: {
                A: '#forge:gems/diamond',
                B: '#forge:rods/iron'
            },
            id: 'chisel:diamond_chisel'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
