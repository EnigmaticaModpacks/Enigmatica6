onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: Item.of('betterendforge:leather_wrapped_stick'),
            inputs: ['naturesaura:ancient_stick', 'betterendforge:leather_stripe'],
            id: 'betterendforge:leather_wrapped_stick'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
