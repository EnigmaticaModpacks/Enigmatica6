events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'quark:yellow_blossom_sapling',
                outputs: ['minecraft:spruce_log', 'quark:yellow_blossom_sapling'],
				chances: [6.0, 1.1],
				energy_mod: 3.0,
				water_mod: 3.0
            },
			{
                input: 'quark:pink_blossom_sapling',
                outputs: ['minecraft:spruce_log', 'quark:pink_blossom_sapling'],
				chances: [6.0, 1.1],
				energy_mod: 3.0,
				water_mod: 3.0
            },
			{
                input: 'quark:orange_blossom_sapling',
                outputs: ['minecraft:spruce_log', 'quark:orange_blossom_sapling'],
				chances: [6.0, 1.1],
				energy_mod: 3.0,
				water_mod: 3.0
            },
			{
                input: 'quark:lavender_blossom_sapling',
                outputs: ['minecraft:spruce_log', 'quark:lavender_blossom_sapling'],
				chances: [6.0, 1.1],
				energy_mod: 3.0,
				water_mod: 3.0
            },
			{
                input: 'quark:blue_blossom_sapling',
                outputs: ['minecraft:spruce_log', 'quark:blue_blossom_sapling'],
				chances: [6.0, 1.1],
				energy_mod: 3.0,
				water_mod: 3.0
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
			}
		  ],
		  energy_mod: recipe.energy_mod,
		  water_mod: recipe.water_mod
		});
    });
});
