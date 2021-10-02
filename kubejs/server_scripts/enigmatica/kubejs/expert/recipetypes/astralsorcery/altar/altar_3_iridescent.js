onEvent('recipes', (event) => {
    /*
    Note, max starlight is theoretical. In practice, assume roughly 95% as the max reasonable level

    Iridescent Altar
    altar_type: 3
    max_starlight: 8000

    */

    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/astralsorcery/altar/';
    const recipes = [
        /// Iridescent Altar Recipes
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
            output: Item.of('astralsorcery:shifting_star_armara'),
            altar_type: 3,
            duration: 600,
            starlight: 4800,
            pattern: ['__B__', '__A__', 'BCDCB', '__A__', '__B__'],
            key: {
                A: { item: 'bloodmagic:reagentbinding' },
                B: { tag: 'astralsorcery:stardust' },
                C: { tag: 'astralsorcery:starmetal' },
                D: { item: 'astralsorcery:shifting_star' }
            },
            focus_constellation: 'astralsorcery:armara',
            relay_inputs: [
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { tag: 'astralsorcery:stardust' },
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { tag: 'astralsorcery:stardust' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/shifting_star_armara'
        },
        {
            output: Item.of('astralsorcery:shifting_star_discidia'),
            altar_type: 3,
            duration: 600,
            starlight: 4800,
            pattern: ['__B__', '__A__', 'BCDCB', '__A__', '__B__'],
            key: {
                A: { item: 'bloodmagic:reagentlava' },
                B: { tag: 'astralsorcery:stardust' },
                C: { tag: 'astralsorcery:starmetal' },
                D: { item: 'astralsorcery:shifting_star' }
            },
            focus_constellation: 'astralsorcery:discidia',
            relay_inputs: [
                { item: 'bloodmagic:vengefulcrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { tag: 'astralsorcery:stardust' },
                { item: 'bloodmagic:vengefulcrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { tag: 'astralsorcery:stardust' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/shifting_star_discidia'
        },
        {
            output: Item.of('astralsorcery:shifting_star_evorsio'),
            altar_type: 3,
            duration: 600,
            starlight: 4800,
            pattern: ['__B__', '__A__', 'BCDCB', '__A__', '__B__'],
            key: {
                A: { item: 'bloodmagic:reagentfastminer' },
                B: { tag: 'astralsorcery:stardust' },
                C: { tag: 'astralsorcery:starmetal' },
                D: { item: 'astralsorcery:shifting_star' }
            },
            focus_constellation: 'astralsorcery:evorsio',
            relay_inputs: [
                { item: 'bloodmagic:destructivecrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { tag: 'astralsorcery:stardust' },
                { item: 'bloodmagic:destructivecrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { tag: 'astralsorcery:stardust' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/shifting_star_evorsio'
        },
        {
            output: Item.of('astralsorcery:shifting_star_vicio'),
            altar_type: 3,
            duration: 600,
            starlight: 4800,
            pattern: ['__B__', '__A__', 'BCDCB', '__A__', '__B__'],
            key: {
                A: { item: 'bloodmagic:reagentair' },
                B: { tag: 'astralsorcery:stardust' },
                C: { tag: 'astralsorcery:starmetal' },
                D: { item: 'astralsorcery:shifting_star' }
            },
            focus_constellation: 'astralsorcery:vicio',
            relay_inputs: [
                { item: 'bloodmagic:defaultcrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { tag: 'astralsorcery:stardust' },
                { item: 'bloodmagic:defaultcrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { tag: 'astralsorcery:stardust' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/shifting_star_vicio'
        },
        {
            output: Item.of('astralsorcery:shifting_star_aevitas'),
            altar_type: 3,
            duration: 600,
            starlight: 4800,
            pattern: ['__B__', '__A__', 'BCDCB', '__A__', '__B__'],
            key: {
                A: { item: 'bloodmagic:reagentgrowth' },
                B: { tag: 'astralsorcery:stardust' },
                C: { tag: 'astralsorcery:starmetal' },
                D: { item: 'astralsorcery:shifting_star' }
            },
            focus_constellation: 'astralsorcery:aevitas',
            relay_inputs: [
                { item: 'bloodmagic:corrosivecrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { tag: 'astralsorcery:stardust' },
                { item: 'bloodmagic:corrosivecrystal' },
                { item: 'astralsorcery:illumination_powder' },
                { tag: 'astralsorcery:stardust' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/shifting_star_aevitas'
        },
        {
            output: Item.of('botania:gaia_spreader'),
            altar_type: 3,
            duration: 720,
            starlight: 6400,
            pattern: ['_____', '_AAA_', '_BCD_', '_AAA_', '_____'],
            key: {
                A: { item: 'botania:bifrost_perm' },
                B: { tag: 'forge:gems/dragonstone' },
                C: { item: 'botania:elven_spreader' },
                D: { item: 'astralsorcery:colored_lens_spectral' }
            },
            focus_constellation: 'naturesstarlight:naritis',
            relay_inputs: [
                { item: 'botania:life_essence' },
                { item: 'mythicbotany:dream_cherry' },
                { tag: 'botania:runes/midgard' },
                { item: 'mythicbotany:dream_cherry' },
                { item: 'naturesaura:ancient_sapling' },
                { item: 'mythicbotany:dream_cherry' },
                { tag: 'botania:runes/midgard' },
                { item: 'mythicbotany:dream_cherry' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}gaia_spreader`
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
