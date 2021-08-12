onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'astralsorcery:hand_telescope',
            pattern: [' A    ', 'ABA   ', ' ABC  ', '  CDC ', '   CCA', '    AB'],
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
                A: '#forge:rods/brass',
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
            }
        },
        {
            output: Item.of('immersiveengineering:blastbrick', 9),
            pattern: ['ADA', 'CBC', 'ACA'],
            key: {
                C: 'quark:soul_sandstone_bricks',
                B: 'minecraft:blast_furnace',
                A: 'minecraft:red_nether_bricks',
                D: 'thermal:fire_tnt'
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
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
