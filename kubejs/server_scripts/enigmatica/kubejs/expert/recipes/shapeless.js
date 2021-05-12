events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'mekanism:hdpe_sheet',
            inputs: [
                'mekanism:hdpe_pellet',
                ['immersiveengineering:hammer', 'emendatusenigmatica:enigmatic_hammer'],
                'mekanism:hdpe_pellet'
            ],
            id: 'mekanism:hdpe_sheet'
        },
        {
            output: Item.of('architects_palette:sunmetal_brick', 9),
            inputs: ['architects_palette:sunmetal_block']
        },
        {
            output: Item.of('ars_nouveau:potion_jar'),
            inputs: ['ars_nouveau:mana_jar', ['minecraft:nether_wart', 'eidolon:fungus_sprouts']],
            id: 'ars_nouveau:potion_jar'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });
});
