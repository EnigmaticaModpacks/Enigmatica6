events.listen('recipes', (event) => {
	event.remove({type: 'thermal:compression_fuel'});
	var multiplier = 1;
    var data = {
        recipes: [
            {
                fluid: 'pneumaticcraft:diesel',
                energy: 125000
            },
			{
                fluid: 'pneumaticcraft:biodiesel',
                energy: 125000
            },
			{
                fluid: 'immersiveengineering:biodiesel',
                energy: 125000
            },
			{
                fluid: 'pneumaticcraft:kerosene',
                energy: 137500
            },
			{
                fluid: 'pneumaticcraft:gasoline',
                energy: 187500
            },
			{
                fluid: 'pneumaticcraft:lpg',
                energy: 225000
            },
			{
                fluid: 'mekanism:ethene',
                energy: 225000
            },
			{
                fluid: 'pneumaticcraft:ethanol',
                energy: 50000
            },
			{
                fluid: 'mekanismgenerators:bioethanol',
                energy: 50000
            },
			{
                fluid: 'immersiveengineering:ethanol',
                energy: 50000
            },
			{
                fluid: 'industrialforegoing:biofuel',
                energy: 100000
            },
			{
                fluid: 'thermal:tree_oil',
                energy: 100000
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.thermal.compression_fuel({
		  type: "thermal:compression_fuel",
		  ingredient: {
			fluid: recipe.fluid,
			amount: 1000
		  },
		  energy: recipe.energy * multiplier
		});
    });
});
