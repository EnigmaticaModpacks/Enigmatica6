onEvent('entity_type.tags', (event) => {
    let entities = ['alexsmobs:rattlesnake'];
    event.get('enigmatica:rattlesnakes').add(entities);
});
