onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('patchouli:guide_book', '{"patchouli:book":"apotheosis:apoth_chronicle"}'),
            inputs: ['minecraft:book', '#forge:ingots/gold'],
            id: `apotheosis:book`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
