onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/farmersdelight/cooking/';
    const recipes = [
        {
            inputs: [
                '#forge:crops/rice',
                '#forge:vegetables',
                'farmersdelight:tomato_sauce',
                'minecraft:baked_potato',
                'minecraft:brown_mushroom',
                'minecraft:sweet_berries'
            ],
            output: 'farmersdelight:stuffed_pumpkin_block',
            container: 'minecraft:pumpkin',
            count: 1,
            cookingTime: 400,
            id: `farmersdelight:cooking/stuffed_pumpkin_block`
        },
        {
            inputs: ['#forge:raw_fishes/perch', 'minecraft:red_mushroom', '#forge:crops/rice', '#forge:crops/tomato'],
            output: 'abnormals_delight:perch_with_mushrooms',
            container: 'minecraft:bowl',
            count: 1,
            cookingTime: 200,
            id: `abnormals_delight:perch_with_mushrooms`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cooking';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = { item: recipe.output, count: recipe.count };
        if (recipe.container) {
            recipe.container = { item: recipe.container };
        }

        event.custom(recipe).id(recipe.id);
    });
});
