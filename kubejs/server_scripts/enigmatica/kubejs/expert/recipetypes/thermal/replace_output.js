onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            replaceTarget: { id: 'thermal:fluid_cell' },
            toReplace: 'thermal:fluid_cell',
            replaceWith: Item.of(
                'thermal:fluid_cell',
                '{BlockEntityTag:{TankInv:[{FluidName:"minecraft:empty",Capacity:32000,Tank:0b,Amount:0}]}}'
            )
        },
        {
            replaceTarget: { id: 'thermal:energy_cell' },
            toReplace: 'thermal:energy_cell',
            replaceWith: Item.of(
                'thermal:energy_cell',
                '{BlockEntityTag:{EnergyMax:1000000,EnergySend:1000,Energy:0,EnergyRecv:1000}}'
            )
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceOutput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);
    });
});
