onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: [{ item: 'resourcefulbees:mana_bee_spawn_egg' }],
            output: {
                item: 'resourcefulbees:terrestrial_bee_spawn_egg'
            },
            mana: 1000000
        },
        {
            inputs: [
                { item: 'resourcefulbees:terrestrial_honeycomb' },
                { item: 'botania:mana_pearl' },
                { item: 'botania:mana_diamond' }
            ],
            output: {
                item: 'botania:terrasteel_ingot'
            },
            mana: 300000
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:terra_plate',
            ingredients: recipe.inputs,
            result: recipe.output,
            mana: recipe.mana
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
