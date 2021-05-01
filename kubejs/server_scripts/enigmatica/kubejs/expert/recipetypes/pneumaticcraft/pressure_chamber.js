events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [
                {
                    tag: 'forge:gems/coal_coke',
                    count: 2
                },
                {
                    tag: 'forge:ingots/iron',
                    count: 4
                },
                {
                    tag: 'forge:obsidian',
                    count: 1
                }
            ],
            pressure: 2.0,
            results: [
                {
                    item: 'pneumaticcraft:ingot_iron_compressed',
                    count: 4
                }
            ],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'
        },
        {
            inputs: [
                {
                    tag: 'forge:storage_blocks/coal_coke',
                    count: 2
                },
                {
                    tag: 'forge:storage_blocks/iron',
                    count: 4
                },
                {
                    tag: 'forge:obsidian',
                    count: 9
                }
            ],
            pressure: 2.0,
            results: [
                {
                    item: 'pneumaticcraft:compressed_iron_block',
                    count: 4
                }
            ],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_block'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event
                  .custom({
                      type: 'pneumaticcraft:pressure_chamber',
                      inputs: recipe.inputs,
                      pressure: recipe.pressure,
                      results: recipe.results
                  })
                  .id(recipe.id)
            : event.custom({
                  type: 'pneumaticcraft:pressure_chamber',
                  inputs: recipe.inputs,
                  pressure: recipe.pressure,
                  results: recipe.results
              });
    });
});
