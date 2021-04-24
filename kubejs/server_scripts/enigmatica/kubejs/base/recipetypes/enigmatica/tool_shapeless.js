events.listen('recipes', (event) => {
    const recipes = [
        {
            ingredients: [
                {
                    tag: 'forge:tools/axe'
                },
                {
                    tag: 'forge:workbench'
                }
            ],
            result: {
                item: 'craftingstation:crafting_station',
                count: 1
            }
        }
    ];
    recipes.forEach((recipe) => {
        event.custom({
            type: 'enigmatica:tool_shapeless',
            ingredients: recipe.ingredients,
            result: recipe.result
        });
    });

    var tillsIntoFarmland = [
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
        var farmland = category.type;
        category.soils.forEach(function (soil) {
            event.custom({
                type: 'enigmatica:tool_shapeless',
                ingredients: [
                    {
                        tag: 'forge:tools/hoe'
                    },
                    {
                        item: soil
                    }
                ],
                result: {
                    item: farmland
                }
            });
        });
    });

    buildWoodVariants.forEach((variant) => {
        //var modID = variant.logBlock.split(':')[0];

        data = {
            recipes: [
                {
                    input: variant.logBlock,
                    output: variant.logBlockStripped
                },
                {
                    input: variant.woodBlock,
                    output: variant.woodBlockStripped
                }
            ]
        };
        data.recipes.forEach((recipe) => {
            event.recipes.enigmatica.tool_shapeless({
                type: 'enigmatica.tool_shapeless',
                ingredients: [
                    {
                        tag: 'forge:tools/axe'
                    },
                    {
                        item: recipe.input
                    }
                ],
                result: {
                    item: recipe.output
                }
            });
        });
    });
});
