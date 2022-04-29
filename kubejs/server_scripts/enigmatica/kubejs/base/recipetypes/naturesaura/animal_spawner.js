onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/naturesaura/animal_spawner/';
    recipes = [
        {
            inputs: ['naturesaura:birth_spirit', '#forge:gems/mana', 'naturesaura:gold_leaf'],
            entity: 'ars_nouveau:carbuncle',
            aura: 100000,
            time: 100,
            id: `${id_prefix}carbuncle`
        },
        {
            inputs: ['naturesaura:birth_spirit', '#forge:gems/mana', 'naturesaura:ancient_sapling'],
            entity: 'ars_nouveau:sylph',
            aura: 100000,
            time: 100,
            id: `${id_prefix}sylph`
        },
        {
            inputs: ['naturesaura:birth_spirit', '#forge:gems/mana', 'naturesaura:token_joy'],
            entity: 'ars_nouveau:drygmy',
            aura: 100000,
            time: 100,
            id: `${id_prefix}drygmy`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:cod', 'minecraft:iron_bars'],
            entity: 'quark:crab',
            aura: 30000,
            time: 40,
            id: `${id_prefix}crab`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:spider_eye', 'minecraft:lily_pad'],
            entity: 'quark:frog',
            aura: 30000,
            time: 40,
            id: `${id_prefix}frog`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:leather', 'minecraft:coal'],
            entity: 'quark:foxhound',
            aura: 150000,
            time: 120,
            id: `${id_prefix}foxhound`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:coarse_dirt', 'industrialforegoing:fertilizer'],
            entity: 'alexsmobs:cockroach',
            aura: 30000,
            time: 40,
            id: `${id_prefix}cockroach`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:coarse_dirt', 'minecraft:brown_mushroom'],
            entity: 'alexsmobs:cockroach',
            aura: 150000,
            time: 120,
            id: `${id_prefix}cockroach_2`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                Item.of('resourcefulbees:bee_jar', {
                    Entity: 'resourcefulbees:iron_bee',
                    BeeType: 'iron',
                    Color: '#ffcc99'
                }).weakNBT(),
                'resourcefulbees:iron_honeycomb',
                'naturesaura:infused_iron_block'
            ],
            entity: 'resourcefulbees:infused_bee',
            aura: 400000,
            time: 320,
            id: `${id_prefix}infused_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                Item.of('resourcefulbees:bee_jar', {
                    Entity: 'resourcefulbees:gold_bee',
                    BeeType: 'gold',
                    Color: '#ffdc00'
                }).weakNBT(),
                'resourcefulbees:gold_honeycomb',
                'naturesaura:tainted_gold_block'
            ],
            entity: 'resourcefulbees:tainted_bee',
            aura: 500000,
            time: 400,
            id: `${id_prefix}tainted_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                Item.of('resourcefulbees:bee_jar', {
                    Entity: 'resourcefulbees:gold_bee',
                    BeeType: 'gold',
                    Color: '#ffdc00'
                }).weakNBT(),
                'resourcefulbees:tainted_honeycomb',
                'naturesaura:sky_ingot'
            ],
            entity: 'resourcefulbees:sky_bee',
            aura: 600000,
            time: 480,
            id: `${id_prefix}sky_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'farmersdelight:cabbage_leaf',
                'simplefarming:lettuce',
                'minecraft:carrot'
            ],
            entity: 'minecraft:rabbit',
            aura: 30000,
            time: 40,
            id: 'naturesaura:animal_spawner/rabbit'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'astralsorcery:nocturnal_powder'],
            entity: 'minecraft:phantom',
            aura: 200000,
            time: 200,
            id: 'naturesaura:animal_spawner/phantom'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:feather', 'minecraft:jungle_sapling'],
            entity: 'minecraft:parrot',
            aura: 50000,
            time: 60,
            id: 'naturesaura:animal_spawner/parrot'
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'undergarden:gloom_o_lantern',
                'undergarden:inky_stew',
                'eidolon:fungus_sprouts'
            ],
            entity: 'alexsmobs:mungus',
            aura: 150000,
            time: 120,
            id: `${id_prefix}mungus`
        },
        {
            inputs: ['naturesaura:birth_spirit', '#aquaculture:turtle', 'minecraft:seagrass'],
            entity: 'minecraft:turtle',
            aura: 50000,
            time: 60,
            id: 'naturesaura:animal_spawner/turtle'
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:brown_wool', 'minecraft:wheat'],
            entity: 'environmental:yak',
            aura: 50000,
            time: 60,
            id: `${id_prefix}yak`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'environmental:slabfish_effigy',
                'minecraft:tropical_fish',
                'upgrade_aquatic:luminous_prismarine_vertical_slab'
            ],
            entity: 'environmental:slabfish',
            aura: 50000,
            time: 60,
            id: `${id_prefix}slabfish`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:apple', 'minecraft:allium', 'minecraft:sweet_berries'],
            entity: 'environmental:deer',
            aura: 50000,
            time: 60,
            id: `${id_prefix}deer`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'minecraft:seagrass', 'minecraft:egg', 'minecraft:wheat_seeds'],
            entity: 'environmental:duck',
            aura: 50000,
            time: 60,
            id: `${id_prefix}duck`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                Item.of('thermal:satchel').ignoreNBT(),
                ['minecraft:grass', 'minecraft:dead_bush'],
                'minecraft:rabbit_foot'
            ],
            entity: 'alexsmobs:kangaroo',
            aura: 50000,
            time: 60,
            id: `${id_prefix}kangaroo`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                'astralsorcery:nocturnal_powder',
                'minecraft:prismarine_crystals',
                'upgrade_aquatic:glow_squid_bucket'
            ],
            entity: 'upgrade_aquatic:thrasher',
            aura: 100000,
            time: 120,
            id: `${id_prefix}thrasher`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/iron',
                'architects_palette:rotten_flesh_block'
            ],
            entity: 'resourcefulbees:zombie_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}zombie_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/tinkers_bronze',
                'minecraft:dark_prismarine'
            ],
            entity: 'resourcefulbees:water_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}water_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/slimesteel',
                'minecraft:slime_block'
            ],
            entity: 'resourcefulbees:slimy_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}slimy_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/tin',
                'minecraft:bone_block'
            ],
            entity: 'resourcefulbees:skeleton_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}skeleton_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/zinc',
                'minecraft:sandstone'
            ],
            entity: 'resourcefulbees:sand_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}sand_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/nickel',
                'minecraft:andesite'
            ],
            entity: 'resourcefulbees:rocky_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}rocky_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/gold',
                '#forge:dyes'
            ],
            entity: 'resourcefulbees:rgbee_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}rgbee_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/osmium',
                'minecraft:blue_ice'
            ],
            entity: 'resourcefulbees:icy_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}icy_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/steel',
                'minecraft:coal_block'
            ],
            entity: 'resourcefulbees:coal_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}coal_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/uranium',
                'thermal:gunpowder_block'
            ],
            entity: 'resourcefulbees:creeper_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}creeper_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/copper',
                'minecraft:oak_wood'
            ],
            entity: 'resourcefulbees:forest_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}forest_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/aeternium',
                'minecraft:obsidian'
            ],
            entity: 'resourcefulbees:obsidian_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}obsidian_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/aeternium',
                'architects_palette:ender_pearl_block'
            ],
            entity: 'resourcefulbees:ender_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}ender_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/netherite',
                'minecraft:glowstone'
            ],
            entity: 'resourcefulbees:glowstone_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}glowstone_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/netherite',
                'architects_palette:rotten_flesh_block'
            ],
            entity: 'resourcefulbees:pigman_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}pigman_bee`
        },
        {
            inputs: [
                'naturesaura:birth_spirit',
                '#resourcefulbees:resourceful_honeycomb',
                '#forge:ingots/cloggrum',
                'undergarden:catalyst'
            ],
            entity: 'resourcefulbees:clogged_bee',
            aura: 50000,
            time: 60,
            id: `${id_prefix}clogged_bee`
        },
        {
            inputs: ['naturesaura:birth_spirit', 'alexsmobs:maggot', 'farmersdelight:organic_compost'],
            entity: 'alexsmobs:fly',
            aura: 50000,
            time: 60,
            id: `${id_prefix}fly`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
