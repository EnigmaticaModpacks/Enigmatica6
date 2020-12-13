events.listen('recipes', event => {
    event.remove({id: 'bloodmagic:alchemytable/sand_coal'});
    event.remove({id: 'bloodmagic:alchemytable/sand_gold'});
    event.remove({id: 'bloodmagic:alchemytable/sand_iron'});

	event.recipes.bloodmagic.alchemytable({
	type: "bloodmagic:alchemytable",
	input: [
		{
		  item: "minecraft:coal"
		},
		{
		  item: "minecraft:coal"
		},
		{
		  item: "minecraft:flint"
		}
		],
	output: {
		item: "emendatusenigmatica:coal_dust",
		count: 4
		},
	syphon: 400,
	ticks: 200,
	upgradeLevel: 1
	})	
  })