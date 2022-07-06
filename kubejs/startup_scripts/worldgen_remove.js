onEvent('worldgen.remove', (event) => {
    event.removeOres((ores) => {
        ores.blocks = [
            'chisel:marble/raw',
            'chisel:basalt/raw',
            'chisel:limestone/raw',
            'minecraft:nether_quartz_ore',
            'minecraft:nether_gold_ore',
            /immersiveengineering:ore\w+/
        ];
    });
});
