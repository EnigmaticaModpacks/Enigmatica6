events.listen('recipes', (event) => {
    const recipes = [
        {
            input: { tag: 'forge:cobblestone' },
            output: { item: 'minecraft:gravel' },
            id: 'industrialforegoing:crusher/cobble_gravel'
        },
        {
            input: { tag: 'forge:gravel' },
            output: { item: 'minecraft:sand' },
            id: 'industrialforegoing:crusher/gravel_sand'
        },
        {
            input: { item: 'byg:white_sandstone' },
            output: { item: 'byg:white_sand' },
            id: 'enigmatica:industrialforegoing/crusher/white_sandstone_sand'
        },
        {
            input: { item: 'byg:blue_sandstone' },
            output: { item: 'byg:blue_sand' },
            id: 'enigmatica:industrialforegoing/crusher/blue_sandstone_sand'
        },
        {
            input: { item: 'byg:purple_sandstone' },
            output: { item: 'byg:purple_sand' },
            id: 'enigmatica:industrialforegoing/crusher/purple_sandstone_sand'
        },
        {
            input: { item: 'byg:black_sandstone' },
            output: { item: 'byg:black_sand' },
            id: 'enigmatica:industrialforegoing/crusher/black_sandstone_sand'
        },
        {
            input: { item: 'minecraft:end_stone' },
            output: { item: 'byg:end_sand' },
            id: 'enigmatica:industrialforegoing/crusher/end_stone_sand'
        },
        {
            input: { item: 'minecraft:red_sandstone' },
            output: { item: 'minecraft:red_sand' },
            id: 'enigmatica:industrialforegoing/crusher/red_sandstone_sand'
        },
        {
            input: { item: 'minecraft:sandstone' },
            output: { item: 'minecraft:sand' },
            id: 'enigmatica:industrialforegoing/crusher/sandstone_sand'
        },
        {
            input: { item: 'atmospheric:arid_sandstone' },
            output: { item: 'atmospheric:arid_sand' },
            id: 'enigmatica:industrialforegoing/crusher/arid_sandstone_sand'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'industrialforegoing:crusher',
                input: recipe.input,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
