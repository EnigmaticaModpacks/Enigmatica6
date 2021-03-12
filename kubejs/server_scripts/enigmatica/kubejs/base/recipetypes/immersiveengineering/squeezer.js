events.listen('recipes', (event) => {
    const veryLowAmountInputs = [
		'simplefarming:cantaloupe_seeds',
		'simplefarming:cotton_seeds',
		'simplefarming:cucumber_seeds',
		'simplefarming:cumin_seeds',
		'simplefarming:eggplant_seeds',
		'simplefarming:ginger_seeds',
		'simplefarming:honeydew_seeds',
		'simplefarming:kenaf_seeds',
		'simplefarming:lettuce_seeds',
		'simplefarming:squash_seeds'
	];
		
	const lowAmountInputs = [
		'simplefarming:broccoli_seeds',
		'simplefarming:onion_seeds',
		'simplefarming:pea_seeds',
		'simplefarming:soybean_seeds',
		'simplefarming:spinach_seeds',
		'simplefarming:zucchini_seeds'
	];
	
	const normalAmountInputs = [
		'simplefarming:carrot_seeds',
		'simplefarming:cassava_seeds',
		'simplefarming:pepper_seeds',
		'simplefarming:potato_seeds',
		'simplefarming:radish_seeds',
		'simplefarming:sweet_potato_seeds',
		'simplefarming:tomato_seeds',
		'simplefarming:turnip_seeds',
		'simplefarming:yam_seeds'
	];
	
	const highAmountInputs = [
		'simplefarming:barley_seeds',
		'simplefarming:corn_seeds',
		'simplefarming:oat_seeds',
		'simplefarming:peanut_seeds',
		'simplefarming:quinoa_seeds',
		'simplefarming:rice_seeds',
		'simplefarming:rye_seeds',
		'simplefarming:sorghum_seeds',
		'simplefarming:sunflower_seeds'
	];
	
	const veryHighAmountInputs = [
		'simplefarming:grape_seeds'
	];
	
	/*
		const recipes = [
			{
				input: 'simplefarming:barley_seeds',
				fluid: 'immersiveengineering:plantoil',
				amount: 80,
				energy: 6400
			}
		];
	*/
	
	veryLowAmountInputs.forEach((input) => {
        event.custom({
            type: 'immersiveengineering:squeezer',
            fluid: {
                fluid: 'immersiveengineering:plantoil',
                amount: 20
            },
            input: {
                item: input
            },
            energy: 6400
        });
    });
	lowAmountInputs.forEach((input) => {
        event.custom({
            type: 'immersiveengineering:squeezer',
            fluid: {
                fluid: 'immersiveengineering:plantoil',
                amount: 40
            },
            input: {
                item: input
            },
            energy: 6400
        });
    });
	normalAmountInputs.forEach((input) => {
        event.custom({
            type: 'immersiveengineering:squeezer',
            fluid: {
                fluid: 'immersiveengineering:plantoil',
                amount: 60
            },
            input: {
                item: input
            },
            energy: 6400
        });
    });
	highAmountInputs.forEach((input) => {
        event.custom({
            type: 'immersiveengineering:squeezer',
            fluid: {
                fluid: 'immersiveengineering:plantoil',
                amount: 80
            },
            input: {
                item: input
            },
            energy: 6400
        });
    });
	veryHighAmountInputs.forEach((input) => {
        event.custom({
            type: 'immersiveengineering:squeezer',
            fluid: {
                fluid: 'immersiveengineering:plantoil',
                amount: 120
            },
            input: {
                item: input
            },
            energy: 6400
        });
    });
});
