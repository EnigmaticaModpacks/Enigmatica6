onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/tconstruct/';
    const recipes = [
        {
            output: 'tconstruct:mighty_smelting',
            inputs: ['minecraft:book', 'tconstruct:seared_brick'],
            id: 'tconstruct:common/mighty_smelting'
        }
    ];

    const tcon_materials = [
        'rose_gold',
        'tinkers_bronze',
        'pig_iron',
        'slimesteel',
        'queens_slime',
        'manyullyn',
        'hepatizon'
    ];

    tcon_materials.forEach((material) => {
        recipes.push(
            {
                output: `tconstruct:${material}_block`,
                inputs: [`9x #forge:ingots/${material}`],
                id: `tconstruct:common/materials/${material}_block_from_ingots`
            },
            {
                output: `9x tconstruct:${material}_ingot`,
                inputs: [`#forge:storage_blocks/${material}`],
                id: `tconstruct:common/materials/${material}_ingot_from_block`
            },
            {
                output: `tconstruct:${material}_ingot`,
                inputs: [`9x #forge:nuggets/${material}`],
                id: `tconstruct:common/materials/${material}_ingot_from_nuggets`
            },
            {
                output: `9x tconstruct:${material}_nugget`,
                inputs: [`#forge:ingots/${material}`],
                id: `tconstruct:common/materials/${material}_nugget_from_ingot`
            }
        );
    });

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
