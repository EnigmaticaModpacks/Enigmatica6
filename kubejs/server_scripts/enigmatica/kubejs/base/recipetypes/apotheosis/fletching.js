events.listen('recipes', (event) => {
    var data = {
        recipes: [
            //archer's paradox
            {
                ingredients: [{item: 'minecraft:prismarine_crystals'}, { tag: 'forge:rods/wooden' }, { item: 'minecraft:feather' }],
                result: Item.of('archers_paradox:prismarine_arrow', 6)
            },
            {
                ingredients: [{item: 'minecraft:rabbit_hide'}, { tag: 'forge:rods/wooden' }, { item: 'minecraft:feather' }],
                result: Item.of('archers_paradox:training_arrow', 6)
            },
            {
                ingredients: [{item: 'minecraft:diamond'}, { tag: 'forge:rods/wooden' }, { item: 'minecraft:feather' }],
                result: Item.of('archers_paradox:diamond_arrow', 6)
            },
            {
                ingredients: [{item: 'minecraft:quartz'}, { tag: 'forge:rods/wooden' }, { item: 'minecraft:feather' }],
                result: Item.of('archers_paradox:quartz_arrow', 6)
            },
            {
                ingredients: [{tag: 'forge:slimeballs'}, { tag: 'forge:rods/wooden' }, { item: 'minecraft:feather' }],
                result: Item.of('archers_paradox:slime_arrow', 6)
            },
            {
                ingredients: [{item: 'minecraft:packed_ice'}, { item: 'minecraft:arrow' }, { item: 'minecraft:arrow' }],
                result: Item.of('archers_paradox:frost_arrow', 5)
            },
            {
                ingredients: [{tag: 'minecraft:ender_pearl'}, { item: 'minecraft:arrow' }, { item: 'minecraft:arrow' }],
                result: Item.of('archers_paradox:ender_arrow', 5)
            },
            {
                ingredients: [{item: 'cofh_core:ectoplasm'}, { item: 'minecraft:arrow' }, { item: 'cofh_core:ectoplasm' }],
                result: Item.of('archers_paradox:phantasmal_arrow', 2)
            },
            {
                ingredients: [{item: 'minecraft:redstone'}, { item: 'minecraft:arrow' }, { item: 'minecraft:arrow' }],
                result: Item.of('archers_paradox:redstone_arrow', 5)
            },
            {
                ingredients: [{item: 'minecraft:blaze_powder'}, { item: 'minecraft:arrow' }, { item: 'minecraft:arrow' }],
                result: Item.of('archers_paradox:blaze_arrow', 5)
            },
            {
                ingredients: [{item: 'minecraft:glowstone_dust'}, { item: 'minecraft:arrow' }, { item: 'minecraft:arrow' }],
                result: Item.of('archers_paradox:glowstone_arrow', 5)
            },
            {
                ingredients: [{item: 'minecraft:tnt'}, { item: 'minecraft:arrow' }, { item: 'minecraft:arrow' }],
                result: Item.of('archers_paradox:explosive_arrow', 5)
            },
            {
                ingredients: [{item: 'minecraft:gunpowder'}, { item: 'archers_paradox:ender_arrow' }, { item: 'archers_paradox:ender_arrow' }],
                result: Item.of('archers_paradox:displacement_arrow', 5)
            },
            {
                ingredients: [{item: 'minecraft:nether_star'}, { item: 'minecraft:arrow' }, { item: 'minecraft:arrow' }],
                result: Item.of('archers_paradox:lightning_arrow', 5)
            },
            
            // alex's mobs
            {
                ingredients: [{item: 'alexsmobs:shark_tooth'}, { tag: 'forge:rods/wooden' }, { item: 'minecraft:kelp' }],
                result: Item.of('alexsmobs:shark_tooth_arrow', 5)
            },
            */
        ]
    };
    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'apotheosis:fletching',
            conditions: [{"type": "apotheosis:module", "module": "village"}],
            ingredients: recipe.ingredients,
            result: recipe.result
        });
    });
});
