onEvent('recipes', (event) => {
    const recipes = [
        {
            fluid: {
                name: "resourcefulbees:blaze_honey",
                amount: 50
            },
            duration: 150,
            temperature: 1500
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'tconstruct:melting_fuel',
            fluid: recipe.fluid,
            duration: recipe.duration,
            temperature: recipe.temperature
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
