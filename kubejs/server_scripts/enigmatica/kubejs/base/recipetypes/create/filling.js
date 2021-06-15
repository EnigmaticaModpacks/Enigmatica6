onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'upgrade_aquatic:squid_bucket',
            fluid: Fluid.of('astralsorcery:liquid_starlight', 250),
            output: 'upgrade_aquatic:glow_squid_bucket'
        },
        {
            input: 'minecraft:glass_bottle',
            fluid: { fluidTag: 'forge:milk', amount: 250 },
            output: 'farmersdelight:milk_bottle'
        },
        {
            input: 'farmersdelight:milk_bottle',
            fluid: Fluid.of('create:chocolate', 250),
            output: 'farmersdelight:hot_cocoa'
        },
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('industrialforegoing:essence', 250),
            output: 'minecraft:experience_bottle'
        },
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('pneumaticcraft:memory_essence', 250),
            output: 'minecraft:experience_bottle'
        },
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('cofh_core:experience', 250),
            output: 'minecraft:experience_bottle'
        },
        {
            input: Ingredient.of('#forge:glass/colorless'),
            fluid: Fluid.of('integrateddynamics:menril_resin', 1000),
            output: 'integratedterminals:menril_glass'
        },
        {
            input: Ingredient.of('#forge:glass/colorless'),
            fluid: Fluid.of('integrateddynamics:liquid_chorus', 1000),
            output: 'integratedterminals:chorus_glass'
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
            id: `create:filling/${honey}_bottle`
        });
    });

    recipes.forEach((recipe) => {
        const re = event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
