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
        light: [
            { tag: 'byg:rocky_stone', weight: 40 },
            { tag: 'architects_palette:heavy_cracked_stone_bricks', weight: 25 },
            { tag: 'architects_palette:heavy_stone_bricks', weight: 15 },
            { tag: 'architects_palette:heavy_mossy_stone_bricks', weight: 15 },
            { tag: 'simplylight:illuminant_block_on', weight: 5 }
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
        ],
        algal: [
            { tag: 'architects_palette:algal_bricks', weight: 34 },
            { tag: 'architects_palette:cracked_algal_bricks', weight: 30 },
            { tag: 'architects_palette:overgrown_algal_bricks', weight: 15 },
            { tag: 'emendatusenigmatica:uranium_block', weight: 15 },
            { tag: 'architects_palette:algal_lamp', weight: 6 }
        ],
        booger: [
            { tag: 'environmental:yak_hair_block', weight: 60 },
            { tag: 'undergarden:goo_block', weight: 40 }
        ],
        celestial: [
            { tag: 'chipped:sea_lantern_14', weight: 34 },
            { tag: 'chipped:sea_lantern_1', weight: 30 },
            { tag: 'chipped:sea_lantern_2', weight: 15 },
            { tag: 'astralsorcery:marble_raw', weight: 15 },
            { tag: 'astralsorcery:rock_crystal_ore', weight: 6 }
        ],
        frosted: [
            { tag: 'undergarden:shiverstone', weight: 39 },
            { tag: 'byg:ether_stone', weight: 30 },
            { tag: 'betterendforge:dense_snow', weight: 15 },
            { tag: 'undergarden:froststeel_ore', weight: 10 },
            { tag: 'create:zinc_block', weight: 6 }
        ],
        meat: [
            { tag: 'architects_palette:salmon_scales', weight: 50 },
            { tag: 'undergarden:blood_mushroom_globule', weight: 30 },
            { tag: 'atmospheric:stripped_morado_wood', weight: 15 },
            { tag: 'architects_palette:rotten_flesh_block', weight: 5 }
        ],
        void: [
            { tag: 'betterendforge:violecite', weight: 30 },
            { tag: 'occultism:otherstone', weight: 25 },
            { tag: 'quark:dusky_myalite', weight: 15 },
            { tag: 'minecraft:netherite_block', weight: 15 },
            { tag: 'minecraft:crying_obsidian', weight: 10 },
            { tag: 'dustrial_decor:black_light', weight: 5 }
        ],
        pink: [
            { tag: 'minecraft:red_terracotta', weight: 30 },
            { tag: 'quark:pink_shingles', weight: 20 },
            { tag: 'minecraft:terracotta', weight: 20 },
            { tag: 'minecraft:granite', weight: 10 },
            { tag: 'masonry:granitecobbled', weight: 10 },
            { tag: 'minecraft:polished_granite', weight: 5 },
            { tag: 'minecraft:redstone_block', weight: 5 }
        ],
        honey: [
            { tag: 'minecraft:yellow_glazed_terracotta', weight: 30 },
            { tag: 'chisel:wool/yellow/llama', weight: 20 },
            { tag: 'minecraft:honey_block', weight: 20 },
            { tag: 'minecraft:honeycomb_block', weight: 10 },
            { tag: 'minecraft:yellow_terracotta', weight: 10 },
            { tag: 'minecraft:yellow_concrete', weight: 10 }
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
                    weightMap: shells.pink,
                    fill: 'minecraft:red_terracotta'
                },
                {
                    radius: 13,
                    additionalWeight: 30,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'thermal:apatite_block', weight: 5 },
                        { tag: 'emendatusenigmatica:zinc_scoria_ore', weight: 15 },
                        { tag: 'emendatusenigmatica:nickel_scoria_ore', weight: 20 },
                        { tag: 'emendatusenigmatica:iron_scoria_ore', weight: 30 }
                    ],
                    fill: 'create:dark_scoria'
                },
                {
                    radius: 4,
                    additionalWeight: 34,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'kubejs:superheated_steel_block', weight: 33 },
                        { tag: 'kubejs:hot_compressed_iron_block', weight: 33 }
                    ],
                    fill: 'pneumaticcraft:compressed_stone',
                    shell: 'pneumaticcraft:compressed_stone'
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
        {
            input: '#forge:storage_blocks/iron',
            syphon: 1000000,
            explosion: 24.0,
            layers: [
                {
                    radius: 16,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: shells.light,
                    fill: 'byg:rocky_stone'
                },
                {
                    radius: 15,
                    additionalWeight: 10,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'emendatusenigmatica:iron_andesite_ore', weight: 25 },
                        { tag: 'emendatusenigmatica:copper_andesite_ore', weight: 17 },
                        { tag: 'emendatusenigmatica:tin_andesite_ore', weight: 12 },
                        { tag: 'emendatusenigmatica:nickel_andesite_ore', weight: 10 },
                        { tag: 'emendatusenigmatica:aluminum_andesite_ore', weight: 9 },
                        { tag: 'emendatusenigmatica:silver_andesite_ore', weight: 8 },
                        { tag: 'emendatusenigmatica:lead_andesite_ore', weight: 6 },
                        { tag: 'emendatusenigmatica:gold_andesite_ore', weight: 5 },
                        { tag: 'emendatusenigmatica:lapis_gravel_ore', weight: 5 },
                        { tag: 'emendatusenigmatica:redstone_gravel_ore', weight: 3 }
                    ],
                    fill: 'quark:white_crystal'
                },
                {
                    radius: 7,
                    additionalWeight: 10,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'emendatusenigmatica:copper_deepslate_ore', weight: 20 },
                        { tag: 'emendatusenigmatica:gold_deepslate_ore', weight: 15 },
                        { tag: 'emendatusenigmatica:aluminum_deepslate_ore', weight: 15 },
                        { tag: 'emendatusenigmatica:silver_deepslate_ore', weight: 10 },
                        { tag: 'emendatusenigmatica:lead_deepslate_ore', weight: 10 },
                        { tag: 'emendatusenigmatica:tin_deepslate_ore', weight: 5 },
                        { tag: 'emendatusenigmatica:nickel_deepslate_ore', weight: 5 },
                        { tag: 'emendatusenigmatica:lapis_deepslate_ore', weight: 5 },
                        { tag: 'emendatusenigmatica:redstone_deepslate_ore', weight: 5 }
                    ],
                    fill: 'emendatusenigmatica:iron_deepslate_ore',
                    shell: 'quark:polished_deepslate'
                }
            ],
            id: 'bloodmagic:meteor/iron'
        },

        //Custom
        {
            input: '#atum:godforged_blocks',
            syphon: 1250000,
            explosion: 24.0,
            layers: [
                {
                    radius: 9,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: shells.void,
                    fill: 'occultism:otherstone'
                },
                {
                    radius: 8,
                    additionalWeight: 50,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'emendatusenigmatica:uranium_flavolite_ore', weight: 15 },
                        { tag: 'emendatusenigmatica:gold_flavolite_ore', weight: 35 }
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
                    weightMap: shells.frosted,
                    fill: 'undergarden:shiverstone'
                },
                {
                    radius: 8,
                    additionalWeight: 30,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'emendatusenigmatica:diamond_flavolite_ore', weight: 40 },
                        { tag: 'emendatusenigmatica:lead_flavolite_ore', weight: 20 },
                        { tag: 'emendatusenigmatica:dimensional_flavolite_ore', weight: 10 }
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
        },
        {
            input: 'botania:rune_spring',
            syphon: 1250000,
            explosion: 24.0,
            layers: [
                {
                    radius: 9,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: shells.algal,
                    fill: 'architects_palette:algal_bricks'
                },
                {
                    radius: 8,
                    additionalWeight: 10,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'betterendforge:ancient_emerald_ice', weight: 60 },
                        { tag: 'betterendforge:dense_emerald_ice', weight: 30 }
                    ],
                    fill: 'upgrade_aquatic:luminous_prismarine'
                },
                {
                    radius: 3,
                    additionalWeight: 50,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'powah:spirited_crystal_block', weight: 30 },
                        { tag: 'architects_palette:entwine_block', weight: 20 }
                    ],
                    fill: 'architects_palette:chiseled_entwine',
                    shell: 'betterendforge:smaragdant_crystal'
                }
            ],
            id: `${id_prefix}spirited`
        },
        {
            input: 'undergarden:goo_ball',
            syphon: 50000,
            explosion: 12,
            layers: [
                {
                    radius: 5,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: shells.booger,
                    fill: 'environmental:yak_hair_block'
                },
                {
                    radius: 4,
                    additionalWeight: 0,
                    minWeight: 0,
                    fill: 'environmental:buried_truffle',
                    shell: 'environmental:mud'
                }
            ],
            id: `${id_prefix}booger_bomb`
        },
        {
            input: 'astralsorcery:celestial_crystal',
            syphon: 1250000,
            explosion: 24.0,
            layers: [
                {
                    radius: 8,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: shells.celestial,
                    fill: 'chipped:sea_lantern_14'
                },
                {
                    radius: 7,
                    additionalWeight: 30,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'chipped:sea_lantern_14', weight: 10 },
                        { tag: 'architects_palette:moonstone', weight: 30 },
                        { tag: 'astralsorcery:starmetal', weight: 30 }
                    ],
                    fill: 'kubejs:firmament'
                },
                {
                    radius: 2,
                    additionalWeight: 20,
                    minWeight: 0,
                    weightMap: [{ tag: 'powah:niotic_crystal_block', weight: 80 }],
                    fill: 'betterendforge:umbralith',
                    shell: 'betterendforge:umbralith'
                }
            ],
            id: `${id_prefix}celestial`
        },
        {
            input: '#enigmatica:meats',
            syphon: 50000,
            explosion: 24.0,
            layers: [
                {
                    radius: 7,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: shells.meat,
                    fill: 'architects_palette:salmon_scales'
                },
                {
                    radius: 6,
                    additionalWeight: 35,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'chipped:nether_wart_block_6', weight: 30 },
                        { tag: 'architects_palette:entrails', weight: 20 },
                        { tag: 'chipped:brown_mushroom_block_24', weight: 8 },
                        { tag: 'chipped:brown_mushroom_block_23', weight: 7 }
                    ],
                    fill: 'chipped:red_nether_bricks_7'
                },
                {
                    radius: 3,
                    additionalWeight: 10,
                    minWeight: 0,
                    weightMap: [{ tag: 'minecraft:bone_block', weight: 90 }],
                    fill: 'valhelsia_structures:bone_pile_block',
                    shell: 'architects_palette:entrails'
                }
            ],
            id: `${id_prefix}meateor`
        },
        {
            input: 'resourcefulbees:centrifuge',
            syphon: 1250000,
            explosion: 24.0,
            layers: [
                {
                    radius: 9,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: shells.honey,
                    fill: 'minecraft:yellow_glazed_terracotta'
                },
                {
                    radius: 7,
                    additionalWeight: 50,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'minecraft:honey_block', weight: 20 },
                        { tag: 'minecraft:honeycomb_block', weight: 30 }
                    ],
                    fill: 'minecraft:air'
                },

                {
                    radius: 3,
                    additionalWeight: 25,
                    minWeight: 0,
                    weightMap: [{ tag: 'resourcefulbees:industrious_honeycomb_block', weight: 75 }],
                    fill: 'environmental:magenta_terracotta_bricks',
                    shell: 'minecraft:honeycomb_block'
                }
            ],
            id: `${id_prefix}honey`
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

        event.custom(recipe).id(recipe.id);
    });
});
