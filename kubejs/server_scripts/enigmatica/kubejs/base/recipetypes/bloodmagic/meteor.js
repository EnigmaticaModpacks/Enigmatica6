onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/bloodmagic/meteor/';
    const recipes = [
        // Default Meteor Overrides
        {
            input: '#forge:stone',
            syphon: 1000000,
            explosion: 30.0,
            layers: [
                {
                    radius: 16,
                    additionalWeight: 0,
                    minWeight: 400,
                    weightMap: [
                        { tag: '#forge:ores/apatite', weight: 50 },
                        { tag: '#forge:ores/coal', weight: 150 },
                        { tag: 'minecraft:iron_ore', weight: 50 }
                    ],
                    fill: 'minecraft:stone',
                    shell: '#minecraft:stone_unpolished'
                }
            ],
            id: 'bloodmagic:meteor/stone'
        },
        {
            input: '#forge:dusts/glowstone',
            syphon: 1000000,
            explosion: 12.0,
            layers: [
                {
                    radius: 8,
                    additionalWeight: 0,
                    minWeight: 500,
                    weightMap: [
                        { tag: 'minecraft:glowstone', weight: 100 },
                        { tag: 'minecraft:nether_quartz_ore', weight: 150 },
                        { tag: 'minecraft:nether_gold_ore', weight: 60 }
                    ],
                    fill: 'minecraft:netherrack'
                },
                {
                    radius: 5,
                    additionalWeight: 0,
                    minWeight: 1000,
                    weightMap: [
                        { tag: 'minecraft:ancient_debris', weight: 60 },
                        { tag: 'minecraft:chiseled_polished_blackstone', weight: 300 },
                        { tag: 'minecraft:gilded_blackstone', weight: 200 },
                        { tag: 'minecraft:polished_blackstone', weight: 400 }
                    ],
                    fill: 'minecraft:blackstone',
                    shell: 'minecraft:glowstone'
                }
            ],
            id: 'bloodmagic:meteor/nether'
        },
        {
            input: '#forge:storage_blocks/iron',
            syphon: 1000000,
            explosion: 14.0,
            layers: [
                {
                    radius: 4,
                    additionalWeight: 0,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'minecraft:gold_ore', weight: 30 },
                        { tag: '#forge:ores/copper', weight: 200 },
                        { tag: '#forge:ores/tin', weight: 140 },
                        { tag: '#forge:ores/silver', weight: 70 },
                        { tag: '#forge:ores/lead', weight: 80 },
                        { tag: 'minecraft:lapis_ore', weight: 60 },
                        { tag: 'minecraft:redstone_ore', weight: 100 }
                    ],
                    fill: 'minecraft:iron_ore',
                    shell: '#forge:cobblestone'
                },
                {
                    radius: 7,
                    additionalWeight: 100,
                    minWeight: 1000,
                    weightMap: [
                        { tag: 'minecraft:iron_ore', weight: 400 },
                        { tag: 'minecraft:gold_ore', weight: 30 },
                        { tag: '#forge:ores/copper', weight: 200 },
                        { tag: '#forge:ores/tin', weight: 140 },
                        { tag: '#forge:ores/silver', weight: 70 },
                        { tag: '#forge:ores/lead', weight: 80 },
                        { tag: 'minecraft:lapis_ore', weight: 60 },
                        { tag: 'minecraft:redstone_ore', weight: 100 }
                    ],
                    fill: 'minecraft:stone'
                }
            ],
            id: 'bloodmagic:meteor/nether'
        },
        {
            input: '#forge:gems/diamond',
            syphon: 1000000,
            explosion: 8.0,
            layers: [
                {
                    radius: 2,
                    additionalWeight: 0,
                    minWeight: 0,
                    fill: 'minecraft:diamond_ore'
                },
                {
                    radius: 5,
                    additionalWeight: 0,
                    minWeight: 1000,
                    weightMap: [
                        { tag: '#forge:ores/sapphire', weight: 100 },
                        { tag: '#forge:ores/ruby', weight: 100 },
                        { tag: 'minecraft:diamond_ore', weight: 100 },
                        { tag: 'minecraft:emerald_ore', weight: 75 },
                        { tag: '#forge:ores/cinnabar', weight: 200 }
                    ],
                    fill: 'minecraft:cobblestone'
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
                    radius: 7,
                    additionalWeight: 200,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'emendatusenigmatica:copper_blackstone_ore', weight: 100 },
                        { tag: 'emendatusenigmatica:zinc_blackstone_ore', weight: 10 },
                        { tag: 'emendatusenigmatica:iron_blackstone_ore', weight: 100 },
                        { tag: 'emendatusenigmatica:emerald_blackstone_ore', weight: 50 }
                    ],
                    fill: 'minecraft:blackstone',
                    shell: 'betterendforge:violecite'
                }
            ],
            id: `${id_prefix}andesite`
        },
        {
            input: '#atum:godforged_blocks',
            syphon: 1000000,
            explosion: 24.0,
            layers: [
                {
                    radius: 8,
                    additionalWeight: 45,
                    minWeight: 0,
                    weightMap: [
                        { tag: 'atum:porphyry', weight: 25 },
                        { tag: 'minecraft:blackstone', weight: 15 },
                        { tag: 'byg:soapstone', weight: 10 },
                        { tag: 'kubejs:firmament', weight: 5 }
                    ],
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
            syphon: 5000,
            explosion: 24.0,
            layers: [
                {
                    radius: 5,
                    additionalWeight: 75,
                    minWeight: 0,
                    weightMap: [{ tag: 'tconstruct:sky_congealed_slime', weight: 25 }],
                    fill: 'tconstruct:earth_congealed_slime'
                },
                {
                    radius: 3,
                    additionalWeight: 75,
                    minWeight: 0,
                    weightMap: [{ tag: 'tconstruct:blood_congealed_slime', weight: 25 }],
                    fill: 'tconstruct:ichor_congealed_slime'
                }
            ],
            id: `${id_prefix}slime`
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
