events.listen('recipes', event => {
    event.remove({mod: 'prettypipes'})
    var recipes = [
        shapedRecipe(item.of('prettypipes:wrench', 1), [' A ', 'AB ', '  B'], {
            A: '#forge:nuggets/iron',
            B: 'prettypipes:pipe'
        }),
        shapedRecipe(item.of('prettypipes:blank_module', 3), [' A ', 'BBB', 'CCC'], {
            A: '#forge:dusts/redstone',
            B: 'minecraft:stone_slab',
            C: '#forge:nuggets/copper'
        }),
        shapedRecipe(item.of('prettypipes:low_extraction_module', 1), [' A ', ' B ', ' C '], {
            A: '#forge:dusts/redstone',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(item.of('prettypipes:medium_extraction_module', 1), [' C ', 'ABA', ' A '], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_extraction_module',
            C: '#forge:ingots/invar'
        }),
        shapedRecipe(item.of('prettypipes:high_extraction_module', 1), [' C ', 'ABA', ' A '], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_extraction_module',
            C: '#forge:ingots/electrum'
        }),
        shapedRecipe(item.of('prettypipes:low_filter_module', 1), [' A ', ' B ', ' C '], {
            A: '#forge:paper',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'            
        }),
        shapedRecipe(item.of('prettypipes:medium_filter_module', 1), [' C ', 'ABA', ' C '], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_filter_module',
            C: 'minecraft:iron_bars'
        }),
        shapedRecipe(item.of('prettypipes:high_filter_module', 1), [' C ', 'ABA', ' C '], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_filter_module',
            C: 'minecraft:iron_bars'
        }),
        shapedRecipe(item.of('prettypipes:low_speed_module', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:sugar',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(item.of('prettypipes:medium_speed_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_speed_module',
            C: 'minecraft:sugar'
        }),
        shapedRecipe(item.of('prettypipes:high_speed_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_speed_module',
            C: 'minecraft:sugar'
        }),
        shapedRecipe(item.of('prettypipes:low_low_priority_module', 1), [' A ', ' B ', ' C '], {
            A: '#forge:nuggets/lead',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(item.of('prettypipes:medium_low_priority_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_low_priority_module',
            C: '#forge:nuggets/lead'
        }),
        shapedRecipe(item.of('prettypipes:high_low_priority_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_low_priority_module',
            C: '#forge:nuggets/lead'
        }),
        shapedRecipe(item.of('prettypipes:low_high_priority_module', 1), [' A ', ' B ', ' C '], {
            A: '#forge:nuggets/silver',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(item.of('prettypipes:medium_high_priority_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_high_priority_module',
            C: '#forge:nuggets/silver'
        }),
        shapedRecipe(item.of('prettypipes:high_high_priority_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_high_priority_module',
            C: '#forge:nuggets/silver'
        }),
        shapedRecipe(item.of('prettypipes:low_retrieval_module', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:observer',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(item.of('prettypipes:medium_retrieval_module', 1), [' A ', 'ABA', ' C '], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_retrieval_module',
            C: '#forge:ingots/invar'
        }),
        shapedRecipe(item.of('prettypipes:high_retrieval_module', 1), [' A ', 'ABA', ' C '], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_retrieval_module',
            C: '#forge:ingots/electrum'
        }),
        shapedRecipe(item.of('prettypipes:stack_size_module', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:comparator',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(item.of('prettypipes:damage_filter_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:stone_pickaxe',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(item.of('prettypipes:nbt_filter_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:book',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(item.of('prettypipes:tag_filter_modifier', 1), [' A ', ' B ', ' C '], {
            A: '#forge:chunks',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(item.of('prettypipes:mod_filter_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'prettypipes:wrench',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(item.of('prettypipes:redstone_module', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:redstone_torch',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(item.of('prettypipes:filter_increase_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:iron_bars',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(item.of('prettypipes:low_crafting_module', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:crafting_table',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(item.of('prettypipes:medium_crafting_module', 1), [' A ', 'ABA', ' C '], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_crafting_module',
            C: '#forge:ingots/invar'
        }),
        shapedRecipe(item.of('prettypipes:high_crafting_module', 1), [' A ', 'ABA', ' C '], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_crafting_module',
            C: '#forge:ingots/electrum'
        }),
        shapedRecipe(item.of('prettypipes:pipe', 12), ['   ', 'ABA', '   '], {
            A: '#forge:ingots/tin',
            B: '#forge:glass/colorless'
        }),
        shapedRecipe(item.of('prettypipes:item_terminal', 1), [' B ', 'CAD', 'EFE'], {
            A: 'thermal:machine_frame',
            B: 'minecraft:observer',
            C: 'prettypipes:high_extraction_module',
            D: 'prettypipes:high_retrieval_module',
            E: '#forge:gears/invar',
            F: 'thermal:redstone_servo'
        }),
        shapedRecipe(item.of('prettypipes:pressurizer', 1), [' E ', 'BAB', 'CDC'], {
            A: 'thermal:machine_frame',
            B: 'prettypipes:high_speed_module',
            C: '#forge:gears/invar',
            D: 'thermal:rf_coil',
            E: 'prettypipes:pipe'
        }),
        shapedRecipe(item.of('prettypipes:round_robin_sorting_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:clock',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(item.of('prettypipes:random_sorting_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:dropper',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        })
    ];

    recipes.forEach(function (recipe) {
        event.shaped(recipe.result, recipe.pattern, recipe.key);
    });

    recipes = [
        shapelessRecipe('prettypipes:pipe_frame', ['minecraft:item_frame', 'prettypipes:pipe', '#forge:dusts/redstone']),
        shapelessRecipe('prettypipes:crafting_terminal', ['prettypipes:item_terminal', 'prettypipes:low_crafting_module'])
    ];

    recipes.forEach(function (recipe) {
        event.shapeless(recipe.result, recipe.ingredients);
    });
});
