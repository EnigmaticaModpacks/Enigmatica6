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
        		input: Item.of('farmersdelight:milk_bottle'),
        		container: Item.of('minecraft:glass_bottle'),
        		fluid: Fluid.of('minecraft:milk', 250)
        	},
        	{
        		input: Item.of('autumnity:syrup_bottle'),
        		container: Item.of('minecraft:glass_bottle'),
        		fluid: Fluid.of('thermal:syrup', 25)
        	},
        	{
        		input: Item.of('autumnity:sap_bottle'),
        		container: Item.of('minecraft:glass_bottle'),
        		fluid: Fluid.of('thermal:sap', 500)
        	}
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.emptying([recipe.fluid, recipe.container], recipe.input);
    });
});
