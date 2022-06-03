onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('4x quark:turf'),
            pattern: ['AA', 'AA'],
            key: {
                A: [
                    'minecraft:grass',
                    'atum:oasis_grass',
                    'byg:short_grass',
                    'byg:weed_grass',
                    'byg:wilted_grass',
                    'projectvibrantjourneys:beach_grass',
                    'projectvibrantjourneys:prairie_grass',
                    'projectvibrantjourneys:short_grass'
                ]
            },
            id: 'quark:building/crafting/turf'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
