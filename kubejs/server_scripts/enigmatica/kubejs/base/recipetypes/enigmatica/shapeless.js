onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/enigmatica/shapeless/';
    const recipes = [
        {
            output: '9x mekanism:ingot_refined_obsidian',
            inputs: ['#forge:storage_blocks/refined_obsidian'],
            id: `${id_prefix}refined_obsidian_ingots_from_block`
        },
        {
            output: '9x mekanism:nugget_refined_obsidian',
            inputs: ['#forge:ingots/refined_obsidian'],
            id: `${id_prefix}refined_obsidian_nuggets_from_ingot`
        },
        {
            output: '9x mekanism:ingot_refined_glowstone',
            inputs: ['#forge:storage_blocks/refined_glowstone'],
            id: `${id_prefix}refined_glowstone_ingots_from_block`
        },
        {
            output: '9x mekanism:nugget_refined_glowstone',
            inputs: ['#forge:ingots/refined_glowstone'],
            id: `${id_prefix}refined_glowstone_nuggets_from_ingot`
        },
        {
            output: '9x minecraft:gunpowder',
            inputs: ['#forge:storage_blocks/gunpowder'],
            id: `${id_prefix}gunpowder_from_block`
        },
        {
            output: '9x thermal:tar',
            inputs: ['#forge:storage_blocks/tar'],
            id: `${id_prefix}tar_from_block`
        },
        {
            output: '9x occultism:iesnium_ingot',
            inputs: ['#forge:storage_blocks/iesnium'],
            id: `${id_prefix}iesnium_ingots_from_block`
        },
        {
            output: '9x occultism:iesnium_nugget',
            inputs: ['#forge:ingots/iesnium'],
            id: `${id_prefix}iesnium_nuggets_from_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
