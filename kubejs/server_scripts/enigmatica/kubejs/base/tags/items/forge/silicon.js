events.listen('item.tags', function (event) {
    var silicon = 'forge:silicon';

    event.get(silicon).add('appliedenergistics2:silicon');
});
