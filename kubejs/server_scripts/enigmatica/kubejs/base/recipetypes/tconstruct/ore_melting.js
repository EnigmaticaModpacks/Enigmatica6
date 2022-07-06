onEvent('recipes', (event) => {
    const recipes = [
        {
            type: 'tconstruct:ore_melting',
            ingredient: {
                tag: 'forge:ores/regalium'
            },
            result: {
                fluid: 'materialis:molten_regalium',
                amount: 144
            },
            temperature: 620,
            time: 81,
            byproducts: [
                {
                    fluid: 'materialis:molten_utherium',
                    amount: 48
                }
            ],
            id: 'materialis:smeltery/melting/metal/regalium/ore'
        },
        {
            type: 'tconstruct:ore_melting',
            ingredient: {
                tag: 'forge:ores/froststeel'
            },
            result: {
                fluid: 'materialis:molten_froststeel',
                amount: 144
            },
            temperature: 860,
            time: 93,
            byproducts: [
                {
                    fluid: 'tconstruct:molten_cobalt',
                    amount: 16
                }
            ],
            id: 'materialis:smeltery/melting/metal/froststeel/ore'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'tconstruct:ore_melting',
                ingredient: recipe.ingredient,
                result: recipe.result,
                temperature: recipe.temperature,
                time: recipe.time,
                byproducts: recipe.byproducts
            })
            .id(recipe.id);
    });
});
