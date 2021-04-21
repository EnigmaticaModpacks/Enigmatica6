events.listen('recipes', (event) => {
    /// These Recipes don't reload properly in game. Do a full restart when modifying anything.
    var substrates = {
        basic: [{ item: 'minecraft:dirt' }, { item: 'minecraft:gravel' }, { item: 'minecraft:sand' }],
        rocky: [{ item: 'minecraft:stone' }, { tag: 'forge:stones/basalt' }],
        frozen: [{ item: 'quark:permafrost' }, { item: 'minecraft:snow_block' }, { tag: 'forge:ices' }],
        arid: [{ item: 'minecraft:sandstone' }, { item: 'minecraft:sand' }],
        hellish: [{ item: 'minecraft:netherrack' }, { tag: 'forge:stones/basalt' }],
        mushroom: [{ item: 'minecraft:mycelium' }],
        clay: [{ item: 'minecraft:clay' }],
        alien: [{ item: 'minecraft:end_stone' }],
        soul: [{ item: 'minecraft:soul_sand' }],
        undergarden: [
            { item: 'undergarden:depthrock' },
            { item: 'undergarden:shiverstone' },
            { item: 'undergarden:tremblecrust' }
        ]
    };
    var powerMultiplier = 1;
    var sizes = {
        tiny: { power: 100, living: 10, substrate: 0.2 },
        small: { power: 500, living: 20, substrate: 0.5 },
        medium: { power: 800, living: 30, substrate: 0.7 },
        large: { power: 1200, living: 50, substrate: 0.9 },
        enormous: { power: 2000, living: 90, substrate: 1.0 }
    };

    var data = {
        recipes: [
            {
                entity: 'minecraft:bat',
                size: sizes.tiny,
                special: { tag: 'forge:feathers' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:fox',
                size: sizes.small,
                special: { tag: 'forge:bones' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:chicken',
                size: sizes.small,
                special: { tag: 'forge:feathers' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:rabbit',
                size: sizes.tiny,
                special: { item: 'minecraft:rabbit_stew' },
                base: substrates.arid
            },
            {
                entity: 'minecraft:sheep',
                size: sizes.medium,
                special: { tag: 'forge:wool' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:pig',
                size: sizes.medium,
                special: { tag: 'forge:leather' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:cow',
                size: sizes.large,
                special: { tag: 'forge:leather' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:mooshroom',
                size: sizes.large,
                special: { tag: 'forge:leather' },
                base: substrates.mushroom
            },
            {
                entity: 'minecraft:horse',
                size: sizes.large,
                special: { tag: 'forge:leather' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:zombie_horse',
                size: sizes.large,
                special: { item: 'minecraft:rotten_flesh' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:skeleton_horse',
                size: sizes.large,
                special: { tag: 'forge:bones' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:mule',
                size: sizes.medium,
                special: { tag: 'forge:leather' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:donkey',
                size: sizes.medium,
                special: { tag: 'forge:leather' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:llama',
                size: sizes.medium,
                special: { tag: 'forge:leather' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:trader_llama',
                size: sizes.medium,
                special: { tag: 'forge:leather' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:cat',
                size: sizes.small,
                special: { tag: 'minecraft:fishes' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:ocelot',
                size: sizes.small,
                special: { tag: 'minecraft:fishes' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:bee',
                size: sizes.small,
                special: { item: 'minecraft:honey_block' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:parrot',
                size: sizes.tiny,
                special: { tag: 'forge:feathers' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:wolf',
                size: sizes.medium,
                special: { tag: 'forge:bones' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:panda',
                size: sizes.medium,
                special: { item: 'minecraft:bamboo' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:polar_bear',
                size: sizes.large,
                special: { tag: 'minecraft:fishes' },
                base: substrates.frozen
            },
            {
                entity: 'minecraft:snow_golem',
                size: sizes.medium,
                special: { item: 'minecraft:snowball' },
                base: substrates.frozen
            },
            {
                entity: 'minecraft:squid',
                size: sizes.small,
                special: { item: 'minecraft:ink_sac' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:turtle',
                size: sizes.large,
                special: { item: 'minecraft:seagrass' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:dolphin',
                size: sizes.large,
                special: { tag: 'minecraft:fishes' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:guardian',
                size: sizes.large,
                special: { item: 'minecraft:prismarine_shard' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:elder_guardian',
                size: sizes.enormous,
                special: { item: 'minecraft:wet_sponge' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:hoglin',
                size: sizes.large,
                special: { tag: 'forge:leather' },
                base: substrates.hellish
            },
            {
                entity: 'minecraft:zoglin',
                size: sizes.large,
                special: { tag: 'forge:leather' },
                base: substrates.hellish
            },
            {
                entity: 'minecraft:skeleton',
                size: sizes.medium,
                special: { tag: 'forge:bones' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:stray',
                size: sizes.medium,
                special: { tag: 'forge:bones' },
                base: substrates.frozen
            },
            {
                entity: 'minecraft:wither_skeleton',
                size: sizes.medium,
                special: { tag: 'forge:bones' },
                base: substrates.hellish
            },
            {
                entity: 'minecraft:zombie',
                size: sizes.medium,
                special: { item: 'minecraft:rotten_flesh' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:drowned',
                size: sizes.medium,
                special: { item: 'minecraft:rotten_flesh' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:zombie_villager',
                size: sizes.medium,
                special: { item: 'minecraft:golden_apple' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:husk',
                size: sizes.medium,
                special: { item: 'minecraft:rotten_flesh' },
                base: substrates.arid
            },
            {
                entity: 'minecraft:piglin',
                size: sizes.medium,
                special: { tag: 'forge:nuggets/gold' },
                base: substrates.hellish
            },
            {
                entity: 'minecraft:piglin_brute',
                size: sizes.large,
                special: { tag: 'forge:nuggets/gold' },
                base: substrates.hellish
            },
            {
                entity: 'minecraft:zombified_piglin',
                size: sizes.medium,
                special: { tag: 'forge:nuggets/gold' },
                base: substrates.hellish
            },
            {
                entity: 'minecraft:wandering_trader',
                size: sizes.medium,
                special: { tag: 'forge:bookshelves' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:villager',
                size: sizes.medium,
                special: { item: 'minecraft:book' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:pillager',
                size: sizes.medium,
                special: { tag: 'forge:gems/emerald' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:witch',
                size: sizes.medium,
                special: { tag: 'forge:dusts/glowstone' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:vindicator',
                size: sizes.medium,
                special: { tag: 'forge:gems/emerald' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:illusioner',
                size: sizes.medium,
                special: { tag: 'forge:gems/emerald' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:evoker',
                size: sizes.medium,
                special: { tag: 'forge:gems/emerald' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:ravager',
                size: sizes.enormous,
                special: { item: 'minecraft:saddle' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:vex',
                size: sizes.tiny,
                special: { item: 'minecraft:iron_sword' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:slime',
                size: sizes.medium,
                special: { tag: 'forge:slimeballs' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:magma_cube',
                size: sizes.medium,
                special: { item: 'minecraft:magma_cream' },
                base: substrates.hellish
            },
            {
                entity: 'minecraft:phantom',
                size: sizes.medium,
                special: { item: 'minecraft:phantom_membrane' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:spider',
                size: sizes.medium,
                special: { tag: 'forge:string' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:cave_spider',
                size: sizes.medium,
                special: { tag: 'forge:string' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:strider',
                size: sizes.medium,
                special: { tag: 'forge:string' },
                base: substrates.hellish
            },
            {
                entity: 'minecraft:ghast',
                size: sizes.enormous,
                special: { item: 'minecraft:ghast_tear' },
                base: substrates.hellish
            },
            {
                entity: 'minecraft:creeper',
                size: sizes.medium,
                special: { tag: 'forge:gunpowder' },
                base: substrates.basic
            },
            {
                entity: 'minecraft:shulker',
                size: sizes.medium,
                special: { item: 'minecraft:shulker_shell' },
                base: substrates.alien
            },
            {
                entity: 'minecraft:enderman',
                size: sizes.large,
                special: { tag: 'forge:ender_pearls' },
                base: substrates.alien
            },
            {
                entity: 'minecraft:blaze',
                size: sizes.medium,
                special: { tag: 'forge:rods/blaze' },
                base: substrates.hellish
            },

            /// Thermal
            {
                entity: 'thermal:basalz',
                size: sizes.medium,
                special: { item: 'thermal:basalz_rod' },
                base: substrates.rocky
            },
            {
                entity: 'thermal:blizz',
                size: sizes.medium,
                special: { item: 'thermal:blizz_rod' },
                base: substrates.frozen
            },
            {
                entity: 'thermal:blitz',
                size: sizes.medium,
                special: { item: 'thermal:blizz_rod' },
                base: substrates.arid
            },

            /// Ars Nouveau
            {
                entity: 'ars_nouveau:sylph',
                size: sizes.small,
                special: { tag: 'forge:logs/archwood' },
                base: substrates.basic
            },
            {
                entity: 'ars_nouveau:carbuncle',
                size: sizes.small,
                special: { tag: 'forge:nuggets/gold' },
                base: substrates.basic
            },

            /// UnderGarden
            {
                entity: 'undergarden:dweller',
                size: sizes.medium,
                special: { tag: 'forge:leather' },
                base: substrates.undergarden
            },
            {
                entity: 'undergarden:rotdweller',
                size: sizes.medium,
                special: { tag: 'forge:leather' },
                base: substrates.undergarden
            },
            {
                entity: 'undergarden:stoneborn',
                size: sizes.medium,
                special: { item: 'undergarden:depthrock_pebble' },
                base: substrates.undergarden
            },
            {
                entity: 'undergarden:rotwalker',
                size: sizes.medium,
                special: { item: 'undergarden:utheric_shard' },
                base: substrates.undergarden
            },
            {
                entity: 'undergarden:gloomper',
                size: sizes.medium,
                special: { item: 'undergarden:raw_gloomper_leg' },
                base: substrates.undergarden
            },
            {
                entity: 'undergarden:rotling',
                size: sizes.small,
                special: { item: 'undergarden:utheric_shard' },
                base: substrates.undergarden
            },
            {
                entity: 'undergarden:rotbeast',
                size: sizes.large,
                special: { item: 'undergarden:utheric_shard' },
                base: substrates.undergarden
            },
            {
                entity: 'undergarden:brute',
                size: sizes.large,
                special: { item: 'undergarden:brute_tusk' },
                base: substrates.undergarden
            },
            {
                entity: 'undergarden:scintling',
                size: sizes.small,
                special: { item: 'undergarden:goo_ball' },
                base: substrates.undergarden
            },

            /// Quark
            {
                entity: 'quark:frog',
                size: sizes.small,
                special: { item: 'quark:frog_leg' },
                base: substrates.basic
            },
            {
                entity: 'quark:crab',
                size: sizes.small,
                special: { item: 'quark:crab_leg' },
                base: substrates.basic
            },
            {
                entity: 'quark:toretoise',
                size: sizes.large,
                special: { item: 'minecraft:cactus' },
                base: substrates.basic
            },
            {
                entity: 'quark:foxhound',
                size: sizes.small,
                special: { item: 'minecraft:coal' },
                base: substrates.hellish
            },
            {
                entity: 'quark:wrapped',
                size: sizes.medium,
                special: { item: 'minecraft:rotten_flesh' },
                base: substrates.arid
            },

            /// Eidolon
            {
                entity: 'eidolon:zombie_brute',
                size: sizes.large,
                special: { item: 'minecraft:rotten_flesh' },
                base: substrates.basic
            },
            {
                entity: 'eidolon:wraith',
                size: sizes.medium,
                special: { item: 'eidolon:tattered_cloth' },
                base: substrates.basic
            },

            /// Better End Forge
            {
                entity: 'betterendforge:cubozoa',
                size: sizes.small,
                special: { item: 'betterendforge:gelatine' },
                base: substrates.alien
            },
            {
                entity: 'betterendforge:end_slime',
                size: sizes.medium,
                special: { tag: 'forge:slimeballs' },
                base: substrates.alien
            },
            {
                entity: 'betterendforge:silk_moth',
                size: sizes.small,
                special: { item: 'betterendforge:silk_fiber' },
                base: substrates.alien
            },

            /// Autumnity
            {
                entity: 'autumnity:turkey',
                size: sizes.medium,
                special: { item: 'minecraft:feather' },
                base: substrates.basic
            },
            {
                entity: 'autumnity:snail',
                size: sizes.small,
                special: { item: 'autumnity:snail_slime' },
                base: substrates.basic
            },

            /// Upgrade Aquatic
            {
                entity: 'upgrade_aquatic:flare',
                size: sizes.medium,
                special: { item: 'minecraft:phantom_membrane' },
                base: substrates.basic
            },
            {
                entity: 'upgrade_aquatic:glow_squid',
                size: sizes.small,
                special: { item: 'upgrade_aquatic:glowing_ink_sac' },
                base: substrates.basic
            },
            {
                entity: 'upgrade_aquatic:goose',
                size: sizes.small,
                special: { item: 'minecraft:feather' },
                base: substrates.basic
            },
            {
                entity: 'upgrade_aquatic:thrasher',
                size: sizes.large,
                special: { item: 'upgrade_aquatic:thrasher_tooth' },
                base: substrates.basic
            },
            {
                entity: 'upgrade_aquatic:great_thrasher',
                size: sizes.enormous,
                special: { item: 'upgrade_aquatic:thrasher_tooth' },
                base: substrates.basic
            },

            /// Alex's Mobs
            {
                entity: 'alexsmobs:alligator_snapping_turtle',
                size: sizes.large,
                special: { item: 'minecraft:seagrass' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:bone_serpent',
                size: sizes.enormous,
                special: { item: 'minecraft:bone' },
                base: substrates.hellish
            },

            {
                entity: 'alexsmobs:capuchin_monkey',
                size: sizes.medium,
                special: { item: 'alexsmobs:banana' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:centipede',
                size: sizes.enormous,
                special: { item: 'alexsmobs:centipede_leg' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:cockroach',
                size: sizes.tiny,
                special: { item: 'alexsmobs:cockroach_wing_fragment' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:crimson_mosquito',
                size: sizes.large,
                special: { item: 'alexsmobs:mosquito_proboscis' },
                base: substrates.hellish
            },
            {
                entity: 'alexsmobs:crocodile',
                size: sizes.large,
                special: { item: 'minecraft:rotten_flesh' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:crow',
                size: sizes.tiny,
                special: { item: 'minecraft:feather' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:dropbear',
                size: sizes.medium,
                special: { item: 'alexsmobs:dropbear_claw' },
                base: substrates.hellish
            },
            {
                entity: 'alexsmobs:elephant',
                size: sizes.enormous,
                special: { item: 'alexsmobs:acacia_blossom' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:emu',
                size: sizes.medium,
                special: { item: 'alexsmobs:emu_feather' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:endergrade',
                size: sizes.large,
                special: { item: 'minecraft:chorus_fruit' },
                base: substrates.alien
            },
            {
                entity: 'alexsmobs:fly',
                size: sizes.small,
                special: { item: 'alexsmobs:maggot' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:gazelle',
                size: sizes.medium,
                special: { item: 'alexsmobs:gazelle_horn' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:gorilla',
                size: sizes.large,
                special: { item: 'alexsmobs:banana' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:grizzly_bear',
                size: sizes.large,
                special: { item: 'alexsmobs:bear_fur' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:guster',
                size: sizes.medium,
                special: { item: 'alexsmobs:guster_eye' },
                base: substrates.arid
            },
            {
                entity: 'alexsmobs:hammerhead_shark',
                size: sizes.large,
                special: { tag: 'minecraft:fishes' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:hummingbird',
                size: sizes.tiny,
                special: { item: 'minecraft:feather' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:kangaroo',
                size: sizes.medium,
                special: { item: 'alexsmobs:kangaroo_hide' },
                base: substrates.arid
            },
            {
                entity: 'alexsmobs:komodo_dragon',
                size: sizes.medium,
                special: { item: 'minecraft:rotten_flesh' },
                base: substrates.arid
            },
            {
                entity: 'alexsmobs:lobster',
                size: sizes.small,
                special: { item: 'alexsmobs:lobster_tail' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:mantis_shrimp',
                size: sizes.small,
                special: { tag: 'minecraft:fishes' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:moose',
                size: sizes.large,
                special: { item: 'alexsmobs:moose_ribs' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:mungus',
                size: sizes.small,
                special: { item: 'minecraft:mushroom_stew' },
                base: substrates.mushroom
            },
            {
                entity: 'alexsmobs:orca',
                size: sizes.large,
                special: { tag: 'minecraft:fishes' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:platypus',
                size: sizes.small,
                special: { item: 'alexsmobs:lobster_tail' },
                base: substrates.clay
            },
            {
                entity: 'alexsmobs:raccoon',
                size: sizes.small,
                special: { item: 'alexsmobs:raccoon_tail' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:rattlesnake',
                size: sizes.small,
                special: { item: 'alexsmobs:rattlesnake_rattle' },
                base: substrates.arid
            },
            {
                entity: 'alexsmobs:roadrunner',
                size: sizes.small,
                special: { item: 'alexsmobs:roadrunner_feather' },
                base: substrates.arid
            },
            {
                entity: 'alexsmobs:seal',
                size: sizes.medium,
                special: { tag: 'minecraft:fishes' },
                base: substrates.frozen
            },
            {
                entity: 'alexsmobs:shoebill',
                size: sizes.medium,
                special: { item: 'minecraft:feather' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:snow_leopard',
                size: sizes.medium,
                special: { item: 'alexsmobs:moose_ribs' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:soul_vulture',
                size: sizes.medium,
                special: { tag: 'forge:bones' },
                base: substrates.soul
            },
            {
                entity: 'alexsmobs:straddler',
                size: sizes.large,
                special: { item: 'alexsmobs:straddlite' },
                base: substrates.rocky
            },
            {
                entity: 'alexsmobs:sunbird',
                size: sizes.large,
                special: { item: 'minecraft:blaze_powder' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:tasmanian_devil',
                size: sizes.medium,
                special: { item: 'minecraft:rotten_flesh' },
                base: substrates.basic
            },
            {
                entity: 'alexsmobs:warped_mosco',
                size: sizes.large,
                special: { item: 'alexsmobs:warped_muscle' },
                base: substrates.hellish
            },
            {
                entity: 'alexsmobs:warped_toad',
                size: sizes.medium,
                special: { item: 'minecraft:warped_fungus' },
                base: substrates.hellish
            },
            {
                entity: 'ars_nouveau:wilden_guardian',
                size: sizes.large,
                special: { item: 'ars_nouveau:wilden_spike' },
                base: substrates.frozen
            },
            {
                entity: 'ars_nouveau:wilden_stalker',
                size: sizes.medium,
                special: { item: 'ars_nouveau:wilden_wing' },
                base: substrates.basic
            },
            {
                entity: 'ars_nouveau:wilden_hunter',
                size: sizes.medium,
                special: { item: 'ars_nouveau:wilden_horn' },
                base: substrates.basic
            }
        ]
    };

    var exceptions = {
        recipes: [
            /// Exceptions
            {
                entity: 'minecraft:iron_golem',
                power: 20000,
                item1: { amount: 0.1, ingredient: { tag: 'forge:ingots/iron' } },
                item2: { amount: 1.0, ingredient: substrates.clay },
                item3: { amount: 0.5, ingredient: { tag: 'minecraft:flowers' } }
            },
            {
                entity: 'minecraft:wither',
                power: 200000,
                item1: { amount: 0.1, ingredient: { item: 'minecraft:nether_star' } },
                item2: { amount: 0.5, ingredient: substrates.soul },
                item3: { amount: 100.0, living: true }
            },
            {
                entity: 'minecraft:ender_dragon',
                power: 1000000,
                item1: { amount: 0.1, ingredient: { item: 'minecraft:end_crystal' } },
                item2: { amount: 100.0, ingredient: substrates.alien },
                item3: { amount: 200.0, living: true }
            }
        ]
    };

    var fishList = [
        'minecraft:cod',
        'minecraft:pufferfish',
        'minecraft:salmon',
        'minecraft:tropical_fish',
        'aquaculture:tuna',
        'aquaculture:jellyfish',
        'aquaculture:bluegill',
        'aquaculture:muskellunge',
        'aquaculture:catfish',
        'aquaculture:brown_shrooma',
        'aquaculture:tambaqui',
        'aquaculture:pacific_halibut',
        'aquaculture:rainbow_trout',
        'aquaculture:boulti',
        'aquaculture:starshell_turtle',
        'aquaculture:gar',
        'aquaculture:perch',
        'aquaculture:capitaine',
        'aquaculture:arrau_turtle',
        'aquaculture:atlantic_halibut',
        'aquaculture:piranha',
        'aquaculture:blackfish',
        'aquaculture:red_grouper',
        'aquaculture:arapaima',
        'aquaculture:box_turtle',
        'aquaculture:atlantic_herring',
        'aquaculture:bayad',
        'aquaculture:pollock',
        'aquaculture:carp',
        'aquaculture:red_shrooma',
        'aquaculture:atlantic_cod',
        'aquaculture:pink_salmon',
        'aquaculture:synodontis',
        'aquaculture:brown_trout',
        'aquaculture:smallmouth_bass',
        'aquaculture:minnow',
        'undergarden:gwibling',
        'alexsmobs:blobfish',
        'betterendforge:end_fish',
        'upgrade_aquatic:lionfish',
        'upgrade_aquatic:nautilus',
        'upgrade_aquatic:perch',
        'upgrade_aquatic:pike'
    ];

    fishList.forEach((fish) => {
        data.recipes.push({
            entity: fish,
            size: sizes.tiny,
            special: { tag: 'minecraft:fishes' },
            base: substrates.basic
        });
    });

    data.recipes.forEach((recipe) => {
        let id = `rftoolsutility:${recipe.entity.replace(':', '_')}`;
        event
            .custom({
                type: 'rftoolsutility:spawner',
                id: id,
                power: recipe.size.power * powerMultiplier,
                entity: recipe.entity,
                item1: { amount: 0.1, ingredient: recipe.special },
                item2: { amount: recipe.size.substrate, ingredient: recipe.base },
                item3: { amount: recipe.size.living, living: true }
            })
            .id(id);
    });

    exceptions.recipes.forEach((recipe) => {
        let id = `rftoolsutility:${recipe.entity.replace(':', '_')}`;
        event
            .custom({
                type: 'rftoolsutility:spawner',
                id: id,
                power: recipe.power * powerMultiplier,
                entity: recipe.entity,
                item1: recipe.item1,
                item2: recipe.item2,
                item3: recipe.item3
            })
            .id(id);
    });
});
