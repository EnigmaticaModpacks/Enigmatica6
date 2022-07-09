//priority: 900
onEvent('recipes', (event) => {
    generatableCobblestone.forEach((material) => {
        var type = 'cobble';
        //console.log(`Recipe for Material: ${material}, Type: ${type}`);
        pedestals_stoneworks(event, material, type);
        industrialforegoing_stoneworks(event, material, type);
        thermal_stoneworks(event, material);
    });

    generatableStone.forEach((material) => {
        var type = 'stone';
        //console.log(`Recipe for Material: ${material}, Type: ${type}`);
        pedestals_stoneworks(event, material, type);
        industrialforegoing_stoneworks(event, material, type);
        thermal_stoneworks(event, material);
    });
});

//stoneworks functions
function pedestals_stoneworks(event, material, type) {
    var recipeType = 'pedestals:pedestal_cobblegen';

    if (type == 'stone') {
        recipeType = 'pedestals:pedestal_cobblegensilk';
    }
    //console.log(`Pedestals Recipe for Material: ${material}, Type: ${type}`);
    fallback_id(
        event.custom({
            type: recipeType,
            ingredient: {
                item: material
            },
            result: {
                item: material,
                count: 1
            }
        }),
        `enigmatica:base/unification/unify_stoneworks/${arguments.callee.name}/`
    );
}

function industrialforegoing_stoneworks(event, material, type) {
    var waterConsume = 0;
    var lavaConsume = 0;

    if (type == 'stone') {
        waterConsume = 1000;
        lavaConsume = 0;
    }

    fallback_id(
        event.custom({
            output: {
                item: material,
                count: 1
            },
            waterNeed: 1000,
            lavaNeed: 1000,
            waterConsume: waterConsume,
            lavaConsume: lavaConsume,
            type: 'industrialforegoing:stonework_generate'
        }),
        `enigmatica:base/unification/unify_stoneworks/${arguments.callee.name}/`
    );
}

function thermal_stoneworks(event, material) {
    fallback_id(
        event.custom({
            type: 'thermal:rock_gen',
            adjacent: 'minecraft:water',
            below: material,
            result: {
                item: material
            }
        }),
        `enigmatica:base/unification/unify_stoneworks/${arguments.callee.name}/`
    );
}
