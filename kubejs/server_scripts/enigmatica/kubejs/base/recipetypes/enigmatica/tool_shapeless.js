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

    var strippable_blocks = [
        'biomesoplenty:cherry_log',
        'biomesoplenty:cherry_wood',
        'biomesoplenty:dead_log',
        'biomesoplenty:dead_wood',
        'biomesoplenty:fir_log',
        'biomesoplenty:fir_wood',
        'biomesoplenty:hellbark_log',
        'biomesoplenty:hellbark_wood',
        'biomesoplenty:jacaranda_log',
        'biomesoplenty:jacaranda_wood',
        'biomesoplenty:magic_log',
        'biomesoplenty:magic_wood',
        'biomesoplenty:mahogany_log',
        'biomesoplenty:mahogany_wood',
        'biomesoplenty:palm_log',
        'biomesoplenty:palm_wood',
        'biomesoplenty:redwood_log',
        'biomesoplenty:redwood_wood',
        'biomesoplenty:umbran_log',
        'biomesoplenty:umbran_wood',
        'biomesoplenty:willow_log',
        'biomesoplenty:willow_wood',
        'byg:aspen_log',
        'byg:aspen_wood',
        'byg:baobab_log',
        'byg:baobab_wood',
        'byg:blue_enchanted_log',
        'byg:blue_enchanted_wood',
        'byg:bulbis_stem',
        'byg:bulbis_wood',
        'byg:cherry_log',
        'byg:cherry_wood',
        'byg:cika_log',
        'byg:cika_wood',
        'byg:cypress_log',
        'byg:cypress_wood',
        'byg:ebony_log',
        'byg:ebony_wood',
        'byg:embur_hyphae',
        'byg:embur_pedu',
        'byg:ether_log',
        'byg:ether_wood',
        'byg:fir_log',
        'byg:fir_wood',
        'byg:green_enchanted_log',
        'byg:green_enchanted_wood',
        'byg:holly_log',
        'byg:holly_wood',
        'byg:jacaranda_log',
        'byg:jacaranda_wood',
        'byg:lament_log',
        'byg:lament_wood',
        'byg:mahogany_log',
        'byg:mahogany_wood',
        'byg:mangrove_log',
        'byg:mangrove_wood',
        'byg:maple_log',
        'byg:maple_wood',
        'byg:nightshade_log',
        'byg:nightshade_wood',
        'byg:palm_log',
        'byg:palm_wood',
        'byg:palo_verde_log',
        'byg:palo_verde_wood',
        'byg:pine_log',
        'byg:pine_wood',
        'byg:rainbow_eucalyptus_log',
        'byg:rainbow_eucalyptus_wood',
        'byg:redwood_log',
        'byg:redwood_wood',
        'byg:skyris_log',
        'byg:skyris_wood',
        'byg:sythian_hyphae',
        'byg:sythian_stem',
        'byg:willow_log',
        'byg:willow_wood',
        'byg:witch_hazel_log',
        'byg:witch_hazel_wood',
        // No stripped variant
        // 'byg:withering_oak_log',
        // 'byg:withering_oak_wood',
        'byg:zelkova_log',
        'byg:zelkova_wood',
        // 'endergetic:poise_stem',
        // 'endergetic:poise_wood',
        'minecraft:acacia_log',
        'minecraft:acacia_wood',
        'minecraft:birch_log',
        'minecraft:birch_wood',
        'minecraft:crimson_hyphae',
        'minecraft:crimson_stem',
        'minecraft:dark_oak_log',
        'minecraft:dark_oak_wood',
        'minecraft:jungle_log',
        'minecraft:jungle_wood',
        'minecraft:oak_log',
        'minecraft:oak_wood',
        'minecraft:spruce_log',
        'minecraft:spruce_wood',
        'minecraft:warped_hyphae',
        'minecraft:warped_stem'
    ];

    strippable_blocks.forEach((blockName) => {
        var splitBlockName = blockName.split(':');
        var strippedBlock = splitBlockName[0] + ':stripped_' + splitBlockName[1];
        event.recipes.enigmatica.tool_shapeless({
            ingredients: [
                {
                    tag: 'forge:tools/axe'
                },
                {
                    item: blockName
                }
            ],
            result: {
                item: strippedBlock
            }
        });
    });
});
