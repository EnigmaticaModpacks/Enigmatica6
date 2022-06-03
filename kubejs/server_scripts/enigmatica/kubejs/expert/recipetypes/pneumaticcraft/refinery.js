onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/refinery/';
    const recipes = [
        {
            input: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 100 },
            temperature: { min_temp: 373 },
            results: [
                { fluid: 'mekanism:brine', amount: 10 },
                { fluid: 'mekanism:steam', amount: 90 }
            ],
            id: `${id_prefix}brine`
        },
        {
            input: { type: 'pneumaticcraft:fluid', fluid: 'mekanism:brine', amount: 10 },
            temperature: { min_temp: 373 },
            results: [
                { fluid: 'mekanism:lithium', amount: 1 },
                { fluid: 'mekanism:steam', amount: 9 }
            ],
            id: `${id_prefix}lithium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:refinery';
        event.custom(recipe).id(recipe.id);
    });
});
