onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/minecraft/blasting/';
    const recipes = [
        {
            input: 'architects_palette:rotten_flesh_block',
            output: Item.of('9x occultism:tallow'),
            xp: 0.5,
            id: `${id_prefix}tallow_from_flesh`
        },
        {
            input: '#forge:ores/ender',
            output: Item.of('#forge:shards/ender'),
            xp: 0.5,
            id: `${id_prefix}ender_shard`
        },
        {
            input: '#forge:ores/amber',
            output: Item.of('#forge:shards/amber'),
            xp: 0.5,
            id: `${id_prefix}amber_shard`
        },
        {
            input: '#forge:ores/netherite',
            output: Item.of('minecraft:netherite_scrap'),
            xp: 2.0,
            id: `${id_prefix}netherite_scrap`
        },
        {
            input: '#forge:ores/thallasium',
            output: Item.of('#forge:ingots/thallasium'),
            xp: 0.7,
            id: `${id_prefix}thallasium`
        },
        {
            input: '#forge:ores/elementium',
            output: Item.of('#forge:ingots/elementium'),
            xp: 1.0,
            id: `${id_prefix}elementium`
        },
        {
            input: 'farmersdelight:iron_knife',
            output: Item.of('#forge:nuggets/iron'),
            xp: 0.1,
            id: `${id_prefix}iron_nugget_from_iron_knife`
        },
        {
            input: 'farmersdelight:golden_knife',
            output: Item.of('#forge:nuggets/gold'),
            xp: 0.1,
            id: `${id_prefix}gold_nugget_from_gold_knife`
        },
        {
            input: Item.of('dustrial_decor:rusty_iron_ingot'),
            output: Item.of('#forge:ingots/iron'),
            xp: 0.5,
            id: `${id_prefix}iron_ingot_from_rusty_iron_ingot`
        },
        {
            input: Item.of('dustrial_decor:rusty_iron_nugget'),
            output: Item.of('#forge:nuggets/iron'),
            xp: 0.5,
            id: `${id_prefix}iron_nugget_from_rusty_iron_nugget`
        },
        {
            input: '#forge:dusts/netherite',
            output: Item.of('#forge:ingots/netherite'),
            xp: 0.5,
            id: `${id_prefix}netherite`
        },
        {
            input: 'aquaculture:tin_can',
            output: Item.of('emendatusenigmatica:tin_nugget', 7),
            xp: 0.7,
            id: 'aquaculture:tin_can_to_iron_nugget_from_blasting'
        },
        {
            input: '#forge:ores/aquamarine',
            output: Item.of('#forge:gems/aquamarine'),
            xp: 1.0,
            id: `${id_prefix}aquamarine`
        },
        {
            input: '#forge:dusts/hop_graphite',
            output: 'immersiveengineering:ingot_hop_graphite',
            xp: 0.5,
            id: 'immersiveengineering:ingot_hop_graphite_from_blasting'
        },
        {
            input: 'aquaculture:neptunium_helmet',
            output: Item.of('aquaculture:neptunium_nugget', 5),
            xp: 5,
            id: `${id_prefix}neptunium_nugget_from_neptunium_helmet`
        },
        {
            input: 'aquaculture:neptunium_chestplate',
            output: Item.of('aquaculture:neptunium_nugget', 8),
            xp: 8,
            id: `${id_prefix}neptunium_nugget_from_neptunium_chestplate`
        },
        {
            input: 'aquaculture:neptunium_leggings',
            output: Item.of('aquaculture:neptunium_nugget', 7),
            xp: 7,
            id: `${id_prefix}neptunium_nugget_from_neptunium_leggings`
        },
        {
            input: 'aquaculture:neptunium_boots',
            output: Item.of('aquaculture:neptunium_nugget', 4),
            xp: 4,
            id: `${id_prefix}neptunium_nugget_from_neptunium_boots`
        },
        {
            input: 'aquaculture:neptunium_pickaxe',
            output: Item.of('aquaculture:neptunium_nugget', 3),
            xp: 3,
            id: `${id_prefix}neptunium_nugget_from_neptunium_pickaxe`
        },
        {
            input: 'aquaculture:neptunium_axe',
            output: Item.of('aquaculture:neptunium_nugget', 3),
            xp: 3,
            id: `${id_prefix}neptunium_nugget_from_neptunium_axe`
        },
        {
            input: 'aquaculture:neptunium_shovel',
            output: Item.of('aquaculture:neptunium_nugget', 1),
            xp: 1,
            id: `${id_prefix}neptunium_nugget_from_neptunium_shovel`
        },
        {
            input: 'aquaculture:neptunium_sword',
            output: Item.of('aquaculture:neptunium_nugget', 2),
            xp: 2,
            id: `${id_prefix}neptunium_nugget_from_neptunium_sword`
        },
        {
            input: 'aquaculture:neptunium_hoe',
            output: Item.of('aquaculture:neptunium_nugget', 2),
            xp: 2,
            id: `${id_prefix}neptunium_nugget_from_neptunium_hoe`
        },
        {
            input: 'aquaculture:neptunium_fillet_knife',
            output: Item.of('aquaculture:neptunium_nugget', 2),
            xp: 2,
            id: `${id_prefix}neptunium_nugget_from_neptunium_knife`
        },
        {
            input: 'aquaculture:neptunium_fishing_rod',
            output: Item.of('aquaculture:neptunium_nugget', 2),
            xp: 2,
            id: `${id_prefix}neptunium_nugget_from_neptunium_fishing_rod`
        },
        {
            input: 'aquaculture:neptunium_bow',
            output: Item.of('aquaculture:neptunium_nugget', 3),
            xp: 3,
            id: `${id_prefix}neptunium_nugget_from_neptunium_bow`
        },
        {
            input: ['#forge:slag', 'thermal:rich_slag'],
            output: 'thermal:white_rockwool',
            xp: 0.1,
            id: 'thermal:rockwool/white_rockwool_from_blasting'
        },
        {
            input: 'atum:bone_ore',
            output: Item.of('atum:dusty_bone', 2),
            xp: 0.7,
            id: `${id_prefix}atum_bone_ore`
        },
        {
            input: 'atum:khnumite_raw',
            output: Item.of('atum:khnumite', 3),
            xp: 0.7,
            id: `${id_prefix}atum_khnumite_raw`
        },
        {
            input: 'atum:relic_ore',
            output: 'minecraft:gold_ingot',
            xp: 0.7,
            id: `${id_prefix}atum_relic_ore`
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.blasting(recipe.output, recipe.input).id(recipe.id);

        if (recipe.xp) {
            re.xp(recipe.xp);
        }
    });
});
