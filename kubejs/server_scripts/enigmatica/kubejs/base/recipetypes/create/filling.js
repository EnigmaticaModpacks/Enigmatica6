events.listen('recipes', (event) => {
    honeyVarieties.forEach((honeyVariety) => {
        if (honeyVariety == 'resourcefulbees:honey') {
            return;
        }

        event.recipes.create.filling(Item.of(honeyVariety + '_bottle'), [
            Fluid.of(honeyVariety, 250),
            Item.of('minecraft:glass_bottle')
        ]);
    });

    var data = {
        recipes: [
        	{
        		input: 'upgrade_aquatic:squid_bucket',
        		fluid: Fluid.of('astralsorcery:liquid_starlight', 250),
        		output: 'upgrade_aquatic:glow_squid_bucket'
        	},
        	{
        		input: 'minecraft:glass_bottle',
        		fluid: {fluidTag: 'forge:milk', amount: 250},
        		output: 'farmersdelight:milk_bottle'
        	},
        	{
        		input: 'farmersdelight:milk_bottle',
        		fluid: Fluid.of('create:chocolate', 250),
        		output: 'farmersdelight:hot_cocoa'
        	},
        	{
        		input: 'minecraft:glass_bottle',
        		fluid: Fluid.of('thermal:syrup', 25),
        		output: 'autumnity:syrup_bottle'
        	},
        	{
        		input: 'minecraft:glass_bottle',
        		fluid: Fluid.of('thermal:sap', 500),
        		output: 'autumnity:sap_bottle'
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
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]);
    });
});
