onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                ingredients: [
                    { type: 'pneumaticcraft:stacked_item', tag: 'forge:nuggets/gold_copper', count: 3 },
                    { type: 'pneumaticcraft:stacked_item', item: 'minecraft:redstone_torch', count: 2 },
                    { item: 'pneumaticcraft:plastic' }
                ],
                pressure: 1.5,
                output: [{ item: 'pneumaticcraft:empty_pcb', count: 3 }],
                id: 'empty_pcb'
            },
            {
                ingredients: [
                    { type: 'pneumaticcraft:stacked_item', tag: 'forge:nuggets/gold_copper', count: 2 },
                    { tag: 'forge:slimeballs' },
                    { item: 'pneumaticcraft:plastic' }
                ],
                pressure: 1.0,
                output: [{ item: 'pneumaticcraft:capacitor' }],
                id: 'capacitor'
            },
            {
                ingredients: [
                    { type: 'pneumaticcraft:stacked_item', tag: 'forge:nuggets/gold_copper', count: 3 },
                    { tag: 'forge:dusts/redstone' },
                    { item: 'pneumaticcraft:plastic' }
                ],
                pressure: 1.0,
                output: [{ item: 'pneumaticcraft:transistor' }],
                id: 'transistor'
            },
            {
                ingredients: [{ type: 'pneumaticcraft:stacked_item', tag: 'forge:grain', count: 1 }],
                pressure: 1.5,
                output: [{ item: 'create:wheat_flour', count: 2 }],
                id: 'wheat_flour'
            },
            {
                ingredients: [
                    Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:iron_bee' }).weakNBT().toJson(),
                    { item: 'pneumaticcraft:lubricant_bucket' },
                    Item.of('pneumaticcraft:pneumatic_helmet').ignoreNBT().toJson()
                ],
                pressure: 4.5,
                output: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:pcbee_bee' }).toResultJson()],
                id: 'pcbee_jar'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        let re = event.custom({
            type: 'pneumaticcraft:pressure_chamber',
            inputs: recipe.ingredients,
            pressure: recipe.pressure,
            results: recipe.output
        });
        if (recipe.id) {
            re.id(`pneumaticcraft:pressure_chamber/${recipe.id}`);
        }
    });
});
