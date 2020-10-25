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

    var data = {
        strippable_blocks: [
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' },
            { block: '', stripped: '' }
        ]
    };
});
