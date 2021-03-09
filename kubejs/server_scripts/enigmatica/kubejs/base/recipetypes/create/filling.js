events.listen('recipes', (event) => {
    honeyVarieties.forEach((honeyVariety) => {
        if (honeyVariety == 'resourcefulbees:honey') {
            return;
        }

        event.recipes.create.filling(Item.of(honeyVariety + '_bottle'), [
            fluid.of(honeyVariety, 250),
            Item.of('minecraft:glass_bottle')
        ]);
    });

    var data = {
        recipes: [
        	{
        		output: Item.of('upgrade_aquatic:glow_squid_bucket'),
        		container: Item.of('upgrade_aquatic:squid_bucket'),
        		fluid: fluid.of('astralsorcery:liquid_starlight', 250)
        	},
        	{
        		output: Item.of('farmersdelight:milk_bottle'),
        		container: Item.of('minecraft:glass_bottle'),
        		fluid: {fluidTag: 'forge:milk', amount: 250}
        	},
        	{
        		output: Item.of('farmersdelight:hot_cocoa'),
        		container: Item.of('farmersdelight:milk_bottle'),
        		fluid: fluid.of('create:chocolate', 250)
        	},
        	{
        		output: Item.of('minecraft:experience_bottle'),
        		container: Item.of('minecraft:glass_bottle'),
        		fluid: fluid.of('industrialforegoing:essence', 250)
        	},
        	{
        		output: Item.of('minecraft:experience_bottle'),
        		container: Item.of('minecraft:glass_bottle'),
        		fluid: fluid.of('pneumaticcraft:memory_essence', 250)
        	},
        	{
        		output: Item.of('minecraft:experience_bottle'),
        		container: Item.of('minecraft:glass_bottle'),
        		fluid: fluid.of('cofh_core:experience', 250)
        	}
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.container]);
    });
});
