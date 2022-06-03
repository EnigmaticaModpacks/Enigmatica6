onEvent('entity_type.tags', (event) => {
    let entities = ['alexsmobs:dropbear'];
    event.get('enigmatica:dropbears').add(entities);
});
