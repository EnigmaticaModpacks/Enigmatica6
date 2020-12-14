events.listen('recipes', event => {
    event.remove({id: 'bloodmagic:alchemytable/sand_coal'});
	event.remove({id: 'bloodmagic:alchemytable/sand_gold'});
	event.remove({id: 'bloodmagic:alchemytable/sand_iron'});
	event.remove({id: 'bloodmagic:alchemytable/plantoil_from_beets'});
	event.remove({id: 'bloodmagic:alchemytable/plantoil_from_carrots'});
	event.remove({id: 'bloodmagic:alchemytable/plantoil_from_wheat'});
	event.remove({id: 'bloodmagic:alchemytable/plantoil_from_taters'});
	event.remove({id: 'bloodmagic:alchemytable/string'});
	event.remove({id: 'bloodmagic:alchemytable/basic_cutting_fluid'});
	event.remove({id: 'bloodmagic:alchemytable/flint_from_gravel'});
	event.remove({id: 'bloodmagic:alchemytable/clay_from_sand'});
	
	data = {
		recipes : [
			{
				inputs: [{item: 'minecraft:coal'},{item: 'minecraft:coal'},{item: 'minecraft:flint'}],
				output: 'emendatusenigmatica:coal_dust',
				count: 4,
				syphon: 400,
				ticks: 200,
				orbLevel: 1
			},
			{
				inputs: [{tag: 'forge:gravel'},{tag: 'forge:gravel'},{tag: 'forge:gravel'}],
				output: 'minecraft:flint',
				count: 3,
				syphon: 50,
				ticks: 20,
				orbLevel: 0
			},
			{
				inputs: [{tag: 'forge:crops'},{tag: 'forge:crops'},{tag: 'forge:crops'},{item: 'minecraft:bone_meal'}],
				output: 'bloodmagic:plantoil',
				count: 1,
				syphon: 100,
				ticks: 100,
				orbLevel: 1
			},
			{
				inputs: [{tag: 'minecraft:wool'}],
				output: 'minecraft:string',
				count: 4,
				syphon: 100,
				ticks: 100,
				orbLevel: 0
			},
			{
				inputs: [{tag: 'forge:rods/blaze'}],
				output: 'minecraft:blaze_powder',
				count: 4,
				syphon: 50,
				ticks: 20,
				orbLevel: 1
			},
			{
				inputs: [{item: 'thermal:basalz_rod'}],
				output: 'thermal:basalz_powder',
				count: 4,
				syphon: 50,
				ticks: 20,
				orbLevel: 1
			},
			{
				inputs: [{item: 'thermal:blizz_rod'}],
				output: 'thermal:blizz_powder',
				count: 4,
				syphon: 50,
				ticks: 20,
				orbLevel: 1
			},
			{
				inputs: [{item: 'thermal:blitz_rod'}],
				output: 'thermal:blitz_powder',
				count: 4,
				syphon: 50,
				ticks: 20,
				orbLevel: 1
			},
			{
				inputs: [{item: 'minecraft:dirt'},{item: 'minecraft:bone_meal'},{tag: 'forge:mushrooms'}],
				output: 'minecraft:mycelium',
				count: 1,
				syphon: 200,
				ticks: 200,
				orbLevel: 1
			},
			{
				inputs: [{item: 'minecraft:dirt'},{item: 'minecraft:bone_meal'},{tag: 'minecraft:leaves'}],
				output: 'minecraft:podzol',
				count: 1,
				syphon: 200,
				ticks: 200,
				orbLevel: 1
			},
			{
				inputs: [{item: 'bloodmagic:plantoil'},{tag: 'forge:dusts/redstone'},{tag: 'forge:gunpowder'},{item: 'minecraft:sugar'},{tag: 'forge:dusts/coal'}],
				output: 'bloodmagic:basiccuttingfluid',
				count: 1,
				syphon: 1000,
				ticks: 200,
				orbLevel: 1
			},
			{
				inputs: [{tag: 'forge:sand'},{tag: 'forge:sand'},{item: 'minecraft:water_bucket'}],
				output: 'minecraft:clay',
				count: 2,
				syphon: 50,
				ticks: 100,
				orbLevel: 2
			}
		]
	}

	data.recipes.forEach((recipe) => {
		event.recipes.bloodmagic.alchemytable({
			type: 'bloodmagic:alchemytable',
			input: recipe.inputs,
			output: {
				item: recipe.output,
				count: recipe.count
				},
			syphon: recipe.syphon,
			ticks: recipe.ticks,
			upgradeLevel: recipe.orbLevel
			}) 
		});
  })





