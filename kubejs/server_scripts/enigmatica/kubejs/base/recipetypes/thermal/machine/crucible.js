events.listen('recipes', (event) => {
    const recipes = [];

    honeyVarieties.forEach((honeyVariety) => {
        let input = `${honeyVariety}_block`,
            honey = honeyVariety.split(':')[1];
        if (honeyVariety == 'resourcefulbees:honey') {
            input = 'minecraft:honey_block';
        }
        recipes.push({
            output: Fluid.of(honeyVariety, 1000),
            input: Item.of(input),
            energy: 2000,
            id: `thermal:machine/crucible/crucible_${honey}_block_to_${honey}`
        });
    });

    recipes.forEach((recipe) => {
        const re = event.recipes.thermal.crucible(recipe.output, recipe.input).energy(recipe.energy);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
