function cuttingRecipe(ingredient, tool, result) {
    return {
        type: 'farmersdelight:cutting',
        ingredients: [ingredient],
        tool: tool,
        result: result
    };
}

function filletRecipe(fish, filletCount) {
    return cuttingRecipe(Ingredient.of(fish), Ingredient.of('#forge:tools/knives'), [
        Item.of('aquaculture:fish_fillet_raw', filletCount),
        Item.of('minecraft:bone_meal', Math.ceil(filletCount / 3))
    ]);
}
onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/farmersdelight/cutting/';

    const recipes = [
        cuttingRecipe(
            Ingredient.of('#forge:storage_blocks/clay'),
            {
                type: 'farmersdelight:tool',
                tool: 'shovel'
            },
            [Item.of('minecraft:clay_ball', 4)]
        ),
        cuttingRecipe(Ingredient.of('minecraft:chicken'), Ingredient.of('#forge:tools/knives'), [
            Item.of('farmersdelight:chicken_cuts', 2),
            Item.of('simplefarming:raw_chicken_wings'),
            Item.of('minecraft:bone_meal')
        ]),
        cuttingRecipe(Ingredient.of('aquaculture:frog'), Ingredient.of('#forge:tools/knives'), [
            Item.of('quark:frog_leg', 2)
        ]),
        cuttingRecipe(
            Ingredient.of('aquaculture:goldfish'),
            {
                type: 'farmersdelight:tool',
                tool: 'pickaxe'
            },
            [Item.of('emendatusenigmatica:gold_chunk', 1)]
        ),
        cuttingRecipe(Ingredient.of('aquaculture:atlantic_cod'), Ingredient.of('#forge:tools/knives'), [
            Item.of('farmersdelight:cod_slice', 6),
            Item.of('minecraft:bone_meal', 3)
        ]),
        cuttingRecipe(Ingredient.of('aquaculture:pink_salmon'), Ingredient.of('#forge:tools/knives'), [
            Item.of('farmersdelight:salmon_slice', 2),
            Item.of('minecraft:bone_meal', 1)
        ]),
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
    ];

    recipes.forEach((recipe) => {
        fallback_id(event.custom(recipe), id_prefix);
    });

    const tillsIntoFarmland = [
        { type: 'minecraft:farmland', soils: ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:coarse_dirt'] },
        { type: 'farmersdelight:rich_soil_farmland', soils: ['farmersdelight:rich_soil'] },
        {
            type: 'undergarden:deepsoil_farmland',
            soils: [
                'undergarden:deepturf_block',
                'undergarden:ashen_deepturf_block',
                'undergarden:deepsoil',
                'undergarden:coarse_deepsoil'
            ]
        }
    ];

    tillsIntoFarmland.forEach(function (category) {
        let farmland = category.type;
        category.soils.forEach(function (soil) {
            let tool = {
                type: 'farmersdelight:tool',
                tool: 'hoe'
            };
            let ingredients = Ingredient.of(soil);
            let result = [Item.of(farmland)];

            fallback_id(
                event.custom({
                    type: 'farmersdelight:cutting',
                    ingredients: [ingredients],
                    tool: tool,
                    result: result
                }),
                id_prefix
            );
        });
    });

    buildWoodVariants.forEach((variant) => {
        let woodRecipes = [
            {
                input: variant.logBlock,
                output: variant.logBlockStripped
            },
            {
                input: variant.woodBlock,
                output: variant.woodBlockStripped
            }
        ];

        woodRecipes.forEach((recipe) => {
            let tool = {
                type: 'farmersdelight:tool',
                tool: 'axe'
            };
            let ingredients = Ingredient.of(recipe.input);
            let result = [Item.of(recipe.output), Item.of('farmersdelight:tree_bark')];

            event.remove({ mod: 'farmersdelight', output: recipe.output });

            fallback_id(
                event.custom({
                    type: 'farmersdelight:cutting',
                    ingredients: [ingredients],
                    tool: tool,
                    result: result
                }),
                id_prefix
            );
        });
    });
});
