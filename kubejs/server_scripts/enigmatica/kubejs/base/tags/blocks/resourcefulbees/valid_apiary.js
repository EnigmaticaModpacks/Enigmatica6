events.listen('block.tags', function (event) {
    event.add('resourcefulbees:valid_apiary', validApiaryBlocks);
});
