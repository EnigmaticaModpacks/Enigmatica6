onEvent('entity_type.tags', (event) => {
    let entities = ['atum:pharaoh'];
    event.get('enigmatica:pharaohs').add(entities);
});
