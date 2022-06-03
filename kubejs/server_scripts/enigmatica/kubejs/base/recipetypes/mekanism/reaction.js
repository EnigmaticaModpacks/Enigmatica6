onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/reaction';
    const recipes = [
        {
            itemInput: [
                { ingredient: { tag: 'forge:storage_blocks/coal' } },
                { ingredient: { tag: 'forge:storage_blocks/charcoal' } }
            ],
            fluidInput: { amount: 1000, tag: 'minecraft:water' },
            gasInput: { amount: 1000, gas: 'mekanism:oxygen' },
            duration: 900,
            itemOutput: { item: 'emendatusenigmatica:sulfur_dust', count: 9 },
            gasOutput: { gas: 'mekanism:hydrogen', amount: 1000 },
            id: 'mekanism:reaction/coal_gasification/blocks_coals'
        },
        {
            itemInput: { ingredient: { tag: 'minecraft:coals' } },
            fluidInput: { amount: 100, tag: 'minecraft:water' },
            gasInput: { amount: 100, gas: 'mekanism:oxygen' },
            duration: 100,
            itemOutput: { item: 'emendatusenigmatica:sulfur_dust' },
            gasOutput: { gas: 'mekanism:hydrogen', amount: 100 },
            id: 'mekanism:reaction/coal_gasification/coals'
        },
        {
            itemInput: [{ ingredient: { tag: 'forge:dusts/coal' } }, { ingredient: { tag: 'forge:dusts/charcoal' } }],
            fluidInput: { amount: 100, tag: 'minecraft:water' },
            gasInput: { amount: 100, gas: 'mekanism:oxygen' },
            duration: 100,
            itemOutput: { item: 'emendatusenigmatica:sulfur_dust' },
            gasOutput: { gas: 'mekanism:hydrogen', amount: 100 },
            id: 'mekanism:reaction/coal_gasification/dusts_coals'
        },
        {
            itemInput: { amount: 4, ingredient: { tag: 'minecraft:logs' } },
            fluidInput: { amount: 400, tag: 'minecraft:water' },
            gasInput: { amount: 400, gas: 'mekanism:oxygen' },
            duration: 600,
            itemOutput: { item: 'emendatusenigmatica:charcoal_dust' },
            gasOutput: { gas: 'mekanism:hydrogen', amount: 400 },
            id: 'mekanism:reaction/wood_gasification/logs'
        },
        {
            itemInput: { amount: 20, ingredient: { tag: 'minecraft:planks' } },
            fluidInput: { amount: 400, tag: 'minecraft:water' },
            gasInput: { amount: 400, gas: 'mekanism:oxygen' },
            duration: 600,
            itemOutput: { item: 'emendatusenigmatica:charcoal_dust' },
            gasOutput: { gas: 'mekanism:hydrogen', amount: 400 },
            id: 'mekanism:reaction/wood_gasification/planks'
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'mekanism:reaction',
            itemInput: recipe.itemInput,
            fluidInput: recipe.fluidInput,
            gasInput: recipe.gasInput,
            duration: recipe.duration,
            itemOutput: recipe.itemOutput,
            gasOutput: recipe.gasOutput
        };
        if (recipe.energyRequired) {
            constructed_recipe.energyRequired = recipe.energyRequired;
        }
        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
