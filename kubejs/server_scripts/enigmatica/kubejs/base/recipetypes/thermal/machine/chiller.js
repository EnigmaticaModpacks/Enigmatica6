events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: Fluid.of('integrateddynamics:menril_resin', 1000),
                output: Item.of('integrateddynamics:crystalized_menril_block', 1)
            },
            {
                input: Fluid.of('integrateddynamics:liquid_chorus', 1000),
                output: Item.of('integrateddynamics:crystalized_chorus_block', 1)
            }
        ]
    };

    honeyVarieties.forEach((honeyVariety) => {
        if (honeyVariety == 'resourcefulbees:honey') {
            return;
        }
        data.recipes.push({
            input: fluid.of(honeyVariety, 1000),
            output: Item.of(honeyVariety + '_block')
        });
    });

    data.recipes.forEach((recipe) => {
        const re = event.recipes.thermal.chiller(recipe.output, recipe.input);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
