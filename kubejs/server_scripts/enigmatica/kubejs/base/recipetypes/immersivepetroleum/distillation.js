onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/immersivepetroleum/distillation/';

    const recipes = [
        {
            byproducts: [{ item: 'emendatusenigmatica:bitumen_gem', chance: '0.07' }],
            results: [
                { fluid: 'pneumaticcraft:lubricant', amount: 9 },
                { fluid: 'immersivepetroleum:diesel_sulfur', amount: 14 },
                { fluid: 'immersivepetroleum:gasoline', amount: 39 }
            ],
            input: { tag: 'forge:crude_oil', amount: 75 },
            time: 1,
            energy: 2048,
            id: `immersivepetroleum:distillation/oilcracking`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:distillation';
        event.custom(recipe).id(recipe.id);
    });
});
