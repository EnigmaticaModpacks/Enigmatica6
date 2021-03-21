events.listen('recipes', (event) => {
    honeyVarieties.forEach((honeyVariety) => {
        if (honeyVariety == 'resourcefulbees:honey') {
            return;
        }

        event.recipes.create.emptying(
            [Fluid.of(honeyVariety, 250), Item.of('minecraft:glass_bottle')],
            Item.of(honeyVariety + '_bottle')
        );
    });

    var data = {
        recipes: [
        	{
        		input: 'farmersdelight:milk_bottle',
        		container: 'minecraft:glass_bottle',
        		fluid: Fluid.of('minecraft:milk', 250)
        	},
        	{
        		input: 'autumnity:syrup_bottle',
        		container: 'minecraft:glass_bottle',
        		fluid: Fluid.of('thermal:syrup', 25)
        	},
        	{
        		input: 'autumnity:sap_bottle',
        		container: 'minecraft:glass_bottle',
        		fluid: Fluid.of('thermal:sap', 500)
        	}
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.emptying([recipe.fluid, recipe.container], recipe.input);
    });
});
