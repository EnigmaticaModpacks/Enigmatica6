onEvent('recipes', (event) => {
    /*
    Note, max starlight is theoretical. In practice, assume roughly 95% as the max reasonable level

    Luminous Crafting Table
    altar_type: 0
    max_starlight: 1000
    
    Starlight Crafting Altar 
    altar_type: 1
    max_starlight: 2000

    Celestial Altar
    altar_type: 2
    max_starlight: 4000

    Iridescent Altar
    altar_type: 3
    max_starlight: 8000

    */

    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/astralsorcery/altar/';
    const recipes = [
        {
            output: Item.of('astralsorcery:well', 1),
            pattern: ['_____', '_B_B_', '_CDC_', '_ABA_', '_____'],
            key: {
                A: { item: 'astralsorcery:resonating_gem' },
                B: { item: 'astralsorcery:marble_runed' },
                C: { item: 'create:refined_radiance' },
                D: { tag: 'botania:runes/winter' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: ['astralsorcery:built_in_effect_discovery_central_beam'],
            id: 'astralsorcery:altar/well'
        },
        {
            output: Item.of('astralsorcery:spectral_relay', 1),
            pattern: ['_____', '_ABA_', '_DCD_', '_____', '_____'],
            key: {
                A: { item: 'eidolon:gold_inlay' },
                B: { item: 'astralsorcery:glass_lens' },
                C: { item: 'create:refined_radiance' },
                D: { tag: 'botania:runes/air' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: ['astralsorcery:built_in_effect_discovery_central_beam'],
            id: 'astralsorcery:altar/spectral_relay'
        },
        {
            output: Item.of('astralsorcery:glass_lens', 2),
            pattern: ['_____', '__A__', '_ABA_', '__A__', '_____'],
            key: {
                A: { item: 'astralsorcery:resonating_gem' },
                B: { item: 'occultism:infused_lenses' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: ['astralsorcery:built_in_effect_discovery_central_beam'],
            id: 'astralsorcery:altar/glass_lens'
        },
        {
            output: Item.of('astralsorcery:altar_attunement', 1),
            pattern: ['_____', '_BAB_', '_CDC_', '_BEB_', '_____'],
            key: {
                A: {
                    type: 'astralsorcery:crystal',
                    hasToBeAttuned: false,
                    hasToBeCelestial: false,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true
                },
                B: { item: 'astralsorcery:marble_pillar' },
                C: { item: 'create:refined_radiance' },
                D: {
                    type: 'astralsorcery:fluid',
                    fluid: [{ fluid: 'astralsorcery:liquid_starlight', amount: 1000 }]
                },
                E: { tag: 'botania:runes/envy' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 700,
            recipe_class: 'astralsorcery:attunement_upgrade',
            effects: ['astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:upgrade_altar'],
            id: 'astralsorcery:altar/altar_attunement'
        },
        {
            output: Item.of('astralsorcery:altar_constellation', 1),
            pattern: ['B___B', '_CDC_', '_EAE_', '_FGF_', 'B___B'],
            key: {
                A: {
                    type: 'astralsorcery:crystal',
                    hasToBeAttuned: false,
                    hasToBeCelestial: false,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true
                },
                B: { tag: 'forge:storage_blocks/bronze' },
                C: { tag: 'forge:dusts/starmetal' },
                D: { tag: 'botania:runes/vanaheim' },
                E: { item: 'create:refined_radiance' },
                F: { item: 'astralsorcery:infused_wood_arch' },
                G: { tag: 'forge:storage_blocks/starmetal' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 1400,
            recipe_class: 'astralsorcery:constellation_upgrade',
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:upgrade_altar',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/altar_constellation'
        },
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
            output: Item.of('astralsorcery:attunement_altar', 1),
            pattern: ['A___A', '_BCB_', '_DED_', '_FGF_', 'A___A'],
            key: {
                A: { item: 'astralsorcery:marble_runed' },
                B: { item: 'astralsorcery:resonating_gem' },
                C: { item: 'bloodmagic:weakbloodshard' },
                D: { tag: 'forge:ingots/starmetal' },
                E: { item: 'astralsorcery:spectral_relay' },
                F: { item: 'eidolon:gold_inlay' },
                G: { item: 'create:shadow_steel' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 1600,
            effects: [
                'astralsorcery:pillar_sparkle',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_lightbeams',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/attunement_altar'
        },
        {
            output: Item.of('kubejs:observatory_lens', 1),
            pattern: ['_DCD_', 'DEBED', 'CBABC', 'DEBED', '_DCD_'],
            key: {
                A: {
                    type: 'astralsorcery:crystal',
                    hasToBeAttuned: true,
                    hasToBeCelestial: true,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true
                },
                B: { item: 'astralsorcery:resonating_gem' },
                C: { tag: 'botania:runes/air' },
                D: { item: 'create:shadow_steel' },
                E: { item: 'astralsorcery:colored_lens_spectral' }
            },
            relay_inputs: [
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:nocturnal_powder' },
                { item: 'astralsorcery:illumination_powder' },
                { tag: 'astralsorcery:stardust' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:nocturnal_powder' },
                { item: 'astralsorcery:illumination_powder' },
                { tag: 'astralsorcery:stardust' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 7500,
            focus_constellation: 'astralsorcery:lucerna',
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/observatory'
        },
        {
            output: Item.of('resourcefulbees:t4_apiary', 1),
            pattern: ['__B__', '_C_D_', 'E_A_E', '_D_C_', '__B__'],
            key: {
                A: { item: 'resourcefulbees:t3_apiary' },
                B: Item.of('naturesaura:effect_powder', { effect: 'naturesaura:animal' }).toJson(),
                C: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                D: { item: 'resourcefulbees:honey_fluid_bucket' },
                E: { item: 'astralsorcery:illumination_powder' }
            },
            relay_inputs: [
                { item: 'naturesaura:token_euphoria' },
                { tag: 'botania:runes/lust' },
                { item: 'ars_nouveau:ritual_fertility' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 7500,
            focus_constellation: 'astralsorcery:aevitas',
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'resourcefulbees:t4_apiary'
        },
        {
            output: Item.of('pedestals:coin/xpenchanter', 1),
            pattern: ['AA_AA', 'ACB_A', '_DED_', 'A_FCA', 'AA_AA'],
            key: {
                A: { item: 'ars_nouveau:greater_experience_gem' },
                B: { item: 'botania:gaia_pylon' },
                C: { tag: 'botania:runes/vanaheim' },
                D: { tag: 'botania:runes/mana' },
                E: { item: 'pedestals:coin/default' },
                F: { item: 'ars_nouveau:glyph_pickup' }
            },
            relay_inputs: [
                { item: 'eidolon:shadow_gem' },
                { tag: 'forge:inlays/arcane_gold' },
                { tag: 'forge:inlays/arcane_gold' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 7500,
            focus_constellation: 'astralsorcery:lucerna',
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:gateway_edge',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'pedestals:upgrades/enchanter'
        },
        {
            output: Item.of('pedestals:coin/xpanvil', 1),
            pattern: ['AA_AA', 'ACB_A', '_DED_', 'A_FCA', 'AA_AA'],
            key: {
                A: { item: 'ars_nouveau:greater_experience_gem' },
                B: { item: 'mythicbotany:alfsteel_pylon' },
                C: { tag: 'botania:runes/vanaheim' },
                D: { tag: 'botania:runes/mana' },
                E: { item: 'pedestals:coin/default' },
                F: { item: 'ars_nouveau:glyph_pickup' }
            },
            relay_inputs: [
                { item: 'betterendforge:aeternium_hammer' },
                { tag: 'forge:ingots/netherite' },
                { tag: 'forge:ingots/netherite' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 7500,
            focus_constellation: 'astralsorcery:fornax',
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:gateway_edge',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'pedestals:upgrades/anvil'
        },
        {
            output: Item.of('apotheosis:hellshelf', 1),
            pattern: ['A___A', '__BC_', '_DED_', '_FB__', 'A___A'],
            key: {
                A: { item: 'tconstruct:scorched_bricks' },
                B: { tag: 'botania:runes/fire' },
                C: { item: 'resourcefulbees:ghast_honeycomb' },
                D: { tag: 'botania:runes/muspelheim' },
                E: { tag: 'forge:bookshelves' },
                F: { item: 'powah:crystal_blazing' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 1400,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:gateway_edge',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}hellshelf`
        },
        {
            output: Item.of('apotheosis:seashelf', 1),
            pattern: ['A___A', '__BC_', '_DED_', '_FB__', 'A___A'],
            key: {
                A: { item: 'upgrade_aquatic:prismarine_coral_block' },
                B: { tag: 'botania:runes/water' },
                C: { item: 'resourcefulbees:icy_honeycomb' },
                D: { tag: 'botania:runes/vanaheim' },
                E: { tag: 'forge:bookshelves' },
                F: { item: 'powah:crystal_niotic' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 1400,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:gateway_edge',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}seashelf`
        },
        {
            output: Item.of('apotheosis:endshelf', 1),
            pattern: ['A___A', '__BC_', '_DED_', '_FB__', 'A___A'],
            key: {
                A: { item: 'betterendforge:flavolite_runed' },
                B: { tag: 'botania:runes/mana' },
                C: { item: 'resourcefulbees:enderium_honeycomb' },
                D: { tag: 'botania:runes/nidavellir' },
                E: { tag: 'forge:bookshelves' },
                F: { item: 'betterendforge:eternal_crystal' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 1400,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:gateway_edge',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}endshelf`
        },
        {
            output: Item.of('botania:alfheim_portal', 1),
            pattern: ['A___A', '__F__', '_EDG_', '_BHB_', 'C___C'],
            key: {
                A: { item: 'resourcefulbees:emerald_honeycomb' },
                B: { item: 'botania:glimmering_livingwood' },
                C: { tag: 'forge:ingots/terrasteel' },
                D: { item: 'astralsorcery:celestial_gateway' },
                E: { tag: 'botania:runes/summer' },
                F: { item: 'naturesaura:gold_leaf' },
                G: { tag: 'botania:runes/air' },
                H: { tag: 'botania:runes/lust' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 1900,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:gateway_edge',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}alfheim_portal`
        },
        {
            output: Item.of('astralsorcery:mantle', 1),
            pattern: ['_____', 'A_B_A', 'ACDCA', 'ECFCE', 'E___E'],
            key: {
                A: { item: 'astralsorcery:resonating_gem' },
                B: {
                    type: 'astralsorcery:crystal',
                    hasToBeAttuned: false,
                    hasToBeCelestial: true,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true
                },
                C: { item: 'astralsorcery:illumination_powder' },
                D: { item: 'botania:balance_cloak' },
                E: { tag: 'astralsorcery:stardust' },
                F: { tag: 'botania:runes/mana' }
            },
            relay_inputs: [
                { tag: 'astralsorcery:starmetal' },
                { tag: 'botania:runes/envy' },
                { item: 'magicfeather:magicfeather' },
                { tag: 'botania:runes/pride' }
            ],
            altar_type: 3,
            duration: 600,
            starlight: 4800,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/mantle'
        },
        {
            output: Item.of('astralsorcery:telescope', 1),
            pattern: ['E___E', '__B__', '_CDC_', '_AAA_', 'F___F'],
            key: {
                A: { tag: 'forge:rods/treated_wood' },
                B: { item: 'astralsorcery:hand_telescope' },
                C: { tag: 'forge:ingots/sky' },
                D: { item: 'eidolon:polished_planks' },
                E: { tag: 'botania:runes/air' },
                F: { item: 'astralsorcery:nocturnal_powder' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 800,
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/telescope'
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
            output: Item.of('botania:terra_plate', 1),
            pattern: ['A___B', '_FGF_', '_IEI_', '_JHJ_', 'D___C'],
            key: {
                A: { tag: 'botania:runes/water' },
                B: { tag: 'botania:runes/earth' },
                C: { tag: 'botania:runes/fire' },
                D: { tag: 'botania:runes/air' },
                E: { tag: 'botania:runes/mana' },
                F: { item: 'pneumaticcraft:upgrade_matrix' },
                G: { tag: 'forge:storage_blocks/starmetal' },
                H: { tag: 'forge:storage_blocks/manasteel' },
                I: { item: 'kubejs:firmament' },
                J: { item: 'naturesaura:infused_stone' }
            },
            altar_type: 1,
            duration: 200,
            starlight: 1600,
            effects: [
                'astralsorcery:pillar_sparkle',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:altar_default_lightbeams',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}terra_plate`
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
            id: `${id_prefix}flight_tiara`
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
