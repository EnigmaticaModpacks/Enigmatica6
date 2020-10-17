events.listen('block.registry', function (event) {
    for (var i = 0; i < materials.length; i++) {
        for (var j = 0; j < materials[i].blockParts.length; j++) {
            var block = materials[i].blockParts[j];
            var registryName = materials[i].name + '_' + block.name;

            event
                .create(registryName)
                .texture('kubejs:block/' + registryName)
                .material(block.material)
                .harvestTool(block.harvestTool, block.harvestLevel)
                .hardness(block.hardness)
                .resistance(block.resistance);
        }
    }
});
