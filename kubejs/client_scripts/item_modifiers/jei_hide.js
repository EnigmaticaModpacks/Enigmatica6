events.listen('jei.hide.items', (event) => {
	var disabledItems = [
				'ars_nouveau:arcane_brick',
				'ars_nouveau:arcane_ore',
				'emendatusenigmatica:certus_quartz_block',
				'emendatusenigmatica:certus_quartz_chunk',
				'emendatusenigmatica:certus_quartz_dust',
				'emendatusenigmatica:certus_quartz_gem',
				'emendatusenigmatica:certus_quartz_ore',
				'emendatusenigmatica:charged_certus_quartz_block',
				'emendatusenigmatica:charged_certus_quartz_chunk',
				'emendatusenigmatica:charged_certus_quartz_gem',
				'emendatusenigmatica:charged_certus_quartz_ore',
				'emendatusenigmatica:fluix_block',
				'emendatusenigmatica:fluix_dust',
				'emendatusenigmatica:fluix_gem',
				'immersiveengineering:dust_saltpeter',				
				'immersiveengineering:dust_wood',
				'mapperbase:bitumen_ore',
				'mapperbase:iron_plate',
				'mapperbase:iron_rod',
				'mapperbase:raw_bitumen',
				'mapperbase:steel_ingot',
				'mapperbase:steel_nugget',
				'mapperbase:steel_plate',
				'mapperbase:steel_rod',
				'morevanillalib:obsidian_shard',
				'pedestals:dustflour',
				'powah:uraninite_ore',
				'powah:uraninite_ore_dense',
				'powah:uraninite_ore_poor',
				'powah:uraninite_raw',
				'powah:uraninite_raw_dense',
				'powah:uraninite_raw_poor',
				'quark:biotite',
				'quark:biotite_ore',
				'thermal:coal_coke',
				'thermal:coal_coke_block',
				'thermal:ender_pearl_dust',
				'thermal:sawdust'
			]
	
	var materialTypes = [
			'coal',
			'charcoal',
			'iron',
			'gold',
			'diamond',
			'emerald',
			'lapis',
			'lapis_lazuli',
			'redstone',
			'copper',
			'aluminum',
			'silver',
			'lead',
			'nickel',
			'uranium',
			'osmium',
			'tin',
			'zinc',
			'certus_quartz',
			'charged_certus_quartz',
			'fluorite',
			'bitumen',
			'cinnabar',
			'apatite',
			'sulfur',
			'potassium_nitrate',
			'arcane',
			'niter',
			'quartz',
			'bronze',
			'invar',
			'electrum',
			'constantan',
			'lumium',
			'enderium',
			'signalum',
			'steel',
			'obsidian',
			'lithium'
			]

	materialTypes.forEach((item) => {
		disabledItems.push(
			'emendatusenigmatica:' + item + '_andesite_ore',
			'emendatusenigmatica:' + item + '_gabbro_ore',
			'emendatusenigmatica:' + item + '_c_limestone_ore',
			'emendatusenigmatica:' + item + '_scoria_ore',
			'emendatusenigmatica:' + item + '_weathered_limestone_ore',
			'emendatusenigmatica:' + item + '_jasper_ore',
			'emendatusenigmatica:' + item + '_marble_ore',
			'emendatusenigmatica:' + item + '_slate_ore',
			'titanium:' + item + '_gear',
			'thermal:' + item,
			'thermal:' + item + '_dust',
			'thermal:' + item + '_gear',
			'thermal:' + item + '_ingot',
			'thermal:' + item + '_nugget',
			'thermal:' + item + '_ore',
			'thermal:' + item + '_plate',
			'tmechworks:' + item + '_ingot',
			'tmechworks:' + item + '_nugget',
			'tmechworks:' + item + '_ore',
			'pedestals:dust' + item,
			'mekanism:' + item + '_gem',
			'mekanism:' + item + '_ore',
			'mekanism:dust_' + item,
			'mekanism:ingot_' + item,
			'mekanism:nugget_' + item,
			'minecraft:' + item + '_ore',
			'kubejs:' + item + '_ore_deposit',
			'immersiveengineering:dust_' + item,
			'immersiveengineering:ingot_' + item,
			'immersiveengineering:nugget_' + item,
			'immersiveengineering:ore_' + item,
			'immersiveengineering:plate_' + item
		);		
	});	
	
	
	disabledItems.forEach((disabledItem) => {
		if(!item.of(disabledItem).isEmpty()){
			event.hide(disabledItem);			
		}        
    });	
  
    global.disabledItems.forEach((item) => {
        event.hide(item);
    });
});
