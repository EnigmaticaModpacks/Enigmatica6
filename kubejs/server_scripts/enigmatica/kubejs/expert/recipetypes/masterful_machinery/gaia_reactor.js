onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/gaia_reactor/';
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', chance: 1.0, data: { item: 'botania:life_essence', count: 8 } },
                { type: 'masterfulmachinery:items', chance: 0.5, data: { item: 'botania:life_essence', count: 4 } },
                { type: 'masterfulmachinery:items', chance: 0.25, data: { item: 'botania:life_essence', count: 2 } },
                { type: 'masterfulmachinery:botania_mana', data: { amount: 9000 * 300 } }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    perTick: true,
                    data: { amount: 2000000 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'pneumaticcraft:memory_essence', amount: 16000 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'astralsorcery:liquid_starlight', amount: 1000 }
                },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 300,
            id: `${id_prefix}gaia_spirit`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'gaia_reactor_structure';
        recipe.controllerId = 'gaia_reactor';
        event.custom(recipe).id(recipe.id);
    });
});
