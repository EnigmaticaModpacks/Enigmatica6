events.listen('recipes', (event) => {
    const recipes = [
        {
            input1: 'aiotbotania:terra_aiot',
            input2: 'kubejs:quintuple_alfsteel_ingot',
            output: 'aiotbotania:alfsteel_aiot'
        }
    ];
    recipes.forEach((recipe) => {
        event.smithing(recipe.output, recipe.input1, recipe.input2);
    });
});
