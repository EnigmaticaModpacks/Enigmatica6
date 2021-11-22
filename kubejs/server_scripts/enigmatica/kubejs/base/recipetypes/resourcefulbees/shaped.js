onEvent('recipes', (event) => {
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const newRecipes = [
        {   //Override In-world Upgrades for tiering   
            output: 'resourcefulbees:t2_hive_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb' },
                B: { item: 'resourcefulbees:wax'},
                C: { item: "resourcefulbees:t1_hive_upgrade", }
            },
            id: 'resourcefulbees:t2_hive_upgrade'
        },
        {   
            output: 'resourcefulbees:t3_hive_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: { item: 'resourcefulbees:wax_block'},
                C: { item: "resourcefulbees:t2_hive_upgrade"}
            },
            id: 'resourcefulbees:t3_hive_upgrade',
        },
        {   
            output: 'resourcefulbees:t4_hive_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: [{ item: 'minecraft:honey_block' }, { tag: 'resourcefulbees:resourceful_honey_block' }],
                C: { item: "resourcefulbees:t3_hive_upgrade"}
            },
            id: 'resourcefulbees:t4_hive_upgrade',
        },
        {
            output: 'resourcefulbees:t1_apiary',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                B: [{ item: 'minecraft:honey_block' }, { tag: 'resourcefulbees:resourceful_honey_block' }],
                C: { item: 'resourcefulbees:t4_hive_upgrade' }
            },
            id: 'resourcefulbees:t1_apiary'
        },
        {
            // Wasabee Comb Recipes
            output: Item.of('sushigocrafting:rice', 3),
            pattern: ['AAB'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: 'enigmatica:base/sushigocrafting/rice_combs'
        },
        {
            output: Item.of('sushigocrafting:cucumber', 3),
            pattern: ['ABA'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: 'enigmatica:base/sushigocrafting/cucumber_combs'
        },
        {
            output: Item.of('sushigocrafting:soy_bean', 3),
            pattern: ['A', 'A', 'B'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: 'enigmatica:base/sushigocrafting/soy_bean_combs'
        },
        {
            output: Item.of('sushigocrafting:wasabi_root', 3),
            pattern: ['A', 'B', 'A'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: 'enigmatica:base/sushigocrafting/wasabi_root_combs'
        },
        {
            output: Item.of('sushigocrafting:seaweed', 3),
            pattern: ['A  ', ' A ', '  B'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: 'enigmatica:base/sushigocrafting/seaweed_combs'
        },
        {
            output: Item.of('sushigocrafting:sesame_seeds', 3),
            pattern: ['A  ', ' B ', '  A'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: 'enigmatica:base/sushigocrafting/sesame_seeds_combs'
        },
        {
            output: Item.of('sushigocrafting:nori_sheets', 3),
            pattern: ['AA ', '  B'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: 'enigmatica:base/sushigocrafting/nori_sheets_combs'
        },
        {
            output: Item.of('sushigocrafting:avocado', 3),
            pattern: ['ABC'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:forest_honeycomb'
            },
            id: 'enigmatica:base/sushigocrafting/avocado_combs'
        },
        {
            output: Item.of('sushigocrafting:shrimp', '{Amount:15}'),
            pattern: ['ABC'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:water_honeycomb'
            },
            id: 'enigmatica:base/sushigocrafting/shrimp_combs'
        },
        {
            output: Item.of('minecraft:cod', 3),
            pattern: ['ACB'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:water_honeycomb'
            },
            id: 'enigmatica:base/minecraft/cod_combs'
        },
        {
            output: Item.of('minecraft:salmon', 3),
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:water_honeycomb'
            },
            id: 'enigmatica:base/minecraft/salmon_combs'
        },
        {
            output: Item.of('sushigocrafting:tobiko', '{Amount:15}'),
            pattern: ['A', 'C', 'B'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:water_honeycomb'
            },
            id: 'enigmatica:base/sushigocrafting/tobiko_combs'
        },
        {
            output: Item.of('sushigocrafting:raw_tuna', 3),
            pattern: ['A  ', ' B ', '  C'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:water_honeycomb'
            },
            id: 'enigmatica:base/sushigocrafting/raw_tuna_combs'
        },
        {
            // Add Oak Recipes for Forest Combs
            output: Item.of('minecraft:oak_log', 8),
            pattern: ['BCB', 'C C', 'BCB'],
            key: {
                C: 'resourcefulbees:forest_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: 'enigmatica:base/minecraft/oak_log_combs'
        },
        {
            output: Item.of('minecraft:oak_sapling', 4),
            pattern: [' C ', 'B B', ' C '],
            key: {
                C: 'resourcefulbees:forest_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: 'enigmatica:base/minecraft/oak_sapling_combs'
        },
        {
            output: Item.of('minecraft:oak_leaves', 16),
            pattern: ['   ', 'B C', '   '],
            key: {
                C: 'resourcefulbees:forest_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: 'enigmatica:base/minecraft/oak_leaves_combs'
        },
        {
            // Add Stone Recipes for Rocky Combs
            output: Item.of('minecraft:stone', 32),
            pattern: ['BCB', 'CCC', 'BCB'],
            key: {
                C: 'resourcefulbees:rocky_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: 'enigmatica:base/minecraft/stone_combs'
        },
        {
            output: Item.of('minecraft:cobblestone', 32),
            pattern: ['BCB', 'C C', 'BCB'],
            key: {
                C: 'resourcefulbees:rocky_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: 'enigmatica:base/minecraft/cobblestone_combs'
        },
        {
            output: Item.of('minecraft:diorite', 32),
            pattern: ['CBC', 'D D', 'CBC'],
            key: {
                B: 'resourcefulbees:rocky_honeycomb',
                C: 'resourcefulbees:wax',
                D: 'resourcefulbees:nether_quartz_honeycomb'
            },
            id: 'enigmatica:base/minecraft/diorite_combs'
        },
        {
            output: Item.of('minecraft:andesite', 32),
            pattern: ['CDC', 'B B', 'CDC'],
            key: {
                B: 'resourcefulbees:rocky_honeycomb',
                C: 'resourcefulbees:wax',
                D: 'resourcefulbees:nether_quartz_honeycomb'
            },
            id: 'enigmatica:base/minecraft/andesite_combs'
        },
        {
            // Add Wet Comb -> Water Bucket Recipe
            output: 'minecraft:water_bucket',
            pattern: ['BCB', 'CAC', 'BCB'],
            key: {
                C: 'resourcefulbees:water_honeycomb',
                B: 'resourcefulbees:wax',
                A: 'minecraft:bucket'
            },
            id: 'enigmatica:base/minecraft/water_bucket_combs'
        },
        {   // Native Bee Nest Recipes - gated behind resourceful combs
            output: 'resourcefulbees:bee_nest',
            pattern: ['AAA', 'BBB', 'ABA'],
            key: {
                A: 'minecraft:oak_planks',
                B: 'resourcefulbees:forest_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/bee_next'
        },
        {
            output: 'resourcefulbees:acacia_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:acacia_planks',
                C: 'resourcefulbees:forest_honeycomb',
                B: 'resourcefulbees:rgbee_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/acacia_bee_next'
        },
        {
            output: 'resourcefulbees:grass_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:birch_planks',
                C: 'resourcefulbees:forest_honeycomb',
                B: 'resourcefulbees:rgbee_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/grass_bee_next'
        },
        {
            output: 'resourcefulbees:jungle_bee_nest',
            pattern: ['AAA', 'BBB', 'ABA'],
            key: {
                A: 'minecraft:jungle_planks',
                B: 'resourcefulbees:forest_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/jungle_bee_next'
        },
        {
            output: 'resourcefulbees:nether_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: ['minecraft:crimson_planks', 'minecraft:warped_planks'],
                B: 'resourcefulbees:glowstone_honeycomb',
                C: 'resourcefulbees:pigman_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/nether_bee_next'
        },
        {
            output: 'resourcefulbees:prismarine_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:prismarine',
                B: 'resourcefulbees:water_honeycomb',
                C: 'resourcefulbees:rocky_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/prismarine_bee_next'
        },
        {
            output: 'resourcefulbees:purpur_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:purpur_block',
                B: 'resourcefulbees:ender_honeycomb',
                C: 'resourcefulbees:obsidian_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/purpur_bee_next'
        },
        {
            output: 'resourcefulbees:birch_bee_nest',
            pattern: ['AAA', 'BBB', 'ABA'],
            key: {
                A: 'minecraft:birch_planks',
                B: 'resourcefulbees:forest_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/birch_bee_next'
        },
        {
            output: 'resourcefulbees:wither_bee_nest',
            pattern: ['AAA', 'BBB', 'ABA'],
            key: {
                A: 'architects_palette:withered_bone_block',
                B: 'resourcefulbees:wither_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/wither_bee_next'
        },
        {
            output: 'resourcefulbees:brown_mushroom_bee_nest',
            pattern: ['AAA', 'BBB', 'ABA'],
            key: {
                A: 'minecraft:brown_mushroom_block',
                B: 'resourcefulbees:soup_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/brown_mushroom_bee_nest'
        },
        {
            output: 'resourcefulbees:crimson_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:crimson_stem',
                B: 'resourcefulbees:glowstone_honeycomb',
                C: 'resourcefulbees:pigman_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/crimson_bee_nest'
        },
        {
            output: 'resourcefulbees:crimson_nylium_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:crimson_nylium',
                B: 'resourcefulbees:glowstone_honeycomb',
                C: 'resourcefulbees:pigman_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/crimson_nylium_bee_nest'
        },
        {
            output: 'resourcefulbees:dark_oak_bee_nest',
            pattern: ['AAA', 'BBB', 'ABA'],
            key: {
                A: 'minecraft:dark_oak_planks',
                B: 'resourcefulbees:forest_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/dark_oak_bee_nest'
        },
        {
            output: 'resourcefulbees:red_mushroom_bee_nest',
            pattern: ['AAA', 'BBB', 'ABA'],
            key: {
                A: 'minecraft:red_mushroom_block',
                B: 'resourcefulbees:soup_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/red_mushroom_bee_nest'
        },
        {
            output: 'resourcefulbees:spruce_bee_nest',
            pattern: ['AAA', 'BBB', 'ABA'],
            key: {
                A: 'minecraft:spruce_planks',
                B: 'resourcefulbees:forest_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/spruce_bee_nest'
        },
        {
            output: 'resourcefulbees:warped_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:warped_stem',
                B: 'resourcefulbees:glowstone_honeycomb',
                C: 'resourcefulbees:pigman_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/warped_bee_nest'
        },
        {
            output: 'resourcefulbees:warped_nylium_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:warped_nylium',
                B: 'resourcefulbees:glowstone_honeycomb',
                C: 'resourcefulbees:pigman_honeycomb'
            },
            id: 'enigmatica:base/resourcefulbees/warped_nylium_bee_nest'
        }
    ];

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
