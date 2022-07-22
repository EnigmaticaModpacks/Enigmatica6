onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/bloodmagic/meteor/';

    const shells = {
        dark: [
            { tag: 'occultism:otherstone', weight: 40 },
            { tag: 'atum:porphyry', weight: 20 },
            { tag: 'minecraft:blackstone', weight: 15 },
            { tag: 'byg:magmatic_stone', weight: 10 },
            { tag: 'kubejs:firmament', weight: 10 },
            { tag: 'byg:soapstone', weight: 5 }
        ],
        prismarine: [
            { tag: 'minecraft:dark_prismarine', weight: 34 },
            { tag: 'masonry:darkprismarinecobbled', weight: 30 },
            { tag: 'minecraft:prismarine', weight: 15 },
            { tag: 'minecraft:prismarine_bricks', weight: 15 },
            { tag: 'minecraft:sea_lantern', weight: 6 }
        ],
        alien: [
            { tag: 'betterendforge:umbralith', weight: 70 },
            { tag: 'betterendforge:violecite', weight: 20 },
            { tag: 'byg:carved_ether_stone', weight: 10 }
        ],
        natural: [
            { tag: 'botania:livingwood', weight: 30 },
            { tag: 'masonry:granitecobbledmossy', weight: 20 },
            { tag: 'botania:pattern_framed_livingwood', weight: 5 },
            { tag: 'quark:granite_pavement', weight: 20 },
            { tag: 'botania:mossy_livingwood_planks', weight: 15 },
            { tag: 'botania:glimmering_livingwood', weight: 10 }
        ]
    };

    const recipes = [
        // Default Meteor Overrides
        {
            input: 'pneumaticcraft:compressed_stone',
            syphon: 1000000,
            explosion: 30.0,
            layers: [
                {
                    radius: 16,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: shells.dark,
                    fill: 'occultism:otherstone'
                },
                {
                    radius: 13,
                    additionalWeight: 30,
                    minWeight: 400,
                    weightMap: [
                        { tag: 'emendatusenigmatica:apatite_scoria_ore', weight: 20 },
                        { tag: 'emendatusenigmatica:gold_scoria_ore', weight: 20 },
                        { tag: 'emendatusenigmatica:iron_scoria_ore', weight: 30 }
                    ],
                    fill: 'create:dark_scoria'
                },
                {
                    radius: 4,
                    additionalWeight: 34,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'minecraft:iron_block', weight: 33 },
                        { tag: 'pneumaticcraft:compressed_iron_block', weight: 33 }
                    ],
                    fill: 'pneumaticcraft:compressed_stone'
                }
            ],
            id: 'bloodmagic:meteor/stone'
        },
        {
            input: 'mythicbotany:helheim_rune',
            syphon: 1250000,
            explosion: 24.0,
            layers: [
                {
                    radius: 9,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: shells.dark,
                    fill: 'occultism:otherstone'
                },
                {
                    radius: 8,
                    additionalWeight: 10,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'emendatusenigmatica:quartz_basalt_ore', weight: 35 },
                        { tag: 'emendatusenigmatica:fluorite_basalt_ore', weight: 35 },
                        { tag: 'occultism:iesnium_ore', weight: 10 },
                        { tag: 'emendatusenigmatica:dimensional_basalt_ore', weight: 5 },
                        { tag: 'emendatusenigmatica:sulfur_basalt_ore', weight: 5 }
                    ],
                    fill: 'minecraft:ancient_debris'
                },
                {
                    radius: 4,
                    additionalWeight: 33,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'occultism:iesnium_block', weight: 33 },
                        { tag: 'occultism:silver_block', weight: 64 }
                    ],
                    fill: 'occultism:iesnium_ore',
                    shell: 'occultism:otherstone'
                }
            ],
            id: 'bloodmagic:meteor/nether'
        },
        {
            input: '#forge:storage_blocks/diamond',
            syphon: 1000000,
            explosion: 24.0,
            layers: [
                {
                    radius: 6,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: shells.prismarine,
                    fill: 'minecraft:prismarine'
                },
                {
                    radius: 5,
                    additionalWeight: 33,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'emendatusenigmatica:arcane_flavolite_ore', weight: 15 },
                        { tag: 'emendatusenigmatica:dimensional_flavolite_ore', weight: 15 },
                        { tag: 'emendatusenigmatica:diamond_flavolite_ore', weight: 25 },
                        { tag: 'emendatusenigmatica:emerald_flavolite_ore', weight: 7 },
                        { tag: 'emendatusenigmatica:cinnabar_flavolite_ore', weight: 5 }
                    ],
                    fill: 'betterendforge:flavolite'
                },
                {
                    radius: 1,
                    additionalWeight: 95,
                    minWeight: 0,
                    weightMap: [{ tag: 'botania:mana_diamond_block', weight: 5 }],
                    fill: 'minecraft:diamond_block'
                }
            ],
            id: 'bloodmagic:meteor/diamond'
        },

        //Custom
        {
            input: 'create:andesite_alloy',
            syphon: 500000,
            explosion: 24.0,
            layers: [
                {
                    radius: 8,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: shells.dark,
                    fill: 'occultism:otherstone'
                },
                {
                    radius: 7,
                    additionalWeight: 200,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'emendatusenigmatica:copper_blackstone_ore', weight: 100 },
                        { tag: 'emendatusenigmatica:zinc_blackstone_ore', weight: 10 },
                        { tag: 'emendatusenigmatica:iron_blackstone_ore', weight: 100 },
                        { tag: 'emendatusenigmatica:emerald_blackstone_ore', weight: 50 }
                    ],
                    fill: 'minecraft:blackstone'
                }
            ],
            id: `${id_prefix}andesite`
        },
        {
            input: '#atum:godforged_blocks',
            syphon: 1250000,
            explosion: 24.0,
            layers: [
                {
                    radius: 8,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: shells.dark,
                    fill: 'occultism:otherstone'
                },
                {
                    radius: 7,
                    additionalWeight: 200,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'emendatusenigmatica:uranium_flavolite_ore', weight: 100 },
                        { tag: 'emendatusenigmatica:gold_flavolite_ore', weight: 10 }
                    ],
                    fill: 'betterendforge:flavolite'
                },
                {
                    radius: 3,
                    additionalWeight: 25,
                    minWeight: 0,
                    weightMap: [{ tag: 'atum:godforged_block', weight: 75 }],
                    fill: 'atum:nebu_block'
                }
            ],
            id: `${id_prefix}godforged`
        },
        {
            input: 'thermal:slime_tnt',
            syphon: 10000,
            explosion: 24.0,
            layers: [
                {
                    radius: 7,
                    additionalWeight: 75,
                    minWeight: 0,
                    weightMap: [{ tag: 'tconstruct:sky_congealed_slime', weight: 25 }],
                    fill: 'tconstruct:earth_congealed_slime'
                },
                {
                    radius: 4,
                    additionalWeight: 75,
                    minWeight: 0,
                    weightMap: [{ tag: 'tconstruct:blood_congealed_slime', weight: 25 }],
                    fill: 'tconstruct:ichor_congealed_slime'
                }
            ],
            id: `${id_prefix}slime`
        },
        {
            input: 'botania:rune_mana',
            syphon: 500000,
            explosion: 24.0,
            layers: [
                {
                    radius: 9,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: shells.alien,
                    fill: 'betterendforge:umbralith'
                },
                {
                    radius: 8,
                    additionalWeight: 50,
                    minWeight: 0,
                    weightMap: [{ tag: 'betterendforge:aurora_crystal', weight: 50 }],
                    fill: 'ars_nouveau:mana_gem_block',
                    shell: 'ars_nouveau:arcane_stone'
                },
                {
                    radius: 4,
                    additionalWeight: 15,
                    minWeight: 0,
                    weightMap: [{ tag: 'naturesaura:tainted_gold_block', weight: 85 }],
                    fill: 'eidolon:arcane_gold_block',
                    shell: 'ars_nouveau:warding_stone'
                }
            ],
            id: `${id_prefix}arcane`
        },
        {
            input: 'botania:rune_earth',
            syphon: 500000,
            explosion: 24.0,
            layers: [
                {
                    radius: 9,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: shells.natural,
                    fill: 'botania:livingwood'
                },
                {
                    radius: 8,
                    additionalWeight: 50,
                    minWeight: 0,
                    weightMap: [{ tag: 'betterendforge:smaragdant_crystal', weight: 50 }],
                    fill: 'upgrade_aquatic:luminous_prismarine',
                    shell: 'botania:livingrock'
                },
                {
                    radius: 4,
                    additionalWeight: 15,
                    minWeight: 0,
                    weightMap: [{ tag: 'chisel:emerald/cellbismuth', weight: 85 }],
                    fill: 'naturesaura:infused_iron_block',
                    shell: 'botania:livingrock'
                }
            ],
            id: `${id_prefix}natural`
        },
        {
            input: 'botania:rune_water',
            syphon: 500000,
            explosion: 24.0,
            layers: [
                {
                    radius: 6,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: shells.prismarine,
                    fill: 'minecraft:prismarine'
                },
                {
                    radius: 5,
                    additionalWeight: 50,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'upgrade_aquatic:prismarine_coral_block', weight: 10 },
                        { tag: 'upgrade_aquatic:elder_prismarine_coral_block', weight: 10 },
                        { tag: 'upgrade_aquatic:prismarine_coralstone', weight: 10 },
                        { tag: 'upgrade_aquatic:elder_prismarine_coralstone', weight: 10 },
                        { tag: 'upgrade_aquatic:luminous_prismarine', weight: 10 }
                    ],
                    fill: 'minecraft:water'
                },
                {
                    radius: 2,
                    additionalWeight: 100,
                    minWeight: 0,
                    fill: 'minecraft:water'
                }
            ],
            id: `${id_prefix}water`
        },
        {
            input: 'betterendforge:eternal_crystal',
            syphon: 1250000,
            explosion: 24.0,
            layers: [
                {
                    radius: 9,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: shells.alien,
                    fill: 'betterendforge:umbralith'
                },
                {
                    radius: 8,
                    additionalWeight: 20,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'emendatusenigmatica:diamond_flavolite_ore', weight: 50 },
                        { tag: 'emendatusenigmatica:lead_flavolite_ore', weight: 30 }
                    ],
                    fill: 'betterendforge:flavolite'
                },
                {
                    radius: 5,
                    additionalWeight: 60,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'betterendforge:aeternium_block', weight: 30 },
                        { tag: 'betterendforge:ender_block', weight: 10 }
                    ],
                    fill: 'betterendforge:terminite_block'
                },
                {
                    radius: 3,
                    additionalWeight: 100,
                    minWeight: 0,
                    fill: 'minecraft:lava',
                    shell: 'betterendforge:ender_block'
                }
            ],
            id: `${id_prefix}resonant`
        }
    ];

    // Patchouli Safe Removals
    const patchouli_removals_by_id = [
        'bloodmagic:meteor/create',
        'bloodmagic:meteor/ae2',
        'bloodmagic:meteor/immersive_engineering',
        'bloodmagic:meteor/myst_ag',
        'bloodmagic:meteor/thermal',
        'bloodmagic:meteor/mekanism'
    ];

    patchouli_removals_by_id.forEach((patchouli_removal_by_id) => {
        recipes.push({
            input: 'kubejs:disabled_recipe_indicator',
            syphon: 0,
            explosion: 0.0,
            layers: [],
            id: patchouli_removal_by_id
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'bloodmagic:meteor';
        recipe.input = Ingredient.of(recipe.input).toJson();
        //set cost to 0 for testing. Remove before merge
        recipe.syphon = 0;
        event.custom(recipe).id(recipe.id);
    });
});
