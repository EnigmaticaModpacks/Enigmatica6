events.listen('recipes', (event) => {
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
            output: 'thermal:machine_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/iron_tin',
                B: '#forge:glass_panes',
                C: '#forge:gears/iron_aluminum'
            },
            id: 'thermal:machine_frame'
        },
        {
            output: 'thermal:energy_cell_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/lead',
                B: '#forge:glass_panes',
                C: '#forge:gears/electrum'
            },
            id: 'thermal:energy_cell_frame'
        },
        {
            output: 'thermal:fluid_cell_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/copper',
                B: '#forge:glass_panes',
                C: '#forge:gears/bronze'
            },
            id: 'thermal:fluid_cell_frame'
        },
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
        },
        {
            output: Item.of('thermal:rf_coil'),
            pattern: ['CA ', 'ABA', ' AC'],
            key: {
                A: '#forge:dusts/redstone',
                B: '#forge:rods/gold_copper',
                C: '#forge:nuggets/gold'
            },
            id: 'thermal:rf_coil'
        },
        {
            output: Item.of('thermal:rf_coil'),
            pattern: [' AC', 'ABA', 'CA '],
            key: {
                A: '#forge:dusts/redstone',
                B: '#forge:rods/gold_copper',
                C: '#forge:nuggets/gold'
            },
            id: 'thermal:rf_coil_mirrored'
        },
        {
            output: Item.of('thermal:redstone_servo'),
            pattern: ['A A', ' B ', 'A A'],
            key: {
                A: '#forge:dusts/redstone',
                B: ['#forge:rods/iron', '#forge:rods/tin']
            },
            id: 'thermal:redstone_servo'
        },
        {
            output: Item.of('thermal:redstone_servo', 2),
            pattern: ['A A', ' B ', 'A A'],
            key: {
                A: '#forge:dusts/redstone',
                B: '#forge:rods/lead'
            },
            id: 'kubejs:thermal_redstone_servo_with_lead'
        },
        {
            output: 'create:millstone',
            pattern: [' A ', 'BCB', 'DDD'],
            key: {
                A: '#forge:gears/copper',
                B: '#forge:ingots/andesite_alloy',
                C: 'create:cogwheel',
                D: 'minecraft:smooth_stone_slab'
            },
            id: 'create:crafting/kinetics/millstone'
        },
        {
            output: 'create:windmill_bearing',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'create:turntable',
                B: 'minecraft:sticky_piston',
                C: 'create:shaft'
            },
            id: 'create:crafting/kinetics/windmill_bearing'
        },
        {
            output: Item.of('immersiveengineering:cokebrick', 3),
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: '#forge:stones/basalt',
                B: 'create:cinder_flour',
                C: '#forge:clay'
            },
            id: 'immersiveengineering:crafting/cokebrick'
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
