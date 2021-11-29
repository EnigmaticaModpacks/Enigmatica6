onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/smelter/';
    const recipes = [
        {
            inputs: ['#forge:ores/nickel'],
            outputs: [
                Item.of('emendatusenigmatica:nickel_ingot').chance(1.0),
                Item.of('minecraft:iron_ingot').chance(0.2),
                Item.of('thermal:rich_slag').chance(0.2)
            ],
            id: `${id_prefix}ores/nickel`
        },
        {
            inputs: ['#forge:ores/aluminum'],
            outputs: [
                Item.of('emendatusenigmatica:aluminum_ingot').chance(1.0),
                Item.of('minecraft:iron_ingot').chance(0.2),
                Item.of('thermal:rich_slag').chance(0.2)
            ],
            id: `${id_prefix}ores/aluminum`
        },
        {
            inputs: ['#forge:ores/uranium'],
            outputs: [
                Item.of('emendatusenigmatica:uranium_ingot').chance(1.0),
                Item.of('emendatusenigmatica:lead_ingot').chance(0.2),
                Item.of('thermal:rich_slag').chance(0.2)
            ],
            id: `${id_prefix}ores/uranium`
        },
        {
            inputs: ['#forge:ores/osmium'],
            outputs: [
                Item.of('emendatusenigmatica:osmium_ingot').chance(1.0),
                Item.of('emendatusenigmatica:tin_ingot').chance(0.2),
                Item.of('thermal:rich_slag').chance(0.2)
            ],
            id: `${id_prefix}ores/osmium`
        },
        {
            inputs: ['#forge:ores/zinc'],
            outputs: [
                Item.of('emendatusenigmatica:zinc_ingot').chance(1.0),
                Item.of('minecraft:gold_ingot').chance(0.2),
                Item.of('thermal:rich_slag').chance(0.2)
            ],
            id: `${id_prefix}ores/zinc`
        },
        {
            inputs: [Item.of('minecraft:netherite_scrap', 4), Item.of('minecraft:gold_ingot', 2)],
            outputs: ['minecraft:netherite_ingot'],
            id: `${id_prefix}netherite_ingot`
        },
        {
            inputs: ['#forge:ingots/iron', '#forge:dusts/coal_coke'],
            outputs: ['emendatusenigmatica:steel_ingot'],
            id: `${id_prefix}steel_ingot`
        },
        {
            inputs: ['#forge:ingots/iron', '#forge:ingots/lead'],
            outputs: [Item.of('eidolon:pewter_ingot', 2)],
            id: `${id_prefix}pewter_ingot`
        },
        {
            inputs: ['#forge:ingots/iron', '#forge:dusts/ender'],
            outputs: [Item.of('betterendforge:terminite_ingot')],
            id: `${id_prefix}terminite_ingot`
        },
        {
            inputs: ['#forge:ingots/thallasium', '#forge:dusts/ender'],
            outputs: [Item.of('betterendforge:terminite_ingot')],
            id: `${id_prefix}terminite_ingot`
        },
        {
            inputs: ['#forge:ingots/netherite', 'betterendforge:terminite_ingot'],
            outputs: [Item.of('betterendforge:aeternium_ingot')],
            id: `${id_prefix}aeternium_ingot`
        },
        {
            inputs: ['byg:quartzite_sand'],
            outputs: [Item.of('minecraft:quartz'), Item.of('thermal:slag')],
            id: `${id_prefix}quartz`
        },
        {
            inputs: [Item.of('industrialforegoing:dryrubber', 2), '#forge:dusts/sulfur'],
            outputs: [Item.of('thermal:cured_rubber', 2).chance(1.0)],
            id: 'thermal:machine/smelter/smelter_cured_rubber'
        },
        {
            inputs: ['#forge:glass', Ingredient.of('#forge:ingots/copper', 3)],
            outputs: [Item.of('tconstruct:tinkers_bronze_ingot', 3)],
            id: 'thermal:compat/tconstruct/smelter_alloy_tconstruct_tinkers_bronze_ingot'
        },
        {
            inputs: [
                Ingredient.of('#forge:ingots/copper', 2),
                Ingredient.of('#forge:ingots/cobalt', 1),
                '#forge:obsidian'
            ],
            outputs: [Item.of('tconstruct:hepatizon_ingot', 4)],
            id: 'thermal:compat/tconstruct/smelter_alloy_tconstruct_hepatizon_ingot'
        },
        {
            inputs: [
                Ingredient.of('#forge:ingots/gold', 1),
                Ingredient.of('#forge:ingots/cobalt', 1),
                'minecraft:magma_cream'
            ],
            outputs: [Item.of('tconstruct:queens_slime_ingot', 2)],
            id: 'thermal:compat/tconstruct/smelter_alloy_tconstruct_queens_slime_ingot'
        },
        {
            inputs: ['#forge:ingots/iron', 'tconstruct:blood_slime_ball', 'minecraft:clay_ball'],
            outputs: [Item.of('tconstruct:pig_iron_ingot', 2)],
            id: 'thermal:compat/tconstruct/smelter_alloy_tconstruct_pig_iron_ingot'
        },
        {
            inputs: ['#forge:ingots/iron', 'tconstruct:sky_slime_ball', 'tconstruct:seared_brick'],
            outputs: [Item.of('tconstruct:slimesteel_ingot', 2)],
            id: 'thermal:compat/tconstruct/smelter_alloy_tconstruct_slimesteel_ingot'
        },
        {
            inputs: [Ingredient.of('#forge:ingots/cobalt', 3), Ingredient.of('#forge:ingots/netherite_scrap', 1)],
            outputs: [Item.of('tconstruct:manyullyn_ingot', 4)],
            id: 'thermal:compat/tconstruct/smelter_alloy_tconstruct_manyullyn_ingot'
        },
        {
            inputs: [
                Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:iron_bee"}).weakNBT(),
                Ingredient.of('resourcefulbees:nickel_honeycomb_block', 1)
            ],
            outputs: [Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:invar_bee"})],
            id: `${id_prefix}invar_bee_jar`
        },
        {
            inputs: [
                Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:iron_bee"}).weakNBT(),
                Ingredient.of('#forge:storage_blocks/coal_coke', 1)
            ],
            outputs: [Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:steel_bee"})],
            id: `${id_prefix}steel_bee_jar`
        },
        {
            inputs: [
                Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:copper_bee"}).weakNBT(),
                Ingredient.of('resourcefulbees:tin_honeycomb_block', 1)
            ],
            outputs: [Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:brass_bee"})],
            id: `${id_prefix}brass_bee_jar`
        },
        {
            inputs: [
                Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:copper_bee"}).weakNBT(),
                Ingredient.of('resourcefulbees:zinc_honeycomb_block', 1)
            ],
            outputs: [Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:bronze_bee"})],
            id: `${id_prefix}bronze_bee_jar`
        },
        {
            inputs: [
                Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:copper_bee"}).weakNBT(),
                Ingredient.of('resourcefulbees:nickel_honeycomb_block', 1)
            ],
            outputs: [Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:constantan_bee"})],
            id: `${id_prefix}constantan_bee_jar`
        },
        {
            inputs: [
                Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:silver_bee"}).weakNBT(),
                Ingredient.of('resourcefulbees:tin_honeycomb_block', 1),
                Ingredient.of('resourcefulbees:glowstone_honeycomb_block', 1)
            ],
            outputs: [Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:lumium_bee"})],
            id: `${id_prefix}lumium_bee_jar`
        },
        {
            inputs: [
                Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:silver_bee"}).weakNBT(),
                Ingredient.of('resourcefulbees:copper_honeycomb_block', 1),
                Ingredient.of('resourcefulbees:redstone_honeycomb_block', 1)
            ],
            outputs: [Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:signalum_bee"})],
            id: `${id_prefix}signalum_bee_jar`
        },
        {
            inputs: [
                Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:diamond_bee"}).weakNBT(),
                Ingredient.of('resourcefulbees:lead_honeycomb_block', 1),
                Ingredient.of('resourcefulbees:ender_honeycomb_block', 1)
            ],
            outputs: [Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:enderium_bee"})],
            id: `${id_prefix}enderium_bee_jar`
        },
        {
            inputs: [
                Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:silver_bee"}).weakNBT(),
                Ingredient.of('resourcefulbees:constantan_honeycomb_block', 1)
            ],
            outputs: [Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:electrum_bee"})],
            id: `${id_prefix}electrum_bee_jar`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs).id(recipe.id);
    });
});
