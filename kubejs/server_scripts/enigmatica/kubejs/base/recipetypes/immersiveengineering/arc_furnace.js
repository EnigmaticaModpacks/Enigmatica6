events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input1: '#forge:ingots/copper',
                secondaries: ['#forge:ingots/zinc'],
                outputs: [item.of('emendatusenigmatica:brass_ingot', 2)]
                
            },
            {
                input1: '#forge:ingots/iron',
                secondaries: ['#forge:ingots/lead'],
                outputs: [Item.of('eidolon:pewter_ingot', 2)]
                
            }
        ]
    };
    event.remove({id: 'immersiveengineering:arcfurnace/alloy_brass'})
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.arc_furnace(recipe.outputs, recipe.input1, recipe.secondaries);
    });
});
