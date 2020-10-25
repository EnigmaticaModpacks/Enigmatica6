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

    var strippable_blocks = {
        data: [
            { input: 'minecraft:acacia_log', output: 'minecraft:stripped_acacia_log' },
            { input: 'minecraft:acacia_wood', output: 'minecraft:stripped_acacia_wood' },
            { input: 'minecraft:birch_log', output: 'minecraft:stripped_birch_log' },
            { input: 'minecraft:birch_wood', output: 'minecraft:stripped_birch_wood' },
            { input: 'biomesoplenty:cherry_log', output: 'biomesoplenty:stripped_cherry_log' },
            { input: 'biomesoplenty:cherry_wood', output: 'biomesoplenty:stripped_cherry_wood' },
            { input: 'minecraft:dark_oak_log', output: 'minecraft:stripped_dark_oak_log' },
            { input: 'minecraft:dark_oak_wood', output: 'minecraft:stripped_dark_oak_wood' },
            { input: 'biomesoplenty:dead_log', output: 'biomesoplenty:stripped_dead_log' },
            { input: 'biomesoplenty:dead_wood', output: 'biomesoplenty:stripped_dead_wood' },
            { input: 'biomesoplenty:fir_log', output: 'biomesoplenty:stripped_fir_log' },
            { input: 'biomesoplenty:fir_wood', output: 'biomesoplenty:stripped_fir_wood' },
            { input: 'biomesoplenty:hellbark_log', output: 'biomesoplenty:stripped_hellbark_log' },
            { input: 'biomesoplenty:hellbark_wood', output: 'biomesoplenty:stripped_hellbark_wood' },
            { input: 'biomesoplenty:jacaranda_log', output: 'biomesoplenty:stripped_jacaranda_log' },
            { input: 'biomesoplenty:jacaranda_wood', output: 'biomesoplenty:stripped_jacaranda_wood' },
            { input: 'minecraft:jungle_log', output: 'minecraft:stripped_jungle_log' },
            { input: 'minecraft:jungle_wood', output: 'minecraft:stripped_jungle_wood' },
            { input: 'biomesoplenty:magic_log', output: 'biomesoplenty:stripped_magic_log' },
            { input: 'biomesoplenty:magic_wood', output: 'biomesoplenty:stripped_magic_wood' },
            { input: 'biomesoplenty:mahogany_log', output: 'biomesoplenty:stripped_mahogany_log' },
            { input: 'biomesoplenty:mahogany_wood', output: 'biomesoplenty:stripped_mahogany_wood' },
            { input: 'minecraft:oak_log', output: 'minecraft:stripped_oak_log' },
            { input: 'minecraft:oak_wood', output: 'minecraft:stripped_oak_wood' },
            { input: 'biomesoplenty:palm_log', output: 'biomesoplenty:stripped_palm_log' },
            { input: 'biomesoplenty:palm_wood', output: 'biomesoplenty:stripped_palm_wood' },
            { input: 'endergetic:poise_stem', output: 'endergetic:stripped_poise_stem' },
            { input: 'endergetic:poise_wood', output: 'endergetic:stripped_poise_wood' },
            { input: 'biomesoplenty:redwood_log', output: 'biomesoplenty:stripped_redwood_log' },
            { input: 'biomesoplenty:redwood_wood', output: 'biomesoplenty:stripped_redwood_wood' },
            { input: 'minecraft:spruce_log', output: 'minecraft:stripped_spruce_log' },
            { input: 'minecraft:spruce_wood', output: 'minecraft:stripped_spruce_wood' },
            { input: 'biomesoplenty:umbran_log', output: 'biomesoplenty:stripped_umbran_log' },
            { input: 'biomesoplenty:umbran_wood', output: 'biomesoplenty:stripped_umbran_wood' },
            { input: 'biomesoplenty:willow_log', output: 'biomesoplenty:stripped_willow_log' },
            { input: 'biomesoplenty:willow_wood', output: 'biomesoplenty:stripped_willow_wood' },
            { input: 'minecraft:warped_stem', output: 'minecraft:stripped_warped_stem' },
            { input: 'minecraft:crimson_stem', output: 'minecraft:stripped_crimson_stem' },
            { input: 'minecraft:crimson_hyphae', output: 'minecraft:stripped_crimson_hyphae' },
            { input: 'minecraft:warped_hyphae', output: 'minecraft:stripped_warped_hyphae' },
            { input: 'good_nights_sleep:dream_log', output: 'good_nights_sleep:stripped_dream_log' },
            { input: 'good_nights_sleep:white_log', output: 'good_nights_sleep:stripped_white_log' },
            { input: 'good_nights_sleep:dead_log', output: 'good_nights_sleep:stripped_dead_log' },
            { input: 'good_nights_sleep:blood_log', output: 'good_nights_sleep:stripped_blood_log' }
        ]
    };
    strippable_blocks.data.forEach(function (recipe) {
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
