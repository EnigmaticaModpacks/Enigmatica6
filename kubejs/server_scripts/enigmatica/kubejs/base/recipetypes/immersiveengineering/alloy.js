events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input1: '#forge:ingots/copper',
                input2: '#forge:ingots/zinc',
                output: item.of('emendatusenigmatica:brass_ingot', 2),
                
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.remove({
            input1: recipe.input1,
            input2: recipe.input2,
            mod: 'immersiveengineering',
            type: 'immersiveengineering:alloy'
        });
        event.recipes.immersiveengineering.alloy(recipe.output, recipe.input1, recipe.input2);
    });
});
