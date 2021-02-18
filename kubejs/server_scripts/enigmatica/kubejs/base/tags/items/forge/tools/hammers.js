events.listen('item.tags', (event) => {
    var exceptions = ['betterendforge:aeternium_hammer_head'];

    var tags = ['forge:tools', 'forge:tools/hammer'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(/vanillahammers:\w+_hammer/)
            .add(/betterendforge:\w+_hammer/)
            .remove(exceptions);
    });
});
