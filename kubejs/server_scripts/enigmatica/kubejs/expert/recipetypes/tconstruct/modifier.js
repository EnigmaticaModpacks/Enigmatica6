onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [
                {
                    item: 'minecraft:blaze_rod'
                },
                {
                    item: 'tconstruct:smeltery_controller'
                },
                {
                    item: 'minecraft:blaze_rod'
                },
                {
                    item: 'minecraft:lava_bucket'
                },
                {
                    item: 'minecraft:lava_bucket'
                }
            ],
            tools: {
                tag: 'tconstruct:modifiable/melee_or_harvest'
            },
            slots: {
                abilities: 1
            },
            result: {
                name: 'tconstruct:melting',
                level: 1
            },
            max_level: 1,
            id: 'tconstruct:tools/modifiers/ability/melting'
        }
    ];
    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'tconstruct:modifier',
                inputs: recipe.inputs,
                tools: recipe.tools,
                slots: recipe.slots,
                result: recipe.result,
                max_level: recipe.max_level
            })
            .id(recipe.id);
    });
});
