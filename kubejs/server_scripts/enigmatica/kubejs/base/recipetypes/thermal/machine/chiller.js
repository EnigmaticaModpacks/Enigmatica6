onEvent('recipes', (event) => {
    let recipes = [
        {
            inputs: [Fluid.of('integrateddynamics:menril_resin', 1000)],
            output: Item.of('integrateddynamics:crystalized_menril_block', 1)
        },
        {
            inputs: [Fluid.of('integrateddynamics:liquid_chorus', 1000)],
            output: Item.of('integrateddynamics:crystalized_chorus_block', 1)
        },
        {
            inputs: [Fluid.of('tconstruct:molten_clay', 144), 'tconstruct:ingot_cast'],
            output: Item.of('minecraft:brick', 1),
            energy: 5000,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_clay_ingot'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_netherite', 144), 'tconstruct:ingot_cast'],
            output: Item.of('minecraft:netherite_ingot', 1),
            energy: 5000,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_netherite_ingot'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_debris', 144), 'tconstruct:ingot_cast'],
            output: Item.of('minecraft:netherite_scrap', 1),
            energy: 5000,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_molten_debris'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_netherite', 16), 'tconstruct:nugget_cast'],
            output: Item.of('tconstruct:netherite_nugget', 1),
            energy: 555,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_netherite_nugget'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_debris', 16), 'tconstruct:nugget_cast'],
            output: Item.of('tconstruct:debris_nugget', 1),
            energy: 555,
            id: 'thermal:compat/tconstruct/chiller_tconstruct_debris_nugget'
        }
    ];

    honeyVarieties.forEach((honeyVariety) => {
        let honey = honeyVariety.split(':')[1];
        recipes.push({
            inputs: [Fluid.of(honeyVariety, 1000)],
            output: Item.of(
                honeyVariety == 'resourcefulbees:honey' ? 'minecraft:honey_block' : `${honeyVariety}_block`
            ),
            id: `thermal:machine/chiller/chiller_${honey}_to_${honey}_block`
        });
    });

    recipes.forEach((recipe) => {
        const re = event.recipes.thermal.chiller(recipe.output, recipe.inputs);
        if (recipe.energy) {
            re.energy(recipe.energy);
        }
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
