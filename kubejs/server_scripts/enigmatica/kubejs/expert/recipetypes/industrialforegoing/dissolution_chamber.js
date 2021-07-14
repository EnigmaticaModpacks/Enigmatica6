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
                'minecraft:redstone',
                'rftoolsbase:machine_frame',
                'minecraft:redstone',
                'minecraft:redstone_torch',
                'minecraft:redstone_torch',
                '#forge:ingots/gold_copper',
                '#forge:ingots/gold_copper',
                '#forge:ingots/gold_copper'
            ],
            inputFluid: 'tconstruct:molten_obsidian',
            inputFluidAmount: 1000,
            processingTime: 600,
            outputItem: 'rftoolsbuilder:shield_block1',
            outputItemCount: 1,
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rftoolsbuilder:shield_block1'
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