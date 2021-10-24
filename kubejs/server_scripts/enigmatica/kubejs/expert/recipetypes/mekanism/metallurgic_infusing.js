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
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanism
            .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
            .id(recipe.id);
    });
});
