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
        },
        {
            input1: '#forge:ingots/aeternium',
            input2: 'betterendforge:leather_wrapped_stick',
            output: 'betterendforge:aeternium_sword_handle',
            id: 'betterendforge:aeternium_sword_handle_smithing'
        }
    ];
    recipes.forEach((recipe) => {
        event.smithing(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
    });
});
