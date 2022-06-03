onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('ppfluids:low_fluid_extraction_module', 1),
            pattern: [' A ', 'DBD', ' C '],
            key: {
                A: '#forge:dusts/redstone',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo',
                D: 'thermal:cured_rubber'
            },
            id: 'ppfluids:low_fluid_extraction_module'
        },
        {
            output: Item.of('ppfluids:medium_fluid_extraction_module', 1),
            pattern: [' C ', 'ABA', ' A '],
            key: {
                A: '#forge:nuggets/aluminum',
                B: 'ppfluids:low_fluid_extraction_module',
                C: '#forge:ingots/aluminum'
            },
            id: 'ppfluids:medium_fluid_extraction_module'
        },
        {
            output: Item.of('ppfluids:high_fluid_extraction_module', 1),
            pattern: [' C ', 'ABA', ' A '],
            key: {
                A: '#forge:nuggets/bronze',
                B: 'ppfluids:medium_fluid_extraction_module',
                C: '#forge:ingots/bronze'
            },
            id: 'ppfluids:high_fluid_extraction_module'
        },
        {
            output: Item.of('ppfluids:low_fluid_filter_module', 1),
            pattern: [' A ', 'DBD', ' C '],
            key: {
                A: 'thermal:diving_fabric',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo',
                D: 'thermal:cured_rubber'
            },
            id: 'ppfluids:low_fluid_filter_module'
        },
        {
            output: Item.of('ppfluids:medium_fluid_filter_module', 1),
            pattern: [' C ', 'ABA', ' C '],
            key: {
                A: '#forge:nuggets/aluminum',
                B: 'ppfluids:low_fluid_filter_module',
                C: 'minecraft:iron_bars'
            },
            id: 'ppfluids:medium_fluid_filter_module'
        },
        {
            output: Item.of('ppfluids:high_fluid_filter_module', 1),
            pattern: [' C ', 'ABA', ' C '],
            key: {
                A: '#forge:nuggets/bronze',
                B: 'ppfluids:medium_fluid_filter_module',
                C: 'minecraft:iron_bars'
            },
            id: 'ppfluids:high_fluid_filter_module'
        },
        {
            output: Item.of('ppfluids:low_fluid_retrieval_module', 1),
            pattern: [' A ', 'DBD', ' C '],
            key: {
                A: 'minecraft:observer',
                B: 'prettypipes:blank_module',
                C: 'thermal:redstone_servo',
                D: 'thermal:cured_rubber'
            },
            id: 'ppfluids:low_fluid_retrieval_module'
        },
        {
            output: Item.of('ppfluids:medium_fluid_retrieval_module', 1),
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: '#forge:nuggets/aluminum',
                B: 'ppfluids:low_fluid_retrieval_module',
                C: '#forge:ingots/aluminum'
            },
            id: 'ppfluids:medium_fluid_retrieval_module'
        },
        {
            output: Item.of('ppfluids:high_fluid_retrieval_module', 1),
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: '#forge:nuggets/bronze',
                B: 'ppfluids:medium_fluid_retrieval_module',
                C: '#forge:ingots/bronze'
            },
            id: 'ppfluids:high_fluid_retrieval_module'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
