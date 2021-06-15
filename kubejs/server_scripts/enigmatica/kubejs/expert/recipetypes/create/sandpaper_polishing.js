onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            input: Item.of('minecraft:nether_bricks'),
            output: Item.of('minecraft:red_nether_bricks')
        }
    ];
    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.create.sandpaper_polishing(recipe.output, recipe.input).id(recipe.id)
            : event.recipes.create.sandpaper_polishing(recipe.output, recipe.input);
    });
});
