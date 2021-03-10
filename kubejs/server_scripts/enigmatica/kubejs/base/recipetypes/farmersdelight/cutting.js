function cuttingRecipe(ingredient, tool, result) {
    return { 
        type: 'farmersdelight:cutting',
        ingredients: [ingredient],
        tool: tool,
        result: result
    };
}

function filletRecipe(fish, filletCount) {
    return cuttingRecipe(
        Ingredient.of(fish), 
        Ingredient.of('#forge:tools/knives'), 
        [Item.of('aquaculture:fish_fillet_raw', filletCount), Item.of('minecraft:bone_meal', Math.ceil(filletCount / 3))]
    )
}

events.listen('recipes', (event) => {
    var data = {
        recipes: [
            cuttingRecipe(
                Ingredient.of('minecraft:chicken'),
                Ingredient.of('#forge:tools/knives'),
                [Item.of('farmersdelight:chicken_cuts', 2), Item.of('simplefarming:raw_chicken_wings'), Item.of('minecraft:bone_meal')]
            ),
            cuttingRecipe(
                Ingredient.of('aquaculture:frog'),
                Ingredient.of('#forge:tools/knives'),
                [Item.of('quark:frog_leg', 2)]
            ),
            cuttingRecipe(
                Ingredient.of('aquaculture:goldfish'),
                Ingredient.of('#forge:tools/pickaxes'),
                [Item.of('emendatusenigmatica:gold_chunk', 1)]
            ),
            cuttingRecipe(
                Ingredient.of('aquaculture:atlantic_cod'),
                Ingredient.of('#forge:tools/knives'),
                [Item.of('farmersdelight:cod_slice', 6), Item.of('minecraft:bone_meal', 3)]
            ),
            cuttingRecipe(
                Ingredient.of('aquaculture:pink_salmon'),
                Ingredient.of('#forge:tools/knives'),
                [Item.of('farmersdelight:salmon_slice', 2), Item.of('minecraft:bone_meal', 1)]
            ),
            filletRecipe('minecraft:pufferfish', 2),
            filletRecipe('aquaculture:boulti', 1),
            filletRecipe('aquaculture:smallmouth_bass', 2),
            filletRecipe('aquaculture:atlantic_halibut', 14),
            filletRecipe('aquaculture:pollock', 2),
            filletRecipe('aquaculture:bayad', 4),
            filletRecipe('aquaculture:atlantic_herring', 1),
            filletRecipe('aquaculture:synodontis', 1),
            filletRecipe('aquaculture:piranha', 1),
            filletRecipe('aquaculture:red_grouper', 3),
            filletRecipe('aquaculture:pacific_halibut', 12),
            filletRecipe('aquaculture:perch', 1),
            filletRecipe('aquaculture:rainbow_trout', 2),
            filletRecipe('aquaculture:catfish', 6),
            filletRecipe('aquaculture:muskellunge', 3),
            filletRecipe('aquaculture:tambaqui', 3),
            filletRecipe('aquaculture:carp', 2),
            filletRecipe('aquaculture:blackfish', 2),
            filletRecipe('aquaculture:capitaine', 10),
            filletRecipe('aquaculture:brown_trout', 2),
            filletRecipe('aquaculture:arapaima', 10),
            filletRecipe('aquaculture:tuna', 10),
            filletRecipe('aquaculture:bluegill', 1),
            filletRecipe('aquaculture:gar', 4),
            filletRecipe('undergarden:raw_gwibling', 4),
            filletRecipe('alexsmobs:blobfish', 6),
            filletRecipe('betterendforge:end_fish_raw', 2),
            filletRecipe('upgrade_aquatic:lionfish', 12)
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom(recipe);
    });
});
