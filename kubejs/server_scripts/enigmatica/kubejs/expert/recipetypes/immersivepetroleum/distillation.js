onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersivepetroleum/distillation/';

    const recipes = [
        {
            results: [
                { fluid: 'mekanism:brine', amount: 10 },
                { fluid: 'mekanism:steam', amount: 90 }
            ],
            byproducts: [],
            input: { tag: 'minecraft:water', amount: 100 },
            time: 1,
            energy: 2048,
            id: `${id_prefix}brine`
        },
        {
            results: [
                { fluid: 'mekanism:lithium', amount: 1 },
                { fluid: 'mekanism:steam', amount: 9 }
            ],
            byproducts: [],
            input: { tag: 'forge:brine', amount: 10 },
            time: 1,
            energy: 2048,
            id: `${id_prefix}lithium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:distillation';
        event.custom(recipe).id(recipe.id);
    });
});
