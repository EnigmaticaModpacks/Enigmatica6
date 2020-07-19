events.listen('block.tags', function (event) {
    for (var i = 0; i < materials.length; i++) {
        if (materials[i].blockParts !== undefined) {
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
