events.listen('recipes', (event) => {
    const lowAmountInputs = [
        'farmersdelight:pumpkin_slice',
        'simplefarming:cantaloupe',
        'simplefarming:honeydew',
        'simplefarming:squash'
    ];

    const normalAmountInputs = [
        'alexsmobs:banana',
        'ars_nouveau:mana_berry',
        'atmospheric:aloe_leaves',
        'atmospheric:passionfruit',
        'atmospheric:yucca_fruit',
        'autumnity:foul_berries',
        'betterendforge:blossom_berry',
        'betterendforge:shadow_berry_raw',
        'byg:baobab_fruit',
        'byg:blueberries',
        'byg:crimson_berries',
        'byg:green_apple',
        'byg:holly_berries',
        'byg:joshua_fruit',
        'byg:nightshade_berries',
        'farmersdelight:cabbage',
        'farmersdelight:cabbage_leaf',
        'farmersdelight:onion',
        'farmersdelight:tomato',
        'integrateddynamics:menril_berries',
        'minecraft:beetroot',
        'minecraft:carrot',
        'minecraft:chorus_fruit',
        'minecraft:sweet_berries',
        'minecraft:wheat',
        'simplefarming:apricot',
        'simplefarming:banana',
        'simplefarming:barley',
        'simplefarming:blackberries',
        'simplefarming:blueberries',
        'simplefarming:broccoli',
        'simplefarming:cassava',
        'simplefarming:cherries',
        'simplefarming:corn',
        'simplefarming:cucumber',
        'simplefarming:eggplant',
        'simplefarming:grapes',
        'simplefarming:habanero',
        'simplefarming:lettuce',
        'simplefarming:mango',
        'simplefarming:oat',
        'simplefarming:olives',
        'simplefarming:onion',
        'simplefarming:orange',
        'simplefarming:peanut',
        'simplefarming:pear',
        'simplefarming:pea_pod',
        'simplefarming:pepper',
        'simplefarming:plum',
        'simplefarming:radish',
        'simplefarming:raspberries',
        'simplefarming:rice',
        'simplefarming:rye',
        'simplefarming:sorghum',
        'simplefarming:soybean',
        'simplefarming:spinach',
        'simplefarming:strawberries',
        'simplefarming:sweet_potato',
        'simplefarming:turnip',
        'simplefarming:yam',
        'simplefarming:zucchini',
        'undergarden:blisterberry',
        'upgrade_aquatic:mulberry'
    ];
    /*
		const recipes = [
			{
				input: 'simplefarming:apricot',
				fluid: 'immersiveengineering:ethanol',
				amount: 80,
				energy: 6400
			}
		];
	*/

    lowAmountInputs.forEach((input) => {
        event.custom({
            type: 'immersiveengineering:fermenter',
            fluid: {
                fluid: 'immersiveengineering:ethanol',
                amount: 20
            },
            input: {
                item: input
            },
            energy: 1600
        });
    });
    normalAmountInputs.forEach((input) => {
        event.custom({
            type: 'immersiveengineering:fermenter',
            fluid: {
                fluid: 'immersiveengineering:ethanol',
                amount: 80
            },
            input: {
                item: input
            },
            energy: 6400
        });
    });
});
