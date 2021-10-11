onEvent('recipes', (event) => {
    /*
    Note, max starlight is theoretical. In practice, assume roughly 95% as the max reasonable level
   
    Starlight Crafting Altar 
    altar_type: 1
    max_starlight: 2000
    */

    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/astralsorcery/altar/';
    const recipes = [
        /// Starlight Crafting Altar Recipes
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
                F: { item: 'botania:spectral_platform' },
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
            output: Item.of('astralsorcery:shifting_star'),
            altar_type: 1,
            duration: 200,
            starlight: 1600,
            pattern: ['A___A', '_ECB_', '_CDC_', '_BCE_', 'A___A'],
            key: {
                A: { tag: 'forge:gems/niotic' },
                B: { tag: 'astralsorcery:stardust' },
                C: { item: 'astralsorcery:illumination_powder' },
                D: {
                    type: 'astralsorcery:fluid',
                    fluid: [
                        {
                            fluid: 'industrialforegoing:ether_gas',
                            amount: 1000
                        }
                    ]
                },
                E: { item: 'bloodmagic:reagentbinding' }
            },
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/shifting_star'
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

        /// Guidebook safe removals

        {
            output: Item.of('astralsorcery:attunement_altar'),
            pattern: ['_____', '_____', '__A__', '_____', '_____'],
            key: {
                A: { item: 'kubejs:altered_recipe_indicator' }
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
            output: Item.of('astralsorcery:ritual_pedestal'),
            altar_type: 1,
            duration: 200,
            starlight: 1400,
            pattern: ['A___A', '_BCB_', '_GEG_', '_FFF_', 'D___D'],
            key: {
                A: { tag: 'forge:ingots/arcane_gold' },
                B: { item: 'astralsorcery:marble_chiseled' },
                C: { item: 'minecraft:conduit' },
                D: { item: 'astralsorcery:marble_pillar' },
                E: { item: 'bloodmagic:masterritualstone' },
                F: { item: 'astralsorcery:marble_runed' },
                G: { tag: 'forge:inlays/arcane_gold' }
            },
            effects: [
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/ritual_pedestal'
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
