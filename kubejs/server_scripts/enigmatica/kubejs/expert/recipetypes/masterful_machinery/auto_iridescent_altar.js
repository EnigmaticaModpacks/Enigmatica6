onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/auto_iridescent_altar/';
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', chance: 1.0, data: { item: 'kubejs:observatory_lens', count: 1 } }
            ],

            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/shadow_steel', count: 8 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/air', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:colored_lens_spectral', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:illumination_powder', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:nocturnal_powder', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:attuned_celestial_crystal', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 60 } }
            ],
            ticks: 200,
            id: `${id_prefix}observatory_lens`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:colored_lens_fire', count: 3 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'quark:orange_rune', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:smelting_anointment_l', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:glass_lens', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 30 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_fire`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:colored_lens_break', count: 3 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'quark:yellow_rune', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:hidden_knowledge_anointment_l', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:glass_lens', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 30 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_break`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:colored_lens_growth', count: 3 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'naturesaura:gold_powder', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'quark:lime_rune', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:fortune_anointment_l', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:glass_lens', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 30 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_growth`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:colored_lens_damage', count: 3 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'quark:red_rune', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:melee_anointment_l', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:glass_lens', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 30 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_damage`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:colored_lens_regeneration', count: 3 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'quark:pink_rune', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:holy_water_anointment_l', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:glass_lens', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 30 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_regeneration`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:colored_lens_push', count: 3 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'quark:light_blue_rune', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:bow_velocity_anointment_l', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:glass_lens', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 30 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_push`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:colored_lens_spectral', count: 3 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'atum:ectoplasm', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'quark:purple_rune', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:silk_touch_anointment_l', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:glass_lens', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 30 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_spectral`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'auto_iridescent_altar_structure';
        recipe.controllerId = 'auto_iridescent_altar';
        event.custom(recipe).id(recipe.id);
    });
});
