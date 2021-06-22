onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            input1: '#atum:relic_non_dirty/necklace',
            input2: '#forge:ingots/arcane_gold',
            output: 'eidolon:basic_amulet',
            id: 'eidolon:basic_amulet'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.smithing(recipe.output, recipe.input1, recipe.input2);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
