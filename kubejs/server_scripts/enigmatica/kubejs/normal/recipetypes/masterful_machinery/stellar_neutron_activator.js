onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/masterful_machinery/stellar_neutron_activator/';
    const recipes = [
        {
            outputs: [
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'mekanismgenerators:tritium', amount: 640 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:botania_mana',
                    consumeInstantly: true,
                    data: { amount: 4000000 }
                },
                {
                    type: 'masterfulmachinery:energy',
                    perTick: true,
                    data: { amount: 100000 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'minecraft:water', amount: 64000 }
                }
            ],
            ticks: 4000,
            id: `${id_prefix}tritium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'stellar_neutron_activator_structure';
        recipe.controllerId = 'stellar_neutron_activator';
        event.custom(recipe).id(recipe.id);
    });
});

/*
{
    type: 'masterfulmachinery:botania_mana',
    perTick: true,
    data: { amount: 8000 }
},
{
    type: 'masterfulmachinery:fluids',
    perTick: true,
    data: { fluid: 'minecraft:water', amount: 64000 }
},



{
    type: 'masterfulmachinery:mekanism_gas',
    data: { gas: 'mekanismgenerators:tritium', amount: 64000 }
}

*/
