onEvent('recipes', (event) => {
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
            result: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:cobalt_bee", BeeType: "cobalt", Color: "#209EBD"}).toResultJson(),
            cooling_time: 200,
            id: 'tconstruct:kjs_cobalt_bee_jar'
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
            result: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:skyslime_bee", BeeType: "skyslime", Color: "#72CFCB"}).toResultJson(),
            cooling_time: 100,
            id: 'tconstruct:kjs_skyslime_bee_jar'
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
            result: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:ichor_bee", BeeType: "ichor", Color: "#FDAB69"}).toResultJson(),
            cooling_time: 100,
            id: 'tconstruct:kjs_ichor_bee_jar'
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
            result: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:enderslime_bee", BeeType: "enderslime", Color: "#C75EFF"}).toResultJson(),
            cooling_time: 100,
            id: 'tconstruct:kjs_enderslime_bee_jar'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'tconstruct:casting_table',
            cast: recipe.cast,
            cast_consumed: recipe.cast_consumed,
            fluid: recipe.fluid,
            result: recipe.result,
            cooling_time: recipe.cooling_time
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
