onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: [
                Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:mana_bee", BeeType: "mana", Color: "#4c97ff"}).weakNBT().toJson(),
                { item: 'botania:mana_pearl' },
                { item: 'botania:mana_diamond' },
                { item: 'botania:quartz_mana' }
            ],
            output: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:terrestrial_bee", BeeType: "terrestrial", Color: "#5bf23d"}).toJson(),
            mana: 2000000,
            id: 'resourcefulbees:terrestrial_bee_spawn_egg_plate'
        },
        {
            inputs: [
                { tag: 'forge:ingots/sky' },
                { item: 'botania:mana_pearl' },
                { item: 'resourcefulbees:terrestrial_honeycomb' },
                { item: 'botania:mana_diamond' },
                { tag: 'forge:ingots/iesnium' },
                { item: 'botania:quartz_mana' }
            ],
            output: { item: 'botania:terrasteel_ingot' },
            mana: 300000
        },
        {
            inputs: [
                { tag: 'forge:ingots/sky' },
                { item: 'botania:mana_pearl' },
                { tag: 'forge:ingots/manasteel' },
                { item: 'botania:mana_diamond' },
                { tag: 'forge:ingots/iesnium' },
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
