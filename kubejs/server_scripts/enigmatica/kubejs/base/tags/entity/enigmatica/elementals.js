onEvent('entity_type.tags', (event) => {
    let entities = ['minecraft:blaze', 'thermal:blizz', 'thermal:blitz', 'thermal:basalz'];
    event.get('enigmatica:elementals').add(entities);

    event.get('enigmatica:elementals/fire').add('minecraft:blaze');
    event.get('enigmatica:elementals/water').add('thermal:blizz');
    event.get('enigmatica:elementals/air').add('thermal:blitz');
    event.get('enigmatica:elementals/earth').add('thermal:basalz');
});
