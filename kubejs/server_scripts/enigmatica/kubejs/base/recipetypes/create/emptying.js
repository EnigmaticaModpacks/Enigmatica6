events.listen('recipes', (event) => {
    honeyVarieties.forEach((honeyVariety) => {
        if (honeyVariety == 'resourcefulbees:honey') {
            return;
        }

        event.recipes.create.emptying(
            [fluid.of(honeyVariety, 250), Item.of('minecraft:glass_bottle')],
            Item.of(honeyVariety + '_bottle')
        );
    });

    var data = {
        recipes: [
        	{
        		input: Item.of('farmersdelight:milk_bottle'),
        		container: Item.of('minecraft:glass_bottle'),
        		fluid: {fluidTag: 'forge:milk', amount: 250}
        	}
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.emptying([recipe.fluid, recipe.container], recipe.input);
    });
});
