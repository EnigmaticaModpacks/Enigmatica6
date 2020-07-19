events.listen('item.registry', function (event) {
    for (var i = 0; i < materials.length; i++) {
        for (var j = 0; j < materials[i].itemParts.length; j++) {
            var materialName = materials[i].name;
            var itemPart = materials[i].itemParts[j];
            var registryName = materialName + '_' + itemPart;

            event
                .create(registryName)
                .group('KubeJS')
                .color(0, materials[i].color)
                .texture('kubejs:item/' + itemPart)
                .add();
        }
    }
});
