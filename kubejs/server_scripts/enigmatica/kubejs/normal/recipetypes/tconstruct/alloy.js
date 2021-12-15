onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/tconstruct/alloy/';
    const recipes = [
        /*
        {
            inputs: [
                { name: 'tconstruct:molten_glass', amount: 1000 },
                { name: 'tconstruct:molten_obsidian', amount: 1000 },
                { name: 'tconstruct:molten_quartz', amount: 144 }
            ],
            result: { fluid: 'kubejs:molten_hardened_glass', amount: 1000 },
            temperature: 1400,
            id: `${id_prefix}molten_hardened_glass`
        }*/
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:alloy';
        event.custom(recipe).id(recipe.id);
    });
});
