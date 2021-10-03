onEvent('recipes', (event) => {
    /*
    Note, max starlight is theoretical. In practice, assume roughly 95% as the max reasonable level

    Celestial Altar
    altar_type: 2
    max_starlight: 4000
    */

    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/astralsorcery/altar/';
    const recipes = [
        /// Celestial Altar Recipes
        {
            output: Item.of('astralsorcery:altar_radiance', 1),
            pattern: ['BC_CB', 'DEFED', '_JAK_', 'DGHGD', 'BC_CB'],
            key: {
                A: {
                    type: 'astralsorcery:crystal',
                    hasToBeAttuned: false,
                    hasToBeCelestial: true,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true
                },
                B: { tag: 'forge:storage_blocks/hepatizon' },
                C: { item: 'create:shadow_steel' },
                D: { item: 'astralsorcery:resonating_gem' },
                E: { item: 'astralsorcery:colored_lens_spectral' },
                F: { tag: 'botania:runes/asgard' },
                G: { item: 'astralsorcery:marble_runed' },
                H: { tag: 'forge:storage_blocks/alfsteel' },
                J: { tag: 'botania:runes/alfheim' },
                K: { tag: 'botania:runes/midgard' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 3800,
            recipe_class: 'astralsorcery:trait_upgrade',
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:pillar_sparkle',
                'astralsorcery:luminescence_flare',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:upgrade_altar',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/altar_radiance'
        },
        {
            output: Item.of('apotheosis:hellshelf', 1),
            pattern: ['AG__A', 'G_BC_', '_DED_', '_FB_G', 'A__GA'],
            key: {
                A: { item: 'tconstruct:scorched_bricks' },
                B: { tag: 'botania:runes/fire' },
                C: { item: 'resourcefulbees:ghast_honeycomb' },
                D: { tag: 'botania:runes/muspelheim' },
                E: { tag: 'forge:bookshelves' },
                F: { item: 'powah:crystal_blazing' },
                G: { item: 'bloodmagic:reagentlava' }
            },
            altar_type: 2,
            duration: 200,
            starlight: 3000,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:gateway_edge',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}hellshelf`
        },
        {
            output: Item.of('apotheosis:seashelf', 1),
            pattern: ['AG__A', 'G_BC_', '_DED_', '_FB_G', 'A__GA'],
            key: {
                A: { item: 'upgrade_aquatic:prismarine_coral_block' },
                B: { tag: 'botania:runes/water' },
                C: { item: 'resourcefulbees:icy_honeycomb' },
                D: { tag: 'botania:runes/vanaheim' },
                E: { tag: 'forge:bookshelves' },
                F: { item: 'powah:crystal_niotic' },
                G: { item: 'bloodmagic:reagentwater' }
            },
            altar_type: 2,
            duration: 200,
            starlight: 3000,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:gateway_edge',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}seashelf`
        },
        {
            output: Item.of('apotheosis:endshelf', 1),
            pattern: ['AG__A', 'G_BC_', '_DED_', '_FB_G', 'A__GA'],
            key: {
                A: { item: 'betterendforge:flavolite_runed' },
                B: { tag: 'botania:runes/mana' },
                C: { item: 'resourcefulbees:enderium_honeycomb' },
                D: { tag: 'botania:runes/nidavellir' },
                E: { tag: 'forge:bookshelves' },
                F: { item: 'betterendforge:eternal_crystal' },
                G: { item: 'bloodmagic:reagentvoid' }
            },
            altar_type: 2,
            duration: 200,
            starlight: 3000,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:gateway_edge',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}endshelf`
        },
        {
            output: Item.of('mythicbotany:mana_infuser', 1),
            pattern: ['AE_EB', 'EGHGE', '_IJI_', 'FKLKF', 'CF_FD'],
            key: {
                A: { tag: 'botania:runes/spring' },
                B: { tag: 'botania:runes/summer' },
                C: { tag: 'botania:runes/winter' },
                D: { tag: 'botania:runes/autumn' },
                E: { tag: 'forge:ingots/refined_radiance' },
                F: { tag: 'forge:ingots/shadow_steel' },
                G: { tag: 'forge:ingots/elementium' },
                H: { tag: 'botania:runes/muspelheim' },
                I: { item: 'kubejs:firmament' },
                J: { tag: 'botania:runes/asgard' },
                K: { item: 'botania:glimmering_dreamwood' },
                L: { tag: 'botania:runes/niflheim' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 3800,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}mana_infuser`
        },
        {
            output: Item.of('botania:flight_tiara', '{variant:0}'),
            pattern: ['B___B', '_CDC_', '_EAE_', '_FEG_', 'B___B'],
            key: {
                A: {
                    type: 'astralsorcery:crystal',
                    hasToBeAttuned: true,
                    hasToBeCelestial: false,
                    canBeAttuned: true,
                    canBeCelestialCrystal: false
                },
                B: { item: 'botania:life_essence' },
                C: { tag: 'botania:runes/mana' },
                D: { item: 'magicfeather:magicfeather' },
                E: { tag: 'forge:ingots/elementium' },
                F: { item: 'bloodmagic:airsigil' },
                G: { item: 'ars_nouveau:ritual_flight' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 3800,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:pillar_sparkle',
                'astralsorcery:luminescence_flare',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:upgrade_altar',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}flight_tiara`
        },
        {
            output: Item.of('astralsorcery:colored_lens_regeneration', 3),
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            pattern: ['_S_S_', 'R_Q_R', '_ALA_', 'S_Q_S', 'R___R'],
            key: {
                R: { item: 'astralsorcery:resonating_gem' },
                S: { item: 'astralsorcery:stardust' },
                A: { item: 'bloodmagic:holy_water_anointment_l' },
                Q: { item: 'quark:pink_rune' },
                L: { item: 'astralsorcery:glass_lens' }
            },
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/colored_lens_regeneration'
        },
        {
            output: Item.of('astralsorcery:colored_lens_damage', 3),
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            pattern: ['_S_S_', 'R_Q_R', '_ALA_', '_SQS_', 'R___R'],
            key: {
                R: { item: 'astralsorcery:resonating_gem' },
                S: { item: 'astralsorcery:stardust' },
                A: { item: 'bloodmagic:melee_anointment_l' },
                Q: { item: 'quark:red_rune' },
                L: { item: 'astralsorcery:glass_lens' }
            },
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/colored_lens_damage'
        },
        {
            output: Item.of('astralsorcery:colored_lens_fire', 3),
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            pattern: ['_S_S_', 'S_Q_S', '_ALA_', 'R_Q_R', '_R_R_'],
            key: {
                R: { item: 'astralsorcery:resonating_gem' },
                S: { item: 'astralsorcery:stardust' },
                A: { item: 'bloodmagic:smelting_anointment_l' },
                Q: { item: 'quark:orange_rune' },
                L: { item: 'astralsorcery:glass_lens' }
            },
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/colored_lens_fire'
        },
        {
            output: Item.of('astralsorcery:colored_lens_break', 3),
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            pattern: ['R___R', 'RSQSR', '_ALA_', '_SQS_', '_____'],
            key: {
                R: { item: 'astralsorcery:resonating_gem' },
                S: { item: 'astralsorcery:stardust' },
                A: { item: 'bloodmagic:hidden_knowledge_anointment_l' },
                Q: { item: 'quark:yellow_rune' },
                L: { item: 'astralsorcery:glass_lens' }
            },
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/colored_lens_break'
        },
        {
            output: Item.of('astralsorcery:colored_lens_growth', 3),
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            pattern: ['_R_R_', 'R_Q_R', '_ALA_', '_SQS_', 'S___S'],
            key: {
                R: { item: 'astralsorcery:resonating_gem' },
                S: { item: 'naturesaura:gold_powder' },
                A: { item: 'bloodmagic:fortune_anointment_l' },
                Q: { item: 'quark:lime_rune' },
                L: { item: 'astralsorcery:glass_lens' }
            },
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/colored_lens_growth'
        },
        {
            output: Item.of('astralsorcery:colored_lens_push', 3),
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            pattern: ['___R_', 'SSQR_', '_ALA_', '_RQSS', '_R___'],
            key: {
                R: { item: 'astralsorcery:resonating_gem' },
                S: { item: 'astralsorcery:stardust' },
                A: { item: 'bloodmagic:bow_velocity_anointment_l' },
                Q: { item: 'quark:light_blue_rune' },
                L: { item: 'astralsorcery:glass_lens' }
            },
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/colored_lens_push'
        },
        {
            output: Item.of('astralsorcery:colored_lens_spectral', 3),
            altar_type: 2,
            duration: 400,
            starlight: 2000,
            pattern: ['S___S', '_SQS_', '_ALA_', 'R_Q_R', '_R_R_'],
            key: {
                R: { item: 'astralsorcery:resonating_gem' },
                S: { item: 'atum:ectoplasm' },
                A: { item: 'bloodmagic:silk_touch_anointment_l' },
                Q: { item: 'quark:purple_rune' },
                L: { item: 'astralsorcery:glass_lens' }
            },
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/colored_lens_spectral'
        },
        {
            output: Item.of('botania:elven_spreader'),
            pattern: ['_C_C_', 'CADAC', '_FEG_', 'CBDBC', '_C_C_'],
            key: {
                A: { tag: 'botania:runes/air' },
                B: { tag: 'botania:runes/summer' },
                C: { item: 'botania:dreamwood' },
                D: { item: 'botania:glimmering_dreamwood' },
                E: { item: 'botania:spark' },
                F: { tag: 'forge:ingots/elementium' },
                G: { item: 'astralsorcery:colored_lens_push' }
            },
            altar_type: 2,
            duration: 400,
            starlight: 3800,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}elven_spreader`
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'astralsorcery:altar',
            altar_type: recipe.altar_type,
            duration: recipe.duration,
            starlight: recipe.starlight,
            pattern: recipe.pattern,
            key: recipe.key,
            output: [recipe.output.toResultJson()],
            effects: recipe.effects
        };

        if (recipe.relay_inputs) {
            constructed_recipe.relay_inputs = recipe.relay_inputs;
        }
        if (recipe.focus_constellation) {
            constructed_recipe.focus_constellation = recipe.focus_constellation;
        }
        if (recipe.recipe_class) {
            constructed_recipe.recipe_class = recipe.recipe_class;
        }

        event.custom(constructed_recipe).id(recipe.id);
    });
});
