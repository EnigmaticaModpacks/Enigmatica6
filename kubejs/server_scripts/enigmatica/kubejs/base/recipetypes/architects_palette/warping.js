onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/architects_palette/warping/';

    const recipes = [
        {
            input: 'minecraft:cactus',
            output: 'byg:warped_cactus',
            id: `${id_prefix}warped_cactus`
        },
        {
            input: '#forge:coral_blocks',
            output: 'byg:warped_coral_block',
            id: `${id_prefix}warped_coral_block`
        },
        {
            input: '#forge:corals',
            output: 'byg:warped_coral',
            id: `${id_prefix}warped_coral`
        },
        {
            input: '#forge:coral_fans',
            output: 'byg:warped_coral_fan',
            id: `${id_prefix}warped_coral_fan`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'architects_palette:warping',
                ingredient: [Ingredient.of(recipe.input)],
                result: Item.of(recipe.output),
                dimension: 'minecraft:the_nether'
            })
            .id(recipe.id);
    });
});
