onEvent('worldgen.remove', (event) => {
    event.removeOres((ores) => {
        ores.blocks = ['chisel:marble/raw', 'chisel:basalt/raw', 'chisel:limestone/raw'];
    });
});
