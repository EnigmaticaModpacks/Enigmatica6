events.listen('recipes', (event) => {
    var stoneCutterRemovals = [
        'minecraft:iron_ingot',
        'minecraft:string',
        'minecraft:iron_nugget',
        'minecraft:bone',
        'minecraft:gold_ingot',
        'minecraft:gold_nugget',
        'minecraft:light_weighted_pressure_plate'
    ];
    stoneCutterRemovals.forEach(function (item) {
        event.remove({ type: 'minecraft:stonecutting', output: item });
    });

    ingredient.of('#forge:stone').stacks.forEach(function (stone) {
        event.recipes.minecraft.stonecutting({
            ingredient: {
                tag: 'forge:stone'
            },
            result: stone.id,
            count: 1
        });
    });

    var conversionTypes = ['storage_blocks', 'ores'];
    // Conversion between different storage_blocks of the same material
    conversionTypes.forEach(function (type) {
        materialsToUnify.forEach(function (material) {
            let storage_block_tag = ingredient.of('#forge:' + type + '/' + material);
            if (storage_block_tag.stacks.size() > 1) {
                storage_block_tag.stacks.forEach(function (storage_block) {
                    event.recipes.minecraft.stonecutting({
                        ingredient: {
                            tag: 'forge:' + type + '/' + material
                        },
                        result: storage_block.id,
                        count: 1
                    });
                });
            }
        });
    });

    beamRecipes.forEach((recipe) => {
        event.recipes.minecraft.stonecutting({
            ingredient: {
                tag: recipe.input
            },
            result: recipe.output,
            count: 1
        });
    });
});
