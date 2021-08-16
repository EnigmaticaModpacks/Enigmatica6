onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: [Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:mana_bee", BeeType: "mana", Color: "#4c97ff"}).weakNBT().toJson()],
            output: {
                item: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:terrastrial_bee", BeeType: "terrastrial", Color: "#5bf23d"}).toJson()
            },
            mana: 1000000,
            id: 'resourcefulbees:terrestrial_bee_spawn_egg_plate'
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
