function cuttingRecipe(ingredient, tool, result) {
    return {
        type: 'farmersdelight:cutting',
        ingredients: [ingredient],
        tool: tool,
        result: result
    };
}

onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/farmersdelight/cutting/';

    const recipes = [
        cuttingRecipe(Ingredient.of('minecraft:leather'), Ingredient.of('#forge:tools/knives'), [
            Item.of('betterendforge:leather_stripe', 3)
        ]),
        cuttingRecipe(
            Ingredient.of('#minecraft:planks'),
            {
                type: 'farmersdelight:tool',
                tool: 'axe'
            },
            [Item.of('minecraft:stick', 2)]
        ),
        cuttingRecipe(
            Ingredient.of('upgrade_aquatic:embedded_ammonite'),
            {
                type: 'farmersdelight:tool',
                tool: 'pickaxe'
            },
            [Item.of('minecraft:nautilus_shell', 2)]
        )
    ];

    recipes.forEach((recipe) => {
        fallback_id(event.custom(recipe), id_prefix);
    });

    buildWoodVariants.forEach((variant) => {
        let woodRecipes = [
            {
                input: variant.logBlockStripped
            },
            {
                input: variant.woodBlockStripped
            }
        ];

        woodRecipes.forEach((recipe) => {
            let tool = {
                type: 'farmersdelight:tool',
                tool: 'axe'
            };
            let ingredients = Ingredient.of(recipe.input);
            let result = [Item.of('minecraft:stick', 8)];
            fallback_id(
                event.custom({
                    type: 'farmersdelight:cutting',
                    ingredients: [ingredients],
                    tool: tool,
                    result: result
                }),
                id_prefix
            );
        });
    });
});
