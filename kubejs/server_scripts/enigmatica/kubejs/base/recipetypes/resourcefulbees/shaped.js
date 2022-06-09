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
    const id_prefix = 'enigmatica:base/resourcefulbees/';
    const newRecipes = [
        {
            //Override In-world Upgrades for tiering
            output: 'resourcefulbees:t2_hive_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#resourcefulbees:resourceful_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:t1_hive_upgrade'
            },
            id: 'resourcefulbees:t2_hive_upgrade'
        },
        {
            output: 'resourcefulbees:t3_hive_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#resourcefulbees:resourceful_honeycomb_block',
                B: 'resourcefulbees:wax_block',
                C: 'resourcefulbees:t2_hive_upgrade'
            },
            id: 'resourcefulbees:t3_hive_upgrade'
        },
        {
            output: 'resourcefulbees:t4_hive_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#resourcefulbees:resourceful_honeycomb_block',
                B: ['minecraft:honey_block', '#resourcefulbees:resourceful_honey_block'],
                C: 'resourcefulbees:t3_hive_upgrade'
            },
            id: 'resourcefulbees:t4_hive_upgrade'
        },
        {
            output: 'resourcefulbees:t1_apiary',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#resourcefulbees:resourceful_honeycomb_block',
                B: ['minecraft:honey_block', '#resourcefulbees:resourceful_honey_block'],
                C: 'resourcefulbees:t4_hive_upgrade'
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
            id: `${id_prefix}rice_combs`
        },
        {
            output: Item.of('sushigocrafting:cucumber', 3),
            pattern: ['ABA'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}cucumber_combs`
        },
        {
            output: Item.of('sushigocrafting:soy_bean', 3),
            pattern: ['A', 'A', 'B'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}soy_bean_combs`
        },
        {
            output: Item.of('sushigocrafting:wasabi_root', 3),
            pattern: ['A', 'B', 'A'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}wasabi_root_combs`
        },
        {
            output: Item.of('sushigocrafting:seaweed', 3),
            pattern: ['A  ', ' A ', '  B'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}seaweed_combs`
        },
        {
            output: Item.of('sushigocrafting:sesame_seeds', 3),
            pattern: ['A  ', ' B ', '  A'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}sesame_seeds_combs`
        },
        {
            output: Item.of('sushigocrafting:nori_sheets', 3),
            pattern: ['AA ', '  B'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}nori_sheets_combs`
        },
        {
            output: Item.of('sushigocrafting:avocado', 3),
            pattern: ['ABC'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:forest_honeycomb'
            },
            id: `${id_prefix}avocado_combs`
        },
        {
            output: Item.of('sushigocrafting:shrimp', '{Amount:15}'),
            pattern: ['ABC'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:water_honeycomb'
            },
            id: `${id_prefix}shrimp_combs`
        },
        {
            output: Item.of('minecraft:cod', 3),
            pattern: ['ACB'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:water_honeycomb'
            },
            id: `${id_prefix}cod_combs`
        },
        {
            output: Item.of('minecraft:salmon', 3),
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:water_honeycomb'
            },
            id: `${id_prefix}salmon_combs`
        },
        {
            output: Item.of('sushigocrafting:tobiko', '{Amount:15}'),
            pattern: ['A', 'C', 'B'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:water_honeycomb'
            },
            id: `${id_prefix}tobiko_combs`
        },
        {
            output: Item.of('sushigocrafting:raw_tuna', 3),
            pattern: ['A  ', ' B ', '  C'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:water_honeycomb'
            },
            id: `${id_prefix}raw_tuna_combs`
        },
        {
            // Add Oak Recipes for Forest Combs
            output: Item.of('minecraft:oak_log', 8),
            pattern: ['BCB', 'C C', 'BCB'],
            key: {
                C: 'resourcefulbees:forest_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}oak_log_combs`
        },
        {
            output: Item.of('minecraft:oak_sapling', 4),
            pattern: [' C ', 'B B', ' C '],
            key: {
                C: 'resourcefulbees:forest_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}oak_sapling_combs`
        },
        {
            output: Item.of('minecraft:oak_leaves', 16),
            pattern: ['   ', 'B C', '   '],
            key: {
                C: 'resourcefulbees:forest_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}oak_leaves_combs`
        },
        {
            // Add Stone Recipes for Rocky Combs
            output: Item.of('minecraft:stone', 32),
            pattern: ['BCB', 'CCC', 'BCB'],
            key: {
                C: 'resourcefulbees:rocky_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}stone_combs`
        },
        {
            output: Item.of('minecraft:cobblestone', 32),
            pattern: ['BCB', 'C C', 'BCB'],
            key: {
                C: 'resourcefulbees:rocky_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}cobblestone_combs`
        },
        {
            output: Item.of('minecraft:diorite', 32),
            pattern: ['CBC', 'D D', 'CBC'],
            key: {
                B: 'resourcefulbees:rocky_honeycomb',
                C: 'resourcefulbees:wax',
                D: 'resourcefulbees:nether_quartz_honeycomb'
            },
            id: `${id_prefix}diorite_combs`
        },
        {
            output: Item.of('minecraft:andesite', 32),
            pattern: ['CDC', 'B B', 'CDC'],
            key: {
                B: 'resourcefulbees:rocky_honeycomb',
                C: 'resourcefulbees:wax',
                D: 'resourcefulbees:nether_quartz_honeycomb'
            },
            id: `${id_prefix}andesite_combs`
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
            id: `${id_prefix}water_bucket_combs`
        },
        {
            // Native Bee Nest Recipes - gated behind resourceful combs
            output: 'resourcefulbees:bee_nest',
            pattern: ['AAA', 'BBB', 'ABA'],
            key: {
                A: 'minecraft:oak_planks',
                B: 'resourcefulbees:forest_honeycomb'
            },
            id: `${id_prefix}bee_next`
        },
        {
            output: 'resourcefulbees:acacia_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:acacia_planks',
                C: 'resourcefulbees:forest_honeycomb',
                B: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}acacia_bee_next`
        },
        {
            output: 'resourcefulbees:grass_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:birch_planks',
                C: 'resourcefulbees:forest_honeycomb',
                B: 'resourcefulbees:rgbee_honeycomb'
            },
            id: `${id_prefix}grass_bee_next`
        },
        {
            output: 'resourcefulbees:jungle_bee_nest',
            pattern: ['AAA', 'BBB', 'ABA'],
            key: {
                A: 'minecraft:jungle_planks',
                B: 'resourcefulbees:forest_honeycomb'
            },
            id: `${id_prefix}jungle_bee_next`
        },
        {
            output: 'resourcefulbees:nether_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: ['minecraft:crimson_planks', 'minecraft:warped_planks'],
                B: 'resourcefulbees:glowstone_honeycomb',
                C: 'resourcefulbees:pigman_honeycomb'
            },
            id: `${id_prefix}nether_bee_next`
        },
        {
            output: 'resourcefulbees:prismarine_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:prismarine',
                B: 'resourcefulbees:water_honeycomb',
                C: 'resourcefulbees:rocky_honeycomb'
            },
            id: `${id_prefix}prismarine_bee_next`
        },
        {
            output: 'resourcefulbees:purpur_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:purpur_block',
                B: 'resourcefulbees:ender_honeycomb',
                C: 'resourcefulbees:obsidian_honeycomb'
            },
            id: `${id_prefix}purpur_bee_next`
        },
        {
            output: 'resourcefulbees:birch_bee_nest',
            pattern: ['AAA', 'BBB', 'ABA'],
            key: {
                A: 'minecraft:birch_planks',
                B: 'resourcefulbees:forest_honeycomb'
            },
            id: `${id_prefix}birch_bee_next`
        },
        {
            output: 'resourcefulbees:wither_bee_nest',
            pattern: ['AAA', 'BBB', 'ABA'],
            key: {
                A: 'architects_palette:withered_bone_block',
                B: 'resourcefulbees:wither_honeycomb'
            },
            id: `${id_prefix}wither_bee_next`
        },
        {
            output: 'resourcefulbees:brown_mushroom_bee_nest',
            pattern: ['AAA', 'BBB', 'ABA'],
            key: {
                A: 'minecraft:brown_mushroom_block',
                B: 'resourcefulbees:soup_honeycomb'
            },
            id: `${id_prefix}brown_mushroom_bee_nest`
        },
        {
            output: 'resourcefulbees:crimson_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:crimson_stem',
                B: 'resourcefulbees:glowstone_honeycomb',
                C: 'resourcefulbees:pigman_honeycomb'
            },
            id: `${id_prefix}crimson_bee_nest`
        },
        {
            output: 'resourcefulbees:crimson_nylium_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:crimson_nylium',
                B: 'resourcefulbees:glowstone_honeycomb',
                C: 'resourcefulbees:pigman_honeycomb'
            },
            id: `${id_prefix}crimson_nylium_bee_nest`
        },
        {
            output: 'resourcefulbees:dark_oak_bee_nest',
            pattern: ['AAA', 'BBB', 'ABA'],
            key: {
                A: 'minecraft:dark_oak_planks',
                B: 'resourcefulbees:forest_honeycomb'
            },
            id: `${id_prefix}dark_oak_bee_nest`
        },
        {
            output: 'resourcefulbees:red_mushroom_bee_nest',
            pattern: ['AAA', 'BBB', 'ABA'],
            key: {
                A: 'minecraft:red_mushroom_block',
                B: 'resourcefulbees:soup_honeycomb'
            },
            id: `${id_prefix}red_mushroom_bee_nest`
        },
        {
            output: 'resourcefulbees:spruce_bee_nest',
            pattern: ['AAA', 'BBB', 'ABA'],
            key: {
                A: 'minecraft:spruce_planks',
                B: 'resourcefulbees:forest_honeycomb'
            },
            id: `${id_prefix}spruce_bee_nest`
        },
        {
            output: 'resourcefulbees:warped_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:warped_stem',
                B: 'resourcefulbees:glowstone_honeycomb',
                C: 'resourcefulbees:pigman_honeycomb'
            },
            id: `${id_prefix}warped_bee_nest`
        },
        {
            output: 'resourcefulbees:warped_nylium_bee_nest',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:warped_nylium',
                B: 'resourcefulbees:glowstone_honeycomb',
                C: 'resourcefulbees:pigman_honeycomb'
            },
            id: `${id_prefix}warped_nylium_bee_nest`
        },
        {
            // Shepherd Comb Recipes
            output: Item.of('minecraft:beef', 3),
            pattern: ['AAB'],
            key: {
                A: 'resourcefulbees:shepherd_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}beef`
        },
        {
            output: Item.of('minecraft:chicken', 3),
            pattern: ['ABA'],
            key: {
                A: 'resourcefulbees:shepherd_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}chicken`
        },
        {
            output: Item.of('minecraft:rabbit', 3),
            pattern: ['A', 'A', 'B'],
            key: {
                A: 'resourcefulbees:shepherd_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}rabbit`
        },
        {
            output: Item.of('minecraft:mutton', 3),
            pattern: ['A', 'B', 'A'],
            key: {
                A: 'resourcefulbees:shepherd_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}mutton`
        },
        {
            output: Item.of('minecraft:porkchop', 3),
            pattern: ['A  ', ' A ', '  B'],
            key: {
                A: 'resourcefulbees:shepherd_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}porkchop`
        },
        {
            output: Item.of('simplefarming:raw_horse_meat', 3),
            pattern: ['A  ', ' B ', '  A'],
            key: {
                A: 'resourcefulbees:shepherd_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}raw_horse_meat`
        },
        {
            output: Item.of('alexsmobs:moose_ribs', 3),
            pattern: ['AA ', '  B'],
            key: {
                A: 'resourcefulbees:shepherd_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}moose_ribs`
        },
        {
            output: Item.of('alexsmobs:kangaroo_meat', 3),
            pattern: ['A A', ' B '],
            key: {
                A: 'resourcefulbees:shepherd_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}kangaroo_meat`
        },
        {
            output: Item.of('atum:camel', 3),
            pattern: [' AA', 'B  '],
            key: {
                A: 'resourcefulbees:shepherd_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}camel`
        },
        {
            output: Item.of('atum:quail', 3),
            pattern: ['  B', 'AA '],
            key: {
                A: 'resourcefulbees:shepherd_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}quail`
        },
        {
            output: Item.of('environmental:venison', 3),
            pattern: [' B ', 'A A'],
            key: {
                A: 'resourcefulbees:shepherd_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}venison`
        },
        {
            output: Item.of('environmental:duck', 3),
            pattern: ['B  ', ' AA'],
            key: {
                A: 'resourcefulbees:shepherd_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}duck`
        },
        {
            output: Item.of('minecraft:feather', 3),
            pattern: ['AB ', '  A'],
            key: {
                A: 'resourcefulbees:shepherd_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}feather`
        },
        {
            output: Item.of('minecraft:egg', 3),
            pattern: ['A  ', ' BA'],
            key: {
                A: 'resourcefulbees:shepherd_honeycomb',
                B: 'resourcefulbees:wax'
            },
            id: `${id_prefix}egg`
        },
        {
            output: Item.of('undergarden:raw_dweller_meat', 3),
            pattern: ['ABC'],
            key: {
                A: 'resourcefulbees:shepherd_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:clogged_honeycomb'
            },
            id: `${id_prefix}raw_dweller_meat`
        },
        {
            output: Item.of('undergarden:raw_gloomper_leg', 3),
            pattern: ['ACB'],
            key: {
                A: 'resourcefulbees:shepherd_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:clogged_honeycomb'
            },
            id: `${id_prefix}raw_gloomper_meat`
        },
        {
            output: Item.of('atum:godforge', 1),
            pattern: ['ACA', 'CBC', 'ACA'],
            key: {
                A: 'resourcefulbees:dusty_mummbee_honeycomb_block',
                B: '#forge:furnace',
                C: '#forge:ingots/nebu'
            },
            id: `${id_prefix}godforge`
        },
        {
            output: Item.of('atum:godforged_block', 1),
            pattern: ['BAB', 'CAC', 'BAB'],
            key: {
                A: 'resourcefulbees:dusty_mummbee_honeycomb',
                B: '#forge:ingots/nebu',
                C: '#atum:godshards'
            },
            id: `${id_prefix}godforged_block`
        }
    ];

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).noMirror().id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key).noMirror();
        }
    });
});
