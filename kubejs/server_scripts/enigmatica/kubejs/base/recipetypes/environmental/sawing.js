onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/environmental/sawing/';
    const recipes = [
        // {
        //     ingredient: {
        //         tag: 'minecraft:planks'
        //     },
        //     result: 'minecraft:stick',
        //     count: 2
        // }
    ];

    const beamRecipes = [
        { output: 'decorative_blocks:jungle_beam', input: '#minecraft:jungle_logs' },
        { output: 'decorative_blocks:birch_beam', input: '#minecraft:birch_logs' },
        { output: 'decorative_blocks:acacia_beam', input: '#minecraft:acacia_logs' },
        { output: 'decorative_blocks:dark_oak_beam', input: '#minecraft:dark_oak_logs' },
        { output: 'decorative_blocks:oak_beam', input: '#minecraft:oak_logs' },
        { output: 'decorative_blocks:spruce_beam', input: '#minecraft:spruce_logs' },
        { output: 'decorative_blocks:crimson_beam', input: '#minecraft:crimson_stems' },
        { output: 'decorative_blocks:warped_beam', input: '#minecraft:warped_stems' },

        { output: 'decorative_blocks_abnormals:morado_beam', input: 'atmospheric:stripped_morado_log' },
        { output: 'decorative_blocks_abnormals:yucca_beam', input: 'atmospheric:stripped_yucca_log' },
        { output: 'decorative_blocks_abnormals:rosewood_beam', input: 'atmospheric:stripped_rosewood_log' },
        { output: 'decorative_blocks_abnormals:driftwood_beam', input: 'upgrade_aquatic:stripped_driftwood_log' },
        { output: 'decorative_blocks_abnormals:river_beam', input: 'upgrade_aquatic:stripped_river_log' }
    ];
    beamRecipes.forEach((recipe) => {
        let constructedRecipe = {
            type: 'environmental:sawing',
            ingredient: Ingredient.of(recipe.input),
            result: recipe.output,
            count: 1
        };
        event.custom(constructedRecipe).id(`${id_prefix}${recipe.output.replace(':', '_')}`);
    });
});
