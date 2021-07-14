onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: [
                { item: 'resourcefulbees:mana_bee_spawn_egg' },
                { item: 'botania:mana_pearl' },
                { item: 'botania:mana_diamond' },
                { item: 'botania:quartz_mana' }
            ],
            output: { item: 'resourcefulbees:terrestrial_bee_spawn_egg' },
            mana: 2000000
        },
        {
            inputs: [
                { tag: 'forge:nuggets/terminite' },
                { tag: 'forge:nuggets/terminite' },
                { tag: 'forge:nuggets/terminite' },
                { item: 'botania:mana_pearl' },
                { item: 'resourcefulbees:terrestrial_honeycomb' },
                { item: 'resourcefulbees:terrestrial_honeycomb' },
                { item: 'resourcefulbees:terrestrial_honeycomb' },
                { item: 'botania:mana_diamond' },
                { tag: 'forge:nuggets/iesnium' },
                { tag: 'forge:nuggets/iesnium' },
                { tag: 'forge:nuggets/iesnium' },
                { item: 'botania:quartz_mana' }
            ],
            output: { item: 'botania:terrasteel_ingot' },
            mana: 300000
        },
        {
            inputs: [
                { tag: 'forge:nuggets/terminite' },
                { tag: 'forge:nuggets/terminite' },
                { tag: 'forge:nuggets/terminite' },
                { item: 'botania:mana_pearl' },
                { tag: 'forge:nuggets/manasteel' },
                { tag: 'forge:nuggets/manasteel' },
                { tag: 'forge:nuggets/manasteel' },
                { item: 'botania:mana_diamond' },
                { tag: 'forge:nuggets/iesnium' },
                { tag: 'forge:nuggets/iesnium' },
                { tag: 'forge:nuggets/iesnium' },
                { item: 'botania:quartz_mana' }
            ],
            output: { item: 'botania:terrasteel_ingot' },
            mana: 500000,
            id: 'botania:terra_plate/terrasteel_ingot'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:terra_plate',
            ingredients: recipe.inputs.map((input) => Ingredient.of(input).toJson()),
            result: Item.of(recipe.output).toJson(),
            mana: recipe.mana
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
