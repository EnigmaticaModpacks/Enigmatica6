events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'farmersdelight:cabbage',
                outputs: ['farmersdelight:cabbage', 'farmersdelight:cabbage_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'farmersdelight:tomato',
                outputs: ['farmersdelight:tomato', 'farmersdelight:tomato_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'farmersdelight:onion',
                outputs: ['simplefarming:onion'],
				chances: [2.5],
				energy_mod: 1.0,
				water_mod: 1.0
            },
			{
                input: 'farmersdelight:rice_panicle',
                outputs: ['simplefarming:rice_panicle'],
				chances: [2.5],
				energy_mod: 1.0,
				water_mod: 1.5
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.thermal.insolator({
		  type: 'thermal:insolator',
		  ingredient: {
			item: recipe.input
		  },
		  result: [
			{
			  item: recipe.outputs[0],
			  chance: recipe.chances[0]
			},
			{
			  item: recipe.outputs[1],
			  chance: recipe.chances[1]
			},
			{
			  item: recipe.outputs[2],
			  chance: recipe.chances[2]
			}
		  ],
		  energy_mod: recipe.energy_mod,
		  water_mod: recipe.water_mod
		});
    });
});
