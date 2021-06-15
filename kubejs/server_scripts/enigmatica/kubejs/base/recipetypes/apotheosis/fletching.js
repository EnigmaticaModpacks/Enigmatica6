onEvent('recipes', (event) => {
    const recipes = [
        {
            ingredients: [
                { item: 'minecraft:prismarine_crystals' },
                { tag: 'forge:rods/wooden' },
                { item: 'minecraft:feather' }
            ],
            result: Item.of('archers_paradox:prismarine_arrow', 6)
        },
        {
            ingredients: [
                { item: 'minecraft:rabbit_hide' },
                { tag: 'forge:rods/wooden' },
                { item: 'minecraft:feather' }
            ],
            result: Item.of('archers_paradox:training_arrow', 6)
        },
        {
            ingredients: [{ item: 'minecraft:diamond' }, { tag: 'forge:rods/wooden' }, { item: 'minecraft:feather' }],
            result: Item.of('archers_paradox:diamond_arrow', 6)
        },
        {
            ingredients: [{ item: 'minecraft:quartz' }, { tag: 'forge:rods/wooden' }, { item: 'minecraft:feather' }],
            result: Item.of('archers_paradox:quartz_arrow', 6)
        },
        {
            ingredients: [{ tag: 'forge:slimeballs' }, { tag: 'forge:rods/wooden' }, { item: 'minecraft:feather' }],
            result: Item.of('archers_paradox:slime_arrow', 6)
        },
        {
            ingredients: [
                { item: 'minecraft:packed_ice' },
                { tag: 'forge:rods/wooden' },
                { item: 'minecraft:feather' }
            ],
            result: Item.of('archers_paradox:frost_arrow', 6)
        },
        {
            ingredients: [
                { item: 'minecraft:ender_pearl' },
                { tag: 'forge:rods/wooden' },
                { item: 'minecraft:feather' }
            ],
            result: Item.of('archers_paradox:ender_arrow', 6)
        },
        {
            ingredients: [{ item: 'cofh_core:ectoplasm' }, { tag: 'forge:rods/wooden' }, { item: 'minecraft:feather' }],
            result: Item.of('archers_paradox:phantasmal_arrow', 1)
        },
        {
            ingredients: [{ item: 'minecraft:redstone' }, { tag: 'forge:rods/wooden' }, { item: 'minecraft:feather' }],
            result: Item.of('archers_paradox:redstone_arrow', 6)
        },
        {
            ingredients: [
                { item: 'minecraft:blaze_powder' },
                { tag: 'forge:rods/wooden' },
                { item: 'minecraft:feather' }
            ],
            result: Item.of('archers_paradox:blaze_arrow', 6)
        },
        {
            ingredients: [
                { item: 'minecraft:glowstone_dust' },
                { tag: 'forge:rods/wooden' },
                { item: 'minecraft:feather' }
            ],
            result: Item.of('archers_paradox:glowstone_arrow', 6)
        },
        {
            ingredients: [{ item: 'minecraft:tnt' }, { tag: 'forge:rods/wooden' }, { item: 'minecraft:feather' }],
            result: Item.of('archers_paradox:explosive_arrow', 6)
        },
        {
            ingredients: [{ item: 'minecraft:ender_eye' }, { tag: 'forge:rods/wooden' }, { item: 'minecraft:feather' }],
            result: Item.of('archers_paradox:displacement_arrow', 6)
        },
        {
            ingredients: [
                { item: 'minecraft:ender_pearl' },
                { tag: 'forge:rods/wooden' },
                { item: 'minecraft:feather' }
            ],
            result: Item.of('archers_paradox:ender_arrow', 6)
        },
        {
            ingredients: [
                { item: 'minecraft:nether_star' },
                { tag: 'forge:rods/wooden' },
                { item: 'minecraft:feather' }
            ],
            result: Item.of('archers_paradox:lightning_arrow', 6)
        },
        {
            ingredients: [
                { item: 'minecraft:experience_bottle' },
                { tag: 'forge:rods/wooden' },
                { item: 'minecraft:feather' }
            ],
            result: Item.of('archers_paradox:challenge_arrow', 4)
        },
        {
            ingredients: [
                { item: 'minecraft:shulker_shell' },
                { tag: 'forge:rods/wooden' },
                { item: 'minecraft:feather' }
            ],
            result: Item.of('archers_paradox:shulker_arrow', 4)
        },
        {
            ingredients: [{ item: 'minecraft:mycelium' }, { tag: 'forge:rods/wooden' }, { item: 'minecraft:feather' }],
            result: Item.of('archers_paradox:spore_arrow', 4)
        },
        {
            ingredients: [
                { tag: 'minecraft:small_flowers' },
                { tag: 'forge:rods/wooden' },
                { item: 'minecraft:feather' }
            ],
            result: Item.of('archers_paradox:verdant_arrow', 4)
        },
        {
            ingredients: [{ item: 'alexsmobs:shark_tooth' }, { tag: 'forge:rods/wooden' }, { item: 'minecraft:kelp' }],
            result: Item.of('alexsmobs:shark_tooth_arrow', 8)
        }
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'apotheosis:fletching',
            conditions: [{ type: 'apotheosis:module', module: 'village' }],
            ingredients: recipe.ingredients,
            result: recipe.result
        });
    });
});
