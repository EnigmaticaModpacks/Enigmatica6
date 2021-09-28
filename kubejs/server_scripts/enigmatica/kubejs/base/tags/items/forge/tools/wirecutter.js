onEvent('item.tags', (event) => {
    var exceptions = [];

    var tags = ['forge:tools', 'forge:tools/wirecutter'];

    tags.forEach((tag) => {
        event.get(tag).add('immersiveengineering:wirecutter').remove(exceptions);
    });
});
