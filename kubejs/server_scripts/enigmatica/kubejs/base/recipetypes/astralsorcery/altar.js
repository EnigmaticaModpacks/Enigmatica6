onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/astralsorcery/altar/';

    const recipes = [
        {
            output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:starry_bee' }),
            pattern: ['_____', '__E__', '_DCB_', '__A__', '_____'],
            key: {
                A: {
                    type: 'astralsorcery:crystal',
                    hasToBeAttuned: false,
                    hasToBeCelestial: false,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true
                },
                B: { item: 'resourcefulbees:gold_honeycomb' },
                C: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:iron_bee' }).weakNBT().toJson(),
                D: { item: 'resourcefulbees:iron_honeycomb' },
                E: { item: 'astralsorcery:colored_lens_spectral' }
            },
            relay_inputs: [
                { item: 'astralsorcery:resonating_gem' },
                { item: 'astralsorcery:illumination_powder' },
                { tag: 'astralsorcery:stardust' },
                { item: 'resourcefulbees:iron_honey_block' }
            ],
            altar_type: 3,
            duration: 400,
            starlight: 3200,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines'
            ],
            id: `${id_prefix}starry_bee_jar`
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
