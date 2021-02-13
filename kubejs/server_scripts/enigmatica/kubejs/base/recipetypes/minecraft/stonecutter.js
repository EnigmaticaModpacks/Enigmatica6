events.listen('recipes', (event) => {
    // Conversion between different storage_blocks of the same material
    var conversionTypes = ['storage_blocks', 'ores'];
    conversionTypes.forEach(function (type) {
        materialsToUnify.forEach(function (material) {
            let storage_block_tag = Ingredient.of('#forge:' + type + '/' + material);
            if (storage_block_tag.stacks.size() > 1) {
                storage_block_tag.stacks.forEach(function (storage_block) {
                    event.recipes.minecraft.stonecutting({
                        type: 'minecraft:stonecutting',
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
            type: 'minecraft:stonecutting',
            ingredient: {
                tag: recipe.input
            },
            result: recipe.output,
            count: 1
        });
    });

    ['forge:dirt', 'forge:workbench', 'forge:grass'].forEach((tag) => {
        stonecutterTagConversion(event, tag);
    });
});

stonecutterTagConversion = (event, tag) => {
    Ingredient.of(`#${tag}`).stacks.forEach(function (block) {
        event.custom({
            type: 'minecraft:stonecutting',
            ingredient: {
                tag: tag
            },
            result: block.id,
            count: 1
        });
    });
};
