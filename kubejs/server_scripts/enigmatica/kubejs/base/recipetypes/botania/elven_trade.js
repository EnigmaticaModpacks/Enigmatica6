onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/botania/elven_trade/';

    const recipes = [
        {
            inputs: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:mana_bee' }).weakNBT().toJson()],
            output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:elven_bee' }).toJson(),
            id: `${id_prefix}elven_bee_jar`
        },
        {
            inputs: [{ item: 'resourcefulbees:elven_honeycomb' }, { item: 'resourcefulbees:elven_honeycomb' }],
            output: {
                item: 'botania:elementium_ingot'
            },
            id: `${id_prefix}elementium_ingot`
        },
        {
            inputs: [
                { item: 'resourcefulbees:elven_honeycomb_block' },
                { item: 'resourcefulbees:elven_honeycomb_block' }
            ],
            output: {
                item: 'botania:elementium_block'
            },
            id: `${id_prefix}elementium_block`
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
