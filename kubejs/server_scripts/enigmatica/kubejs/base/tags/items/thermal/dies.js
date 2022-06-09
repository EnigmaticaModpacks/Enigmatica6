onEvent('item.tags', (event) => {
    sharedDies.forEach((die) => {
        event.add(`thermal:crafting/dies`, [`immersiveengineering:mold_${die.immersiveEngineeringName}`]);
        event.add(`thermal:crafting/dies/${die.thermalName}`, [
            `immersiveengineering:mold_${die.immersiveEngineeringName}`
        ]);
    });

    thermalDies.forEach((dieName) => {
        event.add('thermal:crafting/dies', [`#thermal:crafting/dies/${dieName}`]);
        event.add(`thermal:crafting/dies/${dieName}`, [`thermal:press_${dieName}_die`]);
    });

    immersiveEngineeringDies.forEach((dieName) => {
        event.add('thermal:crafting/dies', [`#thermal:crafting/dies/${dieName}`]);
        event.add(`thermal:crafting/dies/${dieName}`, [`immersiveengineering:mold_${dieName}`]);
    });
    event.add('thermal:crafting/casts', ['#tconstruct:casts/multi_use']);
});
