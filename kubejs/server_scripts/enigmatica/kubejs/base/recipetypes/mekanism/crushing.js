onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'byg:pink_sandstone',
            output: Item.of('byg:pink_sand', 2)
        },
        {
            input: 'byg:purple_sandstone',
            output: Item.of('byg:purple_sand', 2)
        },
        {
            input: 'byg:blue_sandstone',
            output: Item.of('byg:blue_sand', 2)
        },
        {
            input: 'byg:white_sandstone',
            output: Item.of('byg:white_sand', 2)
        },
        {
            input: 'byg:black_sandstone',
            output: Item.of('byg:black_sand', 2)
        },
        {
            input: 'atmospheric:arid_sandstone',
            output: item.of('atmospheric:arid_sand', 2)
        },
        {
            input: 'atmospheric:red_arid_sandstone',
            output: item.of('atmospheric:red_arid_sand', 2)
        },
        {
            input: '#forge:stone',
            output: 'minecraft:cobblestone'
        },
        {
            input: 'buildinggadgets:construction_block_dense',
            output: Item.of('buildinggadgets:construction_paste', 3)
        },
        {
            input: Item.of('create:limesand', 3),
            output: Item.of('emendatusenigmatica:silicon_gem')
        },
        {
            input: '#forge:end_stones',
            output: Item.of('occultism:crushed_end_stone', 4)
        },
        {
            input: 'byg:raw_quartz_block',
            output: Item.of('byg:quartzite_sand', 2)
        },
        {
            input: '#forge:ores/netherite',
            output: Item.of('mekanism:dirty_netherite_scrap', 3),
            id: 'mekanism:processing/netherite/ancient_debris_to_dirty_scrap'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.recipes.mekanism.crushing(recipe.output, recipe.input);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
