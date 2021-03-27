events.listen('recipes', (event) => {
    // Conversion between different storage_blocks of the same material
    var conversionTypes = ['storage_block', 'ore'];
    conversionTypes.forEach((type) => {
        materialsToUnify.forEach((material) => {
            if (!entryIsBlacklisted(material, type)) {
                let tag = Ingredient.of(`#forge:${type}s/${material}`);
                if (tag.stacks.size() > 1) {
                    tag.stacks.forEach((block) => {
                        event.stonecutting(block.id, tag);
                    });
                }
            }
        });
    });

    beamRecipes.forEach((recipe) => {
        event.stonecutting(recipe.output, recipe.input);
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

    ['#forge:dirt', '#forge:workbench', '#forge:grass'].forEach((tag) => {
        stonecutterTagConversion(event, tag);
    });
});

stonecutterTagConversion = (event, tag) => {
    let ingredient = Ingredient.of(tag);
    ingredient.stacks.forEach((block) => {
        event.stonecutting(block.id, ingredient);
    });
};
