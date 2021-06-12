onEvent('recipes', (event) => {
    let data = {
        recipes: [
            {
                type: 'immersivepetroleum:hydrotreater',
                time: 1,
                energy: 512,
                result: { fluid: 'immersivepetroleum:diesel', amount: 7 },
                input: { tag: 'forge:diesel_sulfur', amount: 7 },
                secondary_input: { tag: 'minecraft:water', amount: 7 },
                secondary_result: { item: 'emendatusenigmatica:sulfur_dust', chance: '0.02' },
                id: 'sulfur_recovery'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:hydrotreater';
        const re = event.custom(recipe);
        if (recipe.id) {
            re.id(`immersivepetroleum:hydrotreater/${recipe.id}`);
        }
    });
});
