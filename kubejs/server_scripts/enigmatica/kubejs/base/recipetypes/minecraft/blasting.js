onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'minecraft:rotten_flesh',
            output: 'occultism:tallow',
            xp: 0.5
        },
        {
            input: '#forge:ores/ender',
            output: Item.of('#forge:shards/ender'),
            xp: 0.5
        },
        {
            input: '#forge:ores/amber',
            output: Item.of('#forge:shards/amber'),
            xp: 0.5
        },
        {
            input: '#forge:ores/netherite',
            output: Item.of('minecraft:netherite_scrap'),
            xp: 2.0
        },
        {
            input: '#forge:ores/thallasium',
            output: Item.of('#forge:ingots/thallasium'),
            xp: 0.7
        },
        {
            input: '#forge:ores/elementium',
            output: Item.of('#forge:ingots/elementium'),
            xp: 1.0
        },
        {
            input: 'farmersdelight:iron_knife',
            output: Item.of('#forge:nuggets/iron'),
            xp: 0.1
        },
        {
            input: 'farmersdelight:golden_knife',
            output: Item.of('#forge:nuggets/gold'),
            xp: 0.1
        },
        {
            input: Item.of('dustrial_decor:rusty_iron_ingot'),
            output: Item.of('#forge:ingots/iron')
        },
        {
            input: Item.of('dustrial_decor:rusty_iron_nugget'),
            output: Item.of('#forge:nuggets/iron')
        },
        {
            input: '#forge:dusts/netherite',
            output: Item.of('#forge:ingots/netherite')
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
            xp: 1.0
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
            xp: 5
        },
        {
            input: 'aquaculture:neptunium_chestplate',
            output: Item.of('aquaculture:neptunium_nugget', 8),
            xp: 8
        },
        {
            input: 'aquaculture:neptunium_leggings',
            output: Item.of('aquaculture:neptunium_nugget', 7),
            xp: 7
        },
        {
            input: 'aquaculture:neptunium_boots',
            output: Item.of('aquaculture:neptunium_nugget', 4),
            xp: 4
        },
        {
            input: 'aquaculture:neptunium_pickaxe',
            output: Item.of('aquaculture:neptunium_nugget', 3),
            xp: 3
        },
        {
            input: 'aquaculture:neptunium_axe',
            output: Item.of('aquaculture:neptunium_nugget', 3),
            xp: 3
        },
        {
            input: 'aquaculture:neptunium_shovel',
            output: Item.of('aquaculture:neptunium_nugget', 1),
            xp: 1
        },
        {
            input: 'aquaculture:neptunium_sword',
            output: Item.of('aquaculture:neptunium_nugget', 2),
            xp: 2
        },
        {
            input: 'aquaculture:neptunium_hoe',
            output: Item.of('aquaculture:neptunium_nugget', 2),
            xp: 2
        },
        {
            input: 'aquaculture:neptunium_fillet_knife',
            output: Item.of('aquaculture:neptunium_nugget', 2),
            xp: 2
        },
        {
            input: 'aquaculture:neptunium_fishing_rod',
            output: Item.of('aquaculture:neptunium_nugget', 2),
            xp: 2
        },
        {
            input: 'aquaculture:neptunium_bow',
            output: Item.of('aquaculture:neptunium_nugget', 3),
            xp: 3
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.blasting(recipe.output, recipe.input);

        if (recipe.xp) {
            re.xp(recipe.xp);
        }

        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
