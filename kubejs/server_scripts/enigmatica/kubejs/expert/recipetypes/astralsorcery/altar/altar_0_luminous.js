onEvent('recipes', (event) => {
    /*
    Note, max starlight is theoretical. In practice, assume roughly 95% as the max reasonable level

    Luminous Crafting Table
    altar_type: 0
    max_starlight: 1000 
    */
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/astralsorcery/altar/';
    const recipes = [
        /// Luminous Crafting Table Recipes
        {
            output: Item.of('astralsorcery:well'),
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
            output: Item.of('astralsorcery:spectral_relay'),
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
            output: Item.of('astralsorcery:altar_attunement'),
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
                E: { tag: 'botania:runes/mana' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 500,
            recipe_class: 'astralsorcery:attunement_upgrade',
            effects: ['astralsorcery:built_in_effect_discovery_central_beam', 'astralsorcery:upgrade_altar'],
            id: 'astralsorcery:altar/altar_attunement'
        },
        {
            output: Item.of('botania:runic_altar'),
            pattern: ['_____', '_AAA_', '_ABA_', '_CDC_', '_____'],
            key: {
                A: { item: 'botania:livingrock' },
                B: { item: 'minecraft:conduit' },
                C: { tag: 'forge:ingots/infused_iron' },
                D: {
                    type: 'forge:nbt',
                    item: 'naturesaura:aura_cache',
                    count: 1,
                    nbt: '{aura:400000}'
                }
            },
            altar_type: 0,
            duration: 100,
            starlight: 500,
            effects: ['astralsorcery:built_in_effect_discovery_central_beam'],
            id: `${id_prefix}runic_altar`
        },
        {
            output: Item.of('botania:mana_spreader'),
            pattern: ['_____', '_ABA_', '_CDE_', '_ABA_', '_____'],
            key: {
                A: { item: 'botania:livingwood' },
                B: { item: 'botania:glimmering_livingwood' },
                C: { tag: 'forge:ingots/infused_iron' },
                D: { item: 'botania:spark' },
                E: { item: 'atum:crystal_glass_pane' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: ['astralsorcery:built_in_effect_discovery_central_beam'],
            id: `${id_prefix}mana_spreader`
        },
        {
            output: Item.of('apotheosis:hellshelf', 1),
            pattern: ['_____', '_ACF_', '_BEB_', '_FCA_', '_____'],
            key: {
                A: { item: 'tconstruct:scorched_bricks' },
                B: { tag: 'botania:runes/fire' },
                C: { item: 'resourcefulbees:ghast_honeycomb' },
                E: { tag: 'forge:bookshelves' },
                F: { item: 'ars_nouveau:blaze_fiber' }
            },
            altar_type: 0,
            duration: 100,
            starlight: 200,
            effects: ['astralsorcery:built_in_effect_discovery_central_beam'],
            id: `${id_prefix}hellshelf`
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
