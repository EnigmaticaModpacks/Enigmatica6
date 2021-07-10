onEvent('recipes', (event) => {
    const recipes = [
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
            id: 'aquaculture:tin_can_to_iron_nugget'
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
            id: 'immersiveengineering:ingot_hop_graphite'
        }
    ];

    var stones = [
        'granite',
        'diorite',
        'andesite',
        'limestone',
        'weathered_limestone',
        'dolomite',
        'gabbro',
        'scoria',
        'dark_scoria'
    ];

    stones.forEach((cobblestone) => {
        var stone = 'create:' + cobblestone;
        if (!Item.exists(stone)) {
            stone = 'minecraft:' + cobblestone;
        }
        recipes.push({ input: 'create:' + cobblestone + '_cobblestone', output: stone });
    });

    recipes.forEach((recipe) => {
        const re = event.smelting(recipe.output, recipe.input);

        if (recipe.xp) {
            re.xp(recipe.xp);
        }

        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
