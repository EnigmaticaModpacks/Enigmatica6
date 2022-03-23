onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/wicked_altar/';
    const recipes = [
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon:reaper_scythe', count: 8 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { tag: 'forge:ingots/pewter', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'betterendforge:leather_wrapped_stick', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:soul_shard', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:tattered_cloth', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:anubis_godshard', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'bloodmagic:life_essence', amount: 10 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}gaia_spirit`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'wicked_altar_structure';
        recipe.controllerId = 'wicked_altar';
        event.custom(recipe).id(recipe.id);
    });
});
