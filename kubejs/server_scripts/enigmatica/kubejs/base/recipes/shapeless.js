onEvent('recipes', (event) => {
    const recipes = [
        { output: 'botania:enchanted_soil', inputs: ['minecraft:grass_block', 'botania:overgrowth_seed'] },
        { output: 'minecraft:sticky_piston', inputs: ['minecraft:piston', '#forge:slimeballs'] },
        { output: 'minecraft:flint', inputs: ['#forge:gravel', '#forge:gravel', '#forge:gravel'] },
        { output: 'simplefarming:cornbread', inputs: ['#forge:grain', '#forge:crops/corn', '#forge:grain'] },
        { output: 'minecraft:chest', inputs: ['#forge:chests/wooden'] },
        { output: Item.of('powah:uraninite', 9), inputs: ['#forge:storage_blocks/uraninite'] },
        { output: Item.of('betterendforge:thallasium_nugget', 9), inputs: ['#forge:ingots/thallasium'] },
        { output: Item.of('betterendforge:terminite_nugget', 9), inputs: ['#forge:ingots/terminite'] },
        { output: Item.of('atum:nebu_drop', 9), inputs: ['#forge:ingots/nebu'] },
        {
            output: 'simplefarming:fish_sandwich',
            inputs: [
                '#forge:bread',
                'aquaculture:fish_fillet_cooked',
                'aquaculture:fish_fillet_cooked',
                '#forge:crops/tomato',
                '#forge:salad_ingredients'
            ]
        },
        {
            output: 'simplefarming:sushi',
            inputs: [
                '#forge:grain',
                'minecraft:dried_kelp',
                'aquaculture:fish_fillet_raw',
                'aquaculture:fish_fillet_raw'
            ]
        },
        {
            output: 'simplefarming:fish_fillet',
            inputs: ['#forge:grain', '#forge:grain', 'aquaculture:fish_fillet_cooked', 'aquaculture:fish_fillet_cooked']
        },
        {
            output: Item.of('farmersdelight:milk_bottle', 4),
            inputs: [
                'minecraft:milk_bucket',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle'
            ]
        },
        {
            output: 'minecraft:milk_bucket',
            inputs: [
                'minecraft:bucket',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle'
            ]
        },
        {
            output: Item.of('simplefarming:candy', 2),
            inputs: ['#forge:chocolate_bars', 'minecraft:sugar', 'minecraft:sugar']
        },
        { output: 'minecraft:wheat_seeds', inputs: ['minecraft:wheat'] },

        {
            output: Item.of('patchouli:guide_book', { 'patchouli:book': 'patchouli:modded_for_dummies' }),
            inputs: ['minecraft:book', '#forge:dyes/yellow']
        },
        { output: 'minecraft:crafting_table', inputs: ['#forge:workbenches'] },
        {
            output: Item.of('patchouli:guide_book', { 'patchouli:book': 'resourcefulbees:fifty_shades_of_bees' }),
            inputs: ['minecraft:sugar', 'minecraft:book']
        },

        {
            output: 'prettypipes:crafting_terminal',
            inputs: ['prettypipes:item_terminal', 'prettypipes:low_crafting_module'],
            id: 'prettypipes:crafting_terminal'
        },
        { output: 'ars_nouveau:mana_gem', inputs: ['emendatusenigmatica:arcane_gem'] },
        { output: 'emendatusenigmatica:arcane_gem', inputs: ['ars_nouveau:mana_gem'] },
        {
            output: 'botania:fertilizer',
            inputs: ['#forge:fertilizer', '#forge:dyes', '#forge:dyes', '#forge:dyes', '#forge:dyes']
        },
        { output: 'emendatusenigmatica:dimensional_gem', inputs: ['rftoolsbase:dimensionalshard'] },
        { output: 'rftoolsbase:dimensionalshard', inputs: ['emendatusenigmatica:dimensional_gem'] },

        {
            output: Item.of('#forge:shards/ender'),
            inputs: ['#forge:ores/ender', '#forge:tools/crafting_hammer']
        },
        {
            output: Item.of('#forge:shards/amber'),
            inputs: ['#forge:ores/amber', '#forge:tools/crafting_hammer']
        },

        { output: Item.of('#forge:shards/ender'), inputs: ['#forge:ores/ender', 'thermal:earth_charge'] },
        { output: Item.of('#forge:shards/amber'), inputs: ['#forge:ores/amber', 'thermal:earth_charge'] },

        { output: 'emendatusenigmatica:fluorite_dust', inputs: ['thermal:earth_charge', '#forge:ores/fluorite'] },
        { output: 'emendatusenigmatica:dimensional_dust', inputs: ['thermal:earth_charge', '#forge:ores/dimensional'] },
        {
            output: 'emendatusenigmatica:potassium_nitrate_dust',
            inputs: ['thermal:earth_charge', '#forge:ores/potassium_nitrate']
        },
        {
            output: 'betterendforge:endstone_dust',
            inputs: [
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone'
            ]
        },
        {
            output: Item.of('akashictome:tome', {
                'akashictome:data': {
                    industrialforegoing: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: "Industrial Foregoing's Manual" },
                            'patchouli:book': 'industrialforegoing:industrial_foregoing',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Industrial Foregoing\'s Manual"}]}'
                            }
                        }
                    },
                    tetra: {
                        id: 'tetra:holo',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Holosphere' },
                            'holo/frame': 'holo/frame',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Holosphere"}]}'
                            },
                            'holo/core_material': 'frame/dim',
                            'holo/core': 'holo/core',
                            'holo/frame_material': 'core/ancient'
                        }
                    },
                    resourcefulbees: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Fifty Shades of Bees' },
                            'patchouli:book': 'resourcefulbees:fifty_shades_of_bees',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Fifty Shades of Bees"}]}'
                            }
                        }
                    },
                    astralsorcery: {
                        id: 'astralsorcery:tome',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Astral Tome' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Astral Tome"}]}'
                            }
                        }
                    },
                    theoneprobe: {
                        id: 'theoneprobe:probenote',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'The One Probe Read Me' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"The One Probe Read Me"}]}'
                            }
                        }
                    },
                    ftbquests: {
                        id: 'ftbquests:book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Quest Book' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Quest Book"}]}'
                            }
                        }
                    },
                    alexsmobs: {
                        id: 'alexsmobs:animal_dictionary',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Animal Dictionary' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Animal Dictionary"}]}'
                            }
                        }
                    },
                    immersiveengineering: {
                        id: 'immersiveengineering:manual',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: "Engineer's Manual" },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\'s Manual"}]}'
                            }
                        }
                    },
                    eidolon: {
                        id: 'eidolon:codex',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Ars Ecclesia' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Ars Ecclesia"}]}'
                            }
                        }
                    },
                    botania: {
                        id: 'botania:lexicon',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Lexica Botania' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Lexica Botania"}]}'
                            }
                        }
                    },
                    sushigocrafting: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Becoming an Itamae (Sushi Go Crafting Manual)' },
                            'patchouli:book': 'sushigocrafting:sushigocrafting',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Becoming an Itamae (Sushi Go Crafting Manual)"}]}'
                            }
                        }
                    },
                    thermal: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Thermalpedia' },
                            'patchouli:book': 'thermal:guidebook',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Thermalpedia"}]}'
                            }
                        }
                    },
                    patchouli: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Modded for Dummies' },
                            'patchouli:book': 'patchouli:modded_for_dummies',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Modded for Dummies"}]}'
                            }
                        }
                    },
                    rftoolsbase: {
                        id: 'rftoolsbase:manual',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Technology Guide' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Technology Guide"}]}'
                            }
                        }
                    },
                    integrateddynamics: {
                        id: 'integrateddynamics:on_the_dynamics_of_integration',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'On the Dynamics of Integration' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"On the Dynamics of Integration"}]}'
                            }
                        }
                    },
                    cookingforblockheads: {
                        id: 'cookingforblockheads:crafting_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Cooking for Blockheads II' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Cooking for Blockheads II"}]}'
                            }
                        }
                    },
                    powah: {
                        id: 'powah:book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Manual (Powah!)' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Manual (Powah!)"}]}'
                            }
                        }
                    },
                    pneumaticcraft: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'PNC:R Manual' },
                            'patchouli:book': 'pneumaticcraft:book',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"PNC:R Manual"}]}'
                            }
                        }
                    },
                    naturesaura: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Book of Natural Aura' },
                            'patchouli:book': 'naturesaura:book',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Book of Natural Aura"}]}'
                            }
                        }
                    },
                    pedestals: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Pedestals' },
                            'patchouli:book': 'pedestals:manual',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Pedestals"}]}'
                            }
                        }
                    },
                    transport: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Advanced Transport' },
                            'patchouli:book': 'transport:guide',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Advanced Transport"}]}'
                            }
                        }
                    },
                    engineersdecor: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: "Engineer's Decor" },
                            'patchouli:book': 'engineersdecor:engineersdecor_manual',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\'s Decor"}]}'
                            }
                        }
                    },
                    occultism: {
                        id: 'occultism:dictionary_of_spirits',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Dictionary of Spirits' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Dictionary of Spirits"}]}'
                            }
                        }
                    },
                    solcarrot: {
                        id: 'solcarrot:food_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Food Book' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Food Book"}]}'
                            }
                        }
                    },
                    modularrouters: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Modular Routers Manual' },
                            'patchouli:book': 'modularrouters:book',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Modular Routers Manual"}]}'
                            }
                        }
                    },
                    ars_nouveau: {
                        id: 'ars_nouveau:worn_notebook',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Worn Notebook' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Worn Notebook"}]}'
                            }
                        }
                    },
                    bloodmagic: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'Sanguine Scientiem' },
                            'patchouli:book': 'bloodmagic:guide',
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Sanguine Scientiem"}]}'
                            }
                        }
                    },
                    betterendforge: {
                        id: 'betterendforge:guidebook',
                        Count: 1,
                        tag: {
                            'akashictome:displayName': { text: 'The End for Dummies' },
                            display: {
                                Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"The End for Dummies"}]}'
                            }
                        }
                    }
                }
            }),
            inputs: ['minecraft:book', '#forge:bookshelves']
        },
        { output: Item.of('occultism:tallow', 9), inputs: ['quark:tallow_block'] },
        {
            output: 'minecraft:writable_book',
            inputs: ['minecraft:book', '#forge:dyes/black', '#forge:feathers'],
            id: 'minecraft:writable_book'
        },
        { output: Item.of('minecraft:honeycomb', 9), inputs: ['minecraft:honeycomb_block'] },
        { output: Item.of('byg:pollen_dust', 4), inputs: ['byg:pollen_block'] },

        { output: Item.of('betterendforge:lumecorn_seed', 6), inputs: ['betterendforge:lumecorn_rod'] },
        { output: Item.of('betterendforge:bulb_vine_seed', 4), inputs: ['betterendforge:glowing_bulb'] },
        { output: Item.of('betterendforge:end_lily_seed', 1), inputs: ['betterendforge:end_lily_leaf'] },
        { output: Item.of('betterendforge:blue_vine_seed', 4), inputs: ['betterendforge:blue_vine_lantern'] },
        {
            output: Item.of('betterendforge:glowing_pillar_seed', 4),
            inputs: ['betterendforge:glowing_pillar_luminophor']
        },
        {
            output: Item.of('minecraft:paper', 3),
            inputs: ['minecraft:sugar_cane', 'minecraft:sugar_cane', 'minecraft:sugar_cane']
        },
        {
            output: 'supplementaries:flax_seeds',
            inputs: ['supplementaries:flax']
        },
        { output: Item.of('byg:quartz_crystal'), inputs: ['minecraft:quartz'] },
        { output: Item.of('minecraft:quartz'), inputs: ['byg:quartz_crystal'] },
        {
            output: 'kubejs:quintuple_alfsteel_ingot',
            inputs: [
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#forge:dusts/mana'
            ]
        },
        {
            output: 'minecraft:quartz',
            inputs: ['byg:quartzite_sand', 'byg:quartzite_sand', 'byg:quartzite_sand']
        },
        {
            output: Item.of('projectvibrantjourneys:twigs', 4),
            inputs: ['#minecraft:leaves', '#forge:shears']
        },
        {
            output: Item.of('projectvibrantjourneys:pinecones', 6),
            inputs: [
                '#minecraft:leaves/coniferous',
                '#minecraft:leaves/coniferous',
                '#minecraft:leaves/coniferous',
                '#forge:shears'
            ]
        },
        {
            output: Item.of('projectvibrantjourneys:fallen_leaves', 1),
            inputs: ['quark:oak_leaf_carpet']
        },
        {
            output: Item.of('projectvibrantjourneys:rocks', 4),
            inputs: ['minecraft:cobblestone', '#forge:tools/crafting_hammer']
        },
        {
            output: Item.of('projectvibrantjourneys:mossy_rocks', 4),
            inputs: ['minecraft:mossy_cobblestone', '#forge:tools/crafting_hammer']
        },
        {
            output: Item.of('projectvibrantjourneys:sandstone_rocks', 4),
            inputs: ['minecraft:sandstone', '#forge:tools/crafting_hammer']
        },
        {
            output: Item.of('projectvibrantjourneys:red_sandstone_rocks', 4),
            inputs: ['minecraft:red_sandstone', '#forge:tools/crafting_hammer']
        },
        {
            output: Item.of('projectvibrantjourneys:ice_chunks', 4),
            inputs: ['minecraft:ice', '#forge:tools/crafting_hammer']
        },
        {
            output: Item.of('projectvibrantjourneys:glowcap'),
            inputs: ['minecraft:glowstone_dust', ['minecraft:brown_mushroom', 'minecraft:red_mushroom']]
        },
        {
            output: Item.of('botanypots:botany_pot'),
            inputs: ['#enigmatica:washables/simplebotanypots', 'minecraft:water_bucket']
        },
        {
            output: Item.of('botanypots:hopper_botany_pot'),
            inputs: ['#enigmatica:washables/hopperbotanypots', 'minecraft:water_bucket']
        },
        {
            output: Item.of('minecraft:terracotta'),
            inputs: ['#enigmatica:washables/terracotta', 'minecraft:water_bucket']
        },
        {
            output: 'mythicbotany:raindeletia_floating',
            inputs: ['kubejs:disabled_recipe_indicator'],
            id: 'mythicbotany:raindeletia_floating'
        },
        {
            output: 'mythicbotany:wither_aconite_floating',
            inputs: ['kubejs:disabled_recipe_indicator'],
            id: 'mythicbotany:wither_aconite_floating'
        },
        {
            output: Item.of('eidolon:pewter_blend', 2),
            inputs: ['#forge:dusts/lead', '#forge:dusts/iron'],
            id: 'eidolon:pewter_blend'
        },
        {
            output: Item.of('minecraft:string', 3),
            inputs: ['#forge:crops/kenaf', '#forge:crops/kenaf', '#forge:crops/kenaf'],
            id: 'simplefarming:string'
        },
        {
            output: Item.of('minecraft:string', 3),
            inputs: ['#forge:crops/flax', '#forge:crops/flax', '#forge:crops/flax']
        },
        {
            output: Item.of('minecraft:green_dye', 2),
            inputs: ['#forge:dyes/blue', '#forge:dyes/yellow']
        },
        {
            output: Item.of('minecraft:brown_dye', 2),
            inputs: ['#forge:dyes/red', '#forge:dyes/green']
        },
        {
            output: 'sushigocrafting:soy_seeds',
            inputs: ['sushigocrafting:soy_bean']
        },
        {
            output: Item.of('ars_nouveau:source_berry_roll', 3),
            inputs: [
                'farmersdelight:wheat_dough',
                'farmersdelight:wheat_dough',
                'farmersdelight:wheat_dough',
                '#forge:fruits/mana_berry'
            ],
            id: 'ars_nouveau:source_berry_roll'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });

    powahTiers.forEach((tier) => {
        if (tier == 'starter') {
            return;
        }
        event.shapeless(`powah:reactor_${tier}`, `powah:reactor_${tier}`);
    });

    colors.forEach(function (color) {
        let otherColors = colors.filter((filterColor) => filterColor !== color);

        let otherSimplePots = otherColors.map((otherColor) => `botanypots:${otherColor}_botany_pot`),
            otherHopperPots = otherColors.map((otherColor) => `botanypots:hopper_${otherColor}_botany_pot`);

        otherSimplePots.push('botanypots:botany_pot');
        otherHopperPots.push('botanypots:hopper_botany_pot');

        event.shapeless(`botanypots:${color}_botany_pot`, [Ingredient.of(otherSimplePots), `#forge:dyes/${color}`]);

        event.shapeless(`botanypots:hopper_${color}_botany_pot`, [
            Ingredient.of(otherHopperPots),
            `#forge:dyes/${color}`
        ]);
    });

    materialsToUnify.forEach((material) => {
        var ore = Item.of(`emendatusenigmatica:${material}_ore`);
        if (ore.exists) {
            event.shapeless(ore, `#forge:ores/${material}`);
        }
    });
});
