events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'pneumaticcraft:memory_essence_bucket',
                output: 'minecraft:experience_bottle',
                count: 50,
                id: 'pedestals:pedestal_fluid_to_xp/pnc_essence_to_xp'
            },
            {
                input: 'industrialforegoing:essence_bucket',
                output: 'minecraft:experience_bottle',
                count: 50,
                id: 'pedestals:pedestal_fluid_to_xp/if_essence_to_xp'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'pedestals:pedestal_fluid_to_xp',
            ingredient: {
                item: recipe.input
            },
            result: {
                item: recipe.output,
                count: recipe.count
            }
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
