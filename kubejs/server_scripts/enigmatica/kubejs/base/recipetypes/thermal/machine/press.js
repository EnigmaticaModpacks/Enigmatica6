/*events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                inputs: ['forge:ingots/steel', 'immersiveengineering:mold_wire'],
                output: 'immersiveengineering:wire_steel',
                count: 2.0
            },
            {
                inputs: ['forge:ingots/aluminum', 'immersiveengineering:mold_wire'],
                output: 'immersiveengineering:wire_aluminum',
                count: 2.0
            },
            {
                inputs: ['forge:ingots/copper', 'immersiveengineering:mold_wire'],
                output: 'immersiveengineering:wire_copper',
                count: 2.0
            },
            {
                inputs: ['forge:ingots/electrum', 'immersiveengineering:mold_wire'],
                output: 'immersiveengineering:wire_electrum',
                count: 2.0
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.thermal.press({
            type: 'thermal:press',
            input: [
              {
                tag: recipe.inputs[0]
              },
              {
                item: recipe.inputs[1]
              }
            ],
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
*/

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