//priority: 900
events.listen('recipes', (event) => {
    generatableCobblestone.forEach((material) => {
        var type = 'cobble';
        pedestals_stoneworks(event, material, type);
        industrialforegoing_stoneworks(event, material, type);
    });

    generatableStone.forEach((material) => {
        var type = 'stone';
        pedestals_stoneworks(event, material, type);
        industrialforegoing_stoneworks(event, material, type);
    });
});

//stoneworks functions
function pedestals_stoneworks(event, material, type) {
    var recipeType = 'pedestals:pedestal_cobblegen';

    if (type == 'stone') {
        recipeType = 'pedestals:pedestal_cobblegensilk';
    }

    event.custom({
        type: recipeType,
        ingredient: {
            item: material
        },
        result: {
            item: material,
            count: 1
        }
    });
}

function industrialforegoing_stoneworks(event, material, type) {
    var waterConsume = 0;
    var lavaConsume = 0;

    if (type == 'stone') {
        waterConsume = 1000;
        lavaConsume = 0;
    }

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
    });
}
