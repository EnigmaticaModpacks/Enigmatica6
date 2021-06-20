onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: [
                { tag: 'forge:plates/aluminum' },
                { tag: 'forge:plates/aluminum' },
                { tag: 'forge:ingots/energized_steel' },
                { tag: 'forge:wires' }
            ],
            category: 'component',
            output: {
                item: 'modularrouters:blank_module',
                count: 2
            }
        },
        {
            inputs: [
                { tag: 'forge:plates/invar' },
                { tag: 'forge:plates/invar' },
                { tag: 'forge:ingots/energized_steel' },
                { tag: 'forge:wires' }
            ],
            category: 'component',
            output: {
                item: 'modularrouters:blank_module',
                count: 6
            }
        },
        {
            inputs: [
                { tag: 'forge:plates/aluminum' },
                { tag: 'forge:plates/aluminum' },
                { tag: 'forge:nuggets/electrum' },
                { tag: 'forge:nuggets/electrum' },
                { tag: 'forge:nuggets/electrum' },
                { tag: 'forge:nuggets/electrum' },
                { tag: 'forge:nuggets/electrum' },
                { tag: 'forge:wires' }
            ],
            category: 'component',
            output: {
                item: 'modularrouters:blank_upgrade',
                count: 2
            }
        },
        {
            inputs: [
                { tag: 'forge:plates/invar' },
                { tag: 'forge:plates/invar' },
                { tag: 'forge:nuggets/electrum' },
                { tag: 'forge:nuggets/electrum' },
                { tag: 'forge:nuggets/electrum' },
                { tag: 'forge:nuggets/electrum' },
                { tag: 'forge:nuggets/electrum' },
                { tag: 'forge:wires' }
            ],
            category: 'component',
            output: {
                item: 'modularrouters:blank_upgrade',
                count: 6
            }
        },
        {
            inputs: [
                { item: 'modularrouters:blank_upgrade' },
                { item: 'modularrouters:blank_module' },
                { item: 'powah:blazing_capacitor' },
                { tag: 'forge:wires' }
            ],
            category: 'component',
            output: {
                item: 'modularrouters:augment_core',
                count: 2
            }
        },
        {
            inputs: [
                { item: 'modularrouters:blank_upgrade' },
                { item: 'modularrouters:blank_module' },
                { item: 'powah:blazing_capacitor' },
                { tag: 'forge:wires' }
            ],
            category: 'component',
            output: {
                item: 'modularrouters:item_router',
                count: 2
            },
            id: 'modularrouters:item_router'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event
                  .custom({
                      type: 'immersiveengineering:blueprint',
                      inputs: recipe.inputs,
                      category: recipe.category,
                      result: recipe.output
                  })
                  .id(recipe.id)
            : event.custom({
                  type: 'immersiveengineering:blueprint',
                  inputs: recipe.inputs,
                  category: recipe.category,
                  result: recipe.output
              });
    });
});
