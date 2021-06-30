onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'mekanism:hdpe_sheet',
            inputs: [['immersiveengineering:hammer', 'emendatusenigmatica:enigmatic_hammer'], 'mekanism:hdpe_pellet'],
            id: 'mekanism:hdpe_sheet'
        },
        {
            output: 'quark:root',
            inputs: ['minecraft:vine', '#forge:dyes/brown']
        },
        {
            output: 'vampirism:vampire_fang',
            inputs: ['#forge:slimeball/blood', '#forge:slimeball/blood', '#forge:slimeball/blood', '#forge:bones/wither']
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });
});
