events.listen('recipes', function (event) {
    vanillaWoodTypes.forEach(function (woodType) {
        event.recipes.minecraft.stonecutting({
            ingredient: {
                tag: 'minecraft:' + woodType + '_logs'
            },
            result: 'carpetstairsmod:' + woodType + '_wood_floor',
            count: 24
        });
        event.recipes.minecraft.stonecutting({
            ingredient: {
                item: 'minecraft:' + woodType + '_planks'
            },
            result: 'carpetstairsmod:' + woodType + '_wood_floor',
            count: 6
        });
    });

    // Conversion between different storage_blocks of the same material
    materialsToUnify.forEach(function (material) {
        var storage_block_tag = ingredient.of('#forge:storage_blocks/' + material);
        if (storage_block_tag.stacks.size() > 1) {
            storage_block_tag.stacks.forEach(function (storage_block) {
                event.recipes.minecraft.stonecutting({
                    ingredient: {
                        tag: 'forge:storage_blocks/' + material
                    },
                    result: storage_block.id,
                    count: 1
                });
            });
        }
    });
});
