onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/mekanism/metallurgic_infusing/';

    const recipes = [
        {
            output: 'betterendforge:end_mycelium',
            input: 'minecraft:end_stone',
            infusionInput: 'mekanism:fungi',
            infusionAmount: 10,
            id: `${id_prefix}end_stone_to_end_mycelium`
        },
        {
            output: 'minecraft:crimson_nylium',
            input: 'minecraft:netherrack',
            infusionInput: 'mekanism:fungi',
            infusionAmount: 10,
            id: 'mekanism:metallurgic_infusing/netherrack_to_crimson_nylium'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanism
            .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
            .id(recipe.id);
    });
});
