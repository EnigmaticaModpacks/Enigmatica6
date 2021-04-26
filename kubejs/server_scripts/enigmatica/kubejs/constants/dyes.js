//priority: 1000

//List of all items used to create dyes and the dyes they create
const dyeSources = [
    {
        input: 'byg:allium_flower_bush',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:alpine_bellflower',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:amaranth',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'byg:angelica',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'byg:azalea',
        type: 'tall',
        primary: 'minecraft:light_blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:begonia',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'byg:bistort',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'byg:black_rose',
        type: 'small',
        primary: 'minecraft:black_dye',
        secondary: 'minecraft:black_dye',
        tertiary: 'minecraft:gray_dye'
    },
    {
        input: 'byg:blue_sage',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:light_blue_dye'
    },
    {
        input: 'byg:blueberries',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'byg:california_poppy',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:black_dye'
    },
    {
        input: 'byg:crocus',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'byg:cyan_amaranth',
        type: 'small',
        primary: 'minecraft:cyan_dye',
        secondary: 'minecraft:cyan_dye',
        tertiary: 'minecraft:light_blue_dye'
    },
    {
        input: 'byg:cyan_rose',
        type: 'small',
        primary: 'minecraft:cyan_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:cyan_tulip',
        type: 'small',
        primary: 'minecraft:cyan_dye',
        secondary: 'minecraft:cyan_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:daffodil',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:delphinium',
        type: 'tall',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'byg:fairy_slipper',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:firecracker_flower_bush',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'byg:foxglove',
        type: 'tall',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:cyan_dye',
        tertiary: 'minecraft:light_blue_dye'
    },
    {
        input: 'byg:golden_spined_cactus',
        type: 'small',
        primary: 'minecraft:green_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'byg:green_tulip',
        type: 'small',
        primary: 'minecraft:lime_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:guzmania',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'byg:incan_lily',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:iris',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:japanese_orchid',
        type: 'tall',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:kovan_flower',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:lazarus_bellflower',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'byg:lolipop_flower',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'byg:magenta_amaranth',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:magenta_tulip',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:mini_cactus',
        type: 'small',
        primary: 'minecraft:green_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:orange_amaranth',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'byg:orange_daisy',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'byg:osiria_rose',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:red_dye'
    },
    {
        input: 'byg:peach_leather_flower',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:pink_allium',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:pink_allium_flower_bush',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:pink_anemone',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'byg:pink_daffodil',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:pink_orchid',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:red_dye'
    },
    {
        input: 'byg:prairie_grass',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:brown_dye'
    },
    {
        input: 'byg:prickly_pear_cactus',
        type: 'small',
        primary: 'minecraft:green_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:protea_flower',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:purple_amaranth',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'byg:purple_orchid',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'byg:purple_sage',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:purple_tulip',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:red_cornflower',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:red_orchid',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'byg:reeds',
        type: 'small',
        primary: 'minecraft:brown_dye',
        secondary: 'minecraft:brown_dye',
        tertiary: 'minecraft:gray_dye'
    },
    {
        input: 'byg:richea',
        type: 'small',
        primary: 'minecraft:light_gray_dye',
        secondary: 'minecraft:light_gray_dye',
        tertiary: 'minecraft:red_dye'
    },
    {
        input: 'byg:rose',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:silver_vase_flower',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'byg:snowdrops',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:tall_allium',
        type: 'tall',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:tall_pink_allium',
        type: 'tall',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:thereal_bellflower',
        type: 'small',
        primary: 'minecraft:light_blue_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:cyan_dye'
    },
    {
        input: 'byg:torch_ginger',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:violet_leather_flower',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'byg:white_anemone',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:light_gray_dye'
    },
    {
        input: 'byg:white_sage',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:light_gray_dye'
    },
    {
        input: 'byg:winter_cyclamen',
        type: 'small',
        primary: 'minecraft:cyan_dye',
        secondary: 'minecraft:cyan_dye',
        tertiary: 'minecraft:light_blue_dye'
    },
    {
        input: 'byg:winter_rose',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:light_gray_dye'
    },
    {
        input: 'byg:winter_scilla',
        type: 'small',
        primary: 'minecraft:light_blue_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:yellow_daffodil',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:yellow_tulip',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'farmersdelight:wild_beetroots',
        type: 'small',
        primary: 'minecraft:beetroot_seeds',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'farmersdelight:wild_cabbages',
        type: 'small',
        primary: 'farmersdelight:cabbage_seeds',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'farmersdelight:wild_carrots',
        type: 'small',
        primary: 'minecraft:light_gray_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'farmersdelight:wild_onions',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'farmersdelight:wild_potatoes',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:lime_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'farmersdelight:wild_rice',
        type: 'small',
        primary: 'farmersdelight:rice',
        secondary: 'minecraft:brown_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'farmersdelight:wild_tomatoes',
        type: 'small',
        primary: 'farmersdelight:tomato_seeds',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'minecraft:allium',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'minecraft:azure_bluet',
        type: 'small',
        primary: 'minecraft:light_gray_dye',
        secondary: 'minecraft:light_gray_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'minecraft:beetroot',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:red_dye'
    },
    {
        input: 'minecraft:blue_orchid',
        type: 'small',
        primary: 'minecraft:light_blue_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:light_gray_dye'
    },
    {
        input: 'minecraft:bone',
        type: 'small',
        primary: 'minecraft:bone_meal',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:bone_meal'
    },
    {
        input: 'minecraft:bone_meal',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:light_gray_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'minecraft:brain_coral',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'minecraft:brain_coral_fan',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'minecraft:bubble_coral',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'minecraft:bubble_coral_fan',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'minecraft:cocoa_beans',
        type: 'small',
        primary: 'minecraft:brown_dye',
        secondary: 'minecraft:brown_dye',
        tertiary: 'minecraft:brown_dye'
    },
    {
        input: 'minecraft:cornflower',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:light_blue_dye'
    },
    {
        input: 'minecraft:dandelion',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:fern',
        type: 'small',
        primary: 'minecraft:green_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'minecraft:fire_coral',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:fire_coral_fan',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:horn_coral',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:horn_coral_fan',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:large_fern',
        type: 'small',
        primary: 'minecraft:green_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'minecraft:lilac',
        type: 'large',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'minecraft:lily_of_the_valley',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'minecraft:orange_tulip',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'minecraft:oxeye_daisy',
        type: 'small',
        primary: 'minecraft:light_gray_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'minecraft:peony',
        type: 'large',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'minecraft:pink_tulip',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'minecraft:poppy',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:black_dye'
    },
    {
        input: 'minecraft:red_tulip',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'minecraft:rose_bush',
        type: 'large',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'minecraft:sea_pickle',
        type: 'small',
        primary: 'minecraft:lime_dye',
        secondary: 'minecraft:lime_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'minecraft:sunflower',
        type: 'large',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:tube_coral',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'minecraft:tube_coral_fan',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'minecraft:white_tulip',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'minecraft:wither_rose',
        type: 'small',
        primary: 'minecraft:black_dye',
        secondary: 'minecraft:black_dye',
        tertiary: 'minecraft:gray_dye'
    },
    {
        input: 'simplefarming:blackberries',
        type: 'tiny',
        primary: 'minecraft:black_dye',
        secondary: 'minecraft:black_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'simplefarming:blueberries',
        type: 'tiny',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'simplefarming:raspberries',
        type: 'tiny',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:red_dye'
    },
    {
        input: 'simplefarming:strawberries',
        type: 'tiny',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:red_dye'
    },
    {
        input: 'undergarden:indigo_mushroom',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'undergarden:shimmerweed',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'undergarden:tall_shimmerweed',
        type: 'tall',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'undergarden:veil_mushroom',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:light_gray_dye',
        tertiary: 'minecraft:black_dye'
    },
    {
        input: 'betterendforge:charnia_cyan',
        type: 'small',
        primary: 'minecraft:cyan_dye',
        secondary: 'minecraft:cyan_dye',
        tertiary: 'minecraft:cyan_dye'
    },
    {
        input: 'betterendforge:charnia_light_blue',
        type: 'small',
        primary: 'minecraft:light_blue_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:light_blue_dye'
    },
    {
        input: 'betterendforge:charnia_purple',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'betterendforge:charnia_red',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:red_dye'
    },
    {
        input: 'betterendforge:charnia_green',
        type: 'small',
        primary: 'minecraft:green_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'betterendforge:charnia_orange',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'betterendforge:purple_polypore',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'betterendforge:umbrella_moss',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'betterendforge:umbrella_moss_tall',
        type: 'large',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'betterendforge:creeping_moss',
        type: 'small',
        primary: 'minecraft:cyan_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'betterendforge:shadow_plant',
        type: 'small',
        primary: 'minecraft:black_dye',
        secondary: 'minecraft:gray_dye',
        tertiary: 'minecraft:light_gray_dye'
    },
    {
        input: 'betterendforge:bushy_grass',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:gray_dye',
        tertiary: 'minecraft:blue_dye'
    },
    {
        input: 'betterendforge:tail_moss',
        type: 'small',
        primary: 'minecraft:gray_dye',
        secondary: 'minecraft:black_dye',
        tertiary: 'minecraft:light_gray_dye'
    },
    {
        input: 'betterendforge:cyan_moss',
        type: 'small',
        primary: 'minecraft:cyan_dye',
        secondary: 'minecraft:cyan_dye',
        tertiary: 'minecraft:blue_dye'
    },
    {
        input: 'betterendforge:twisted_moss',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:cyan_dye'
    },
    {
        input: 'atmospheric:tall_yucca_flower',
        type: 'large',
        primary: 'minecraft:light_gray_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:gray_dye'
    },
    {
        input: 'atmospheric:yellow_blossoms',
        type: 'large',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'atmospheric:gilia',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'atmospheric:yucca_flower',
        type: 'small',
        primary: 'minecraft:light_gray_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:gray_dye'
    },
    {
        input: 'atmospheric:scalding_monkey_brush',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'atmospheric:hot_monkey_brush',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:red_dye'
    },
    {
        input: 'atmospheric:warm_monkey_brush',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'atmospheric:water_hyacinth',
        type: 'large',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'atmospheric:yucca_fruit',
        type: 'small',
        primary: 'minecraft:lime_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:brown_dye'
    },
    {
        input: 'atmospheric:roasted_yucca_fruit',
        type: 'small',
        primary: 'minecraft:brown_dye',
        secondary: 'minecraft:brown_dye',
        tertiary: 'minecraft:black_dye'
    },
    {
        input: 'upgrade_aquatic:acan_coral',
        type: 'small',
        primary: 'minecraft:cyan_dye',
        secondary: 'minecraft:cyan_dye',
        tertiary: 'minecraft:cyan_dye'
    },
    {
        input: 'upgrade_aquatic:acan_coral_fan',
        type: 'small',
        primary: 'minecraft:cyan_dye',
        secondary: 'minecraft:cyan_dye',
        tertiary: 'minecraft:cyan_dye'
    },
    {
        input: 'upgrade_aquatic:branch_coral',
        type: 'small',
        primary: 'minecraft:black_dye',
        secondary: 'minecraft:black_dye',
        tertiary: 'minecraft:black_dye'
    },
    {
        input: 'upgrade_aquatic:branch_coral_fan',
        type: 'small',
        primary: 'minecraft:black_dye',
        secondary: 'minecraft:black_dye',
        tertiary: 'minecraft:black_dye'
    },
    {
        input: 'upgrade_aquatic:chrome_coral',
        type: 'small',
        primary: 'minecraft:gray_dye',
        secondary: 'minecraft:gray_dye',
        tertiary: 'minecraft:gray_dye'
    },
    {
        input: 'upgrade_aquatic:chrome_coral_fan',
        type: 'small',
        primary: 'minecraft:gray_dye',
        secondary: 'minecraft:gray_dye',
        tertiary: 'minecraft:gray_dye'
    },
    {
        input: 'upgrade_aquatic:finger_coral',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'upgrade_aquatic:finger_coral_fan',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'upgrade_aquatic:moss_coral',
        type: 'small',
        primary: 'minecraft:green_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'upgrade_aquatic:moss_coral_fan',
        type: 'small',
        primary: 'minecraft:green_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'upgrade_aquatic:petal_coral',
        type: 'small',
        primary: 'minecraft:light_blue_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:light_blue_dye'
    },
    {
        input: 'upgrade_aquatic:petal_coral_fan',
        type: 'small',
        primary: 'minecraft:light_blue_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:light_blue_dye'
    },
    {
        input: 'upgrade_aquatic:pillow_coral',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'upgrade_aquatic:pillow_coral_fan',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'upgrade_aquatic:rock_coral',
        type: 'small',
        primary: 'minecraft:brown_dye',
        secondary: 'minecraft:brown_dye',
        tertiary: 'minecraft:brown_dye'
    },
    {
        input: 'upgrade_aquatic:rock_coral_fan',
        type: 'small',
        primary: 'minecraft:brown_dye',
        secondary: 'minecraft:brown_dye',
        tertiary: 'minecraft:brown_dye'
    },
    {
        input: 'upgrade_aquatic:silk_coral',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'upgrade_aquatic:silk_coral_fan',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'upgrade_aquatic:star_coral',
        type: 'small',
        primary: 'minecraft:lime_dye',
        secondary: 'minecraft:lime_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'upgrade_aquatic:star_coral_fan',
        type: 'small',
        primary: 'minecraft:lime_dye',
        secondary: 'minecraft:lime_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'upgrade_aquatic:flowering_rush',
        type: 'tall',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'upgrade_aquatic:pink_searocket',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'upgrade_aquatic:white_searocket',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:light_gray_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'upgrade_aquatic:blue_pickerelweed',
        type: 'tall',
        primary: 'minecraft:cyan_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'upgrade_aquatic:purple_pickerelweed',
        type: 'tall',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'autumnity:autumn_crocus',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'betterendforge:hydralux_petal',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:brown_dye'
    },
    {
        input: 'byg:oddity_bush',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:light_gray_dye'
    }
];

colors.forEach((color) => {
    var botaniaTypes = ['petal', 'mushroom'];
    botaniaTypes.forEach((type) => {
        dyeSources.push({
            input: 'botania:' + color + '_' + type,
            type: 'petal',
            primary: 'minecraft:' + color + '_dye',
            secondary: 'minecraft:' + color + '_dye',
            tertiary: 'minecraft:' + color + '_dye'
        });
    });
});
