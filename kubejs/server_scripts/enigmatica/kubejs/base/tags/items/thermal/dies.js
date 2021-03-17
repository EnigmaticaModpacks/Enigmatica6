events.listen('item.tags', (event) => {
    sharedDies.forEach((die) => {
        event.add('thermal:crafting/dies', [`#thermal:crafting/dies/${die.thermalName}`])
        event.add(`thermal:crafting/dies/${die.thermalName}`, [
            `thermal:press_${die.thermalName}_die`,
            `immersiveengineering:mold_${die.immersiveEngineeringName}`
        ])
    });
    thermalDies.forEach((dieName) => {
        event.add('thermal:crafting/dies', [`#thermal:crafting/dies/${dieName}`])
        event.add(`thermal:crafting/dies/${dieName}`, [`thermal:press_${dieName}_die`])
    });
    immersiveEngineeringDies.forEach((dieName) => {
        event.add('thermal:crafting/dies', [`#thermal:crafting/dies/${dieName}`])
        event.add(`thermal:crafting/dies/${dieName}`, [`immersiveengineering:mold_${dieName}`])
    });
});
