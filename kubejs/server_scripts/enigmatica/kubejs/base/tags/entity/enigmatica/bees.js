onEvent('entity_type.tags', (event) => {
    let entities = [];
    combVariants.forEach((type) => {
        if (type == 'catnip') {
            type = 'kitten';
        }
        let bee = `resourcefulbees:${type}_bee`;
        entities.push(bee);
        event.get(`enigmatica:bees/${type}`).add(bee);
    });
    event.get('enigmatica:bees').add(entities);
});
