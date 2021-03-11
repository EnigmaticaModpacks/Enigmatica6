events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'thermal:blizz_rod',
                output: 'thermal:blizz_powder',
                count: 3,
                id: 'pedestals:pedestal_crushing/blizz_rod'
            },
            {
                input: 'thermal:blitz_rod',
                output: 'thermal:blitz_powder',
                count: 3,
                id: 'pedestals:pedestal_crushing/blitz_rod'
            },
            {
                input: 'thermal:basalz_rod',
                output: 'thermal:basalz_powder',
                count: 3,
                id: 'pedestals:pedestal_crushing/basalz_rod'
            },
            {
                input: 'minecraft:end_stone',
                output: 'occultism:crushed_end_stone',
                count: 4,
                id: 'pedestals:pedestal_crushing/end_stone'
            },
            {
                input: 'minecraft:obsidian',
                output: 'emendatusenigmatica:obsidian_dust',
                count: 4,
                id: 'pedestals:pedestal_crushing/obsidian'
            },
            {
                input: '#forge:grain',
                output: 'create:wheat_flour',
                count: 1,
            },
            {
                input: 'byg:raw_quartz_block',
                output: 'byg:quartzite_sand',
                count: 2,
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'pedestals:pedestal_crushing',
            ingredient: Ingredient.of(recipe.input),
            result: Item.of(recipe.output, recipe.count)
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
