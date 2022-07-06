onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/tconstruct/melting_fuel/';

    const recipes = [
        {
            fluid: {
                name: 'resourcefulbees:blaze_honey',
                amount: 50
            },
            duration: 150,
            temperature: 1500,
            id: `${id_prefix}blaze_honey`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'tconstruct:melting_fuel',
                fluid: recipe.fluid,
                duration: recipe.duration,
                temperature: recipe.temperature
            })
            .id(recipe.id);
    });
});
