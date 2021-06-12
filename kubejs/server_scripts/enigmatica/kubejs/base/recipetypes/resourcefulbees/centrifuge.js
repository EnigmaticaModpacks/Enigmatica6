onEvent('recipes', (event) => {
    const recipes = [
        {
            ingredient: {
                item: 'resourcefulbees:boobee_honeycomb'
            },
            results: [
                {
                    item: 'minecraft:ghast_tear',
                    chance: 0.15,
                    count: 2
                },
                {
                    item: 'minecraft:spectral_arrow',
                    chance: 0.2,
                    count: 3
                },
                {
                    fluid: 'minecraft:milk',
                    amount: 250,
                    chance: 0.25
                }
            ],
            time: 200,
            noBottleInput: true
        },
        {
            ingredient: {
                item: 'resourcefulbees:boobee_honeycomb_block'
            },
            results: [
                {
                    item: 'minecraft:ghast_tear',
                    chance: 0.15,
                    count: 18
                },
                {
                    item: 'minecraft:spectral_arrow',
                    chance: 0.2,
                    count: 27
                },
                {
                    fluid: 'minecraft:milk',
                    amount: 2250,
                    chance: 0.25
                }
            ],
            time: 200,
            noBottleInput: true
        }
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'resourcefulbees:centrifuge',
            ingredient: recipe.ingredient,
            results: recipe.results,
            time: recipe.time,
            noBottleInput: recipe.noBottleInput
        });
    });
});
