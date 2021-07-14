/*onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                type: 'industrialforegoing:dissolution_chamber',
                input: [
                    {
                        item: 'minecraft:glass_pane'
                    }
                ],
                inputFluid: '{ FluidName: "pneumaticcraft:memory_essence", Amount: 1000 }',
                processingTime: 50,
                output: {
                    item: 'minecraft:glass_pane',
                    count: 1
                },
                outputFluid: '{ FluidName: "industrialforegoing:essence", Amount: 1000 }'
            },
            {
                type: 'industrialforegoing:dissolution_chamber',
                input: [
                    {
                        item: 'minecraft:glass_pane'
                    }
                ],
                inputFluid: '{ FluidName: "industrialforegoing:essence", Amount: 1000 }',
                processingTime: 50,
                output: {
                    item: 'minecraft:glass_pane',
                    count: 1
                },
                outputFluid: '{ FluidName: "pneumaticcraft:memory_essence", Amount: 1000 }'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.custom(recipe);
    });
});
*/

onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

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
            outputItemName: '',
            outputItemCount: 1,
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
            outputItem: 'minecraft:glass_pane',
            outputItemCount: 1,
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
            outputItem: 'minecraft:glass_pane',
            outputItemCount: 1,
            outputFluid: 'pneumaticcraft:memory_essence',
            outputFluidAmount: 1000
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
            output: { item: recipe.outputItem, count: recipe.outputItemCount },
            outputFluid: `{FluidName:"${recipe.outputFluid}",Amount:${recipe.outputFluidAmount}}`
        });

        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});