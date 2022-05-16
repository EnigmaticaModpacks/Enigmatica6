onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/pneumaticcraft/pressure_chamber/';
    const recipes = [
        {
            inputs: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:nuggets/gold_copper', count: 2 },
                { tag: 'forge:slimeballs', count: 1 },
                { item: 'pneumaticcraft:plastic', count: 1 }
            ],
            pressure: 1.0,
            results: [{ item: 'pneumaticcraft:capacitor', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/capacitor'
        },
        {
            inputs: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:nuggets/gold_copper', count: 3 },
                { tag: 'forge:dusts/redstone', count: 1 },
                { item: 'pneumaticcraft:plastic', count: 1 }
            ],
            pressure: 1.0,
            results: [{ item: 'pneumaticcraft:transistor', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/transistor'
        },
        {
            inputs: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:nuggets/gold_copper', count: 3 },
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:redstone_torch', count: 2 },
                { item: 'pneumaticcraft:plastic', count: 1 }
            ],
            pressure: 1.5,
            results: [{ item: 'pneumaticcraft:empty_pcb', count: 3 }],
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
