events.listen('recipes', (event) => {
    //https://github.com/CompactMods/CompactCrafting/wiki/Recipe-Specification

    //Also note, can't use Item.of because Count is caps sensitive (Name too)

    const recipes = [
        /*{
                //test recipe
                recipeSize: 1,
                layers: [ 
                    {
                        type: 'compactcrafting:filled',
                        component: 'C'
                    }
                ],
                catalyst: {
                    id: 'minecraft:diamond',
                    Count: 1
                },
                components: {
                    'C': {
                      Name: 'minecraft:coal_block'
                    }
                },
                outputs: [{
                    id: 'minecraft:diamond',
                    Count: 1
                }]
              }*/
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'compactcrafting:miniaturization',
            version: 1,
            recipeSize: recipe.recipeSize,
            layers: recipe.layers,
            catalyst: recipe.catalyst,
            components: recipe.components,
            outputs: recipe.outputs
        });
    });
});
