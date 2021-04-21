//priority: 1000

//Registry containing all crop-like growables.
const cropRegistry = [
    {
        type: 'cactus',
        crops: [
            {
                seed: 'byg:golden_spined_cactus',
                render: 'byg:golden_spined_cactus',
                plant: 'byg:golden_spined_cactus',
                substrate: 'sand'
            },
            {
                seed: 'byg:mini_cactus',
                render: 'byg:mini_cactus',
                plant: 'byg:mini_cactus',
                substrate: 'sand'
            },
            {
                seed: 'byg:prickly_pear_cactus',
                render: 'byg:prickly_pear_cactus',
                plant: 'byg:prickly_pear_cactus',
                substrate: 'sand'
            },
            {
                seed: 'byg:warped_cactus',
                render: 'byg:warped_cactus',
                plant: 'byg:warped_cactus',
                substrate: 'soul_sand'
            },
            {
                seed: 'minecraft:cactus',
                render: 'minecraft:cactus',
                plant: 'minecraft:cactus',
                substrate: 'sand'
            },
            {
                seed: 'atmospheric:aloe_kernels',
                render: 'atmospheric:aloe_vera',
                plant: 'atmospheric:aloe_leaves',
                plantSecondary: 'atmospheric:yellow_blossoms',
                plantSecondaryRate: 'high',
                substrate: 'arid_sand'
            },
            {
                seed: 'atmospheric:barrel_cactus',
                render: 'atmospheric:barrel_cactus',
                plant: 'atmospheric:barrel_cactus',
                substrate: 'arid_sand'
            }
        ]
    },
    {
        type: 'cane_like',
        crops: [
            {
                seed: 'byg:blue_glowcane',
                render: 'byg:blue_glowcane',
                plant: 'byg:blue_glowcane',
                substrate: 'glowcelium'
            },
            {
                seed: 'byg:pink_glowcane',
                render: 'byg:pink_glowcane',
                plant: 'byg:pink_glowcane',
                substrate: 'glowcelium'
            },
            {
                seed: 'byg:purple_glowcane',
                render: 'byg:purple_glowcane',
                plant: 'byg:purple_glowcane',
                substrate: 'glowcelium'
            },
            {
                seed: 'byg:red_glowcane',
                render: 'byg:red_glowcane',
                plant: 'byg:red_glowcane',
                substrate: 'glowcelium'
            },
            {
                seed: 'byg:sythian_stalk_block',
                render: 'byg:sythian_stalk_block',
                plant: 'byg:sythian_stalk_block',
                substrate: 'nether'
            },
            {
                seed: 'minecraft:bamboo',
                render: 'minecraft:bamboo',
                plant: 'minecraft:bamboo',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:sugar_cane',
                render: 'minecraft:sugar_cane',
                plant: 'minecraft:sugar_cane',
                substrate: 'sand'
            }
        ]
    },
    {
        type: 'coral',
        crops: [
            {
                seed: 'byg:warped_coral',
                render: 'byg:warped_coral',
                plant: 'byg:warped_coral',
                substrate: 'soul_sand'
            },
            {
                seed: 'byg:warped_coral_block',
                render: 'byg:warped_coral_block',
                plant: 'byg:warped_coral_block',
                substrate: 'soul_sand'
            },
            {
                seed: 'byg:warped_coral_fan',
                render: 'byg:warped_coral_fan',
                plant: 'byg:warped_coral_fan',
                substrate: 'soul_sand'
            },
            {
                seed: 'minecraft:brain_coral',
                render: 'minecraft:brain_coral',
                plant: 'minecraft:brain_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:brain_coral_block',
                render: 'minecraft:brain_coral_block',
                plant: 'minecraft:brain_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:brain_coral_fan',
                render: 'minecraft:brain_coral_fan',
                plant: 'minecraft:brain_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'minecraft:bubble_coral',
                render: 'minecraft:bubble_coral',
                plant: 'minecraft:bubble_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:bubble_coral_block',
                render: 'minecraft:bubble_coral_block',
                plant: 'minecraft:bubble_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:bubble_coral_fan',
                render: 'minecraft:bubble_coral_fan',
                plant: 'minecraft:bubble_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'minecraft:fire_coral',
                render: 'minecraft:fire_coral',
                plant: 'minecraft:fire_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:fire_coral_block',
                render: 'minecraft:fire_coral_block',
                plant: 'minecraft:fire_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:fire_coral_fan',
                render: 'minecraft:fire_coral_fan',
                plant: 'minecraft:fire_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'minecraft:horn_coral',
                render: 'minecraft:horn_coral',
                plant: 'minecraft:horn_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:horn_coral_block',
                render: 'minecraft:horn_coral_block',
                plant: 'minecraft:horn_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:horn_coral_fan',
                render: 'minecraft:horn_coral_fan',
                plant: 'minecraft:horn_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'minecraft:tube_coral',
                render: 'minecraft:tube_coral',
                plant: 'minecraft:tube_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:tube_coral_block',
                render: 'minecraft:tube_coral_block',
                plant: 'minecraft:tube_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:tube_coral_fan',
                render: 'minecraft:tube_coral_fan',
                plant: 'minecraft:tube_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:tube_worm',
                render: 'betterendforge:tube_worm',
                plant: 'betterendforge:tube_worm',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:hydrothermal_vent',
                render: 'betterendforge:hydrothermal_vent',
                plant: 'betterendforge:hydrothermal_vent',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:bubble_coral',
                render: 'betterendforge:bubble_coral',
                plant: 'betterendforge:bubble_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:acan_coral',
                render: 'upgrade_aquatic:acan_coral',
                plant: 'upgrade_aquatic:acan_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:acan_coral_block',
                render: 'upgrade_aquatic:acan_coral_block',
                plant: 'upgrade_aquatic:acan_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:acan_coral_fan',
                render: 'upgrade_aquatic:acan_coral_fan',
                plant: 'upgrade_aquatic:acan_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:branch_coral',
                render: 'upgrade_aquatic:branch_coral',
                plant: 'upgrade_aquatic:branch_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:branch_coral_block',
                render: 'upgrade_aquatic:branch_coral_block',
                plant: 'upgrade_aquatic:branch_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:branch_coral_fan',
                render: 'upgrade_aquatic:branch_coral_fan',
                plant: 'upgrade_aquatic:branch_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:chrome_coral',
                render: 'upgrade_aquatic:chrome_coral',
                plant: 'upgrade_aquatic:chrome_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:chrome_coral_block',
                render: 'upgrade_aquatic:chrome_coral_block',
                plant: 'upgrade_aquatic:chrome_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:chrome_coral_fan',
                render: 'upgrade_aquatic:chrome_coral_fan',
                plant: 'upgrade_aquatic:chrome_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:elder_prismarine_coral',
                render: 'upgrade_aquatic:elder_prismarine_coral',
                plant: 'upgrade_aquatic:elder_prismarine_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:elder_prismarine_coral_block',
                render: 'upgrade_aquatic:elder_prismarine_coral_block',
                plant: 'upgrade_aquatic:elder_prismarine_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:elder_prismarine_coral_fan',
                render: 'upgrade_aquatic:elder_prismarine_coral_fan',
                plant: 'upgrade_aquatic:elder_prismarine_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:elder_prismarine_coral_shower',
                render: 'upgrade_aquatic:elder_prismarine_coral_shower',
                plant: 'upgrade_aquatic:elder_prismarine_coral_shower',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:finger_coral',
                render: 'upgrade_aquatic:finger_coral',
                plant: 'upgrade_aquatic:finger_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:finger_coral_block',
                render: 'upgrade_aquatic:finger_coral_block',
                plant: 'upgrade_aquatic:finger_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:finger_coral_fan',
                render: 'upgrade_aquatic:finger_coral_fan',
                plant: 'upgrade_aquatic:finger_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:moss_coral',
                render: 'upgrade_aquatic:moss_coral',
                plant: 'upgrade_aquatic:moss_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:moss_coral_block',
                render: 'upgrade_aquatic:moss_coral_block',
                plant: 'upgrade_aquatic:moss_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:moss_coral_fan',
                render: 'upgrade_aquatic:moss_coral_fan',
                plant: 'upgrade_aquatic:moss_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:petal_coral',
                render: 'upgrade_aquatic:petal_coral',
                plant: 'upgrade_aquatic:petal_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:petal_coral_block',
                render: 'upgrade_aquatic:petal_coral_block',
                plant: 'upgrade_aquatic:petal_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:petal_coral_fan',
                render: 'upgrade_aquatic:petal_coral_fan',
                plant: 'upgrade_aquatic:petal_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:pillow_coral',
                render: 'upgrade_aquatic:pillow_coral',
                plant: 'upgrade_aquatic:pillow_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:pillow_coral_block',
                render: 'upgrade_aquatic:pillow_coral_block',
                plant: 'upgrade_aquatic:pillow_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:pillow_coral_fan',
                render: 'upgrade_aquatic:pillow_coral_fan',
                plant: 'upgrade_aquatic:pillow_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:prismarine_coral',
                render: 'upgrade_aquatic:prismarine_coral',
                plant: 'upgrade_aquatic:prismarine_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:prismarine_coral_block',
                render: 'upgrade_aquatic:prismarine_coral_block',
                plant: 'upgrade_aquatic:prismarine_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:prismarine_coral_fan',
                render: 'upgrade_aquatic:prismarine_coral_fan',
                plant: 'upgrade_aquatic:prismarine_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:prismarine_coral_shower',
                render: 'upgrade_aquatic:prismarine_coral_shower',
                plant: 'upgrade_aquatic:prismarine_coral_shower',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:rock_coral',
                render: 'upgrade_aquatic:rock_coral',
                plant: 'upgrade_aquatic:rock_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:rock_coral_block',
                render: 'upgrade_aquatic:rock_coral_block',
                plant: 'upgrade_aquatic:rock_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:rock_coral_fan',
                render: 'upgrade_aquatic:rock_coral_fan',
                plant: 'upgrade_aquatic:rock_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:silk_coral',
                render: 'upgrade_aquatic:silk_coral',
                plant: 'upgrade_aquatic:silk_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:silk_coral_block',
                render: 'upgrade_aquatic:silk_coral_block',
                plant: 'upgrade_aquatic:silk_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:silk_coral_fan',
                render: 'upgrade_aquatic:silk_coral_fan',
                plant: 'upgrade_aquatic:silk_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:star_coral',
                render: 'upgrade_aquatic:star_coral',
                plant: 'upgrade_aquatic:star_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:star_coral_block',
                render: 'upgrade_aquatic:star_coral_block',
                plant: 'upgrade_aquatic:star_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:star_coral_fan',
                render: 'upgrade_aquatic:star_coral_fan',
                plant: 'upgrade_aquatic:star_coral_fan',
                substrate: 'water'
            }
        ]
    },
    {
        type: 'crop_fiber',
        crops: [
            {
                seed: 'immersiveengineering:seed',
                render: 'immersiveengineering:hemp',
                plant: 'immersiveengineering:hemp_fiber',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:cotton_seeds',
                render: 'simplefarming:cotton_crop',
                plant: 'simplefarming:cotton',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:kenaf_seeds',
                render: 'simplefarming:kenaf_crop',
                plant: 'simplefarming:kenaf_fiber',
                substrate: 'dirt'
            },
            {
                seed: 'betterendforge:end_lotus_seed',
                render: 'betterendforge:end_lotus_flower',
                plant: 'betterendforge:end_lotus_stem',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:end_lily_seed',
                render: 'betterendforge:end_lily',
                plant: 'betterendforge:end_lily_leaf',
                substrate: 'water'
            }
        ]
    },
    {
        type: 'crop_fruit',
        crops: [
            {
                seed: 'occultism:datura_seeds',
                render: 'occultism:datura',
                plant: 'occultism:datura',
                substrate: 'dirt'
            },
            {
                seed: 'betterendforge:shadow_berry',
                render: 'betterendforge:shadow_berry',
                plant: 'betterendforge:shadow_berry_raw',
                substrate: 'shadow_grass'
            },
            {
                seed: 'betterendforge:blossom_berry_seed',
                render: 'betterendforge:blossom_berry_seed',
                plant: 'betterendforge:blossom_berry',
                substrate: 'pink_moss'
            },
            {
                seed: 'minecraft:chorus_flower',
                render: 'minecraft:chorus_flower',
                plant: 'minecraft:chorus_fruit',
                substrate: 'end_stone'
            }
        ]
    },
    {
        type: 'crop_gourd',
        crops: [
            {
                seed: 'minecraft:pumpkin_seeds',
                render: 'minecraft:pumpkin',
                plant: 'minecraft:pumpkin',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:squash_seeds',
                render: 'simplefarming:squash_crop',
                plant: 'simplefarming:squash_block',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:zucchini_seeds',
                render: 'simplefarming:zucchini_crop',
                plant: 'simplefarming:zucchini',
                substrate: 'dirt'
            },
            {
                seed: 'undergarden:gloomgourd_seeds',
                render: 'undergarden:gloomgourd',
                plant: 'undergarden:gloomgourd',
                substrate: 'deepturf'
            }
        ]
    },
    {
        type: 'crop_grain',
        crops: [
            {
                seed: 'farmersdelight:rice',
                render: 'farmersdelight:rice_upper_crop',
                plant: 'farmersdelight:rice_panicle',
                substrate: 'water'
            },
            {
                seed: 'minecraft:wheat_seeds',
                render: 'minecraft:wheat',
                plant: 'minecraft:wheat',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:barley_seeds',
                render: 'simplefarming:barley_crop',
                plant: 'simplefarming:barley',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:corn_seeds',
                render: 'simplefarming:corn_crop',
                plant: 'simplefarming:corn',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:oat_seeds',
                render: 'simplefarming:oat_crop',
                plant: 'simplefarming:oat',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:quinoa_seeds',
                render: 'simplefarming:quinoa',
                plant: 'simplefarming:quinoa_seeds',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:rice_seeds',
                render: 'simplefarming:rice_crop',
                plant: 'simplefarming:rice',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:rye_seeds',
                render: 'simplefarming:rye_crop',
                plant: 'simplefarming:rye',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:sorghum_seeds',
                render: 'simplefarming:sorghum_crop',
                plant: 'simplefarming:sorghum',
                substrate: 'dirt'
            },
            {
                seed: 'betterendforge:lumecorn_seed',
                render: 'betterendforge:lumecorn_seed',
                plant: 'betterendforge:lumecorn_rod',
                substrate: 'end_moss'
            },
            {
                seed: 'supplementaries:flax_seeds',
                render: 'supplementaries:flax',
                plant: 'supplementaries:flax',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_leafy',
        crops: [
            {
                seed: 'farmersdelight:cabbage_seeds',
                render: 'farmersdelight:cabbages',
                plant: 'farmersdelight:cabbage',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:lettuce_seeds',
                render: 'simplefarming:lettuce_crop',
                plant: 'simplefarming:lettuce',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:spinach_seeds',
                render: 'simplefarming:spinach_crop',
                plant: 'simplefarming:spinach',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_legume',
        crops: [
            {
                seed: 'simplefarming:broccoli_seeds',
                render: 'simplefarming:broccoli_crop',
                plant: 'simplefarming:broccoli',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:cucumber_seeds',
                render: 'simplefarming:cucumber_crop',
                plant: 'simplefarming:cucumber',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:eggplant_seeds',
                render: 'simplefarming:eggplant_crop',
                plant: 'simplefarming:eggplant',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:pea_seeds',
                render: 'simplefarming:pea_crop',
                plant: 'simplefarming:pea_pod',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:pepper_seeds',
                render: 'simplefarming:pepper_crop',
                plant: 'simplefarming:pepper',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:soybean_seeds',
                render: 'simplefarming:soybean_crop',
                plant: 'simplefarming:soybean',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_melon',
        crops: [
            {
                seed: 'minecraft:melon_seeds',
                render: 'minecraft:melon',
                plant: 'minecraft:melon',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:cantaloupe_seeds',
                render: 'simplefarming:cantaloupe_crop',
                plant: 'simplefarming:cantaloupe_block',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:honeydew_seeds',
                render: 'simplefarming:honeydew_crop',
                plant: 'simplefarming:honeydew_block',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_root',
        crops: [
            {
                seed: 'farmersdelight:onion',
                render: 'farmersdelight:onions',
                plant: 'farmersdelight:onion',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:beetroot_seeds',
                render: 'minecraft:beetroots',
                plant: 'minecraft:beetroot',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:carrot',
                render: 'minecraft:carrots',
                plant: 'minecraft:carrot',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:potato',
                render: 'minecraft:potatoes',
                plant: 'minecraft:potato',
                plantSecondary: 'minecraft:poisonous_potato',
                plantSecondaryRate: 'low',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:cassava_seeds',
                render: 'simplefarming:cassava_crop',
                plant: 'simplefarming:cassava',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:chicory_root',
                render: 'simplefarming:chicory',
                plant: 'simplefarming:chicory_root',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:ginger_seeds',
                render: 'simplefarming:ginger_crop',
                plant: 'simplefarming:ginger',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:marshmallow_root',
                render: 'simplefarming:marshmallow',
                plant: 'simplefarming:marshmallow_root',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:onion_seeds',
                render: 'simplefarming:onion_crop',
                plant: 'simplefarming:onion',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:radish_seeds',
                render: 'simplefarming:radish_crop',
                plant: 'simplefarming:radish',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:sweet_potato_seeds',
                render: 'simplefarming:sweet_potato_crop',
                plant: 'simplefarming:sweet_potato',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:turnip_seeds',
                render: 'simplefarming:turnip_crop',
                plant: 'simplefarming:turnip',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:yam_seeds',
                render: 'simplefarming:yam_crop',
                plant: 'simplefarming:yam',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_seed',
        crops: [
            {
                seed: 'simplefarming:cumin_seeds',
                render: 'simplefarming:cumin',
                plant: 'simplefarming:cumin_seeds',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:peanut_seeds',
                render: 'simplefarming:peanut_crop',
                plant: 'simplefarming:peanut',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_vine',
        crops: [
            {
                seed: 'farmersdelight:tomato_seeds',
                render: 'farmersdelight:tomatoes',
                plant: 'farmersdelight:tomato',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:tomato_seeds',
                render: 'simplefarming:tomato_crop',
                plant: 'simplefarming:tomato',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'flower',
        crops: [
            {
                seed: 'botania:black_mystical_flower',
                render: 'botania:black_mystical_flower',
                plant: 'botania:black_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:blue_mystical_flower',
                render: 'botania:blue_mystical_flower',
                plant: 'botania:blue_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:brown_mystical_flower',
                render: 'botania:brown_mystical_flower',
                plant: 'botania:brown_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:cyan_mystical_flower',
                render: 'botania:cyan_mystical_flower',
                plant: 'botania:cyan_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:gray_mystical_flower',
                render: 'botania:gray_mystical_flower',
                plant: 'botania:gray_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:green_mystical_flower',
                render: 'botania:green_mystical_flower',
                plant: 'botania:green_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:light_blue_mystical_flower',
                render: 'botania:light_blue_mystical_flower',
                plant: 'botania:light_blue_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:light_gray_mystical_flower',
                render: 'botania:light_gray_mystical_flower',
                plant: 'botania:light_gray_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:lime_mystical_flower',
                render: 'botania:lime_mystical_flower',
                plant: 'botania:lime_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:magenta_mystical_flower',
                render: 'botania:magenta_mystical_flower',
                plant: 'botania:magenta_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:orange_mystical_flower',
                render: 'botania:orange_mystical_flower',
                plant: 'botania:orange_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:pink_mystical_flower',
                render: 'botania:pink_mystical_flower',
                plant: 'botania:pink_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:purple_mystical_flower',
                render: 'botania:purple_mystical_flower',
                plant: 'botania:purple_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:red_mystical_flower',
                render: 'botania:red_mystical_flower',
                plant: 'botania:red_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:white_mystical_flower',
                render: 'botania:white_mystical_flower',
                plant: 'botania:white_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:yellow_mystical_flower',
                render: 'botania:yellow_mystical_flower',
                plant: 'botania:yellow_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'byg:allium_flower_bush',
                render: 'byg:allium_flower_bush',
                plant: 'byg:allium_flower_bush',
                substrate: 'dirt'
            },
            {
                seed: 'byg:alpine_bellflower',
                render: 'byg:alpine_bellflower',
                plant: 'byg:alpine_bellflower',
                substrate: 'dirt'
            },
            {
                seed: 'byg:amaranth',
                render: 'byg:amaranth',
                plant: 'byg:amaranth',
                substrate: 'dirt'
            },
            {
                seed: 'byg:angelica',
                render: 'byg:angelica',
                plant: 'byg:angelica',
                substrate: 'dirt'
            },
            { seed: 'byg:azalea', render: 'byg:azalea', plant: 'byg:azalea', substrate: 'dirt' },
            { seed: 'byg:begonia', render: 'byg:begonia', plant: 'byg:begonia', substrate: 'dirt' },
            { seed: 'byg:bistort', render: 'byg:bistort', plant: 'byg:bistort', substrate: 'dirt' },
            {
                seed: 'byg:black_rose',
                render: 'byg:black_rose',
                plant: 'byg:black_rose',
                substrate: 'dirt'
            },
            {
                seed: 'byg:blue_sage',
                render: 'byg:blue_sage',
                plant: 'byg:blue_sage',
                substrate: 'dirt'
            },
            {
                seed: 'byg:california_poppy',
                render: 'byg:california_poppy',
                plant: 'byg:california_poppy',
                substrate: 'dirt'
            },
            {
                seed: 'byg:clover_patch',
                render: 'byg:clover_patch',
                plant: 'byg:clover_patch',
                substrate: 'dirt'
            },
            { seed: 'byg:crocus', render: 'byg:crocus', plant: 'byg:crocus', substrate: 'dirt' },
            {
                seed: 'byg:cyan_amaranth',
                render: 'byg:cyan_amaranth',
                plant: 'byg:cyan_amaranth',
                substrate: 'dirt'
            },
            {
                seed: 'byg:cyan_rose',
                render: 'byg:cyan_rose',
                plant: 'byg:cyan_rose',
                substrate: 'dirt'
            },
            {
                seed: 'byg:cyan_tulip',
                render: 'byg:cyan_tulip',
                plant: 'byg:cyan_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'byg:daffodil',
                render: 'byg:daffodil',
                plant: 'byg:daffodil',
                substrate: 'dirt'
            },
            {
                seed: 'byg:delphinium',
                render: 'byg:delphinium',
                plant: 'byg:delphinium',
                substrate: 'dirt'
            },
            {
                seed: 'byg:fairy_slipper',
                render: 'byg:fairy_slipper',
                plant: 'byg:fairy_slipper',
                substrate: 'dirt'
            },
            {
                seed: 'byg:firecracker_flower_bush',
                render: 'byg:firecracker_flower_bush',
                plant: 'byg:firecracker_flower_bush',
                substrate: 'dirt'
            },
            {
                seed: 'byg:foxglove',
                render: 'byg:foxglove',
                plant: 'byg:foxglove',
                substrate: 'dirt'
            },
            {
                seed: 'byg:green_tulip',
                render: 'byg:green_tulip',
                plant: 'byg:green_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'byg:guzmania',
                render: 'byg:guzmania',
                plant: 'byg:guzmania',
                substrate: 'dirt'
            },
            {
                seed: 'byg:incan_lily',
                render: 'byg:incan_lily',
                plant: 'byg:incan_lily',
                substrate: 'dirt'
            },
            { seed: 'byg:iris', render: 'byg:iris', plant: 'byg:iris', substrate: 'dirt' },
            {
                seed: 'byg:japanese_orchid',
                render: 'byg:japanese_orchid',
                plant: 'byg:japanese_orchid',
                substrate: 'dirt'
            },
            {
                seed: 'byg:kovan_flower',
                render: 'byg:kovan_flower',
                plant: 'byg:kovan_flower',
                substrate: 'dirt'
            },
            {
                seed: 'byg:lazarus_bellflower',
                render: 'byg:lazarus_bellflower',
                plant: 'byg:lazarus_bellflower',
                substrate: 'dirt'
            },
            {
                seed: 'byg:lolipop_flower',
                render: 'byg:lolipop_flower',
                plant: 'byg:lolipop_flower',
                substrate: 'dirt'
            },
            {
                seed: 'byg:magenta_amaranth',
                render: 'byg:magenta_amaranth',
                plant: 'byg:magenta_amaranth',
                substrate: 'dirt'
            },
            {
                seed: 'byg:magenta_tulip',
                render: 'byg:magenta_tulip',
                plant: 'byg:magenta_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'byg:orange_amaranth',
                render: 'byg:orange_amaranth',
                plant: 'byg:orange_amaranth',
                substrate: 'dirt'
            },
            {
                seed: 'byg:orange_daisy',
                render: 'byg:orange_daisy',
                plant: 'byg:orange_daisy',
                substrate: 'dirt'
            },
            {
                seed: 'byg:osiria_rose',
                render: 'byg:osiria_rose',
                plant: 'byg:osiria_rose',
                substrate: 'dirt'
            },
            {
                seed: 'byg:peach_leather_flower',
                render: 'byg:peach_leather_flower',
                plant: 'byg:peach_leather_flower',
                substrate: 'dirt'
            },
            {
                seed: 'byg:pink_allium',
                render: 'byg:pink_allium',
                plant: 'byg:pink_allium',
                substrate: 'dirt'
            },
            {
                seed: 'byg:pink_allium_flower_bush',
                render: 'byg:pink_allium_flower_bush',
                plant: 'byg:pink_allium_flower_bush',
                substrate: 'dirt'
            },
            {
                seed: 'byg:pink_anemone',
                render: 'byg:pink_anemone',
                plant: 'byg:pink_anemone',
                substrate: 'dirt'
            },
            {
                seed: 'byg:pink_daffodil',
                render: 'byg:pink_daffodil',
                plant: 'byg:pink_daffodil',
                substrate: 'dirt'
            },
            {
                seed: 'byg:pink_orchid',
                render: 'byg:pink_orchid',
                plant: 'byg:pink_orchid',
                substrate: 'dirt'
            },
            {
                seed: 'byg:protea_flower',
                render: 'byg:protea_flower',
                plant: 'byg:protea_flower',
                substrate: 'dirt'
            },
            {
                seed: 'byg:purple_amaranth',
                render: 'byg:purple_amaranth',
                plant: 'byg:purple_amaranth',
                substrate: 'dirt'
            },
            {
                seed: 'byg:purple_orchid',
                render: 'byg:purple_orchid',
                plant: 'byg:purple_orchid',
                substrate: 'dirt'
            },
            {
                seed: 'byg:purple_sage',
                render: 'byg:purple_sage',
                plant: 'byg:purple_sage',
                substrate: 'dirt'
            },
            {
                seed: 'byg:purple_tulip',
                render: 'byg:purple_tulip',
                plant: 'byg:purple_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'byg:red_cornflower',
                render: 'byg:red_cornflower',
                plant: 'byg:red_cornflower',
                substrate: 'dirt'
            },
            {
                seed: 'byg:red_orchid',
                render: 'byg:red_orchid',
                plant: 'byg:red_orchid',
                substrate: 'dirt'
            },
            { seed: 'byg:richea', render: 'byg:richea', plant: 'byg:richea', substrate: 'dirt' },
            { seed: 'byg:rose', render: 'byg:rose', plant: 'byg:rose', substrate: 'dirt' },
            {
                seed: 'byg:silver_vase_flower',
                render: 'byg:silver_vase_flower',
                plant: 'byg:silver_vase_flower',
                substrate: 'dirt'
            },
            {
                seed: 'byg:snowdrops',
                render: 'byg:snowdrops',
                plant: 'byg:snowdrops',
                substrate: 'dirt'
            },
            {
                seed: 'byg:tall_allium',
                render: 'byg:tall_allium',
                plant: 'byg:tall_allium',
                substrate: 'dirt'
            },
            {
                seed: 'byg:tall_pink_allium',
                render: 'byg:tall_pink_allium',
                plant: 'byg:tall_pink_allium',
                substrate: 'dirt'
            },
            {
                seed: 'byg:torch_ginger',
                render: 'byg:torch_ginger',
                plant: 'byg:torch_ginger',
                substrate: 'dirt'
            },
            {
                seed: 'byg:violet_leather_flower',
                render: 'byg:violet_leather_flower',
                plant: 'byg:violet_leather_flower',
                substrate: 'dirt'
            },
            {
                seed: 'byg:white_anemone',
                render: 'byg:white_anemone',
                plant: 'byg:white_anemone',
                substrate: 'dirt'
            },
            {
                seed: 'byg:white_sage',
                render: 'byg:white_sage',
                plant: 'byg:white_sage',
                substrate: 'dirt'
            },
            {
                seed: 'byg:winter_cyclamen',
                render: 'byg:winter_cyclamen',
                plant: 'byg:winter_cyclamen',
                substrate: 'dirt'
            },
            {
                seed: 'byg:winter_rose',
                render: 'byg:winter_rose',
                plant: 'byg:winter_rose',
                substrate: 'dirt'
            },
            {
                seed: 'byg:winter_scilla',
                render: 'byg:winter_scilla',
                plant: 'byg:winter_scilla',
                substrate: 'dirt'
            },
            {
                seed: 'byg:winter_succulent',
                render: 'byg:winter_succulent',
                plant: 'byg:winter_succulent',
                substrate: 'grass'
            },
            {
                seed: 'byg:yellow_daffodil',
                render: 'byg:yellow_daffodil',
                plant: 'byg:yellow_daffodil',
                substrate: 'dirt'
            },
            {
                seed: 'byg:yellow_tulip',
                render: 'byg:yellow_tulip',
                plant: 'byg:yellow_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:allium',
                render: 'minecraft:allium',
                plant: 'minecraft:allium',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:azure_bluet',
                render: 'minecraft:azure_bluet',
                plant: 'minecraft:azure_bluet',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:blue_orchid',
                render: 'minecraft:blue_orchid',
                plant: 'minecraft:blue_orchid',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:cornflower',
                render: 'minecraft:cornflower',
                plant: 'minecraft:cornflower',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:dandelion',
                render: 'minecraft:dandelion',
                plant: 'minecraft:dandelion',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:lilac',
                render: 'minecraft:lilac',
                plant: 'minecraft:lilac',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:lily_of_the_valley',
                render: 'minecraft:lily_of_the_valley',
                plant: 'minecraft:lily_of_the_valley',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:orange_tulip',
                render: 'minecraft:orange_tulip',
                plant: 'minecraft:orange_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:oxeye_daisy',
                render: 'minecraft:oxeye_daisy',
                plant: 'minecraft:oxeye_daisy',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:peony',
                render: 'minecraft:peony',
                plant: 'minecraft:peony',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:pink_tulip',
                render: 'minecraft:pink_tulip',
                plant: 'minecraft:pink_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:poppy',
                render: 'minecraft:poppy',
                plant: 'minecraft:poppy',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:red_tulip',
                render: 'minecraft:red_tulip',
                plant: 'minecraft:red_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:rose_bush',
                render: 'minecraft:rose_bush',
                plant: 'minecraft:rose_bush',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:sunflower',
                render: 'minecraft:sunflower',
                plant: 'minecraft:sunflower',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:white_tulip',
                render: 'minecraft:white_tulip',
                plant: 'minecraft:white_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:wither_rose',
                render: 'minecraft:wither_rose',
                plant: 'minecraft:wither_rose',
                substrate: 'soul_sand'
            },
            {
                seed: 'undergarden:ditchbulb',
                render: 'undergarden:ditchbulb_plant',
                plant: 'undergarden:ditchbulb',
                substrate: 'deepturf'
            },
            {
                seed: 'undergarden:shimmerweed',
                render: 'undergarden:shimmerweed',
                plant: 'undergarden:shimmerweed',
                substrate: 'deepturf'
            },
            {
                seed: 'betterendforge:umbrella_moss_tall',
                render: 'betterendforge:umbrella_moss_tall',
                plant: 'betterendforge:umbrella_moss_tall',
                substrate: 'end_moss'
            },
            {
                seed: 'betterendforge:umbrella_moss',
                render: 'betterendforge:umbrella_moss',
                plant: 'betterendforge:umbrella_moss',
                substrate: 'end_moss'
            },
            {
                seed: 'betterendforge:twisted_umbrella_moss_tall',
                render: 'betterendforge:twisted_umbrella_moss_tall',
                plant: 'betterendforge:twisted_umbrella_moss_tall',
                substrate: 'jungle_moss'
            },
            {
                seed: 'betterendforge:twisted_umbrella_moss',
                render: 'betterendforge:twisted_umbrella_moss',
                plant: 'betterendforge:twisted_umbrella_moss',
                substrate: 'jungle_moss'
            },
            {
                seed: 'atmospheric:tall_yucca_flower',
                render: 'atmospheric:tall_yucca_flower',
                plant: 'atmospheric:tall_yucca_flower',
                substrate: 'dirt'
            },
            {
                seed: 'atmospheric:gilia',
                render: 'atmospheric:gilia',
                plant: 'atmospheric:gilia',
                substrate: 'dirt'
            },
            {
                seed: 'atmospheric:yucca_flower',
                render: 'atmospheric:yucca_flower',
                plant: 'atmospheric:yucca_flower',
                substrate: 'dirt'
            },
            {
                seed: 'atmospheric:scalding_monkey_brush',
                render: 'atmospheric:scalding_monkey_brush',
                plant: 'atmospheric:scalding_monkey_brush',
                substrate: 'dirt'
            },
            {
                seed: 'atmospheric:hot_monkey_brush',
                render: 'atmospheric:hot_monkey_brush',
                plant: 'atmospheric:hot_monkey_brush',
                substrate: 'dirt'
            },
            {
                seed: 'atmospheric:warm_monkey_brush',
                render: 'atmospheric:warm_monkey_brush',
                plant: 'atmospheric:warm_monkey_brush',
                substrate: 'dirt'
            },
            {
                seed: 'atmospheric:water_hyacinth',
                render: 'atmospheric:water_hyacinth',
                plant: 'atmospheric:water_hyacinth',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:flowering_rush',
                render: 'upgrade_aquatic:flowering_rush',
                plant: 'upgrade_aquatic:flowering_rush',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:pink_searocket',
                render: 'upgrade_aquatic:pink_searocket',
                plant: 'upgrade_aquatic:pink_searocket',
                substrate: 'dirt'
            },
            {
                seed: 'upgrade_aquatic:white_searocket',
                render: 'upgrade_aquatic:white_searocket',
                plant: 'upgrade_aquatic:white_searocket',
                substrate: 'dirt'
            },
            {
                seed: 'autumnity:autumn_crocus',
                render: 'autumnity:autumn_crocus',
                plant: 'autumnity:autumn_crocus',
                substrate: 'dirt'
            },
            {
                seed: 'upgrade_aquatic:purple_pickerelweed',
                render: 'upgrade_aquatic:purple_pickerelweed',
                plant: 'upgrade_aquatic:purple_pickerelweed',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:blue_pickerelweed',
                render: 'upgrade_aquatic:blue_pickerelweed',
                plant: 'upgrade_aquatic:blue_pickerelweed',
                substrate: 'water'
            }
        ]
    },
    {
        type: 'grass_like',
        crops: [
            {
                seed: 'byg:beach_grass',
                render: 'byg:beach_grass',
                plant: 'byg:beach_grass',
                substrate: 'grass'
            },
            {
                seed: 'byg:embur_roots',
                render: 'byg:embur_roots',
                plant: 'byg:embur_roots',
                substrate: 'nether'
            },
            {
                seed: 'byg:ether_foliage',
                render: 'byg:ether_foliage',
                plant: 'byg:ether_foliage',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:ether_grass',
                render: 'byg:ether_grass',
                plant: 'byg:ether_grass',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:tall_ether_grass',
                render: 'byg:tall_ether_grass',
                plant: 'byg:tall_ether_grass',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:ether_bush',
                render: 'byg:ether_bush',
                plant: 'byg:ether_bush',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:imparius_bush',
                render: 'byg:imparius_bush',
                plant: 'byg:imparius_bush',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:bulbis_sprouts',
                render: 'byg:bulbis_sprouts',
                plant: 'byg:bulbis_sprouts',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:flower_patch',
                render: 'byg:flower_patch',
                plant: 'byg:flower_patch',
                substrate: 'dirt'
            },
            {
                seed: 'byg:ivis_roots',
                render: 'byg:ivis_roots',
                plant: 'byg:ivis_roots',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:ivis_sprout',
                render: 'byg:ivis_sprout',
                plant: 'byg:ivis_sprout',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:lament_sprouts',
                render: 'byg:lament_sprouts',
                plant: 'byg:lament_sprouts',
                substrate: 'nether'
            },
            {
                seed: 'byg:leaf_pile',
                render: 'byg:leaf_pile',
                plant: 'byg:leaf_pile',
                substrate: 'dirt'
            },
            {
                seed: 'byg:nightshade_roots',
                render: 'byg:nightshade_roots',
                plant: 'byg:nightshade_roots',
                substrate: 'nether'
            },
            {
                seed: 'byg:nightshade_sprouts',
                render: 'byg:nightshade_sprouts',
                plant: 'byg:nightshade_sprouts',
                substrate: 'nether'
            },
            {
                seed: 'byg:pink_cherry_foliage',
                render: 'byg:pink_cherry_foliage',
                plant: 'byg:pink_cherry_foliage',
                substrate: 'dirt'
            },
            {
                seed: 'byg:poison_ivy',
                render: 'byg:poison_ivy',
                plant: 'byg:poison_ivy',
                substrate: 'dirt'
            },
            {
                seed: 'byg:prairie_grass',
                render: 'byg:prairie_grass',
                plant: 'byg:prairie_grass',
                substrate: 'grass'
            },
            {
                seed: 'byg:scorched_grass',
                render: 'byg:scorched_grass',
                plant: 'byg:scorched_grass',
                substrate: 'nether'
            },
            {
                seed: 'byg:short_beach_grass',
                render: 'byg:short_beach_grass',
                plant: 'byg:short_beach_grass',
                substrate: 'grass'
            },
            {
                seed: 'byg:short_grass',
                render: 'byg:short_grass',
                plant: 'byg:short_grass',
                substrate: 'grass'
            },
            {
                seed: 'byg:shulkren_moss_blanket',
                render: 'byg:shulkren_moss_blanket',
                plant: 'byg:shulkren_moss_blanket',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:shulkren_moss_blanket',
                render: 'byg:shulkren_moss_blanket',
                plant: 'byg:shulkren_moss_blanket',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:sythian_roots',
                render: 'byg:sythian_roots',
                plant: 'byg:sythian_roots',
                substrate: 'nether'
            },
            {
                seed: 'byg:sythian_sprout',
                render: 'byg:sythian_sprout',
                plant: 'byg:sythian_sprout',
                substrate: 'nether'
            },
            {
                seed: 'byg:vermilion_sculk_growth',
                render: 'byg:vermilion_sculk_growth',
                plant: 'byg:vermilion_sculk_growth',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:vermilion_sculk_tendrils',
                render: 'byg:vermilion_sculk_tendrils',
                plant: 'byg:vermilion_sculk_tendrils',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:warped_bush',
                render: 'byg:warped_bush',
                plant: 'byg:warped_bush',
                substrate: 'soul_sand'
            },
            {
                seed: 'byg:weed_grass',
                render: 'byg:weed_grass',
                plant: 'byg:weed_grass',
                substrate: 'grass'
            },
            {
                seed: 'byg:whaling_grass',
                render: 'byg:whaling_grass',
                plant: 'byg:whaling_grass',
                substrate: 'nether'
            },
            {
                seed: 'byg:white_cherry_foliage',
                render: 'byg:white_cherry_foliage',
                plant: 'byg:white_cherry_foliage',
                substrate: 'dirt'
            },
            {
                seed: 'byg:wilted_grass',
                render: 'byg:wilted_grass',
                plant: 'byg:wilted_grass',
                substrate: 'grass'
            },
            {
                seed: 'byg:winter_grass',
                render: 'byg:winter_grass',
                plant: 'byg:winter_grass',
                substrate: 'grass'
            },
            {
                seed: 'minecraft:crimson_roots',
                render: 'minecraft:crimson_roots',
                plant: 'minecraft:crimson_roots',
                substrate: 'crimson_nylium'
            },
            {
                seed: 'minecraft:fern',
                render: 'minecraft:fern',
                plant: 'minecraft:fern',
                substrate: 'grass'
            },
            {
                seed: 'minecraft:grass',
                render: 'minecraft:grass',
                plant: 'minecraft:grass',
                substrate: 'grass'
            },
            {
                seed: 'minecraft:nether_sprouts',
                render: 'minecraft:nether_sprouts',
                plant: 'minecraft:nether_sprouts',
                substrate: 'nether'
            },
            {
                seed: 'minecraft:seagrass',
                render: 'minecraft:seagrass',
                plant: 'minecraft:seagrass',
                substrate: 'water'
            },
            {
                seed: 'minecraft:warped_roots',
                render: 'minecraft:warped_roots',
                plant: 'minecraft:warped_roots',
                substrate: 'warped_nylium'
            },
            {
                seed: 'undergarden:ashen_deepturf',
                render: 'undergarden:ashen_deepturf',
                plant: 'undergarden:ashen_deepturf',
                substrate: 'deepturf'
            },
            {
                seed: 'undergarden:ashen_deepturf',
                render: 'undergarden:ashen_deepturf',
                plant: 'undergarden:ashen_deepturf',
                substrate: 'deepturf'
            },
            {
                seed: 'undergarden:deepturf',
                render: 'undergarden:deepturf',
                plant: 'undergarden:deepturf',
                substrate: 'deepturf'
            },
            {
                seed: 'betterendforge:shadow_plant',
                render: 'betterendforge:shadow_plant',
                plant: 'betterendforge:shadow_plant',
                substrate: 'shadow_grass'
            },
            {
                seed: 'betterendforge:needlegrass',
                render: 'betterendforge:needlegrass',
                plant: 'betterendforge:needlegrass',
                substrate: 'shadow_grass'
            },
            {
                seed: 'betterendforge:crystal_grass',
                render: 'betterendforge:crystal_grass',
                plant: 'betterendforge:crystal_grass',
                substrate: 'crystal_moss'
            },
            {
                seed: 'betterendforge:creeping_moss',
                render: 'betterendforge:creeping_moss',
                plant: 'betterendforge:creeping_moss',
                substrate: 'end_moss'
            },
            {
                seed: 'betterendforge:chorus_grass',
                render: 'betterendforge:chorus_grass',
                plant: 'betterendforge:chorus_grass',
                substrate: 'chorus_nylium'
            },
            {
                seed: 'betterendforge:charnia_red',
                render: 'betterendforge:charnia_red',
                plant: 'betterendforge:charnia_red',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:charnia_purple',
                render: 'betterendforge:charnia_purple',
                plant: 'betterendforge:charnia_purple',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:charnia_orange',
                render: 'betterendforge:charnia_orange',
                plant: 'betterendforge:charnia_orange',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:charnia_light_blue',
                render: 'betterendforge:charnia_light_blue',
                plant: 'betterendforge:charnia_light_blue',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:charnia_green',
                render: 'betterendforge:charnia_green',
                plant: 'betterendforge:charnia_green',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:charnia_cyan',
                render: 'betterendforge:charnia_cyan',
                plant: 'betterendforge:charnia_cyan',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:bushy_grass',
                render: 'betterendforge:bushy_grass',
                plant: 'betterendforge:bushy_grass',
                substrate: 'pink_moss'
            },
            {
                seed: 'betterendforge:amber_grass',
                render: 'betterendforge:amber_grass',
                plant: 'betterendforge:amber_grass',
                substrate: 'amber_moss'
            },
            {
                seed: 'upgrade_aquatic:tall_beachgrass',
                render: 'upgrade_aquatic:tall_beachgrass',
                plant: 'upgrade_aquatic:tall_beachgrass',
                substrate: 'dirt'
            },
            {
                seed: 'upgrade_aquatic:beachgrass',
                render: 'upgrade_aquatic:beachgrass',
                plant: 'upgrade_aquatic:beachgrass',
                substrate: 'dirt'
            },
            {
                seed: 'byg:reeds',
                render: 'byg:reeds',
                plant: 'byg:reeds',
                substrate: 'water'
            },
            {
                seed: 'projectvibrantjourneys:cattail',
                render: 'projectvibrantjourneys:cattail',
                plant: 'projectvibrantjourneys:cattail',
                substrate: 'water'
            },
            {
                seed: 'projectvibrantjourneys:sea_oats',
                render: 'projectvibrantjourneys:sea_oats',
                plant: 'projectvibrantjourneys:sea_oats',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'kelp_like',
        crops: [
            {
                seed: 'minecraft:kelp',
                render: 'minecraft:kelp_plant',
                plant: 'minecraft:kelp',
                substrate: 'water'
            },
            {
                seed: 'undergarden:glowing_kelp',
                render: 'undergarden:glowing_kelp_plant',
                plant: 'undergarden:glowing_kelp',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:polar_kelp',
                render: 'upgrade_aquatic:polar_kelp',
                plant: 'upgrade_aquatic:polar_kelp',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:ochre_kelp',
                render: 'upgrade_aquatic:ochre_kelp',
                plant: 'upgrade_aquatic:ochre_kelp',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:thorny_kelp',
                render: 'upgrade_aquatic:thorny_kelp',
                plant: 'upgrade_aquatic:thorny_kelp',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:tongue_kelp',
                render: 'upgrade_aquatic:tongue_kelp',
                plant: 'upgrade_aquatic:tongue_kelp',
                substrate: 'water'
            }
        ]
    },
    {
        type: 'lily_like',
        crops: [
            {
                seed: 'byg:tiny_lilypads',
                render: 'byg:tiny_lilypads',
                plant: 'byg:tiny_lilypads',
                substrate: 'water'
            },
            {
                seed: 'byg:water_silk',
                render: 'byg:water_silk',
                plant: 'byg:water_silk',
                substrate: 'water'
            },
            {
                seed: 'minecraft:lily_pad',
                render: 'minecraft:lily_pad',
                plant: 'minecraft:lily_pad',
                substrate: 'water'
            }
        ]
    },
    {
        type: 'shroom',
        crops: [
            {
                seed: 'botania:black_mushroom',
                render: 'botania:black_mushroom',
                plant: 'botania:black_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:blue_mushroom',
                render: 'botania:blue_mushroom',
                plant: 'botania:blue_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:brown_mushroom',
                render: 'botania:brown_mushroom',
                plant: 'botania:brown_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:cyan_mushroom',
                render: 'botania:cyan_mushroom',
                plant: 'botania:cyan_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:gray_mushroom',
                render: 'botania:gray_mushroom',
                plant: 'botania:gray_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:green_mushroom',
                render: 'botania:green_mushroom',
                plant: 'botania:green_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:light_blue_mushroom',
                render: 'botania:light_blue_mushroom',
                plant: 'botania:light_blue_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:light_gray_mushroom',
                render: 'botania:light_gray_mushroom',
                plant: 'botania:light_gray_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:lime_mushroom',
                render: 'botania:lime_mushroom',
                plant: 'botania:lime_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:magenta_mushroom',
                render: 'botania:magenta_mushroom',
                plant: 'botania:magenta_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:orange_mushroom',
                render: 'botania:orange_mushroom',
                plant: 'botania:orange_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:pink_mushroom',
                render: 'botania:pink_mushroom',
                plant: 'botania:pink_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:purple_mushroom',
                render: 'botania:purple_mushroom',
                plant: 'botania:purple_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:red_mushroom',
                render: 'botania:red_mushroom',
                plant: 'botania:red_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:white_mushroom',
                render: 'botania:white_mushroom',
                plant: 'botania:white_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:yellow_mushroom',
                render: 'botania:yellow_mushroom',
                plant: 'botania:yellow_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'minecraft:nether_wart',
                render: 'minecraft:nether_wart',
                plant: 'minecraft:nether_wart',
                substrate: 'soul_sand'
            },
            {
                seed: 'minecraft:sea_pickle',
                render: 'minecraft:sea_pickle',
                plant: 'minecraft:sea_pickle',
                substrate: 'water'
            },
            {
                seed: 'projectvibrantjourneys:bark_mushroom',
                render: 'projectvibrantjourneys:bark_mushroom',
                plant: 'projectvibrantjourneys:bark_mushroom',
                substrate: 'mushroom'
            }
        ]
    },
    {
        type: 'shrub',
        crops: [
            {
                seed: 'byg:blueberries',
                render: 'byg:blueberry_bush',
                plant: 'byg:blueberries',
                substrate: 'dirt'
            },
            {
                seed: 'byg:nether_bristle',
                render: 'byg:nether_bristle',
                plant: 'byg:nether_bristle',
                substrate: 'nether'
            },
            {
                seed: 'minecraft:sweet_berries',
                render: 'minecraft:sweet_berry_bush',
                plant: 'minecraft:sweet_berries',
                substrate: 'dirt'
            },
            {
                seed: 'undergarden:blisterberry',
                render: 'undergarden:blisterberry_bush',
                plant: 'undergarden:blisterberry',
                plantSecondary: 'undergarden:rotten_blisterberry',
                plantSecondaryRate: 'low',
                substrate: 'deepturf'
            },
            {
                seed: 'undergarden:underbeans',
                render: 'undergarden:underbean_bush',
                plant: 'undergarden:underbeans',
                substrate: 'deepturf'
            },
            {
                seed: 'autumnity:foul_berries',
                render: 'autumnity:foul_berry_bush',
                plant: 'autumnity:foul_berries',
                substrate: 'dirt'
            },
            {
                seed: 'betterendforge:blue_vine_seed',
                render: 'betterendforge:blue_vine_lantern',
                plant: 'betterendforge:blue_vine_lantern',
                plantSecondary: 'betterendforge:blue_vine_seed',
                plantSecondaryRate: 'high',
                substrate: 'end_mycelium'
            },
            {
                seed: 'betterendforge:glowing_pillar_seed',
                render: 'betterendforge:glowing_pillar_luminophor',
                plant: 'betterendforge:glowing_pillar_luminophor',
                plantSecondary: 'betterendforge:glowing_pillar_seed',
                plantSecondaryRate: 'high',
                substrate: 'amber_moss'
            },
            {
                seed: 'byg:oddity_bush',
                render: 'byg:oddity_bush',
                plant: 'byg:oddity_bush',
                substrate: 'end_stone'
            },
            {
                seed: 'projectvibrantjourneys:warped_nettle',
                render: 'projectvibrantjourneys:warped_nettle',
                plant: 'projectvibrantjourneys:warped_nettle',
                substrate: 'warped_nylium'
            },
            {
                seed: 'projectvibrantjourneys:crimson_nettle',
                render: 'projectvibrantjourneys:crimson_nettle',
                plant: 'projectvibrantjourneys:crimson_nettle',
                substrate: 'crimson_nylium'
            }
        ]
    },
    {
        type: 'vine',
        crops: [
            {
                seed: 'byg:lament_vine',
                render: 'byg:lament_vine_plant',
                plant: 'byg:lament_vine',
                substrate: 'nether'
            },
            {
                seed: 'byg:shulkren_vine',
                render: 'byg:shulkren_vine_plant',
                plant: 'byg:shulkren_vine',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:skyris_vine',
                render: 'byg:skyris_vine',
                plant: 'byg:skyris_vine',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:soul_shroom_spore_end',
                render: 'byg:soul_shroom_spore_end',
                plant: 'byg:soul_shroom_spore_end',
                substrate: 'nether'
            },
            {
                seed: 'byg:weeping_roots',
                render: 'byg:weeping_roots',
                plant: 'byg:weeping_roots',
                substrate: 'nether'
            },
            {
                seed: 'byg:whaling_vine',
                render: 'byg:whaling_vine',
                plant: 'byg:whaling_vine',
                substrate: 'end_stone'
            },
            {
                seed: 'minecraft:twisting_vines',
                render: 'minecraft:twisting_vines_plant',
                plant: 'minecraft:twisting_vines',
                substrate: 'warped_nylium'
            },
            {
                seed: 'minecraft:vine',
                render: 'minecraft:vine',
                plant: 'minecraft:vine',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:weeping_vines',
                render: 'minecraft:weeping_vines_plant',
                plant: 'minecraft:weeping_vines',
                substrate: 'crimson_nylium'
            },
            {
                seed: 'undergarden:droopvine_item',
                render: 'undergarden:droopvine',
                plant: 'undergarden:droopvine_item',
                substrate: 'nether'
            },
            {
                seed: 'betterendforge:twisted_vine',
                render: 'betterendforge:twisted_vine',
                plant: 'betterendforge:twisted_vine',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:twisted_moss',
                render: 'betterendforge:twisted_moss',
                plant: 'betterendforge:twisted_moss',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:tenanea_flowers',
                render: 'betterendforge:tenanea_flowers',
                plant: 'betterendforge:tenanea_flowers',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:tail_moss',
                render: 'betterendforge:tail_moss',
                plant: 'betterendforge:tail_moss',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:purple_polypore',
                render: 'betterendforge:purple_polypore',
                plant: 'betterendforge:purple_polypore',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:jungle_vine',
                render: 'betterendforge:jungle_vine',
                plant: 'betterendforge:jungle_vine',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:jungle_fern',
                render: 'betterendforge:jungle_fern',
                plant: 'betterendforge:jungle_fern',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:dense_vine',
                render: 'betterendforge:dense_vine',
                plant: 'betterendforge:dense_vine',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:cyan_moss',
                render: 'betterendforge:cyan_moss',
                plant: 'betterendforge:cyan_moss',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:bulb_moss',
                render: 'betterendforge:bulb_moss',
                plant: 'betterendforge:bulb_moss',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:bulb_vine_seed',
                render: 'betterendforge:bulb_vine',
                plant: 'betterendforge:glowing_bulb',
                substrate: 'end_stone'
            },

            {
                seed: 'betterendforge:hydralux_sapling',
                render: 'betterendforge:hydralux_sapling',
                plant: 'betterendforge:hydralux_petal',
                plantSecondary: 'betterendforge:hydralux_sapling',
                plantSecondaryRate: 'high',
                substrate: 'water'
            },
            {
                seed: 'atmospheric:passion_vine',
                render: 'atmospheric:passion_vine',
                plant: 'atmospheric:passion_vine',
                substrate: 'dirt'
            },
            {
                seed: 'byg:imparius_vine',
                render: 'byg:imparius_vine',
                plant: 'byg:imparius_vine',
                substrate: 'dirt'
            }
        ]
    }
];
