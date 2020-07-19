events.listen('item.tags', function (event) {
    for (var i = 0; i < materials.length; i++) {
        if (materials[i].blockParts !== undefined) {
            for (var j = 0; j < materials[i].itemParts.length; j++) {
                var materialName = materials[i].name;
                var itemPart = materials[i].itemParts[j];
                var registryName = materialName + '_' + itemPart;

                var baseTag = 'forge:' + itemPart + 's';
                var tag = 'forge:' + itemPart + 's/' + materialName;
                var item = 'kubejs:' + registryName;

                event.get(baseTag).add(item);
                event.get(tag).add(item);
            }

            for (var j = 0; j < materials[i].blockParts.length; j++) {
                var materialName = materials[i].name;
                var blockPart = materials[i].blockParts[j].name;
                var registryName = materialName + '_' + blockPart;

                var baseTag = 'forge:' + blockPart + 's';
                var tag = 'forge:' + blockPart + 's/' + materialName;
                var item = 'kubejs:' + registryName;

                event.get(baseTag).add(item);
                event.get(tag).add(item);
            }
        }
    }
});
