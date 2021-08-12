onEvent('recipes', (event) => {
    const recipes = [
/*
        {
            inputs: [
                '', // top left
                '', // top 
                '', // top right
                '', // left
                '', // right
                '', // bottom left
                '', // bottom
                ''  // bottom right
            ],
            inputFluid: '', // optional
            inputFluidAmount: 0, // leave at 0 for no fluid
            processingTime: 50,
            outputItem: { item: '', count: 1 },
            outputFluid: '', // optional
            outputFluidAmount: 0, // leave at 0 for no fluid
            id: ''
        }
*/
        {
            inputs: [
                'minecraft:glass_pane'
            ],
            inputFluid: 'pneumaticcraft:memory_essence',
            inputFluidAmount: 1000,
            processingTime: 50,
            outputItem: { item: 'minecraft:glass_pane', count: 1 },
            outputFluid: 'industrialforegoing:essence',
            outputFluidAmount: 1000
        },
        {
            inputs: [
                'minecraft:glass_pane'
            ],
            inputFluid: 'industrialforegoing:essence',
            inputFluidAmount: 1000,
            processingTime: 50,
            outputItem: { item: 'minecraft:glass_pane', count: 1 },
            outputFluid: 'pneumaticcraft:memory_essence',
            outputFluidAmount: 1000
        },
        {
            inputs: [
                '#forge:ingots/pink_slime', // top left
                'resourcefulbees:iron_bee_spawn_egg', // top 
                '#forge:ingots/pink_slime', // top right
                '#resourcefulbees:resourceful_honeycomb_block', // left
                '#resourcefulbees:resourceful_honeycomb_block', // right
                'resourcefulbees:wax', // bottom left
                'resourcefulbees:bee_jar', // bottom
                'resourcefulbees:wax'  // bottom right
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 1000,
            processingTime: 600,
            outputItem: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:industrious_bee", BeeType: "industrious", Color: "#209EBD"}).toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        }
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        const re = event.custom({
            type: 'industrialforegoing:dissolution_chamber',
            input: ingredients,
            inputFluid: `{FluidName:"${recipe.inputFluid}",Amount:${recipe.inputFluidAmount}}`,
            processingTime: recipe.processingTime,
            output: recipe.outputItem,
            outputFluid: `{FluidName:"${recipe.outputFluid}",Amount:${recipe.outputFluidAmount}}`
        });

        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});