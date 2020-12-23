events.listen('recipes', function (event) {
    event.recipes.enigmatica.tool_shapeless({
        ingredients: [
            {
                tag: 'forge:tools/knife'
            },
            {
                item: 'minecraft:porkchop'
            }
        ],
        result: {
            item: 'simplefarming:raw_bacon',
            count: 2
        }
    });

    event.recipes.enigmatica.tool_shapeless({
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
    });

    var tillsIntoFarmland = ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:dirt'];
    tillsIntoFarmland.forEach(function (block) {
        event.recipes.enigmatica.tool_shapeless({
            ingredients: [
                {
                    tag: 'forge:tools/hoe'
                },
                {
                    item: block
                }
            ],
            result: {
                item: 'minecraft:farmland'
            }
        });
    });

    event.recipes.enigmatica.tool_shapeless({
        ingredients: [
            {
                tag: 'forge:tools/hoe'
            },
            {
                item: 'farmersdelight:rich_soil'
            }
        ],
        result: {
            item: 'farmersdelight:rich_soil_farmland'
        }
    });

    buildWoodVariants.forEach((variant) => {
        //var modID = variant.logBlock.split(':')[0];

        // mod blacklist
        /*if (modID == 'undergarden') {
            return;
        }*/

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
