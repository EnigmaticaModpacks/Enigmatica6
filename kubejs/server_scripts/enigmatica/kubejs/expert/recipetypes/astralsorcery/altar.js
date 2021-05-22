events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: Item.of('astralsorcery:well', 1),
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: ['astralsorcery:built_in_effect_discovery_central_beam'],
            pattern: ['_____', '_B_B_', '_CDC_', '_ABA_', '_____'],
            key: {
                A: { item: 'astralsorcery:resonating_gem' },
                B: { item: 'astralsorcery:marble_runed' },
                C: { item: 'create:refined_radiance' },
                D: { tag: 'botania:runes/winter' }
            },
            id: 'astralsorcery:altar/well'
        },
        {
            output: Item.of('astralsorcery:spectral_relay', 1),
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: ['astralsorcery:built_in_effect_discovery_central_beam'],
            pattern: ['_____', '_ABA_', '_DCD_', '_____', '_____'],
            key: {
                A: { item: 'eidolon:gold_inlay' },
                B: { item: 'astralsorcery:glass_lens' },
                C: { item: 'create:refined_radiance' },
                D: { tag: 'botania:runes/air' }
            },
            id: 'astralsorcery:altar/spectral_relay'
        },
        {
            output: Item.of('astralsorcery:glass_lens', 1),
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: ['astralsorcery:built_in_effect_discovery_central_beam'],
            pattern: ['_____', '__A__', '_ABA_', '__A__', '_____'],
            key: {
                A: { item: 'astralsorcery:resonating_gem' },
                B: { item: 'botania:mana_glass_pane' }
            },
            id: 'astralsorcery:altar/glass_lens'
        },
        {
            output: Item.of('astralsorcery:altar_attunement', 1),
            altar_type: 0,
            duration: 100,
            starlight: 700,
            effects: ['astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:upgrade_altar'],
            pattern: ['_____', '_ABA_', '_CDC_', '_AEA_', '_____'],
            key: {
                A: { item: 'astralsorcery:marble_pillar' },
                B: {
                    type: 'astralsorcery:crystal',
                    hasToBeAttuned: false,
                    hasToBeCelestial: false,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true
                },
                C: { item: 'create:refined_radiance' },
                D: {
                    type: 'astralsorcery:fluid',
                    fluid: [{ fluid: 'astralsorcery:liquid_starlight', amount: 1000 }]
                },
                E: { tag: 'botania:runes/spring' }
            },
            id: 'astralsorcery:altar/altar_attunement'
        },
        {
            output: Item.of('astralsorcery:attunement_altar', 1),
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
            id: 'astralsorcery:altar/attunement_altar'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'astralsorcery:altar',
            altar_type: recipe.altar_type,
            duration: recipe.duration,
            starlight: recipe.starlight,
            pattern: recipe.pattern,
            key: recipe.key,
            output: [recipe.output.toResultJson()],
            effects: recipe.effects
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
