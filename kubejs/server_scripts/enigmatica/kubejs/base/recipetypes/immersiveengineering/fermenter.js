events.listen('recipes', (event) => {
    var data = {
        recipes: [
				{
					input: 'simplefarming:cantaloupe',
					fluid: 'immersiveengineering:ethanol',
					amount: 20,
					energy: 6400
				},
				
			{ input: 'simplefarming:honeydew', fluid: 'immersiveengineering:ethanol', amount: 20, energy: 6400 },
			{ input: 'simplefarming:squash', fluid: 'immersiveengineering:ethanol', amount: 20, energy: 6400 },
			
			{
                input: 'simplefarming:apricot',
                fluid: 'immersiveengineering:ethanol',
                amount: 80,
                energy: 6400
            },
			
			{ input: 'simplefarming:banana', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:blackberries', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:blueberries', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:cherries', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:grapes', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:mango', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:olives', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:orange', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:pear', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:plum', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:raspberries', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:strawberries', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:broccoli', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:cassava', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:corn', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:cucumber', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:eggplant', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:habanero', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:lettuce', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:onion', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:pea_pod', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:peanut', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:pepper', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:radish', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:sorghum', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:soybean', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:spinach', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:sweet_potato', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:turnip', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:yam', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:zucchini', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:barley', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:oat', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:rye', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'simplefarming:rice', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			
			{
                input: 'minecraft:sweet_berries',
                fluid: 'immersiveengineering:ethanol',
                amount: 80,
                energy: 6400
            },
			
			{ input: 'minecraft:wheat', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'minecraft:chorus_fruit', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'ars_nouveau:source_berry', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
            { input: 'byg:baobab_fruit', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'byg:holly_berries', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
            { input: 'byg:green_apple', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
            { input: 'byg:joshua_fruit', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
            { input: 'byg:crimson_berries', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
            { input: 'byg:nightshade_berries', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
            { input: 'byg:blueberries', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
            { input: 'undergarden:blisterberry', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'alexsmobs:banana', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
            { input: 'integrateddynamics:menril_berries', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
            { input: 'betterendforge:shadow_berry_raw', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
            { input: 'betterendforge:blossom_berry', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
            { input: 'atmospheric:passionfruit', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
            { input: 'atmospheric:yucca_fruit', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
            { input: 'autumnity:foul_berries', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
            { input: 'upgrade_aquatic:mulberry', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
            
            {
                input: 'minecraft:carrot',
                fluid: 'immersiveengineering:ethanol',
                amount: 80,
                energy: 6400
            },
			
            { input: 'minecraft:beetroot', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'farmersdelight:cabbage', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'farmersdelight:tomato', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'farmersdelight:onion', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'farmersdelight:pumpkin_slice', fluid: 'immersiveengineering:ethanol', amount: 20, energy: 6400 },
			{ input: 'farmersdelight:cabbage_leaf', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
			{ input: 'atmospheric:aloe_leaves', fluid: 'immersiveengineering:ethanol', amount: 80, energy: 6400 },
            
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.fermenter({
            type: 'immersiveengineering:fermenter',
            fluid: {
                fluid: recipe.fluid,
                amount: recipe.amount
            },
            input: {
                item: recipe.input
            },
            energy: recipe.energy
        });
    });
});