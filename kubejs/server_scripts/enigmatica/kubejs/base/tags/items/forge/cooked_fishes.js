events.listen('item.tags', (event) => {
	event.add('forge:cooked_fishes', [
		'aquaculture:fish_fillet_cooked',
		'undergarden:cooked_gwibling',
		'betterendforge:end_fish_cooked',
		'upgrade_aquatic:cooked_pike',
		'upgrade_aquatic:cooked_lionfish'
	]);
});