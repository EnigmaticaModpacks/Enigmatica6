onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('prettypipes:wrench', 1),
            pattern: [' A ', 'AB ', '  B'],
            key: {
                A: '#forge:nuggets/iron',
                B: 'prettypipes:pipe'
            },
            id: 'prettypipes:wrench'
        },
        {
            output: Item.of('prettypipes:blank_module', 3),
            pattern: [' A ', 'BBB', 'CCC'],
            key: {
                A: '#forge:dusts/redstone',
                B: 'minecraft:stone_slab',
                C: '#forge:nuggets/copper'
            },
            id: 'prettypipes:blank_module'
        },
        {
            output: Item.of('prettypipes:low_extraction_module', 1),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: '#forge:dusts/redstone',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo'
            },
            id: 'prettypipes:low_extraction_module'
        },
        {
            output: Item.of('prettypipes:medium_extraction_module', 1),
            pattern: [' C ', 'ABA', ' A '],
            key: {
                A: '#forge:nuggets/invar',
                B: 'prettypipes:low_extraction_module',
                C: '#forge:ingots/invar'
            },
            id: 'prettypipes:medium_extraction_module'
        },
        {
            output: Item.of('prettypipes:high_extraction_module', 1),
            pattern: [' C ', 'ABA', ' A '],
            key: {
                A: '#forge:nuggets/electrum',
                B: 'prettypipes:medium_extraction_module',
                C: '#forge:ingots/electrum'
            },
            id: 'prettypipes:high_extraction_module'
        },
        {
            output: Item.of('prettypipes:low_filter_module', 1),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: '#forge:paper',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo'
            },
            id: 'prettypipes:low_filter_module'
        },
        {
            output: Item.of('prettypipes:medium_filter_module', 1),
            pattern: [' C ', 'ABA', ' C '],
            key: {
                A: '#forge:nuggets/invar',
                B: 'prettypipes:low_filter_module',
                C: 'minecraft:iron_bars'
            },
            id: 'prettypipes:medium_filter_module'
        },
        {
            output: Item.of('prettypipes:high_filter_module', 1),
            pattern: [' C ', 'ABA', ' C '],
            key: {
                A: '#forge:nuggets/electrum',
                B: 'prettypipes:medium_filter_module',
                C: 'minecraft:iron_bars'
            },
            id: 'prettypipes:high_filter_module'
        },
        {
            output: Item.of('prettypipes:low_speed_module', 1),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'minecraft:sugar',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo'
            },
            id: 'prettypipes:low_speed_module'
        },
        {
            output: Item.of('prettypipes:medium_speed_module', 1),
            pattern: ['ACA', 'CBC', 'ACA'],
            key: {
                A: '#forge:nuggets/invar',
                B: 'prettypipes:low_speed_module',
                C: 'minecraft:sugar'
            },
            id: 'prettypipes:medium_speed_module'
        },
        {
            output: Item.of('prettypipes:high_speed_module', 1),
            pattern: ['ACA', 'CBC', 'ACA'],
            key: {
                A: '#forge:nuggets/electrum',
                B: 'prettypipes:medium_speed_module',
                C: 'minecraft:sugar'
            },
            id: 'prettypipes:high_speed_module'
        },
        {
            output: Item.of('prettypipes:low_low_priority_module', 1),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: '#forge:nuggets/lead',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo'
            },
            id: 'prettypipes:low_low_priority_module'
        },
        {
            output: Item.of('prettypipes:medium_low_priority_module', 1),
            pattern: ['ACA', 'CBC', 'ACA'],
            key: {
                A: '#forge:nuggets/invar',
                B: 'prettypipes:low_low_priority_module',
                C: '#forge:nuggets/lead'
            },
            id: 'prettypipes:medium_low_priority_module'
        },
        {
            output: Item.of('prettypipes:high_low_priority_module', 1),
            pattern: ['ACA', 'CBC', 'ACA'],
            key: {
                A: '#forge:nuggets/electrum',
                B: 'prettypipes:medium_low_priority_module',
                C: '#forge:nuggets/lead'
            },
            id: 'prettypipes:high_low_priority_module'
        },
        {
            output: Item.of('prettypipes:low_high_priority_module', 1),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: '#forge:nuggets/silver',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo'
            },
            id: 'prettypipes:low_high_priority_module'
        },
        {
            output: Item.of('prettypipes:medium_high_priority_module', 1),
            pattern: ['ACA', 'CBC', 'ACA'],
            key: {
                A: '#forge:nuggets/invar',
                B: 'prettypipes:low_high_priority_module',
                C: '#forge:nuggets/silver'
            },
            id: 'prettypipes:medium_high_priority_module'
        },
        {
            output: Item.of('prettypipes:high_high_priority_module', 1),
            pattern: ['ACA', 'CBC', 'ACA'],
            key: {
                A: '#forge:nuggets/electrum',
                B: 'prettypipes:medium_high_priority_module',
                C: '#forge:nuggets/silver'
            },
            id: 'prettypipes:high_high_priority_module'
        },
        {
            output: Item.of('prettypipes:low_retrieval_module', 1),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'minecraft:observer',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo'
            },
            id: 'prettypipes:low_retrieval_module'
        },
        {
            output: Item.of('prettypipes:medium_retrieval_module', 1),
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: '#forge:nuggets/invar',
                B: 'prettypipes:low_retrieval_module',
                C: '#forge:ingots/invar'
            },
            id: 'prettypipes:medium_retrieval_module'
        },
        {
            output: Item.of('prettypipes:high_retrieval_module', 1),
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: '#forge:nuggets/electrum',
                B: 'prettypipes:medium_retrieval_module',
                C: '#forge:ingots/electrum'
            },
            id: 'prettypipes:high_retrieval_module'
        },
        {
            output: Item.of('prettypipes:stack_size_module', 1),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'minecraft:comparator',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo'
            },
            id: 'prettypipes:stack_size_module'
        },
        {
            output: Item.of('prettypipes:damage_filter_modifier', 1),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'minecraft:stone_pickaxe',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo'
            },
            id: 'prettypipes:damage_filter_modifier'
        },
        {
            output: Item.of('prettypipes:nbt_filter_modifier', 1),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'minecraft:book',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo'
            },
            id: 'prettypipes:nbt_filter_modifier'
        },
        {
            output: Item.of('prettypipes:tag_filter_modifier', 1),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: '#forge:chunks',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo'
            },
            id: 'prettypipes:tag_filter_modifier'
        },
        {
            output: Item.of('prettypipes:mod_filter_modifier', 1),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'prettypipes:wrench',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo'
            },
            id: 'prettypipes:mod_filter_modifier'
        },
        {
            output: Item.of('prettypipes:redstone_module', 1),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'minecraft:redstone_torch',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo'
            },
            id: 'prettypipes:redstone_module'
        },
        {
            output: Item.of('prettypipes:filter_increase_modifier', 1),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'minecraft:iron_bars',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo'
            },
            id: 'prettypipes:filter_increase_modifier'
        },
        {
            output: Item.of('prettypipes:low_crafting_module', 1),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'minecraft:crafting_table',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo'
            },
            id: 'prettypipes:low_crafting_module'
        },
        {
            output: Item.of('prettypipes:medium_crafting_module', 1),
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: '#forge:nuggets/invar',
                B: 'prettypipes:low_crafting_module',
                C: '#forge:ingots/invar'
            },
            id: 'prettypipes:medium_crafting_module'
        },
        {
            output: Item.of('prettypipes:high_crafting_module', 1),
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: '#forge:nuggets/electrum',
                B: 'prettypipes:medium_crafting_module',
                C: '#forge:ingots/electrum'
            },
            id: 'prettypipes:high_crafting_module'
        },
        {
            output: Item.of('prettypipes:item_terminal', 1),
            pattern: [' B ', 'CAD', 'EFE'],
            key: {
                A: 'thermal:machine_frame',
                B: 'minecraft:observer',
                C: 'prettypipes:high_extraction_module',
                D: 'prettypipes:high_retrieval_module',
                E: '#forge:gears/invar',
                F: 'thermal:redstone_servo'
            },
            id: 'prettypipes:item_terminal'
        },
        {
            output: Item.of('prettypipes:pressurizer', 1),
            pattern: [' E ', 'BAB', 'CDC'],
            key: {
                A: 'thermal:machine_frame',
                B: 'prettypipes:high_speed_module',
                C: '#forge:gears/invar',
                D: 'thermal:rf_coil',
                E: 'prettypipes:pipe'
            },
            id: 'prettypipes:pressurizer'
        },
        {
            output: Item.of('prettypipes:round_robin_sorting_modifier', 1),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'minecraft:clock',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo'
            },
            id: 'prettypipes:round_robin_sorting_modifier'
        },
        {
            output: Item.of('prettypipes:random_sorting_modifier', 1),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'minecraft:dropper',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo'
            },
            id: 'prettypipes:random_sorting_modifier'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
