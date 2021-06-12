onEvent('recipes', (event) => {
    let data = {
        recipes: [
            {
                type: 'immersivepetroleum:distillation',
                byproducts: [{ item: 'emendatusenigmatica:bitumen_gem', chance: '0.07' }],
                results: [
                    { fluid: 'immersivepetroleum:lubricant', amount: 9 },
                    { fluid: 'immersivepetroleum:diesel_sulfur', amount: 14 },
                    { fluid: 'immersivepetroleum:gasoline', amount: 39 }
                ],
                input: { tag: 'forge:crude_oil', amount: 75 },
                time: 1,
                energy: 2048,
                id: 'oilcracking'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:distillation';
        const re = event.custom(recipe);
        if (recipe.id) {
            re.id(`immersivepetroleum:distillation/${recipe.id}`);
        }
    });
});
