onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'mekanism:hdpe_sheet',
            inputs: ['#forge:tools/crafting_hammer', 'mekanism:hdpe_pellet'],
            id: 'mekanism:hdpe_sheet'
        },
        {
            output: 'quark:root',
            inputs: ['minecraft:vine', '#forge:dyes/brown']
        },
        {
            output: Item.of('refinedstorage:quartz_enriched_iron', 4),
            inputs: ['#forge:ingots/iron', '#forge:ingots/iron', '#forge:ingots/iron', '#forge:gems/quartz'],
            id: 'refinedstorage:quartz_enriched_iron'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });
});
