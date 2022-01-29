onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/';
    const recipes = [
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:botanical_mastery', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mythicbotany:mana_collector', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:spark', count: 12 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:mana_ring_greater', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:fabulous_pool', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:kekimurus', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:shulk_me_not', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:rosa_arcana', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:dandelifeon', count: 4 } }
            ],
            ticks: 60,
            id: `${id_prefix}botanical_mastery`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:astronomy_mastery', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:observatory', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:altar_radiance', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:marble_chiseled', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:marble_raw', count: 12 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:marble_pillar', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:marble_bricks', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:marble_runed', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:black_marble_arch', count: 49 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:marble_bricks', count: 4 } },
                { type: 'masterfulmachinery:items', data: { tag: 'astralsorcery:crystals/attuned', count: 10 } },
                { type: 'masterfulmachinery:fluids', data: { fluid: 'astralsorcery:liquid_starlight', amount: 64000 } }
            ],
            ticks: 60,
            id: `${id_prefix}astronomy_mastery`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'enigmatic_tree_of_life_structure';
        recipe.controllerId = 'enigmatic_tree_of_life';
        event.custom(recipe).id(recipe.id);
    });
});
