onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const recipes = [];

    recipes.forEach((recipe) => {
        recipe.id
            ? event
                  .custom({
                      type: 'ars_nouveau:glyph_recipe',
                      tier: recipe.tier,
                      input: recipe.input,
                      output: recipe.output
                  })
                  .id(recipe.id)
            : event.custom({
                  type: 'ars_nouveau:glyph_recipe',
                  tier: recipe.tier,
                  input: recipe.input,
                  output: recipe.output
              });
    });
});
