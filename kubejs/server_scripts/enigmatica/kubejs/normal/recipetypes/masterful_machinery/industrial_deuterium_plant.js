onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/masterful_machinery/industrial_deuterium_plant/';
    const recipes = [
        {
            outputs: [
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'mekanismgenerators:deuterium', amount: 640 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    perTick: true,
                    data: { amount: 10000 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'emendatusenigmatica:molten_sulfur', amount: 10 }
                },
                {
                    type: 'masterfulmachinery:pncr_pressure',
                    perTick: true,
                    data: {
                        air: 100
                    }
                },
                {
                    type: 'masterfulmachinery:create_rotation',
                    data: {
                        speed: 256
                    }
                }
            ],
            ticks: 4000,
            id: `${id_prefix}deuterium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'industrial_deuterium_plant_structure';
        recipe.controllerId = 'industrial_deuterium_plant';
        event.custom(recipe).id(recipe.id);
    });
});
