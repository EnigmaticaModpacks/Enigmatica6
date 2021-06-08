onEvent('recipes', (event) => {
    const recipes = [
        {
            type: 'immersiveengineering:shapeless_fluid',
            inputs: [
                '#forge:dusts/wood',
                '#forge:dusts/wood',
                '#forge:dusts/wood',
                '#forge:dusts/wood',
                { fluid: 'minecraft:water' }
            ],
            output: Item.of('minecraft:paper', 6),
            id: 'immersiveengineering:crafting/paper_from_sawdust'
        }
    ];
    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            if (input.fluid) {
                ingredients.push({
                    tag: input.fluid,
                    amount: 1000,
                    type: 'immersiveengineering:fluid'
                });
            } else {
                ingredients.push(Ingredient.of(input).toJson());
            }
        });

        const re = event.custom({
            type: 'immersiveengineering:shapeless_fluid',
            ingredients: ingredients,
            result: recipe.output
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
