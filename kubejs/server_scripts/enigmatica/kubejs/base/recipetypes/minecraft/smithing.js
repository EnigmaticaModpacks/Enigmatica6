onEvent('recipes', (event) => {
    const recipes = [
        {
            input1: Item.of('aiotbotania:terra_aiot', '{Damage:0}').weakNBT(),
            input2: 'kubejs:quintuple_alfsteel_ingot',
            output: 'aiotbotania:alfsteel_aiot'
        }
    ];
    recipes.forEach((recipe) => {
        event.smithing(recipe.output, recipe.input1, recipe.input2);
    });
});
