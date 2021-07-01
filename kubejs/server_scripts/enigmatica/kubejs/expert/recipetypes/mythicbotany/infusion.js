onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: [
                { item: 'resourcefulbees:mana_bee_spawn_egg' }
            ],
            output: {
                item: 'resourcefulbees:terrestrial_bee_spawn_egg'
            },
            mana: 2000000,
            fromColor: 255,
            toColor: 65280
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
            mana: 300000,
            fromColor: 255,
            toColor: 65280
        },
        {
            inputs: [
                { item: 'resourcefulbees:elven_honeycomb' },
                { tag: 'forge:gems/dragonstone' },
                { item: 'botania:pixie_dust' }
            ],
            output: {
                item: 'mythicbotany:alfsteel_ingot'
            },
            mana: 1500000,
            fromColor: 16711821,
            toColor: 16750080
        }
];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'mythicbotany:infusion',
            group: 'infuser',
            ingredients: recipe.inputs,
            output: recipe.output,
            mana: recipe.mana,
            fromColor: recipe.fromColor,
            toColor: recipe.toColor
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
