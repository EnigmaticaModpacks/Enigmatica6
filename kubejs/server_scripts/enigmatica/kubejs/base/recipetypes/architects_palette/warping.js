onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'minecraft:cactus',
            output: 'byg:warped_cactus'
        },
        {
            input: '#forge:coral_blocks',
            output: 'byg:warped_coral_block'
        },
        {
            input: '#forge:corals',
            output: 'byg:warped_coral'
        },
        {
            input: '#forge:coral_fans',
            output: 'byg:warped_coral_fan'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'architects_palette:warping',
            ingredient: [Ingredient.of(recipe.input)],
            result: Item.of(recipe.output),
            dimension: 'minecraft:the_nether'
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
