onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'minecraft:chicken',
            output: 'ars_nouveau:glyph_filter_is_mature',
            tier: 'TWO',
            id: 'toomanyglyphs:glyph_filter_is_mature'
        }
    ];

    /*
    Tiers
    ONE: Magic Clay
    TWO: Marvelous Clay
    THREE: Mythical Clay
    */

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:glyph_recipe';

        event.custom(recipe).id(recipe.id);
    });
});
