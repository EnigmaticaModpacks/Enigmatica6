events.listen('recipes', event => {
	
	data = {
		recipes : [
			{
				input: {item: 'thermal:blizz_rod'},
				fluid: 'astralsorcery:liquid_starlight',
				fluidRate: 0.1,
				output: 'thermal:blizz_powder',
				count: 4,
				duration: 100				
			},
			{
				input: {item: 'thermal:basalz_rod'},
				fluid: 'astralsorcery:liquid_starlight',
				fluidRate: 0.1,
				output: 'thermal:basalz_powder',
				count: 4,
				duration: 100
			},
			{
				input: {item: 'thermal:blitz_rod'},
				fluid: 'astralsorcery:liquid_starlight',
				fluidRate: 0.1,
				output: 'thermal:blitz_powder',
				count: 4,
				duration: 100
			},
			{
				input: {item: 'simplefarming:habanero'},
				fluid: 'astralsorcery:liquid_starlight',
				fluidRate: 0.1,
				output: 'simplefarming:golden_habanero',
				count: 1,
				duration: 50
			}
		]
	}

	data.recipes.forEach((recipe) => {
		event.recipes.astralsorcery.infuser({
			type: 'astralsorcery:infuser',
			fluidInput: recipe.fluid,
			input: recipe.input,
			output: {
			  item: recipe.output,
			  count: recipe.count
			},
			consumptionChance: recipe.fluidRate,
			duration: recipe.duration,
			consumeMultipleFluids: false,
			acceptChaliceInput: true,
			copyNBTToOutputs: false
		  }) 
		});
  })





