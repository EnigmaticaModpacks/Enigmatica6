events.listen('recipes', function (event) {
    vanillaWoodTypes.forEach(function (woodType) {
        event.recipes.minecraft.stonecutting(
            item.of('carpetstairsmod:' + woodType + '_wood_floor', 6),
            'minecraft:' + woodType + '_planks'
        );
        event.recipes.minecraft.stonecutting(
            item.of('carpetstairsmod:' + woodType + '_wood_floor', 24),
            '#minecraft:' + woodType + '_logs'
        );
    });

    var stoneCutterRemovals = [
        'minecraft:iron_ingot',
        'minecraft:string',
        'minecraft:iron_nugget',
        'minecraft:bone',
        'minecraft:gold_ingot',
        'minecraft:gold_nugget'
    ];
    stoneCutterRemovals.forEach(function (item) {
        event.remove({ type: 'minecraft:stonecutting', output: item });
    });

    var conversionTypes = ['storage_blocks', 'ores'];

    // Conversion between different storage_blocks of the same material
    conversionTypes.forEach(function (type) {
        materialsToUnify.forEach(function (material) {
            var storage_block_tag = ingredient.of('#forge:' + type + '/' + material);
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
});
