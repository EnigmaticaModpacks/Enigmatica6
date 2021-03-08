events.listen('item.tags', (event) => {
    event.add('forge:raw_fishes/cod', ['aquaculture:atlantic_cod']);
    event.add('forge:raw_fishes/salmon', ['aquaculture:pink_salmon']);
    event.add('forge:raw_fishes', [
    	'aquaculture:fish_fillet_raw',
    	'undergarden:raw_gwibling',
    	'alexsmobs:blobfish',
    	'betterendforge:end_fish_raw',
    	'upgrade_aquatic:pike',
    	'upgrade_aquatic:lionfish'
	]);
});