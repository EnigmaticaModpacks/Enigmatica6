onEvent('recipes', (event) => {
    const recipes = [
        {
            entity: {
                types: [
                    'resourcefulbees:aluminum_bee'
                ]
            },
            result: {
                fluid: 'kubejs:molten_aluminum_bee',
                amount: 100
            },
            damage: 2
        },
        {
            entity: {
                types: [
                    'resourcefulbees:slimy_bee'
                ]
            },
            result: {
                fluid: 'kubejs:liquid_slimy_bee',
                amount: 100
            },
            damage: 2
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'tconstruct:entity_melting',
            entity: recipe.entity,
            result: recipe.result,
            damage: recipe.damage
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
