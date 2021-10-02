onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const newRecipes = [
        {
            output: 'ars_nouveau:arcane_core',
            pattern: ['CAC', 'BDB', 'CAC'],
            key: {
                A: 'ars_nouveau:warding_stone',
                B: '#forge:nuggets/gold_brass',
                C: '#forge:ingots/gold_brass',
                D: ['#forge:storage_blocks/lapis', '#forge:storage_blocks/fluorite']
            },
            id: 'ars_nouveau:arcane_core'
        },
        {
            output: 'ars_nouveau:arcane_pedestal',
            pattern: ['CAC', 'BDB', 'CDC'],
            key: {
                A: 'ars_nouveau:arcane_stone',
                B: '#forge:nuggets/gold_brass',
                C: '#forge:ingots/gold_brass',
                D: ['#forge:gems/lapis', '#forge:gems/fluorite']
            },
            id: 'ars_nouveau:arcane_pedestal'
        },
        {
            output: 'ars_nouveau:enchanting_apparatus',
            pattern: ['CAC', 'BDB', 'CAC'],
            key: {
                A: 'ars_nouveau:warding_stone',
                B: '#forge:nuggets/gold_brass',
                C: '#forge:ingots/gold_brass',
                D: 'minecraft:conduit'
            },
            id: 'ars_nouveau:enchanting_apparatus'
        },
        {
            output: 'ars_nouveau:mana_jar',
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: '#forge:nuggets/gold_brass',
                B: '#forge:ingots/gold_brass',
                C: 'supplementaries:jar',
                D: 'ars_nouveau:warding_stone'
            },
            id: 'ars_nouveau:mana_jar'
        },
        {
            output: 'ars_nouveau:glyph_press',
            pattern: ['BDB', 'ACA', 'BDB'],
            key: {
                A: '#forge:nuggets/gold_brass',
                B: '#forge:ingots/gold_brass',
                C: 'minecraft:piston',
                D: 'ars_nouveau:warding_stone'
            },
            id: 'ars_nouveau:glyph_press'
        },
        {
            output: Item.of('ars_nouveau:mana_fiber', 4),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'betterendforge:silk_fiber',
                B: 'ars_nouveau:mana_bloom'
            },
            id: 'ars_nouveau:mana_fiber'
        }
    ];

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
