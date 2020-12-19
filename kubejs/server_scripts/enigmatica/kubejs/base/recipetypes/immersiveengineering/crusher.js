events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {input: 'thermal:blizz_rod', primary: 'thermal:blizz_powder', secondary: 'minecraft:snowball'},
            {input: 'thermal:blitz_rod', primary: 'thermal:blitz_powder', secondary: 'emendatusenigmatica:potassium_nitrate_gem'},
            {input: 'thermal:basalz_rod', primary: 'thermal:basalz_powder', secondary: 'thermal:slag'}
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.crusher({
            type: 'immersiveengineering:crusher',
            secondaries: [
              {
                chance: 0.5,
                output: {
                  item: recipe.secondary
                }
              }
            ],
            result: {
              item: recipe.primary,
              count: 4
            },
            input: {
              item: recipe.input
            },
            energy: 1600
          });        
    });
});



