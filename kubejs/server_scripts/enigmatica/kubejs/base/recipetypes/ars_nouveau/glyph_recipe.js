events.listen('recipes', (event) => {
    const recipes = [
    ];

    recipes.forEach((recipe) => {
        const re = 
            event.custom({
                type: 'ars_nouveau:glyph_recipe',
                tier: recipe.tier,
                input: recipe.input,
                output: recipe.output
            });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
