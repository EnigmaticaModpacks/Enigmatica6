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

    var masonryStoneTypes = ['stone', 'granite', 'andesite', 'diorite', 'darkprismarine', 'prismarine'];
    var masonryCuttingTypes = ['slab', 'wall'];
    var masonryPatterns = [
        'carvedcreeper',
        'carvedderp',
        'carvedvillager',
        'carvedwither',
        'carvedwriting',
        'column',
        'cut',
        'engraved',
        'panels',
        'pavers',
        'pillar',
        'polished',
        'roughcut',
        'chiseled',
        'cobbled',
        'cobbledmossy',
        'diamondpavers',
        'largebricks',
        'largebrickscracked',
        'largebricksmossy',
        'smallbrick'
    ];
    var masonryIgnoredInputs = [
        'stonecobbled',
        'stonecobbledmossy',
        'stonelargebricks',
        'stonelargebricksmossy',
        'stonechiseled',
        'stonelargebrickscracked',
        'granitepolished',
        'dioritepolished',
        'andesitepolished',
        'darkprismarinepanels',
        'prismarinepavers',
        'stonesmallbrick'
    ];
    masonryStoneTypes.forEach((stoneType) => {
        masonryPatterns.forEach((pattern) => {
            masonryCuttingTypes.forEach((cuttingType) => {
                let input = stoneType + pattern;
                if (!masonryIgnoredInputs.includes(input)) {
                    event.stonecutting('masonry:' + input + cuttingType, 'masonry:' + input);
                }
            });
        });
    });
    event.stonecutting('masonry:stonechiseledslab', 'minecraft:chiseled_stone_bricks');
    event.stonecutting('masonry:stonechiseledwall', 'minecraft:chiseled_stone_bricks');
    event.stonecutting('masonry:stonelargebrickscrackedslab', 'minecraft:cracked_stone_bricks');
    event.stonecutting('masonry:stonelargebrickscrackedwall', 'minecraft:cracked_stone_bricks');
    event.stonecutting('masonry:granitepolishedwall', 'minecraft:polished_granite');
    event.stonecutting('masonry:dioritepolishedwall', 'minecraft:polished_diorite');
    event.stonecutting('masonry:andesitepolishedwall', 'minecraft:polished_andesite');
    event.stonecutting('masonry:darkprismarinepanelswall', 'minecraft:dark_prismarine');
    event.stonecutting('masonry:prismarinepaverswall', 'minecraft:prismarine_bricks');

    var masonryTiledStoneTypes = masonryStoneTypes.concat(['endstone', 'netherrack', 'obsidian']);
    masonryTiledStoneTypes.forEach((stoneType) => {
        masonryCuttingTypes.forEach((cuttingType) => {
            event.stonecutting(`masonry:${stoneType}tiledslab`, `masonry:${stoneType}tiled`);
            event.stonecutting(`masonry:${stoneType}tiledwall`, `masonry:${stoneType}tiled`);
        });
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
