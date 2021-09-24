onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/sequenced_assembly/';
    const recipes = [
        /*{
            input: 'input_item_here',
            outputs: [
                Item.of('6x create:large_cogwheel').withChance(32.0), //withChance sets a weight for the output, default is 1 without it
                Item.of('secondary_outputs').withChance(2.0),
,               'more_secondaries_with_weight_1'
            ],
            transitionalItem: 'transitional_item_here', //required, but can be same as input item apparently
            loops: 1, //required
            sequence: [
                {
                    type: 'sequence_type_here',  //options are deploying, cutting, filling, pressing
                    input: 'input_items_fluids_or_array_here',
                    output: 'output_item_here',
                    processingTime: 50 // for cutting recipes
                }
            ],
            id: 'recipe_id_here'
        }*/
        {
            input: 'minecraft:leather',
            outputs: ['minecraft:book'],
            transitionalItem: 'minecraft:leather',
            loops: 4,
            sequence: [
                {
                    type: 'deploying',
                    input: ['minecraft:leather', '#forge:string'],
                    output: 'minecraft:leather'
                },
                {
                    type: 'deploying',
                    input: ['minecraft:leather', '#forge:paper'],
                    output: 'minecraft:leather'
                },
                {
                    type: 'deploying',
                    input: ['minecraft:leather', '#forge:paper'],
                    output: 'minecraft:leather'
                },
                {
                    type: 'deploying',
                    input: ['minecraft:leather', '#forge:paper'],
                    output: 'minecraft:leather'
                }
            ],
            id: `${id_prefix}book_from_leather`
        },
        {
            input: 'tconstruct:pattern',
            outputs: ['minecraft:book'],
            transitionalItem: 'tconstruct:pattern',
            loops: 4,
            sequence: [
                {
                    type: 'deploying',
                    input: ['tconstruct:pattern', '#forge:slimeballs'],
                    output: 'tconstruct:pattern'
                },
                {
                    type: 'deploying',
                    input: ['tconstruct:pattern', '#forge:paper'],
                    output: 'tconstruct:pattern'
                },
                {
                    type: 'deploying',
                    input: ['tconstruct:pattern', '#forge:paper'],
                    output: 'tconstruct:pattern'
                },
                {
                    type: 'deploying',
                    input: ['tconstruct:pattern', '#forge:paper'],
                    output: 'tconstruct:pattern'
                }
            ],
            id: `${id_prefix}book_from_pattern`
        },
        {
            input: 'pneumaticcraft:plastic',
            outputs: [Item.of('powah:capacitor_basic_large', 2)],
            transitionalItem: 'pneumaticcraft:plastic',
            loops: 4,
            sequence: [
                {
                    type: 'deploying',
                    input: ['pneumaticcraft:plastic', '#forge:plates/aluminum'],
                    output: 'pneumaticcraft:plastic'
                },
                {
                    type: 'deploying',
                    input: ['pneumaticcraft:plastic', 'powah:dielectric_paste'],
                    output: 'pneumaticcraft:plastic'
                },
                {
                    type: 'deploying',
                    input: ['pneumaticcraft:plastic', '#forge:plates/signalum'],
                    output: 'pneumaticcraft:plastic'
                },
                {
                    type: 'pressing',
                    input: 'pneumaticcraft:plastic',
                    output: 'pneumaticcraft:plastic'
                }
            ],
            id: 'powah:crafting/capacitor_basic_large'
        }
    ];

    let armorTypes = [
        {
            loops: 5,
            armors: [
                {
                    base: 'minecraft:chainmail_helmet',
                    material: '#forge:ingots/iron',
                    result: 'minecraft:iron_helmet',
                    id: 'minecraft:iron_helmet'
                },
                {
                    base: 'minecraft:leather_helmet',
                    material: '#forge:plates/lapis',
                    result: 'mekanismtools:lapis_lazuli_helmet',
                    id: 'mekanismtools:lapis_lazuli/armor/helmet'
                },
                {
                    base: 'mekanismtools:lapis_lazuli_helmet',
                    material: '#forge:ingots/gold',
                    result: 'minecraft:golden_helmet',
                    id: 'minecraft:golden_helmet'
                },
                {
                    base: 'minecraft:chainmail_helmet',
                    material: '#mekanism:enriched/diamond',
                    result: 'minecraft:diamond_helmet',
                    id: 'minecraft:diamond_helmet'
                },
                {
                    base: 'minecraft:chainmail_helmet',
                    material: '#forge:ingots/manasteel',
                    result: 'botania:manasteel_helmet',
                    id: 'botania:manasteel_helmet'
                },
                {
                    base: 'minecraft:chainmail_helmet',
                    material: '#forge:ingots/elementium',
                    result: 'botania:elementium_helmet',
                    id: 'botania:elementium_helmet'
                },
                {
                    base: 'minecraft:chainmail_helmet',
                    material: '#forge:plates/steel',
                    result: 'immersiveengineering:armor_steel_head',
                    id: 'immersiveengineering:crafting/armor_steel_head'
                },
                {
                    base: 'minecraft:chainmail_helmet',
                    material: '#forge:plates/aluminum',
                    result: 'immersiveengineering:armor_faraday_head',
                    id: 'immersiveengineering:crafting/armor_faraday_head'
                },
                {
                    base: 'minecraft:leather_helmet',
                    material: '#forge:ingots/bronze',
                    result: 'mekanismtools:bronze_helmet',
                    id: 'mekanismtools:bronze/armor/helmet'
                },
                {
                    base: 'minecraft:chainmail_helmet',
                    material: '#forge:ingots/osmium',
                    result: 'mekanismtools:osmium_helmet',
                    id: 'mekanismtools:osmium/armor/helmet'
                },
                {
                    base: 'mekanismtools:lapis_lazuli_helmet',
                    material: '#forge:ingots/refined_glowstone',
                    result: 'mekanismtools:refined_glowstone_helmet',
                    id: 'mekanismtools:refined_glowstone/armor/helmet'
                },
                {
                    base: 'minecraft:chainmail_helmet',
                    material: '#forge:ingots/refined_obsidian',
                    result: 'mekanismtools:refined_obsidian_helmet',
                    id: 'mekanismtools:refined_obsidian/armor/helmet'
                },
                {
                    base: 'minecraft:chainmail_helmet',
                    material: '#forge:ingots/steel',
                    result: 'mekanismtools:steel_helmet',
                    id: 'mekanismtools:steel/armor/helmet'
                },
                {
                    base: 'minecraft:leather_helmet',
                    material: '#forge:ingots/infused_iron',
                    result: 'naturesaura:infused_iron_helmet',
                    id: 'naturesaura:infused_helmet'
                },
                {
                    base: 'minecraft:leather_helmet',
                    material: '#forge:ingots/sky',
                    result: 'naturesaura:sky_helmet',
                    id: 'naturesaura:sky_helmet'
                },
                {
                    base: 'thermal:hazmat_helmet',
                    material: '#forge:ingots/compressed_iron',
                    result: 'pneumaticcraft:compressed_iron_helmet',
                    id: 'pneumaticcraft:compressed_iron_helmet'
                },
                {
                    base: 'minecraft:chainmail_helmet',
                    material: '#forge:ingots/cloggrum',
                    result: 'undergarden:cloggrum_helmet',
                    id: 'undergarden:cloggrum_helmet'
                },
                {
                    base: 'minecraft:chainmail_helmet',
                    material: '#forge:ingots/froststeel',
                    result: 'undergarden:froststeel_helmet',
                    id: 'undergarden:froststeel_helmet'
                },
                {
                    base: 'minecraft:chainmail_helmet',
                    material: '#forge:ingots/utherium',
                    result: 'undergarden:utheric_helmet',
                    id: 'undergarden:utheric_helmet'
                },
                {
                    base: 'minecraft:chainmail_helmet',
                    material: '#forge:ingots/thallasium',
                    result: 'betterendforge:thallasium_helmet',
                    id: 'betterendforge:thallasium_helmet'
                },
                {
                    base: 'minecraft:chainmail_helmet',
                    material: '#forge:ingots/terminite',
                    result: 'betterendforge:terminite_helmet',
                    id: 'betterendforge:terminite_helmet'
                },
                {
                    base: 'thermal:diving_helmet',
                    material: '#forge:ingots/neptunium',
                    result: 'aquaculture:neptunium_helmet',
                    id: 'aquaculture:neptunium_helmet'
                }
            ]
        },
        {
            loops: 8,
            armors: [
                {
                    base: 'minecraft:chainmail_chestplate',
                    material: '#forge:ingots/iron',
                    result: 'minecraft:iron_chestplate',
                    id: 'minecraft:iron_chestplate'
                },
                {
                    base: 'minecraft:leather_chestplate',
                    material: '#forge:plates/lapis',
                    result: 'mekanismtools:lapis_lazuli_chestplate',
                    id: 'mekanismtools:lapis_lazuli/armor/chestplate'
                },
                {
                    base: 'mekanismtools:lapis_lazuli_chestplate',
                    material: '#forge:ingots/gold',
                    result: 'minecraft:golden_chestplate',
                    id: 'minecraft:golden_chestplate'
                },
                {
                    base: 'minecraft:chainmail_chestplate',
                    material: '#mekanism:enriched/diamond',
                    result: 'minecraft:diamond_chestplate',
                    id: 'minecraft:diamond_chestplate'
                },
                {
                    base: 'minecraft:chainmail_chestplate',
                    material: '#forge:ingots/manasteel',
                    result: 'botania:manasteel_chestplate',
                    id: 'botania:manasteel_chestplate'
                },
                {
                    base: 'minecraft:chainmail_chestplate',
                    material: '#forge:ingots/elementium',
                    result: 'botania:elementium_chestplate',
                    id: 'botania:elementium_chestplate'
                },
                {
                    base: 'minecraft:chainmail_chestplate',
                    material: '#forge:plates/steel',
                    result: 'immersiveengineering:armor_steel_chest',
                    id: 'immersiveengineering:crafting/armor_steel_chest'
                },
                {
                    base: 'minecraft:chainmail_chestplate',
                    material: '#forge:plates/aluminum',
                    result: 'immersiveengineering:armor_faraday_chest',
                    id: 'immersiveengineering:crafting/armor_faraday_chest'
                },
                {
                    base: 'minecraft:leather_chestplate',
                    material: '#forge:ingots/bronze',
                    result: 'mekanismtools:bronze_chestplate',
                    id: 'mekanismtools:bronze/armor/chestplate'
                },
                {
                    base: 'minecraft:chainmail_chestplate',
                    material: '#forge:ingots/osmium',
                    result: 'mekanismtools:osmium_chestplate',
                    id: 'mekanismtools:osmium/armor/chestplate'
                },
                {
                    base: 'mekanismtools:lapis_lazuli_chestplate',
                    material: '#forge:ingots/refined_glowstone',
                    result: 'mekanismtools:refined_glowstone_chestplate',
                    id: 'mekanismtools:refined_glowstone/armor/chestplate'
                },
                {
                    base: 'minecraft:chainmail_chestplate',
                    material: '#forge:ingots/refined_obsidian',
                    result: 'mekanismtools:refined_obsidian_chestplate',
                    id: 'mekanismtools:refined_obsidian/armor/chestplate'
                },
                {
                    base: 'minecraft:chainmail_chestplate',
                    material: '#forge:ingots/steel',
                    result: 'mekanismtools:steel_chestplate',
                    id: 'mekanismtools:steel/armor/chestplate'
                },
                {
                    base: 'minecraft:leather_chestplate',
                    material: '#forge:ingots/infused_iron',
                    result: 'naturesaura:infused_iron_chest',
                    id: 'naturesaura:infused_chest'
                },
                {
                    base: 'minecraft:leather_chestplate',
                    material: '#forge:ingots/sky',
                    result: 'naturesaura:sky_chest',
                    id: 'naturesaura:sky_chest'
                },
                {
                    base: 'thermal:hazmat_chestplate',
                    material: '#forge:ingots/compressed_iron',
                    result: 'pneumaticcraft:compressed_iron_chestplate',
                    id: 'pneumaticcraft:compressed_iron_chestplate'
                },
                {
                    base: 'minecraft:leather_chestplate',
                    material: 'undergarden:masticator_scales',
                    result: 'undergarden:masticated_chestplate',
                    id: 'undergarden:masticated_chestplate'
                },
                {
                    base: 'minecraft:leather_chestplate',
                    material: 'alexsmobs:crocodile_scute',
                    result: 'alexsmobs:crocodile_chestplate',
                    id: 'alexsmobs:crocodile_chestplate'
                },
                {
                    base: 'minecraft:chainmail_chestplate',
                    material: '#forge:ingots/cloggrum',
                    result: 'undergarden:cloggrum_chestplate',
                    id: 'undergarden:cloggrum_chestplate'
                },
                {
                    base: 'minecraft:chainmail_chestplate',
                    material: '#forge:ingots/froststeel',
                    result: 'undergarden:froststeel_chestplate',
                    id: 'undergarden:froststeel_chestplate'
                },
                {
                    base: 'minecraft:chainmail_chestplate',
                    material: '#forge:ingots/utherium',
                    result: 'undergarden:utheric_chestplate',
                    id: 'undergarden:utheric_chestplate'
                },
                {
                    base: 'minecraft:chainmail_chestplate',
                    material: '#forge:ingots/thallasium',
                    result: 'betterendforge:thallasium_chestplate',
                    id: 'betterendforge:thallasium_chestplate'
                },
                {
                    base: 'minecraft:chainmail_chestplate',
                    material: '#forge:ingots/terminite',
                    result: 'betterendforge:terminite_chestplate',
                    id: 'betterendforge:terminite_chestplate'
                },
                {
                    base: 'thermal:diving_chestplate',
                    material: '#forge:ingots/neptunium',
                    result: 'aquaculture:neptunium_chestplate',
                    id: 'aquaculture:neptunium_chestplate'
                }
            ]
        },
        {
            loops: 7,
            armors: [
                {
                    base: 'minecraft:chainmail_leggings',
                    material: '#forge:ingots/iron',
                    result: 'minecraft:iron_leggings',
                    id: 'minecraft:iron_leggings'
                },
                {
                    base: 'minecraft:leather_leggings',
                    material: '#forge:plates/lapis',
                    result: 'mekanismtools:lapis_lazuli_leggings',
                    id: 'mekanismtools:lapis_lazuli/armor/leggings'
                },
                {
                    base: 'mekanismtools:lapis_lazuli_leggings',
                    material: '#forge:ingots/gold',
                    result: 'minecraft:golden_leggings',
                    id: 'minecraft:golden_leggings'
                },
                {
                    base: 'minecraft:chainmail_leggings',
                    material: '#mekanism:enriched/diamond',
                    result: 'minecraft:diamond_leggings',
                    id: 'minecraft:diamond_leggings'
                },
                {
                    base: 'minecraft:chainmail_leggings',
                    material: '#forge:ingots/manasteel',
                    result: 'botania:manasteel_leggings',
                    id: 'botania:manasteel_leggings'
                },
                {
                    base: 'minecraft:chainmail_leggings',
                    material: '#forge:ingots/elementium',
                    result: 'botania:elementium_leggings',
                    id: 'botania:elementium_leggings'
                },
                {
                    base: 'minecraft:chainmail_leggings',
                    material: '#forge:plates/steel',
                    result: 'immersiveengineering:armor_steel_legs',
                    id: 'immersiveengineering:crafting/armor_steel_legs'
                },
                {
                    base: 'minecraft:chainmail_leggings',
                    material: '#forge:plates/aluminum',
                    result: 'immersiveengineering:armor_faraday_legs',
                    id: 'immersiveengineering:crafting/armor_faraday_legs'
                },
                {
                    base: 'minecraft:leather_leggings',
                    material: '#forge:ingots/bronze',
                    result: 'mekanismtools:bronze_leggings',
                    id: 'mekanismtools:bronze/armor/leggings'
                },
                {
                    base: 'minecraft:chainmail_leggings',
                    material: '#forge:ingots/osmium',
                    result: 'mekanismtools:osmium_leggings',
                    id: 'mekanismtools:osmium/armor/leggings'
                },
                {
                    base: 'mekanismtools:lapis_lazuli_leggings',
                    material: '#forge:ingots/refined_glowstone',
                    result: 'mekanismtools:refined_glowstone_leggings',
                    id: 'mekanismtools:refined_glowstone/armor/leggings'
                },
                {
                    base: 'minecraft:chainmail_leggings',
                    material: '#forge:ingots/refined_obsidian',
                    result: 'mekanismtools:refined_obsidian_leggings',
                    id: 'mekanismtools:refined_obsidian/armor/leggings'
                },
                {
                    base: 'minecraft:chainmail_leggings',
                    material: '#forge:ingots/steel',
                    result: 'mekanismtools:steel_leggings',
                    id: 'mekanismtools:steel/armor/leggings'
                },
                {
                    base: 'minecraft:leather_leggings',
                    material: '#forge:ingots/infused_iron',
                    result: 'naturesaura:infused_iron_pants',
                    id: 'naturesaura:infused_pants'
                },
                {
                    base: 'minecraft:leather_leggings',
                    material: '#forge:ingots/sky',
                    result: 'naturesaura:sky_pants',
                    id: 'naturesaura:sky_pants'
                },
                {
                    base: 'thermal:hazmat_leggings',
                    material: '#forge:ingots/compressed_iron',
                    result: 'pneumaticcraft:compressed_iron_leggings',
                    id: 'pneumaticcraft:compressed_iron_leggings'
                },
                {
                    base: 'minecraft:leather_leggings',
                    material: 'alexsmobs:centipede_leg',
                    result: 'alexsmobs:centipede_leggings',
                    id: 'alexsmobs:centipede_leggings'
                },
                {
                    base: 'minecraft:chainmail_leggings',
                    material: '#forge:ingots/cloggrum',
                    result: 'undergarden:cloggrum_leggings',
                    id: 'undergarden:cloggrum_leggings'
                },
                {
                    base: 'minecraft:chainmail_leggings',
                    material: '#forge:ingots/froststeel',
                    result: 'undergarden:froststeel_leggings',
                    id: 'undergarden:froststeel_leggings'
                },
                {
                    base: 'minecraft:chainmail_leggings',
                    material: '#forge:ingots/utherium',
                    result: 'undergarden:utheric_leggings',
                    id: 'undergarden:utheric_leggings'
                },
                {
                    base: 'minecraft:chainmail_leggings',
                    material: '#forge:ingots/thallasium',
                    result: 'betterendforge:thallasium_leggings',
                    id: 'betterendforge:thallasium_leggings'
                },
                {
                    base: 'minecraft:chainmail_leggings',
                    material: '#forge:ingots/terminite',
                    result: 'betterendforge:terminite_leggings',
                    id: 'betterendforge:terminite_leggings'
                },
                {
                    base: 'thermal:diving_leggings',
                    material: '#forge:ingots/neptunium',
                    result: 'aquaculture:neptunium_leggings',
                    id: 'aquaculture:neptunium_leggings'
                }
            ]
        },
        {
            loops: 4,
            armors: [
                {
                    base: 'minecraft:chainmail_boots',
                    material: '#forge:ingots/iron',
                    result: 'minecraft:iron_boots',
                    id: 'minecraft:iron_boots'
                },
                {
                    base: 'minecraft:leather_boots',
                    material: '#forge:plates/lapis',
                    result: 'mekanismtools:lapis_lazuli_boots',
                    id: 'mekanismtools:lapis_lazuli/armor/boots'
                },
                {
                    base: 'mekanismtools:lapis_lazuli_boots',
                    material: '#forge:ingots/gold',
                    result: 'minecraft:golden_boots',
                    id: 'minecraft:golden_boots'
                },
                {
                    base: 'minecraft:chainmail_boots',
                    material: '#mekanism:enriched/diamond',
                    result: 'minecraft:diamond_boots',
                    id: 'minecraft:diamond_boots'
                },
                {
                    base: 'minecraft:chainmail_boots',
                    material: '#forge:ingots/manasteel',
                    result: 'botania:manasteel_boots',
                    id: 'botania:manasteel_boots'
                },
                {
                    base: 'minecraft:chainmail_boots',
                    material: '#forge:ingots/elementium',
                    result: 'botania:elementium_boots',
                    id: 'botania:elementium_boots'
                },
                {
                    base: 'minecraft:chainmail_boots',
                    material: '#forge:plates/steel',
                    result: 'immersiveengineering:armor_steel_feet',
                    id: 'immersiveengineering:crafting/armor_steel_feet'
                },
                {
                    base: 'minecraft:chainmail_boots',
                    material: '#forge:plates/aluminum',
                    result: 'immersiveengineering:armor_faraday_feet',
                    id: 'immersiveengineering:crafting/armor_faraday_feet'
                },
                {
                    base: 'minecraft:leather_boots',
                    material: '#forge:ingots/bronze',
                    result: 'mekanismtools:bronze_boots',
                    id: 'mekanismtools:bronze/armor/boots'
                },
                {
                    base: 'minecraft:chainmail_boots',
                    material: '#forge:ingots/osmium',
                    result: 'mekanismtools:osmium_boots',
                    id: 'mekanismtools:osmium/armor/boots'
                },
                {
                    base: 'mekanismtools:lapis_lazuli_boots',
                    material: '#forge:ingots/refined_glowstone',
                    result: 'mekanismtools:refined_glowstone_boots',
                    id: 'mekanismtools:refined_glowstone/armor/boots'
                },
                {
                    base: 'minecraft:chainmail_boots',
                    material: '#forge:ingots/refined_obsidian',
                    result: 'mekanismtools:refined_obsidian_boots',
                    id: 'mekanismtools:refined_obsidian/armor/boots'
                },
                {
                    base: 'minecraft:chainmail_boots',
                    material: '#forge:ingots/steel',
                    result: 'mekanismtools:steel_boots',
                    id: 'mekanismtools:steel/armor/boots'
                },
                {
                    base: 'minecraft:leather_boots',
                    material: '#forge:ingots/infused_iron',
                    result: 'naturesaura:infused_iron_shoes',
                    id: 'naturesaura:infused_shoes'
                },
                {
                    base: 'minecraft:leather_boots',
                    material: '#forge:ingots/sky',
                    result: 'naturesaura:sky_shoes',
                    id: 'naturesaura:sky_shoes'
                },
                {
                    base: 'thermal:hazmat_boots',
                    material: '#forge:ingots/compressed_iron',
                    result: 'pneumaticcraft:compressed_iron_boots',
                    id: 'pneumaticcraft:compressed_iron_boots'
                },
                {
                    base: 'minecraft:chainmail_boots',
                    material: '#forge:ingots/cloggrum',
                    result: 'undergarden:cloggrum_boots',
                    id: 'undergarden:cloggrum_boots'
                },
                {
                    base: 'minecraft:chainmail_boots',
                    material: '#forge:ingots/froststeel',
                    result: 'undergarden:froststeel_boots',
                    id: 'undergarden:froststeel_boots'
                },
                {
                    base: 'minecraft:chainmail_boots',
                    material: '#forge:ingots/utherium',
                    result: 'undergarden:utheric_boots',
                    id: 'undergarden:utheric_boots'
                },
                {
                    base: 'minecraft:chainmail_boots',
                    material: '#forge:ingots/thallasium',
                    result: 'betterendforge:thallasium_boots',
                    id: 'betterendforge:thallasium_boots'
                },
                {
                    base: 'minecraft:chainmail_boots',
                    material: '#forge:ingots/terminite',
                    result: 'betterendforge:terminite_boots',
                    id: 'betterendforge:terminite_boots'
                },
                {
                    base: 'thermal:diving_boots',
                    material: '#forge:ingots/neptunium',
                    result: 'aquaculture:neptunium_boots',
                    id: 'aquaculture:neptunium_boots'
                }
            ]
        }
    ];

    armorTypes.forEach((armorType) => {
        armorType.armors.forEach((armor) => {
            recipes.push({
                input: armor.base,
                outputs: [armor.result],
                transitionalItem: armor.base,
                loops: armorType.loops,
                sequence: [
                    {
                        type: 'deploying',
                        input: [armor.base, armor.material],
                        output: armor.base
                    },
                    {
                        type: 'pressing',
                        input: armor.base,
                        output: armor.base
                    },
                    {
                        type: 'pressing',
                        input: armor.base,
                        output: armor.base
                    },
                    {
                        type: 'pressing',
                        input: armor.base,
                        output: armor.base
                    }
                ],
                id: armor.id
            });
        });
    });

    recipes.forEach((recipe) => {
        let sequence = [];

        recipe.sequence.forEach((step) => {
            if (step.type == 'deploying') {
                sequence.push(event.recipes.create.deploying(step.output, step.input));
            } else if (step.type == 'cutting') {
                sequence.push(
                    event.recipes.create.cutting(step.output, step.input).processingTime(step.processingTime)
                );
            } else if (step.type == 'filling') {
                sequence.push(event.recipes.create.filling(step.output, step.input));
            } else if (step.type == 'pressing') {
                sequence.push(event.recipes.create.pressing(step.output, step.input));
            }
        });

        const re = event.recipes.create
            .sequenced_assembly(recipe.outputs, recipe.input, sequence)
            .loops(recipe.loops)
            .transitionalItem(recipe.transitionalItem);

        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
