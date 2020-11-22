events.listen('item.tags', function (event) {
    event.get('forge:dyes').remove('mekanism:dust_sulfur');
    event.get('forge:dyes/yellow').remove('mekanism:dust_sulfur');
});
