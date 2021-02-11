events.listen('block.tags', (event) => {
    event.add('resourcefulbees:valid_apiary', validApiaryBlocks);
});
