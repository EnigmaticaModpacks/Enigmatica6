onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/auto_iridescent_altar/';
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', chance: 1.0, data: { item: 'kubejs:observatory_lens', count: 1 } },
                { type: 'masterfulmachinery:items', chance: 0.05, data: { item: 'kubejs:observatory_lens', count: 1 } }
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
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
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
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: { item: 'astralsorcery:colored_lens_fire', count: 1 }
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
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
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
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: { item: 'astralsorcery:colored_lens_break', count: 1 }
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
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
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
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: { item: 'astralsorcery:colored_lens_growth', count: 1 }
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
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
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
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: { item: 'astralsorcery:colored_lens_damage', count: 1 }
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
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
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
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: { item: 'astralsorcery:colored_lens_regeneration', count: 1 }
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
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
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
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: { item: 'astralsorcery:colored_lens_push', count: 1 }
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
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
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
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: { item: 'astralsorcery:colored_lens_spectral', count: 1 }
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
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_spectral`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:altar_radiance', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'create:shadow_steel_casing', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'eidolon:shadow_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:colored_lens_spectral', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:etherealslate', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/asgard', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/niflheim', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/alfheim', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/midgard', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'astralsorcery:crystals/attuned', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}altar_radiance`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'botania:gaia_spreader', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'botania:bifrost_perm', count: 6 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'botania:life_essence', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/midgard', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:colored_lens_spectral', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'botania:elven_spreader', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'naturesaura:ancient_sapling', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mythicbotany:dream_cherry', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:gems/dragonstone', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}gaia_spreader`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'botania:elven_spreader', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/elementium', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'botania:dreamwood', count: 8 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'botania:glimmering_dreamwood', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'botania:spark', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/summer', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/air', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:colored_lens_push', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}elven_spreader`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:shifting_star', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:gems/niotic', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:reagentbinding', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:illumination_powder', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'industrialforegoing:ether_gas_bucket', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:chalice', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/gold', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:black_marble_raw', count: 3 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:gems/aquamarine', count: 5 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}chalice`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:shifting_star_vicio', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:shifting_star', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 6 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:illumination_powder', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:defaultcrystal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:reagentair', count: 2 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_vicio`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:shifting_star_evorsio', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:shifting_star', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 6 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:illumination_powder', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:destructivecrystal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:reagentfastminer', count: 2 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_evorsio`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:shifting_star_discidia', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:shifting_star', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 6 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:illumination_powder', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:vengefulcrystal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:reagentlava', count: 2 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_discidia`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:shifting_star_armara', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:shifting_star', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 6 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:illumination_powder', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:steadfastcrystal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:reagentbinding', count: 2 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_armara`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:shifting_star_aevitas', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:shifting_star', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 6 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:illumination_powder', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:corrosivecrystal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'bloodmagic:reagentgrowth', count: 2 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_aevitas`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'astralsorcery:mantle', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'botania:balance_cloak', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:celestial_crystal', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'magicfeather:magicfeather', count: 1 }
                },

                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:illumination_powder', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'astralsorcery:resonating_gem', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/mana', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/pride', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/envy', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:storage_blocks/starmetal', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}mantle`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'pedestals:coin/xpenchanter', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'pedestals:coin/default', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'botania:gaia_pylon', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'ars_nouveau:glyph_pickup', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/mana', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/vanaheim', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'ars_nouveau:greater_experience_gem', count: 12 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:inlays/arcane_gold', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'eidolon:shadow_gem', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}coin_xpenchanter`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'pedestals:coin/xpanvil', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'pedestals:coin/default', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mythicbotany:alfsteel_pylon', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'ars_nouveau:glyph_pickup', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/mana', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'botania:runes/vanaheim', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'ars_nouveau:greater_experience_gem', count: 12 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:ingots/netherite', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'betterendforge:aeternium_hammer', count: 1 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}coin_xpanvil`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: { item: 'mekanism:solar_neutron_activator', count: 2 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'kubejs:observatory_lens', count: 5 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'powah:solar_panel_niotic', count: 5 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanism:hdpe_sheet', count: 5 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'industrialforegoing:machine_frame/advanced', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:circuits/elite', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:plates/enderium', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/iesnium', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/starmetal', count: 2 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { tag: 'forge:dusts/end_stone', count: 2 }
                },

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}solar_neutron_activator`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'auto_iridescent_altar_structure';
        recipe.controllerId = 'auto_iridescent_altar';
        event.custom(recipe).id(recipe.id);
    });
});
