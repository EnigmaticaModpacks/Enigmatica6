onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/recipes/shapeless/';

    const recipes = [
        {
            output: 'mekanism:hdpe_sheet',
            inputs: ['#forge:tools/crafting_hammer', 'mekanism:hdpe_pellet'],
            id: 'mekanism:hdpe_sheet'
        },
        {
            output: 'quark:root',
            inputs: ['minecraft:vine', '#forge:dyes/brown'],
            id: `${id_prefix}quark_root`
        },
        {
            output: Item.of('refinedstorage:quartz_enriched_iron', 4),
            inputs: ['#forge:ingots/iron', '#forge:ingots/iron', '#forge:ingots/iron', '#forge:gems/quartz'],
            id: 'refinedstorage:quartz_enriched_iron'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
