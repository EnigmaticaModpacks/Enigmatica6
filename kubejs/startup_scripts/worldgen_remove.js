events.listen('worldgen.remove', (event) => {
    event.removeOres((ores) => {
        ores.blocks = ['minecraft:granite', 'minecraft:diorite', 'minecraft:andesite', 'minecraft:dirt'];
    });
});
