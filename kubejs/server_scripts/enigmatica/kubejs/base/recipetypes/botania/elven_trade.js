onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [{ item: 'resourcefulbees:mana_bee_spawn_egg' }],
            output: {
                item: 'resourcefulbees:elven_bee_spawn_egg'
            }
        },
        {
            inputs: [{ item: 'resourcefulbees:elven_honeycomb' }, { item: 'resourcefulbees:elven_honeycomb' }],
            output: {
                item: 'botania:elementium_ingot'
            }
        },
        {
            inputs: [
                { item: 'resourcefulbees:elven_honeycomb_block' },
                { item: 'resourcefulbees:elven_honeycomb_block' }
            ],
            output: {
                item: 'botania:elementium_block'
            }
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:elven_trade',
            ingredients: recipe.inputs,
            output: recipe.output
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
