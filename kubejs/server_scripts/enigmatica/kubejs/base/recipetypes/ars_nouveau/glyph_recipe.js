events.listen('recipes', (event) => {
    const recipes = [
        {
            tier: 'TWO',
            input: 'minecraft:nether_brick',
            output: 'ars_nouveau:glyph_dampen',
            id: 'ars_nouveau:glyph_dampen'
        }
    ];

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
