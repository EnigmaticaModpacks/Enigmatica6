onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/wicked_altar/';
    const recipes = [
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon:reaper_scythe', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { tag: 'forge:ingots/pewter', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'betterendforge:leather_wrapped_stick', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:soul_shard', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:tattered_cloth', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:anubis_godshard', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 10 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}reaper_scythe`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon:cleaving_axe', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { tag: 'forge:ingots/pewter', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'betterendforge:leather_wrapped_stick', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:prismarine_crystals', count: 2 } },
                { type: 'masterfulmachinery:items', data: { tag: 'forge:inlays/pewter', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:anput_godshard', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 10 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}cleaving_axe`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon:prestigious_palm', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:wicked_weave', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:ender_calx', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:lesser_soul_gem', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:reagentvoid', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:warped_sprouts', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 10 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}prestigious_palm`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'eidolon:lesser_soul_gem', count: 4 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'occultism:spirit_attuned_gem', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:ender_calx', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:nepthys_godshard', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 10 }
                }
            ],
            ticks: 400,
            id: `${id_prefix}lesser_soul_gem`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'wicked_altar_structure';
        recipe.controllerId = 'wicked_altar';
        event.custom(recipe).id(recipe.id);
    });
});
