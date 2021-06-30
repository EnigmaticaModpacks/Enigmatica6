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
            result: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:cobalt_bee", BeeType: "cobalt", Color: "#209EBD"}).toJson(),
            cooling_time: 200
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
            result: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:skyslime_bee", BeeType: "skyslime", Color: "#72CFCB"}).toJson(),
            cooling_time: 100
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
            result: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:ichor_bee", BeeType: "ichor", Color: "#FDAB69"}).toJson(),
            cooling_time: 100
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
            result: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:enderslime_bee", BeeType: "enderslime", Color: "#C75EFF"}).toJson(),
            cooling_time: 100
        },
        {
        cast: {
            item: 'minecraft:glass_bottle'
        },
        cast_consumed: true,
        fluid: {
            name: 'tconstruct:blood',
            amount: 900
        },
        result: Item.of('vampirism:blood_bottle',{Damage:9}).toJson(),
        cooling_time: 10
        },
        {
        cast: Item.of('vampirism:blood_bottle',{Damage:0}).toJson(),
        cast_consumed: true,
        fluid: {
            name: 'tconstruct:blood',
            amount: 900
        },
        result: Item.of('vampirism:blood_bottle',{Damage:9}).toJson(),
        cooling_time: 10
        },
        {
        cast: Item.of('vampirism:blood_bottle',{Damage:1}).toJson(),
        cast_consumed: true,
        fluid: {
            name: 'tconstruct:blood',
        amount: 800
        },
        result: Item.of('vampirism:blood_bottle',{Damage:9}).toJson(),
        cooling_time: 10
        },
        {
        cast: Item.of('vampirism:blood_bottle',{Damage:2}).toJson(),
        cast_consumed: true,
        fluid: {
            name: 'tconstruct:blood',
        amount: 700
        },
        result: Item.of('vampirism:blood_bottle',{Damage:9}).toJson(),
        cooling_time: 10
        },
        {
        cast: Item.of('vampirism:blood_bottle',{Damage:3}).toJson(),
        cast_consumed: true,
        fluid: {
            name: 'tconstruct:blood',
        amount: 600
        },
        result: Item.of('vampirism:blood_bottle',{Damage:9}).toJson(),
        cooling_time: 10
        },
        {
        cast: Item.of('vampirism:blood_bottle',{Damage:4}).toJson(),
        cast_consumed: true,
        fluid: {
            name: 'tconstruct:blood',
        amount: 500
        },
        result: Item.of('vampirism:blood_bottle',{Damage:9}).toJson(),
        cooling_time: 10
        },
        {
        cast: Item.of('vampirism:blood_bottle',{Damage:5}).toJson(),
        cast_consumed: true,
        fluid: {
            name: 'tconstruct:blood',
        amount: 400
        },
        result: Item.of('vampirism:blood_bottle',{Damage:9}).toJson(),
        cooling_time: 10
        },
        {
        cast: Item.of('vampirism:blood_bottle',{Damage:6}).toJson(),
        cast_consumed: true,
        fluid: {
            name: 'tconstruct:blood',
        amount: 300
        },
        result: Item.of('vampirism:blood_bottle',{Damage:9}).toJson(),
        cooling_time: 10
        },
        {
        cast: Item.of('vampirism:blood_bottle',{Damage:7}).toJson(),
        cast_consumed: true,
        fluid: {
            name: 'tconstruct:blood',
        amount: 200
        },
        result: Item.of('vampirism:blood_bottle',{Damage:9}).toJson(),
        cooling_time: 10
        },
        {
        cast: Item.of('vampirism:blood_bottle',{Damage:8}).toJson(),
        cast_consumed: true,
        fluid: {
            name: 'tconstruct:blood',
        amount: 100
        },
        result: Item.of('vampirism:blood_bottle',{Damage:9}).toJson(),
        cooling_time: 10
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
