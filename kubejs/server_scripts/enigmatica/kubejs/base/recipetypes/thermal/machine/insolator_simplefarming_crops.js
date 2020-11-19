events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'simplefarming:cactus_crop',
                outputs: ['simplefarming:cactus_crop', 'simplefarming:cactus_fruit'],
				chances: [2.0, 1.1],
				energy_mod: 1.5,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:chicory_root',
                outputs: ['simplefarming:chicory_root'],
				chances: [2.5],
				energy_mod: 1.0,
				water_mod: 1.0
            },
			{
                input: 'simplefarming:marshmallow_root',
                outputs: ['simplefarming:marshmallow_root'],
				chances: [2.5],
				energy_mod: 1.0,
				water_mod: 1.0
            },
			{
                input: 'simplefarming:cumin_seeds',
                outputs: ['simplefarming:cumin_seeds'],
				chances: [2.5],
				energy_mod: 1.0,
				water_mod: 1.0
            },
			{
                input: 'simplefarming:quinoa_seeds',
                outputs: ['simplefarming:quinoa_seeds'],
				chances: [2.5],
				energy_mod: 1.0,
				water_mod: 1.0
            },
			{
                input: 'simplefarming:barley_seeds',
                outputs: ['simplefarming:barley', 'simplefarming:barley_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:broccoli_seeds',
                outputs: ['simplefarming:broccoli', 'simplefarming:broccoli_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:cassava_seeds',
                outputs: ['simplefarming:cassava', 'simplefarming:cassava_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:corn_seeds',
                outputs: ['simplefarming:corn', 'simplefarming:corn_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:cotton_seeds',
                outputs: ['simplefarming:cotton', 'simplefarming:cotton_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:cucumber_seeds',
                outputs: ['simplefarming:cucumber', 'simplefarming:cucumber_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:eggplant_seeds',
                outputs: ['simplefarming:eggplant', 'simplefarming:eggplant_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:ginger_seeds',
                outputs: ['simplefarming:ginger', 'simplefarming:ginger_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:kenaf_seeds',
                outputs: ['simplefarming:kenaf_fiber', 'simplefarming:kenaf_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:lettuce_seeds',
                outputs: ['simplefarming:lettuce', 'simplefarming:lettuce_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:oat_seeds',
                outputs: ['simplefarming:oat', 'simplefarming:oat_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:onion_seeds',
                outputs: ['simplefarming:onion', 'simplefarming:onion_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:pea_seeds',
                outputs: ['simplefarming:pea_pod', 'simplefarming:pea_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:peanut_seeds',
                outputs: ['simplefarming:peanut', 'simplefarming:peanut_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:pepper_seeds',
                outputs: ['simplefarming:pepper', 'simplefarming:pepper_seeds', 'simplefarming:habanero'],
				chances: [2.0, 1.1, 1.01],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:radish_seeds',
                outputs: ['simplefarming:radish', 'simplefarming:radish_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:rice_seeds',
                outputs: ['simplefarming:rice', 'simplefarming:rice_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:rye_seeds',
                outputs: ['simplefarming:rye', 'simplefarming:rye_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:sorghum_seeds',
                outputs: ['simplefarming:sorghum', 'simplefarming:sorghum_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:soybean_seeds',
                outputs: ['simplefarming:soybean', 'simplefarming:soybean_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:spinach_seeds',
                outputs: ['simplefarming:spinach', 'simplefarming:spinach_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:sweet_potato_seeds',
                outputs: ['simplefarming:sweet_potato', 'simplefarming:sweet_potato_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:tomato_seeds',
                outputs: ['simplefarming:tomato', 'simplefarming:tomato_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:turnip_seeds',
                outputs: ['simplefarming:turnip', 'simplefarming:turnip_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:yam_seeds',
                outputs: ['simplefarming:yam', 'simplefarming:yam_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:zucchini_seeds',
                outputs: ['simplefarming:zucchini', 'simplefarming:zucchini_seeds'],
				chances: [2.0, 1.1],
				energy_mod: 1.0,
				water_mod: 0.5
            },
			{
                input: 'simplefarming:squash_seeds',
                outputs: ['simplefarming:squash_block', 'simplefarming:squash_seeds'],
				chances: [1.1, 1.1],
				energy_mod: 2.0,
				water_mod: 2.0
            },
			{
                input: 'simplefarming:honeydew_seeds',
                outputs: ['simplefarming:honeydew_block', 'simplefarming:honeydew_seeds'],
				chances: [1.1, 1.1],
				energy_mod: 2.0,
				water_mod: 2.0
            },
			{
                input: 'simplefarming:cantaloupe_seeds',
                outputs: ['simplefarming:cantaloupe_block', 'simplefarming:cantaloupe_seeds'],
				chances: [1.1, 1.1],
				energy_mod: 2.0,
				water_mod: 2.0
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
