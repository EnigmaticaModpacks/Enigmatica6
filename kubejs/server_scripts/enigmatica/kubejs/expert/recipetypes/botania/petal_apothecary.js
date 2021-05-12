events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/white' },
                { tag: 'botania:petals/white' },
                { item: 'thermal:phytogro' }
            ],
            output: { item: 'botania:pure_daisy' },
            id: 'botania:petal_apothecary/pure_daisy'
        },
        {
            inputs: [{ tag: 'forge:mushrooms' }, { item: 'thermal:phytogro' }],
            output: { item: 'eidolon:fungus_sprouts', count: 2 }
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:petal_apothecary',
            output: recipe.output,
            ingredients: recipe.inputs
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
