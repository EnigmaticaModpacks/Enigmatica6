events.listen('recipes', (event) => {
    data = {
        recipes: [
            {
                result: 'emendatusenigmatica:aluminum_chunk',
                weight: 1200
            },
            {
                result: 'emendatusenigmatica:apatite_chunk',
                weight: 700
            },
            {
                result: 'emendatusenigmatica:arcane_chunk',
                weight: 200
            },
            {
                result: 'emendatusenigmatica:bitumen_chunk',
                weight: 1000
            },
            {
                result: 'emendatusenigmatica:cinnabar_chunk',
                weight: 500
            },
            {
                result: 'emendatusenigmatica:coal_chunk',
                weight: 5200
            },
            {
                result: 'emendatusenigmatica:copper_chunk',
                weight: 2000
            },
            {
                result: 'emendatusenigmatica:diamond_chunk',
                weight: 120
            },
            {
                result: 'emendatusenigmatica:dimensional_chunk',
                weight: 20
            },
            {
                result: 'emendatusenigmatica:emerald_chunk',
                weight: 20
            },
            {
                result: 'emendatusenigmatica:fluorite_chunk',
                weight: 50
            },
            {
                result: 'emendatusenigmatica:gold_chunk',
                weight: 550
            },
            {
                result: 'emendatusenigmatica:iron_chunk',
                weight: 2500
            },
            {
                result: 'emendatusenigmatica:lapis_chunk',
                weight: 360
            },
            {
                result: 'emendatusenigmatica:lead_chunk',
                weight: 1500
            },
            {
                result: 'emendatusenigmatica:nickel_chunk',
                weight: 100
            },
            {
                result: 'emendatusenigmatica:osmium_chunk',
                weight: 1500
            },
            {
                result: 'emendatusenigmatica:potassium_nitrate_chunk',
                weight: 250
            },
            {
                result: 'emendatusenigmatica:redstone_chunk',
                weight: 700
            },
            {
                result: 'emendatusenigmatica:silver_chunk',
                weight: 1000
            },
            {
                result: 'emendatusenigmatica:sulfur_chunk',
                weight: 3000
            },
            {
                result: 'emendatusenigmatica:tin_chunk',
                weight: 1800
            },
            {
                result: 'emendatusenigmatica:uranium_chunk',
                weight: 400
            },
            {
                result: 'emendatusenigmatica:zinc_chunk',
                weight: 1000
            },
            {
                result: 'occultism:otherstone',
                weight: 50
            },
            {
                result: 'occultism:iesnium_ore',
                weight: 50
            },
            {
                result: 'minecraft:glowstone',
                weight: 100
            },
            {
                result: 'minecraft:nether_quartz_ore',
                weight: 200
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'occultism:miner',
            ingredient: {
                tag: 'occultism:miners/ores'
            },
            result: {
                item: recipe.result
            },
            weight: recipe.weight
        });
    });
});
