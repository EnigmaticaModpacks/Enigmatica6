onEvent('recipes', (event) => {
    const recipes = [
        {
            input1: Item.of('aiotbotania:terra_aiot', '{Damage:0}').weakNBT(),
            input2: 'kubejs:quintuple_alfsteel_ingot',
            output: 'aiotbotania:alfsteel_aiot',
            id: `aiotbotania:alfsteel_aiot_smithing`
        }
    ];

    const black_hole_types = ['tank', 'unit'];
    const black_hole_tiers = ['common', 'pity', 'simple', 'advanced', 'supreme'];

    black_hole_types.forEach(type => {
        black_hole_tiers.forEach((tier, index) => {

            // first tier has no previous tier to upgrade from
            if(index == 0) return; 

            // no 3 free plastic & enderpearls for expert mode
            if(index == 1 && global.isExpertMode) return; 

            const prev = black_hole_tiers[index - 1];
            recipes.push({
                input1: `industrialforegoing:${prev}_black_hole_${type}`,
                input2: `industrialforegoing:machine_frame_${tier}`,
                output: `industrialforegoing:${tier}_black_hole_${type}`,
                id: `industrialforegoing:${tier}_black_hole_${type}_smithing`
            });
        });
    })

    recipes.forEach((recipe) => {
        event.smithing(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
    });
});
