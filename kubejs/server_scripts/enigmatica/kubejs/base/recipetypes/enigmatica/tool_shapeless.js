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
			{ input: 'biomesoplenty:cherry_log', output: 'biomesoplenty:stripped_cherry_log' },
			{ input: 'biomesoplenty:cherry_wood', output: 'biomesoplenty:stripped_cherry_wood' },
			{ input: 'biomesoplenty:dead_log', output: 'biomesoplenty:stripped_dead_log' },
			{ input: 'biomesoplenty:dead_wood', output: 'biomesoplenty:stripped_dead_wood' },
			{ input: 'biomesoplenty:fir_log', output: 'biomesoplenty:stripped_fir_log' },
			{ input: 'biomesoplenty:fir_wood', output: 'biomesoplenty:stripped_fir_wood' },
			{ input: 'biomesoplenty:hellbark_log', output: 'biomesoplenty:stripped_hellbark_log' },
			{ input: 'biomesoplenty:hellbark_wood', output: 'biomesoplenty:stripped_hellbark_wood' },
			{ input: 'biomesoplenty:jacaranda_log', output: 'biomesoplenty:stripped_jacaranda_log' },
			{ input: 'biomesoplenty:jacaranda_wood', output: 'biomesoplenty:stripped_jacaranda_wood' },
			{ input: 'biomesoplenty:magic_log', output: 'biomesoplenty:stripped_magic_log' },
			{ input: 'biomesoplenty:magic_wood', output: 'biomesoplenty:stripped_magic_wood' },
			{ input: 'biomesoplenty:mahogany_log', output: 'biomesoplenty:stripped_mahogany_log' },
			{ input: 'biomesoplenty:mahogany_wood', output: 'biomesoplenty:stripped_mahogany_wood' },
			{ input: 'biomesoplenty:palm_log', output: 'biomesoplenty:stripped_palm_log' },
			{ input: 'biomesoplenty:palm_wood', output: 'biomesoplenty:stripped_palm_wood' },
			{ input: 'biomesoplenty:redwood_log', output: 'biomesoplenty:stripped_redwood_log' },
			{ input: 'biomesoplenty:redwood_wood', output: 'biomesoplenty:stripped_redwood_wood' },
			{ input: 'biomesoplenty:umbran_log', output: 'biomesoplenty:stripped_umbran_log' },
			{ input: 'biomesoplenty:umbran_wood', output: 'biomesoplenty:stripped_umbran_wood' },
			{ input: 'biomesoplenty:willow_log', output: 'biomesoplenty:stripped_willow_log' },
			{ input: 'biomesoplenty:willow_wood', output: 'biomesoplenty:stripped_willow_wood' },
			{ input: 'byg:aspen_log', output: 'byg:stripped_aspen_log' },
			{ input: 'byg:aspen_wood', output: 'byg:stripped_aspen_wood' },
			{ input: 'byg:baobab_log', output: 'byg:stripped_baobab_log' },
			{ input: 'byg:baobab_wood', output: 'byg:stripped_baobab_wood' },
			{ input: 'byg:blue_enchanted_log', output: 'byg:stripped_blue_enchanted_log' },
			{ input: 'byg:blue_enchanted_wood', output: 'byg:stripped_blue_enchanted_wood' },
			{ input: 'byg:bulbis_stem', output: 'byg:stripped_bulbis_stem' },
			{ input: 'byg:bulbis_wood', output: 'byg:stripped_bulbis_wood' },
			{ input: 'byg:cherry_log', output: 'byg:stripped_cherry_log' },
			{ input: 'byg:cherry_wood', output: 'byg:stripped_cherry_wood' },
			{ input: 'byg:cika_log', output: 'byg:stripped_cika_log' },
			{ input: 'byg:cika_wood', output: 'byg:stripped_cika_wood' },
			{ input: 'byg:cypress_log', output: 'byg:stripped_cypress_log' },
			{ input: 'byg:cypress_wood', output: 'byg:stripped_cypress_wood' },
			{ input: 'byg:ebony_log', output: 'byg:stripped_ebony_log' },
			{ input: 'byg:ebony_wood', output: 'byg:stripped_ebony_wood' },
			{ input: 'byg:embur_hyphae', output: 'byg:stripped_embur_hyphae' },
			{ input: 'byg:embur_pedu', output: 'byg:stripped_embur_pedu' },
			{ input: 'byg:ether_log', output: 'byg:stripped_ether_log' },
			{ input: 'byg:ether_wood', output: 'byg:stripped_ether_wood' },
			{ input: 'byg:fir_log', output: 'byg:stripped_fir_log' },
			{ input: 'byg:fir_wood', output: 'byg:stripped_fir_wood' },
			{ input: 'byg:green_enchanted_log', output: 'byg:stripped_green_enchanted_log' },
			{ input: 'byg:green_enchanted_wood', output: 'byg:stripped_green_enchanted_wood' },
			{ input: 'byg:holly_log', output: 'byg:stripped_holly_log' },
			{ input: 'byg:holly_wood', output: 'byg:stripped_holly_wood' },
			{ input: 'byg:jacaranda_log', output: 'byg:stripped_jacaranda_log' },
			{ input: 'byg:jacaranda_wood', output: 'byg:stripped_jacaranda_wood' },
			{ input: 'byg:lament_log', output: 'byg:stripped_lament_log' },
			{ input: 'byg:lament_wood', output: 'byg:stripped_lament_wood' },
			{ input: 'byg:mahogany_log', output: 'byg:stripped_mahogany_log' },
			{ input: 'byg:mahogany_wood', output: 'byg:stripped_mahogany_wood' },
			{ input: 'byg:mangrove_log', output: 'byg:stripped_mangrove_log' },
			{ input: 'byg:mangrove_wood', output: 'byg:stripped_mangrove_wood' },
			{ input: 'byg:maple_log', output: 'byg:stripped_maple_log' },
			{ input: 'byg:maple_wood', output: 'byg:stripped_maple_wood' },
			{ input: 'byg:nightshade_log', output: 'byg:stripped_nightshade_log' },
			{ input: 'byg:nightshade_wood', output: 'byg:stripped_nightshade_wood' },
			{ input: 'byg:palm_log', output: 'byg:stripped_palm_log' },
			{ input: 'byg:palm_wood', output: 'byg:stripped_palm_wood' },
			{ input: 'byg:palo_verde_log', output: 'byg:stripped_palo_verde_log' },
			{ input: 'byg:palo_verde_wood', output: 'byg:stripped_palo_verde_wood' },
			{ input: 'byg:pine_log', output: 'byg:stripped_pine_log' },
			{ input: 'byg:pine_wood', output: 'byg:stripped_pine_wood' },
			{ input: 'byg:rainbow_eucalyptus_log', output: 'byg:stripped_rainbow_eucalyptus_log' },
			{ input: 'byg:rainbow_eucalyptus_wood', output: 'byg:stripped_rainbow_eucalyptus_wood' },
			{ input: 'byg:redwood_log', output: 'byg:stripped_redwood_log' },
			{ input: 'byg:redwood_wood', output: 'byg:stripped_redwood_wood' },
			{ input: 'byg:skyris_log', output: 'byg:stripped_skyris_log' },
			{ input: 'byg:skyris_wood', output: 'byg:stripped_skyris_wood' },
			{ input: 'byg:sythian_hyphae', output: 'byg:stripped_sythian_hyphae' },
			{ input: 'byg:sythian_stem', output: 'byg:stripped_sythian_stem' },
			{ input: 'byg:willow_log', output: 'byg:stripped_willow_log' },
			{ input: 'byg:willow_wood', output: 'byg:stripped_willow_wood' },
			{ input: 'byg:witch_hazel_log', output: 'byg:stripped_witch_hazel_log' },
			{ input: 'byg:witch_hazel_wood', output: 'byg:stripped_witch_hazel_wood' },
			{ input: 'byg:withering_oak_log', output: 'minecraft:stripped_oak_log' },
			{ input: 'byg:withering_oak_wood', output: 'minecraft:stripped_oak_wood' },
			{ input: 'byg:zelkova_log', output: 'byg:stripped_zelkova_log' },
			{ input: 'byg:zelkova_wood', output: 'byg:stripped_zelkova_wood' },
			{ input: 'endergetic:poise_stem', output: 'endergetic:stripped_poise_stem' },
			{ input: 'endergetic:poise_wood', output: 'endergetic:stripped_poise_wood' },
			{ input: 'good_nights_sleep:blood_log', output: 'good_nights_sleep:stripped_blood_log' },
			{ input: 'good_nights_sleep:dead_log', output: 'good_nights_sleep:stripped_dead_log' },
			{ input: 'good_nights_sleep:dream_log', output: 'good_nights_sleep:stripped_dream_log' },
			{ input: 'good_nights_sleep:white_log', output: 'good_nights_sleep:stripped_white_log' },			
			{ input: 'minecraft:acacia_log', output: 'minecraft:stripped_acacia_log' },
			{ input: 'minecraft:acacia_wood', output: 'minecraft:stripped_acacia_wood' },
			{ input: 'minecraft:birch_log', output: 'minecraft:stripped_birch_log' },
			{ input: 'minecraft:birch_wood', output: 'minecraft:stripped_birch_wood' },
			{ input: 'minecraft:crimson_hyphae', output: 'minecraft:stripped_crimson_hyphae' },
			{ input: 'minecraft:crimson_stem', output: 'minecraft:stripped_crimson_stem' },
			{ input: 'minecraft:dark_oak_log', output: 'minecraft:stripped_dark_oak_log' },
			{ input: 'minecraft:dark_oak_wood', output: 'minecraft:stripped_dark_oak_wood' },
			{ input: 'minecraft:jungle_log', output: 'minecraft:stripped_jungle_log' },
			{ input: 'minecraft:jungle_wood', output: 'minecraft:stripped_jungle_wood' },
			{ input: 'minecraft:oak_log', output: 'minecraft:stripped_oak_log' },
			{ input: 'minecraft:oak_wood', output: 'minecraft:stripped_oak_wood' },
			{ input: 'minecraft:spruce_log', output: 'minecraft:stripped_spruce_log' },
			{ input: 'minecraft:spruce_wood', output: 'minecraft:stripped_spruce_wood' },
			{ input: 'minecraft:warped_hyphae', output: 'minecraft:stripped_warped_hyphae' },
			{ input: 'minecraft:warped_stem', output: 'minecraft:stripped_warped_stem' }
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
