events.listen('recipes', (event) => {
    const recipes = [
        {
            input: Fluid.of('integrateddynamics:menril_resin', 1000),
            output: Item.of('integrateddynamics:crystalized_menril_block', 1)
        },
        {
            input: Fluid.of('integrateddynamics:liquid_chorus', 1000),
            output: Item.of('integrateddynamics:crystalized_chorus_block', 1)
        }
    ];
    honeyVarieties.forEach((honeyVariety) => {
        let output = `${honeyVariety}_block`,
            honey = honeyVariety.split(':')[1];
        if (honeyVariety == 'resourcefulbees:honey') {
            output = 'minecraft:honey_block';
        }
        recipes.push({
            input: Fluid.of(honeyVariety, 1000),
            output: Item.of(output),
            id: `thermal:machine/chiller/chiller_${honey}_to_${honey}_block`
        });
    });

    recipes.forEach((recipe) => {
        const re = event.recipes.thermal.chiller(recipe.output, recipe.input);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
