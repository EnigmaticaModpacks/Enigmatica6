events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                inputs: [{tag: 'forge:plates/steel', count: 3},{tag: 'forge:wires/steel'}],
                output: 'immersiveengineering:mold_wire',
                count: 1
            },
            {
                inputs: [{tag: 'forge:plates/steel', count: 3},{tag: 'forge:rods/steel'}],
                output: 'immersiveengineering:mold_rod',
                count: 1
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.thermal.press({
            type: 'thermal:press',
            input: recipe.inputs,
            result: [
              {
                item: recipe.output,
                count: recipe.count
              }
            ],
            energy: 2400
          });
    });
});