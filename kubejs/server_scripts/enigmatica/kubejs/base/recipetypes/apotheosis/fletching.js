onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/apotheosis/fletching/';
    const recipes = [
        {
            inputs: ['minecraft:prismarine_crystals', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:prismarine_arrow', 6),
            id: `${id_prefix}prismarine_arrow`
        },
        {
            inputs: ['minecraft:rabbit_hide', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:training_arrow', 6),
            id: `${id_prefix}training_arrow`
        },
        {
            inputs: ['minecraft:diamond', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:diamond_arrow', 6),
            id: `${id_prefix}diamond_arrow`
        },
        {
            inputs: ['minecraft:quartz', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:quartz_arrow', 6),
            id: `${id_prefix}quartz_arrow`
        },
        {
            inputs: ['#forge:slimeballs', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:slime_arrow', 6),
            id: `${id_prefix}slime_arrow`
        },
        {
            inputs: ['minecraft:packed_ice', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:frost_arrow', 6),
            id: `${id_prefix}frost_arrow`
        },
        {
            inputs: ['minecraft:ender_pearl', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:ender_arrow', 6),
            id: `${id_prefix}ender_arrow`
        },
        {
            inputs: ['cofh_core:ectoplasm', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:phantasmal_arrow', 1),
            id: `${id_prefix}phantasmal_arrow`
        },
        {
            inputs: ['minecraft:redstone', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:redstone_arrow', 6),
            id: `${id_prefix}redstone_arrow`
        },
        {
            inputs: ['minecraft:blaze_powder', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:blaze_arrow', 6),
            id: `${id_prefix}blaze_arrow`
        },
        {
            inputs: ['minecraft:glowstone_dust', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:glowstone_arrow', 6),
            id: `${id_prefix}glowstone_arrow`
        },
        {
            inputs: ['minecraft:tnt', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:explosive_arrow', 6),
            id: `${id_prefix}explosive_arrow`
        },
        {
            inputs: ['minecraft:ender_eye', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:displacement_arrow', 6),
            id: `${id_prefix}displacement_arrow`
        },
        {
            inputs: ['minecraft:ender_pearl', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:ender_arrow', 6),
            id: `${id_prefix}ender_arrow`
        },
        {
            inputs: ['thermal:lightning_charge', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:lightning_arrow', 6),
            id: `${id_prefix}lightning_arrow`
        },
        {
            inputs: ['minecraft:experience_bottle', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:challenge_arrow', 4),
            id: `${id_prefix}challenge_arrow`
        },
        {
            inputs: ['minecraft:shulker_shell', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:shulker_arrow', 4),
            id: `${id_prefix}shulker_arrow`
        },
        {
            inputs: ['minecraft:mycelium', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:spore_arrow', 4),
            id: `${id_prefix}spore_arrow`
        },
        {
            inputs: ['#minecraft:small_flowers', '#forge:rods/wooden', 'minecraft:feather'],
            result: Item.of('archers_paradox:verdant_arrow', 4),
            id: `${id_prefix}verdant_arrow`
        },
        {
            inputs: ['alexsmobs:shark_tooth', '#forge:rods/wooden', 'minecraft:kelp'],
            result: Item.of('alexsmobs:shark_tooth_arrow', 8),
            id: `${id_prefix}shark_tooth_arrow`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'apotheosis:fletching';
        recipe.conditions = [{ type: 'apotheosis:module', module: 'village' }];
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
