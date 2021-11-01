onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/mekanism/metallurgic_infusing/';
    const recipes = [
        {
            output: 'mekanism:alloy_infused',
            input: '#forge:ingots/energized_steel',
            infusionInput: 'mekanism:redstone',
            infusionAmount: 10,
            id: 'mekanism:metallurgic_infusing/alloy/infused'
        },
        {
            output: 'refinedstorage:stack_upgrade',
            input: Item.of('4x refinedstorage:speed_upgrade'),
            infusionInput: 'mekanism:redstone',
            infusionAmount: 80,
            id: 'refinedstorage:stack_upgrade'
        },
        {
            output: 'mekanismgenerators:reactor_glass',
            input: 'mekanism:structural_glass',
            infusionInput: 'mekanism:refined_obsidian',
            infusionAmount: 320,
            id: 'mekanismgenerators:reactor/glass'
        },
        {
            output: 'immersiveengineering:rockcutter',
            input: 'immersiveengineering:sawblade',
            infusionInput: 'mekanism:diamond',
            infusionAmount: 80,
            id: 'immersiveengineering:crafting/rockcutter'
        },
        {
            output: 'mekanism:ingot_refined_obsidian',
            input: '#forge:ingots/osmium',
            infusionInput: 'mekanism:refined_obsidian',
            infusionAmount: 160,
            id: 'mekanism:processing/refined_obsidian/ingot/from_dust'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanism
            .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
            .id(recipe.id);
    });
});
