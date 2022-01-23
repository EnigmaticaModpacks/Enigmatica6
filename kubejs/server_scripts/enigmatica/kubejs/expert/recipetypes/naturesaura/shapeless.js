onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'naturesaura:bottle_two_the_rebottling',
            inputs: ['minecraft:glass_bottle', 'farmersdelight:tree_bark'],
            id: 'naturesaura:bottle_two_the_rebottling'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
