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

    const recipes = [
        {
            output: 'tconstruct:silky_cloth',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'ars_nouveau:mana_fiber',
                B: '#forge:ingots/rose_gold'
            },
            id: 'tconstruct:tools/modifiers/silky_cloth'
        },
        {
            output: 'tconstruct:travelers_helmet',
            pattern: ['A A', 'BAB', 'C C'],
            key: {
                A: 'betterendforge:leather_stripe',
                B: 'tconstruct:clear_glass_pane',
                C: '#forge:plates/copper'
            },
            id: 'tconstruct:armor/building/travelers_goggles'
        },
        {
            output: 'tconstruct:travelers_chestplate',
            pattern: [' A ', 'BCB'],
            key: {
                A: '#forge:slimeball/sky',
                B: '#forge:plates/copper',
                C: Item.of('minecraft:leather_chestplate', '{Damage:0}').weakNBT()
            },
            id: 'tconstruct:armor/building/travelers_chestplate'
        },
        {
            output: 'tconstruct:travelers_leggings',
            pattern: [' A ', 'BCB'],
            key: {
                A: '#forge:slimeball/sky',
                B: '#forge:plates/copper',
                C: Item.of('minecraft:leather_leggings', '{Damage:0}').weakNBT()
            },
            id: 'tconstruct:armor/building/travelers_pants'
        },
        {
            output: 'tconstruct:travelers_boots',
            pattern: [' A ', 'BCB'],
            key: {
                A: '#forge:slimeball/sky',
                B: '#forge:plates/copper',
                C: Item.of('minecraft:leather_boots', '{Damage:0}').weakNBT()
            },
            id: 'tconstruct:armor/building/travelers_boots'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
