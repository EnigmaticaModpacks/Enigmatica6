events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            ingredients: [
                {
                    tag: 'forge:tools/axe'
                },
                {
                    tag: 'minecraft:planks'
                }
            ],
            result: {
                item: 'minecraft:stick',
                count: 2
            },
            id: 'minecraft:stick'
        },
        {
            ingredients: [
                {
                    tag: 'forge:tools/axe'
                },
                {
                    tag: 'minecraft:logs'
                }
            ],
            result: {
                item: 'minecraft:stick',
                count: 8
            }
        }
    ];
    recipes.forEach((recipe) => {
        recipe.id
            ? event
                  .custom({
                      type: 'enigmatica:tool_shapeless',
                      ingredients: recipe.ingredients,
                      result: recipe.result
                  })
                  .id(recipe.id)
            : event.custom({
                  type: 'enigmatica:tool_shapeless',
                  ingredients: recipe.ingredients,
                  result: recipe.result
              });
    });
});
