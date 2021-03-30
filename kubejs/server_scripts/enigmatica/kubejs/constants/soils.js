//priority: 1001
// Registry of soils for use in botany pots
const soilRegistry = [
    { block: 'minecraft:coarse_dirt', categories: ['dirt', 'coarse_dirt'], growthModifier: -0.65 },
    {
        block: 'minecraft:crimson_nylium',
        categories: ['dirt', 'crimson_nylium', 'nylium', 'mushroom'],
        growthModifier: 0.05
    },
    {
        block: 'undergarden:ashen_deepturf_block',
        categories: ['dirt', 'deepturf', 'ashen_deepturf'],
        growthModifier: 0
    },
    { block: 'undergarden:deepsoil', categories: ['dirt', 'deepturf'], growthModifier: 0 },
    { block: 'undergarden:deepturf_block', categories: ['dirt', 'deepturf'], growthModifier: 0 },
    { block: 'undergarden:deepsoil_farmland', categories: ['dirt', 'deepturf', 'farmland'], growthModifier: 0.15 },

    {
        block: 'byg:embur_nylium',
        categories: ['dirt', 'embur_nylium', 'nylium', 'blue_netherrack', 'mushroom'],
        growthModifier: 0.05
    },
    { block: 'farmersdelight:rich_soil_farmland', categories: ['dirt', 'farmland'], growthModifier: 0.15 },
    {
        block: 'farmingforblockheads:fertilized_farmland_healthy',
        categories: ['dirt', 'farmland'],
        growthModifier: 0.15
    },
    {
        block: 'farmingforblockheads:fertilized_farmland_healthy_stable',
        categories: ['dirt', 'farmland'],
        growthModifier: 0.15
    },
    { block: 'minecraft:farmland', categories: ['dirt', 'farmland'], growthModifier: 0.15 },
    { block: 'byg:glowcelium_block', categories: ['dirt', 'glowcelium', 'mushroom'], growthModifier: 0.05 },
    { block: 'quark:glowcelium', categories: ['dirt', 'glowcelium', 'mushroom'], growthModifier: 0.05 },
    { block: 'botania:enchanted_soil', categories: ['dirt', 'grass', 'botania', 'magic'], growthModifier: 0.25 },
    { block: 'botania:vivid_grass', categories: ['dirt', 'grass', 'botania', 'magic'], growthModifier: 0.15 },
    { block: 'botania:scorched_grass', categories: ['dirt', 'grass', 'botania', 'nether'], growthModifier: 0.15 },
    { block: 'botania:dry_grass', categories: ['dirt', 'grass', 'botania'], growthModifier: -0.1 },
    { block: 'botania:golden_grass', categories: ['dirt', 'grass', 'botania'], growthModifier: 0.05 },
    { block: 'botania:infused_grass', categories: ['dirt', 'grass', 'botania'], growthModifier: 0.15 },
    { block: 'botania:mutated_grass', categories: ['dirt', 'grass', 'botania'], growthModifier: 0.15 },
    { block: 'byg:podzol_dacite', categories: ['dirt', 'grass', 'podzol', 'mushroom'], growthModifier: 0.05 },
    { block: 'minecraft:podzol', categories: ['dirt', 'grass', 'podzol', 'mushroom'], growthModifier: 0.05 },
    { block: 'byg:meadow_grass_block', categories: ['dirt', 'grass'], growthModifier: 0.05 },
    { block: 'byg:overgrown_dacite', categories: ['dirt', 'grass'], growthModifier: 0.05 },
    { block: 'minecraft:grass_block', categories: ['dirt', 'grass'], growthModifier: 0.05 },
    { block: 'byg:peat', categories: ['dirt', 'mushroom'], growthModifier: 0.25 },
    { block: 'minecraft:mycelium', categories: ['dirt', 'mushroom'], growthModifier: 0.05 },
    { block: 'byg:overgrown_netherrack', categories: ['dirt', 'netherrack', 'nether', 'grass'], growthModifier: 0.05 },
    { block: 'byg:sythian_nylium', categories: ['dirt', 'sythian_nylium', 'nylium', 'mushroom'], growthModifier: 0.05 },
    {
        block: 'minecraft:warped_nylium',
        categories: ['dirt', 'warped_nylium', 'nylium', 'mushroom'],
        growthModifier: 0.05
    },
    { block: 'byg:meadow_dirt', categories: ['dirt'], growthModifier: 0 },
    { block: 'byg:mud_block', categories: ['dirt'], growthModifier: 0 },
    { block: 'decorative_blocks:rocky_dirt', categories: ['dirt'], growthModifier: 0 },
    { block: 'minecraft:dirt', categories: ['dirt'], growthModifier: 0 },
    { block: 'byg:ivis_phylium', categories: ['end_stone', 'ivis_phylium'], growthModifier: 0.05 },
    { block: 'minecraft:end_stone', categories: ['end_stone'], growthModifier: -0.5 },
    { block: 'minecraft:lava_bucket', categories: ['fluid', 'liquid', 'lava'], growthModifier: 0 },
    { block: 'minecraft:water_bucket', categories: ['fluid', 'liquid', 'water'], growthModifier: 0 },
    {
        block: 'byg:nylium_soul_sand',
        categories: ['nether', 'nylium_soul_sand', 'nylium_soul_soil', 'soul_sand', 'soul_soil'],
        growthModifier: 0
    },
    {
        block: 'byg:nylium_soul_soil',
        categories: ['nether', 'nylium_soul_sand', 'nylium_soul_soil', 'soul_sand', 'soul_soil'],
        growthModifier: 0
    },
    { block: 'minecraft:netherrack', categories: ['nether'], growthModifier: 0 },
    { block: 'byg:black_sand', categories: ['sand', 'black_sand'], growthModifier: 0 },
    { block: 'byg:blue_sand', categories: ['sand', 'blue_sand'], growthModifier: 0 },
    { block: 'byg:pink_sand', categories: ['sand', 'pink_sand'], growthModifier: 0 },
    { block: 'byg:purple_sand', categories: ['sand', 'purple_sand'], growthModifier: 0 },
    { block: 'minecraft:red_sand', categories: ['sand', 'red_sand'], growthModifier: 0 },
    { block: 'minecraft:sand', categories: ['sand', 'red_sand'], growthModifier: 0 },
    { block: 'byg:white_sand', categories: ['sand', 'white_sand'], growthModifier: 0 },
    { block: 'minecraft:soul_sand', categories: ['soul_sand', 'nether'], growthModifier: -0.3 },
    { block: 'minecraft:soul_soil', categories: ['soul_sand', 'nether'], growthModifier: 0 },

    { block: 'betterendforge:crystal_moss', categories: ['end_stone', 'crystal_moss'], growthModifier: 0.5 },
    { block: 'betterendforge:amber_moss', categories: ['end_stone', 'amber_moss'], growthModifier: 0.5 },
    { block: 'betterendforge:chorus_nylium', categories: ['end_stone', 'chorus_nylium'], growthModifier: 0.5 },
    { block: 'betterendforge:jungle_moss', categories: ['end_stone', 'jungle_moss'], growthModifier: 0.5 },
    { block: 'betterendforge:end_moss', categories: ['end_stone', 'end_moss'], growthModifier: 0.5 },
    { block: 'betterendforge:shadow_grass', categories: ['end_stone', 'shadow_grass'], growthModifier: 0.5 },
    { block: 'betterendforge:pink_moss', categories: ['end_stone', 'pink_moss'], growthModifier: 0.5 },
    {
        block: 'betterendforge:end_mycelium',
        categories: ['end_stone', 'end_mycelium', 'mushroom'],
        growthModifier: 0.5
    },
    { block: 'atmospheric:arid_sand', categories: ['sand', 'arid_sand'], growthModifier: 0.0 },
    { block: 'atmospheric:red_arid_sand', categories: ['sand', 'arid_sand', 'red_arid_sand'], growthModifier: 0.0 },
    { block: 'byg:imparius_phylium', categories: ['end_stone', 'mushroom', 'imparius_phylium'], growthModifier: 0.5 }
];
