onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/create/filling/';
    const recipes = [
        {
            input: 'upgrade_aquatic:squid_bucket',
            fluid: Fluid.of('astralsorcery:liquid_starlight', 250),
            output: 'upgrade_aquatic:glow_squid_bucket',
            id: `${id_prefix}glow_squid_bucket`
        },
        {
            input: 'minecraft:glass_bottle',
            fluid: { fluidTag: 'forge:milk', amount: 250 },
            output: 'farmersdelight:milk_bottle',
            id: `${id_prefix}milk_bottle`
        },
        {
            input: 'farmersdelight:milk_bottle',
            fluid: Fluid.of('create:chocolate', 250),
            output: 'farmersdelight:hot_cocoa',
            id: `${id_prefix}hot_cocoa`
        },
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('industrialforegoing:essence', 250),
            output: 'minecraft:experience_bottle',
            id: `${id_prefix}experience_bottle_if`
        },
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 250),
            output: 'minecraft:experience_bottle',
            id: `${id_prefix}experience_bottle_pnc`
        },
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('cofh_core:experience', 250),
            output: 'minecraft:experience_bottle',
            id: `${id_prefix}experience_bottle_cofh`
        }
    ];

    honeyVarieties.forEach((honeyVariety) => {
        let honey = honeyVariety.split(':')[1];
        recipes.push({
            input: Item.of('minecraft:glass_bottle'),
            output: Item.of(
                honeyVariety == 'resourcefulbees:honey' ? 'minecraft:honey_bottle' : `${honeyVariety}_bottle`
            ),
            fluid: Fluid.of(honeyVariety, 250),
            id: `${id_prefix}${honey}_bottle`
        });
    });

    recipes.forEach((recipe) => {
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});
