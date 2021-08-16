onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: [
                Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:mana_bee", BeeType: "mana", Color: "#4c97ff"}).weakNBT().toJson()
            ],
            output: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:terrestrial_bee", BeeType: "terrestrial", Color: "#5bf23d"}).toJson(),
            mana: 2000000,
            id: 'botania:terra_plate/terrestrial_bee_plate'
        },
        {
            inputs: [
                { item: 'botania:mana_pearl' },
                { item: 'resourcefulbees:terrestrial_honeycomb' },
                { item: 'botania:mana_diamond' }
            ],
            output: { item: 'botania:terrasteel_ingot' },
            mana: 300000,
            id: 'botania:terra_plate/terrasteel_ingot_honeycomb'
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
