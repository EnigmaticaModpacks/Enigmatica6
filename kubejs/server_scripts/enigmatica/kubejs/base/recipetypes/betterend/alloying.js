events.listen('recipes', (event) => {
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
        event.custom({
            type: 'betterendforge:alloying',
            ingredients: recipe.ingredients,
            result: recipe.result,
            experience: recipe.experience,
            smelttime: recipe.smelttime
        });
    });
});
