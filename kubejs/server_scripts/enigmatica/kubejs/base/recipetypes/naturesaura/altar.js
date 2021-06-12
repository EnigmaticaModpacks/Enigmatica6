onEvent('recipes', (event) => {
    const data = {
        recipes: [
            {
                input: 'resourcefulbees:infused_honeycomb',
                output: 'naturesaura:infused_iron',
                aura_type: 'naturesaura:overworld',
                aura: 10000,
                time: 60
            },
            {
                input: 'resourcefulbees:infused_honeycomb_block',
                output: 'naturesaura:infused_iron_block',
                aura_type: 'naturesaura:overworld',
                aura: 90000,
                time: 540
            },
            {
                input: 'resourcefulbees:tainted_honeycomb',
                output: 'naturesaura:tainted_gold',
                aura_type: 'naturesaura:nether',
                aura: 10000,
                time: 60
            },
            {
                input: 'resourcefulbees:tainted_honeycomb_block',
                output: 'naturesaura:tainted_gold_block',
                aura_type: 'naturesaura:nether',
                aura: 90000,
                time: 540
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'naturesaura:altar',
            input: Ingredient.of(recipe.input).toJson(),
            output: Ingredient.of(recipe.output).toJson(),
            aura_type: recipe.aura_type,
            aura: recipe.aura,
            time: recipe.time
        };
        if (recipe.catalyst) {
            constructed_recipe.catalyst = Ingredient.of(recipe.catalyst).toJson();
        }
        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
