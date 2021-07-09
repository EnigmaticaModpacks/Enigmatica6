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
            output: 'minecraft:furnace',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#quark:stone_tool_materials',
                B: '#minecraft:coals'
            },
            id: 'minecraft:furnace'
        },
        {
            output: 'minecraft:piston',
            pattern: ['EBE', 'ADA', 'ACA'],
            key: {
                A: 'minecraft:smooth_stone',
                B: ['#forge:ingots/iron', '#forge:ingots/aluminum', '#forge:ingots/copper', '#forge:ingots/tin'],
                C: '#forge:dusts/redstone',
                D: ['#forge:rods/iron', '#forge:rods/aluminum', '#forge:rods/copper', '#forge:rods/tin'],
                E: '#minecraft:planks'
            },
            id: 'minecraft:piston'
        },
        {
            output: Item.of('minecraft:piston', 2),
            pattern: ['EBE', 'ADA', 'ACA'],
            key: {
                A: 'minecraft:smooth_stone',
                B: [
                    '#forge:ingots/silver',
                    '#forge:ingots/lead',
                    '#forge:ingots/gold',
                    '#forge:ingots/nickel',
                    '#forge:ingots/zinc'
                ],
                C: '#forge:dusts/redstone',
                D: [
                    '#forge:rods/silver',
                    '#forge:rods/lead',
                    '#forge:rods/gold',
                    '#forge:rods/nickel',
                    '#forge:rods/zinc'
                ],
                E: '#minecraft:planks'
            },
            id: 'minecraft:piston_alternative'
        },
        {
            output: 'minecraft:observer',
            pattern: ['BBB', 'ACA', 'BBB'],
            key: {
                A: 'create:andesite_alloy',
                B: 'minecraft:stone_slab',
                C: 'minecraft:comparator'
            },
            id: 'minecraft:observer'
        },
        {
            output: Item.of('minecraft:blast_furnace'),
            pattern: ['DDD', 'DBD', 'ACA'],
            key: {
                A: 'minecraft:smooth_stone',
                B: 'minecraft:furnace',
                C: 'minecraft:campfire',
                D: ['#forge:plates/iron', '#forge:plates/tin', '#forge:plates/aluminum']
            },
            id: 'minecraft:blast_furnace'
        },
        {
            output: Item.of('minecraft:smoker'),
            pattern: ['DAD', 'ABA', 'DCD'],
            key: {
                A: '#minecraft:logs',
                B: 'minecraft:furnace',
                C: 'minecraft:campfire',
                D: '#forge:rods/wooden'
            },
            id: 'minecraft:smoker'
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
