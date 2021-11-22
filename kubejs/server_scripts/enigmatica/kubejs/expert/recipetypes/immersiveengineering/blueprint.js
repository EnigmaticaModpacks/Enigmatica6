onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: [
                { count: 2, base_ingredient: { tag: 'forge:plates/aluminum' } },
                { tag: 'forge:ingots/energized_steel' },
                { tag: 'forge:wires' }
            ],
            category: 'components',
            output: {
                item: 'modularrouters:blank_module',
                count: 2
            },
            id: 'modularrouters:blank_module'
        },
        {
            inputs: [
                { count: 2, base_ingredient: { tag: 'forge:plates/aluminum' } },
                { count: 5, base_ingredient: { tag: 'forge:nuggets/electrum' } },
                { tag: 'forge:wires' }
            ],
            category: 'components',
            output: {
                item: 'modularrouters:blank_upgrade',
                count: 2
            },
            id: 'modularrouters:blank_upgrade'
        },
        {
            inputs: [
                { item: 'modularrouters:blank_upgrade' },
                { item: 'modularrouters:blank_module' },
                { item: 'powah:capacitor_blazing' },
                { tag: 'forge:wires' }
            ],
            category: 'components',
            output: {
                item: 'modularrouters:augment_core',
                count: 2
            },
            id: 'modularrouters:augment_core'
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
