events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input1: '#forge:ingots/copper',
                input2: '#forge:ingots/zinc',
                output: item.of('emendatusenigmatica:brass_ingot', 2)
                
            },
            {
                input1: '#forge:ingots/iron',
                input2: '#forge:ingots/lead',
                output: Item.of('eidolon:pewter_ingot', 2)
                
            },
        ]
    };
    event.remove({id: 'immersiveengineering:alloysmelter/brass'});
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.alloy(recipe.output, recipe.input1, recipe.input2);
    });
});
