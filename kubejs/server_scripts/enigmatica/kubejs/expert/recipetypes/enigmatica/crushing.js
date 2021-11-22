onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        // {
        //     secondary_output: Item.of('minecraft:sugar').chance(0.5),
        //     output: Item.of('minecraft:diamond', 8),
        //     input: Item.of('minecraft:lead'),
        //     experience: 0.5,
        //     duration: 100,
        //     ignore_occultism_multiplier: true
        // }

        {
            secondary_output: Item.of('kubejs:basalt_powder').chance(0.5),
            output: Item.of('kubejs:basalt_powder', 4),
            input: Ingredient.of('#forge:stones/basalt'),
            experience: 0.5,
            duration: 100,
            ignore_occultism_multiplier: true
        },
        {
            secondary_output: Item.of('minecraft:bone_meal').chance(0.15),
            output: Item.of('kubejs:ground_meat', 1),
            input: Ingredient.of('#enigmatica:meats/small'),
            experience: 0.5,
            duration: 100,
            ignore_occultism_multiplier: true
        },
        {
            secondary_output: Item.of('minecraft:bone_meal').chance(0.15),
            output: Item.of('kubejs:ground_meat', 2),
            input: Ingredient.of('#enigmatica:meats/medium'),
            experience: 0.5,
            duration: 100,
            ignore_occultism_multiplier: true
        },
        {
            secondary_output: Item.of('minecraft:bone_meal').chance(0.15),
            output: Item.of('kubejs:ground_meat', 3),
            input: Ingredient.of('#enigmatica:meats/large'),
            experience: 0.5,
            duration: 100,
            ignore_occultism_multiplier: true
        },
        {
            secondary_output: Item.of('waystones:warp_dust').chance(0.15),
            output: Item.of('waystones:warp_dust', 3),
            input: Ingredient.of('waystones:warp_stone'),
            experience: 0.5,
            duration: 100,
            ignore_occultism_multiplier: true
        }
    ];

    recipetypes_crushing = (event, recipe) => {
        // pedestals
        event.custom({
            type: 'pedestals:pedestal_crushing',
            ingredient: recipe.input,
            result: recipe.output
        });

        // occultism
        event.custom({
            type: 'occultism:crushing',
            ingredient: recipe.input,
            result: recipe.output,
            crushing_time: recipe.duration,
            ignore_crushing_multiplier: recipe.ignore_occultism_multiplier
        });

        // astralsorcery
        event.custom({
            type: 'astralsorcery:infuser',
            fluidInput: 'astralsorcery:liquid_starlight',
            input: recipe.input,
            output: recipe.output,
            consumptionChance: 0.1,
            duration: recipe.duration,
            consumeMultipleFluids: false,
            acceptChaliceInput: true,
            copyNBTToOutputs: false
        });

        // industrialforegoing
        event.custom({
            type: 'industrialforegoing:crusher',
            input: recipe.input,
            output: recipe.output
        });

        // thermal
        event.recipes.thermal
            .pulverizer([recipe.output, recipe.secondary_output], recipe.input)
            .experience(recipe.experience);
        event.recipes.mekanism.enriching(recipe.output, recipe.input);
        event.recipes.immersiveengineering.crusher(recipe.output, recipe.input, recipe.secondary_output);
        event.recipes.create.milling([recipe.output, recipe.secondary_output], recipe.input);
    };

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});
