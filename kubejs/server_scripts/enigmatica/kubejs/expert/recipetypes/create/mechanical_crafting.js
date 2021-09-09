onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'astralsorcery:hand_telescope',
            pattern: ['    A ', '   ABA', '  CBA ', ' CDC  ', 'ACC   ', 'BA    '],
            key: {
                A: '#forge:plates/brass',
                B: 'astralsorcery:glass_lens',
                C: 'botania:livingwood_planks',
                D: '#botania:runes/autumn'
            },
            id: 'astralsorcery:altar/hand_telescope'
        },
        {
            output: 'astralsorcery:observatory',
            pattern: [
                '      ABC',
                '     DBCB',
                '    EBCBA',
                '   FBJBG ',
                '  ABKBH  ',
                ' LB BI   ',
                'M CBAO   ',
                'MN LPO   ',
                'MMMOOO   '
            ],
            key: {
                A: '#forge:inlays/arcane_gold',
                B: 'astralsorcery:marble_runed',
                C: 'kubejs:observatory_lens',
                D: 'quark:lime_rune',
                E: 'quark:orange_rune',
                F: 'quark:red_rune',
                G: 'quark:magenta_rune',
                H: 'quark:blue_rune',
                I: 'quark:light_blue_rune',
                J: 'quark:black_rune',
                K: '#botania:runes/asgard',
                L: '#forge:nuggets/brass',
                M: '#forge:plates/brass',
                N: '#create:seats',
                O: 'create:brass_casing',
                P: 'immersiveengineering:furnace_heater'
            },
            id: 'astralsorcery:observatory'
        },
        {
            output: Item.of('immersiveengineering:blastbrick', 9),
            pattern: ['ADA', 'CBC', 'AEA'],
            key: {
                C: 'immersiveengineering:cokebrick',
                B: 'minecraft:blast_furnace',
                A: 'minecraft:red_nether_bricks',
                D: 'thermal:fire_tnt',
                E: '#forge:storage_blocks/coal_coke'
            },
            id: 'immersiveengineering:crafting/blastbrick'
        },
        {
            output: 'rftoolsdim:dimension_builder',
            pattern: ['  C  ', ' CDC ', 'CBEAC', ' CDC ', '  C  '],
            key: {
                A: 'rftoolsbase:machine_infuser',
                B: 'rftoolsdim:enscriber',
                C: 'mekanism:alloy_atomic',
                D: 'mekanism:ultimate_control_circuit',
                E: 'rftoolsbase:machine_frame'
            },
            id: 'rftoolsdim:dimension_builder'
        },
        {
            output: 'refinedstorage:controller',
            pattern: ['ACACA', 'CDBDC', 'AFEFA', 'CDBDC', 'ACACA'],
            key: {
                A: 'refinedstorage:advanced_processor',
                B: '#forge:ingots/slimesteel',
                C: 'xnet:netcable_blue',
                D: 'refinedstorage:quartz_enriched_iron',
                E: 'refinedstorage:machine_casing',
                F: 'immersiveengineering:logic_unit'
            },
            id: 'refinedstorage:controller'
        },
        {
            output: Item.of('create:crushing_wheel', 2),
            pattern: [' AAA ', 'AAPAA', 'APSPA', 'AAPAA', ' AAA '],
            key: {
                A: 'create:andesite_alloy',
                S: 'create:shaft',
                P: 'create:brass_casing'
            },
            id: 'create:mechanical_crafting/crushing_wheel'
        },
        {
            output: 'refinedstorage:disk_drive',
            pattern: ['ABCBA', 'BDEDB', 'CFGFC', 'BDEDB', 'ABCBA'],
            key: {
                A: '#forge:circuits/basic',
                B: 'refinedstorage:advanced_processor',
                C: 'refinedstorage:quartz_enriched_iron',
                D: 'occultism:storage_stabilizer_tier1',
                E: '#xnet:advanced_connectors',
                F: 'immersiveengineering:logic_unit',
                G: 'refinedstorage:machine_casing'
            },
            id: 'refinedstorage:disk_drive'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
