onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/minecraft/stonecutter/';
    const recipes = [
        {
            output: 'masonry:stonechiseledslab',
            input: 'minecraft:chiseled_stone_bricks'
        },
        {
            output: 'masonry:stonechiseledwall',
            input: 'minecraft:chiseled_stone_bricks'
        },
        {
            output: 'masonry:stonelargebrickscrackedslab',
            input: 'minecraft:cracked_stone_bricks'
        },
        {
            output: 'masonry:stonelargebrickscrackedwall',
            input: 'minecraft:cracked_stone_bricks'
        },
        {
            output: 'masonry:granitepolishedwall',
            input: 'minecraft:polished_granite'
        },
        {
            output: 'masonry:dioritepolishedwall',
            input: 'minecraft:polished_diorite'
        },
        {
            output: 'masonry:andesitepolishedwall',
            input: 'minecraft:polished_andesite'
        },
        {
            output: 'masonry:darkprismarinepanelswall',
            input: 'minecraft:dark_prismarine'
        },
        {
            output: 'masonry:prismarinepaverswall',
            input: 'minecraft:prismarine_bricks'
        },
        {
            output: 'betterendforge:endstone_dust',
            input: 'byg:end_sand'
        },
        {
            output: 'byg:end_sand',
            input: 'betterendforge:endstone_dust'
        },
        {
            output: Item.of('2x occultism:otherstone_slab'),
            input: 'occultism:otherstone'
        },
        {
            output: Item.of('8x darkutils:blank_plate'),
            input: 'occultism:otherstone'
        },
        {
            output: 'minecraft:terracotta',
            input: 'quark:shingles'
        }
    ];

    // Color based recipes
    colors.forEach((color) => {
        recipes.push({
            output: `minecraft:${color}_terracotta`,
            input: `quark:${color}_shingles`
        });
    });

    // Recipes for stonecuttables constant
    stonecuttables.forEach((stoneType) => {
        stoneType.stones.forEach((stone) => {
            recipes.push({
                output: stone,
                input: `#enigmatica:stonecuttables/${stoneType.name}`
            });
        });

        stoneType.onlyAsOutput.forEach((stone) => {
            recipes.push({
                output: stone,
                input: `#enigmatica:stonecuttables/${stoneType.name}`
            });
        });
    });

    // Recipes for masonry constants
    masonryStoneTypes.forEach((stoneType) => {
        masonryPatterns.forEach((pattern) => {
            let input = stoneType + pattern;
            if (!masonryIgnoredInputs.includes(input)) {
                recipes.push({
                    output: `2x masonry:${input}slab`,
                    input: `masonry:${input}`
                });
                recipes.push({
                    output: `masonry:${input}wall`,
                    input: `masonry:${input}`
                });
            }
        });
    });

    masonryTiledStoneTypes.forEach((stoneType) => {
        recipes.push({
            output: Item.of(`2x masonry:${stoneType}tiledslab`),
            input: `masonry:${stoneType}tiled`
        });
        recipes.push({
            output: `masonry:${stoneType}tiledwall`,
            input: `masonry:${stoneType}tiled`
        });
    });

    // Conversion between different storage_blocks of the same material
    let conversionTypes = ['storage_block', 'ore'];
    conversionTypes.forEach((type) => {
        materialsToUnify.forEach((material) => {
            if (!entryIsBlacklisted(material, type)) {
                let tag = Ingredient.of(`#forge:${type}s/${material}`);
                if (tag.stacks.size() > 1) {
                    tag.stacks.forEach((block) => {
                        recipes.push({ output: block.id, input: tag });
                    });
                }
            }
        });
    });

    // Tag conversion
    conversionTypes = ['#forge:dirt', '#forge:workbenches', '#forge:grass'];
    conversionTypes.forEach((tag) => {
        let ingredient = Ingredient.of(tag);
        ingredient.stacks.forEach((block) => {
            recipes.push({ output: block.id, input: ingredient });
        });
    });

    recipes.forEach((recipe) => {
        fallback_id(event.stonecutting(recipe.output, recipe.input), id_prefix);
    });
});
