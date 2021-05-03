events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const data = {
        recipes: [
            {
                inputs: [
                    { item: 'ars_nouveau:warding_stone' },
                    { item: 'ars_nouveau:warding_stone' },
                    { item: 'naturesaura:token_joy' },
                    { item: 'naturesaura:gold_leaf' },
                    { item: 'thermal:ice_charge' },
                    { item: 'thermal:lightning_charge' },
                    { item: 'thermal:earth_charge' },
                    { item: 'minecraft:fire_charge' }
                ],
                output: 'naturesaura:nature_altar',
                count: 1,
                sapling: 'quark:yellow_blossom_sapling',
                id: 'nature_altar'
            },
            {
                inputs: [
                    {
                        type: 'forge:nbt',
                        item: 'naturesaura:aura_bottle',
                        count: 1,
                        nbt: '{stored_type:"naturesaura:overworld"}'
                    },
                    { item: 'botania:pink_shiny_flower' },
                    { item: 'naturesaura:gold_leaf' },
                    { item: 'minecraft:golden_apple' },
                    { item: 'architects_palette:sunmetal_blend' },
                    { item: 'botania:pink_shiny_flower' },
                    { item: 'architects_palette:sunmetal_blend' },
                    { item: 'botania:pink_shiny_flower' }
                ],
                output: 'naturesaura:token_joy',
                count: 2,
                sapling: 'quark:yellow_blossom_sapling',
                id: 'token_joy'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'naturesaura:tree_ritual',
            ingredients: recipe.inputs,
            sapling: { item: recipe.sapling },
            output: { item: recipe.output, count: recipe.count },
            time: 500
        });
        if (recipe.id) {
            re.id(`naturesaura:tree_ritual/${recipe.id}`);
        }
    });
});
