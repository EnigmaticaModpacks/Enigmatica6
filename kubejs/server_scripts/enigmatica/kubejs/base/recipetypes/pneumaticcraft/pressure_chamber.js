onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/pressure_chamber/';
    const recipes = [
        {
            ingredients: [{ type: 'pneumaticcraft:stacked_item', tag: 'forge:grain', count: 1 }],
            pressure: 1.5,
            output: [{ item: 'create:wheat_flour', count: 2 }],
            id: 'pneumaticcraft:pressure_chamber/wheat_flour'
        },
        {
            ingredients: [{ type: 'pneumaticcraft:stacked_item', item: 'atum:emmer', count: 1 }],
            pressure: 1.5,
            output: [{ item: 'atum:emmer_flour', count: 2 }],
            id: `${id_prefix}emmer_flour`
        },
        {
            ingredients: [
                Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:iron_bee' }).weakNBT().toJson(),
                { item: 'pneumaticcraft:lubricant_bucket' },
                Item.of('pneumaticcraft:pneumatic_helmet').ignoreNBT().toJson()
            ],
            pressure: 4.5,
            output: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:pcbee_bee' }).toResultJson()],
            id: `${id_prefix}pcbee_jar`
        }
    ];
    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: recipe.ingredients,
                pressure: recipe.pressure,
                results: recipe.output
            })
            .id(recipe.id);
    });
});
