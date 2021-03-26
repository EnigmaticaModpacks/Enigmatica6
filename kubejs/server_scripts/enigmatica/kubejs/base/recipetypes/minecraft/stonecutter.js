events.listen('recipes', (event) => {
    // Conversion between different storage_blocks of the same material
    var conversionTypes = ['storage_blocks', 'ores'];
    conversionTypes.forEach((type) => {
        materialsToUnify.forEach((material) => {
            if (!entryIsBlacklisted(material, type)) {
                let tag = Ingredient.of('#forge:' + type + '/' + material);
                if (tag.stacks.size() > 1) {
                    tag.stacks.forEach((block) => {
                        event.recipes.minecraft.stonecutting({
                            type: 'minecraft:stonecutting',
                            ingredient: {
                                tag: 'forge:' + type + '/' + material
                            },
                            result: block.id,
                            count: 1
                        });
                    });
                }
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

    stonecuttables.forEach((stoneType) => {
        var tag = `#enigmatica:stonecuttables/${stoneType.name}`;
        stoneType.stones.forEach((stone) => {
            event.stonecutting(stone, tag);
        });
        stoneType.onlyAsOutput.forEach((stone) => {
            event.stonecutting(stone, tag);
        });
    });

    event.stonecutting('minecraft:terracotta', 'quark:shingles');

    colors.forEach((color) => {
        event.stonecutting(`minecraft:${color}_terracotta`, `quark:${color}_shingles`);
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
