onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/tconstruct/casting_table/';

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
            cast: {
                item: 'resourcefulbees:bee_jar'
            },
            cast_consumed: true,
            fluid: {
                name: 'kubejs:molten_cobalt_bee',
                amount: 500
            },
            result: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:cobalt_bee' }).toResultJson(),
            cooling_time: 200,
            id: `${id_prefix}cobalt_bee_jar`
        },
        {
            cast: {
                item: 'resourcefulbees:bee_jar'
            },
            cast_consumed: true,
            fluid: {
                name: 'kubejs:liquid_skyslime_bee',
                amount: 500
            },
            result: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:skyslime_bee' }).toResultJson(),
            cooling_time: 100,
            id: `${id_prefix}skyslime_bee_jar`
        },
        {
            cast: {
                item: 'resourcefulbees:bee_jar'
            },
            cast_consumed: true,
            fluid: {
                name: 'kubejs:liquid_ichor_bee',
                amount: 500
            },
            result: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:ichor_bee' }).toResultJson(),
            cooling_time: 100,
            id: `${id_prefix}ichor_bee_jar`
        },
        {
            cast: {
                item: 'resourcefulbees:bee_jar'
            },
            cast_consumed: true,
            fluid: {
                name: 'kubejs:liquid_enderslime_bee',
                amount: 500
            },
            result: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:enderslime_bee' }).toResultJson(),
            cooling_time: 100,
            id: `${id_prefix}enderslime_bee_jar`
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
