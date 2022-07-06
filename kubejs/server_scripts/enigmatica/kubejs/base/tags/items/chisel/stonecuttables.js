onEvent('item.tags', (event) => {
    stonecuttables.forEach((stoneType) => {
        event.add(`chisel:${stoneType.name}`, [`#enigmatica:stonecuttables/${stoneType.name}`]);
    });
});
