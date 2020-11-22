events.listen('item.tags', function (event) {
    var items = [
        'mekanism:advanced_chemical_tank',
        'mekanism:basic_chemical_tank',
        'mekanism:creative_chemical_tank',
        'mekanism:dynamic_tank',
        'mekanism:dynamic_valve',
        'mekanism:elite_chemical_tank',
        'mekanism:ultimate_chemical_tank'
    ];
	event.get('forge:storage').add(items);
	event.get('forge:storage/gas').add(items);
});
