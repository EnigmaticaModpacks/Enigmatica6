onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('2x create:tree_fertilizer'),
            inputs: ['#minecraft:small_flowers', '#minecraft:small_flowers', '#forge:corals', 'minecraft:bone_meal'],
            id: 'create:crafting/appliances/tree_fertilizer'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
