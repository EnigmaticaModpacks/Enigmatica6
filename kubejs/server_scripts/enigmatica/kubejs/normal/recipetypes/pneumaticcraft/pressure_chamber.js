onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/pneumaticcraft/pressure_chamber/';
    const recipes = [
        {
            ingredients: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:nuggets/gold_copper', count: 2 },
                { tag: 'forge:slimeballs' },
                { item: 'pneumaticcraft:plastic' }
            ],
            pressure: 1.0,
            output: [{ item: 'pneumaticcraft:capacitor' }],
            id: 'pneumaticcraft:pressure_chamber/capacitor'
        },
        {
            ingredients: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:nuggets/gold_copper', count: 3 },
                { tag: 'forge:dusts/redstone' },
                { item: 'pneumaticcraft:plastic' }
            ],
            pressure: 1.0,
            output: [{ item: 'pneumaticcraft:transistor' }],
            id: 'pneumaticcraft:pressure_chamber/transistor'
        },
        {
            ingredients: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:nuggets/gold_copper', count: 3 },
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:redstone_torch', count: 2 },
                { item: 'pneumaticcraft:plastic' }
            ],
            pressure: 1.5,
            output: [{ item: 'pneumaticcraft:empty_pcb', count: 3 }],
            id: 'pneumaticcraft:pressure_chamber/empty_pcb'
        }
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            input.type = 'pneumaticcraft:stacked_item';
            ingredients.push(input);
        });

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: ingredients,
                pressure: recipe.pressure,
                results: recipe.results
            })
            .id(recipe.id);
    });
});
