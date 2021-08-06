onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: [{ tag: 'forge:ingots/infused_iron' }, { tag: 'forge:ingots/tainted_gold' }],
            output: {
                item: 'botania:elementium_ingot'
            },
            id: 'botania:elven_trade/elementium'
        },
        {
            inputs: [{ tag: 'forge:storage_blocks/infused_iron' }, { tag: 'forge:storage_blocks/tainted_gold' }],
            output: {
                item: 'botania:elementium_block'
            },
            id: 'botania:elven_trade/elementium_block'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:elven_trade',
            ingredients: recipe.inputs,
            output: recipe.output
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
