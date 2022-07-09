onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/betterend/alloying/';

    var data = {
        recipes: [
            {
                ingredients: [{ tag: 'forge:ingots/gold' }, { tag: 'forge:ingots/silver' }],
                result: Item.of('emendatusenigmatica:electrum_ingot', 2),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [{ tag: 'forge:ingots/copper' }, { tag: 'forge:ingots/zinc' }],
                result: Item.of('emendatusenigmatica:brass_ingot', 2),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [{ tag: 'forge:ingots/iron' }, { tag: 'forge:ingots/lead' }],
                result: Item.of('eidolon:pewter_ingot', 2),
                experience: 2,
                smelttime: 300
            },
            {
                ingredients: [{ tag: 'forge:ingots/copper' }, { tag: 'forge:ingots/nickel' }],
                result: Item.of('emendatusenigmatica:constantan_ingot', 2),
                experience: 2,
                smelttime: 300
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        fallback_id(
            event.custom({
                type: 'betterendforge:alloying',
                ingredients: recipe.ingredients,
                result: recipe.result,
                experience: recipe.experience,
                smelttime: recipe.smelttime
            }),
            id_prefix
        );
    });
});
