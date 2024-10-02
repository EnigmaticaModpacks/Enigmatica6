

onEvent('recipes', (event) => {
    if (!isAE2Loaded) {
        return;
    }
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ae2_compat/items/';
    const recipesIDs = [
        "appliedenergistics2:network/cells/spatial_components",
        "appliedenergistics2:tools/network_memory_card",
        "appliedenergistics2:materials/cardspeed",
        "appliedenergistics2:network/crafting/patterns_blank"
    ]
    recipesIDs.forEach((recipesID) => {
        event.remove({ id: recipesID });
    });

    const recipes = [
        {
            output: '2_cubed_spatial_cell_component',
            patterns: [
                'GFG',
                'FAF',
                ' S '
            ],
            inputs: {
                G: 'minecraft:glowstone_dust',
                A: 'refinedstorage:advanced_processor',
                F: 'appliedenergistics2:fluix_pearl',
                S: 'occultism:spirit_attuned_gem'
            }
        },
        {
            output: 'memory_card',
            patterns: [
                '   ',
                'VMQ',
                'GGG'
            ],
            inputs: {
                V: 'integrateddynamics:variable',
                M: 'kubejs:memory_basic_filled',
                Q: 'refinedstorage:quartz_enriched_iron',
                G: 'minecraft:gold_ingot'
            }
        },
        {
            output: 'blank_pattern',
            patterns: [
                'QGQ',
                'GAG',
                'RSR'
            ],
            inputs: {
                S: 'create:empty_schematic',
                Q: 'appliedenergistics2:quartz_glass',
                G: 'minecraft:glowstone_dust',
                R: 'refinedstorage:quartz_enriched_iron',
                A: '#forge:gems/aquamarine'
            }
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped('appliedenergistics2:' + recipe.output, recipe.patterns, recipe.inputs).id(id_prefix + recipe.output);
    });

    event.shaped('4x appliedenergistics2:speed_card', [
        'AGA',
        'GLG',
        'AGA'
    ], {
        A: 'appliedenergistics2:advanced_card',
        G: 'pneumaticcraft:glycerol',
        L: {
            type: 'pneumaticcraft:fluid',
            tag: 'forge:lubricant',
            amount: 1000
        }
    }).id(id_prefix + 'speed_card');

});