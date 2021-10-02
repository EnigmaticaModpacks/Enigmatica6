onEvent('entity_type.tags', (event) => {
    let entities = ['botania:doppleganger'];
    event.get('enigmatica:gaia_guardian').add(entities);
});
