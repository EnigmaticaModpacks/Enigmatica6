onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        /*{
            cast: {
                tag: 'tconstruct:casts/single_use/gem'
            },
            cast_consumed: true,
            fluid: {
                name: 'kubejs:molten_cobalt_bee',
                amount: 500
            },
            result: 'resourcefulbees:cobalt_bee_spawn_egg',
            cooling_time: 600
        }*/
        {
            cast: { item: 'gunswithoutroses:iron_bullet' },
            cast_consumed: true,
            fluid: { name: 'tconstruct:blazing_blood', amount: 5 },
            result: Item.of('gunswithoutroses:blaze_bullet').toResultJson(),
            cooling_time: 2,
            id: 'gunswithoutroses:blaze_bullet'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'tconstruct:casting_table',
                cast: recipe.cast,
                cast_consumed: recipe.cast_consumed,
                fluid: recipe.fluid,
                result: recipe.result,
                cooling_time: recipe.cooling_time
            })
            .id(recipe.id);
    });
});
