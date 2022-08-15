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
        },
        {
            inputs: [
                { item: 'eidolon:polished_planks' },
                { item: 'eidolon:polished_planks' },
                { item: 'eidolon:polished_planks' },
                { item: 'eidolon:polished_planks' }
            ],
            output: {
                item: 'botania:dreamwood'
            },
            id: 'botania:elven_trade/dreamwood'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'botania:elven_trade',
                ingredients: recipe.inputs,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
