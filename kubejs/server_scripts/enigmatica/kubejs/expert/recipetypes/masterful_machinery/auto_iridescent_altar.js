onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/auto_iridescent_altar/';
    const recipes = [
        {
            structureId: 'auto_iridescent_altar_structure',
            controllerId: 'auto_iridescent_altar',
            ticks: 600,
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { tag: 'forge:ingots/shadow_steel', count: 8 }
                },
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { tag: 'botania:runes/air', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'astralsorcery:colored_lens_spectral', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'astralsorcery:illumination_powder', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'astralsorcery:nocturnal_powder', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { tag: 'forge:dusts/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    consumeInstantly: true,
                    data: { item: 'astralsorcery:attuned_celestial_crystal', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 300000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 60 } }
            ],
            outputs: [
                { type: 'masterfulmachinery:items', chance: 1.0, data: { item: 'kubejs:observatory_lens', count: 1 } }
            ],
            id: `${id_prefix}observatory_lens`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        event.custom(recipe).id(recipe.id);
    });
});
