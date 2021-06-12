onEvent('item.tags', (event) => {
    event.get('forge:rods').add(['thermal:basalz_rod', 'thermal:blizz_rod', 'thermal:blitz_rod']);
    event.get('forge:rods/basalz').add('thermal:basalz_rod');
    event.get('forge:rods/blizz').add('thermal:blizz_rod');
    event.get('forge:rods/blitz').add('thermal:blitz_rod');
});
