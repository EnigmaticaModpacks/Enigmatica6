onEvent('recipes', (event) => {

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
            // Wasabee Comb Recipes
            output: Item.of('sushigocrafting:rice',3),
            pattern: ['A  ', '  B', ' A '],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            output: Item.of('sushigocrafting:cucumber',3),
            pattern: [' A ', '  B', ' A '],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            output: Item.of('sushigocrafting:soy_bean',3),
            pattern: ['  A', '  B', '  A'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            output: Item.of('sushigocrafting:wasabi_root',3),
            pattern: ['A  ', ' B ', '  A'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            output: Item.of('sushigocrafting:seaweed',3),
            pattern: ['   ', 'ABA', '   '],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            output: Item.of('sushigocrafting:sesame_seeds',3),
            pattern: ['  A', ' B ', 'A  '],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            output: Item.of('sushigocrafting:raw_tuna',3),
            pattern: ['A  ', ' B ', 'A  '],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            output: Item.of('sushigocrafting:avocado',3),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:forest_honeycomb'
            }
        },
        {
            output: Item.of('sushigocrafting:nori_sheets',3),
            pattern: ['  A', ' B ', '  A'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            output: Item.of('sushigocrafting:shrimp',3),
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:water_honeycomb'
            }
        },
        {
            output: Item.of('minecraft:cod',3),
            pattern: ['A  ', 'B  ', 'C  '],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:water_honeycomb'
            }
        },
        {
            output: Item.of('minecraft:salmon',3),
            pattern: ['  A', '  B', '  C'],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:water_honeycomb'
            }
        },
        {
            output: Item.of('sushigocrafting:tobiko',3),
            pattern: ['   ', 'ABC', '   '],
            key: {
                A: 'resourcefulbees:wasabee_honeycomb',
                B: 'resourcefulbees:wax',
                C: 'resourcefulbees:water_honeycomb'
            }
        },
        {
            // Add Oak Recipes for Forest Combs
            output: Item.of('minecraft:oak_log', 8),
            pattern: ['BCB', 'C C', 'BCB'],
            key: {
                C: 'resourcefulbees:forest_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            output: Item.of('minecraft:oak_sapling', 4),
            pattern: [' C ', 'B B', ' C '],
            key: {
                C: 'resourcefulbees:forest_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            output: Item.of('minecraft:oak_leaves', 16),
            pattern: ['   ', 'B C', '   '],
            key: {
                C: 'resourcefulbees:forest_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            // Add Stone Recipes for Rocky Combs
            output: Item.of('minecraft:stone', 32),
            pattern: ['BCB', 'CCC', 'BCB'],
            key: {
                C: 'resourcefulbees:rocky_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            output: Item.of('minecraft:cobblestone', 32),
            pattern: ['BCB', 'C C', 'BCB'],
            key: {
                C: 'resourcefulbees:rocky_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            output: Item.of('minecraft:diorite', 32),
            pattern: ['CBC', 'D D', 'CBC'],
            key: {
                B: 'resourcefulbees:rocky_honeycomb',
                C: 'resourcefulbees:wax',
                D: 'resourcefulbees:nether_quartz_honeycomb'
            }
        },
        {
            output: Item.of('minecraft:andesite', 32),
            pattern: ['CDC', 'B B', 'CDC'],
            key: {
                B: 'resourcefulbees:rocky_honeycomb',
                C: 'resourcefulbees:wax',
                D: 'resourcefulbees:nether_quartz_honeycomb'
            }
        },
        {
            // Add Wet Comb -> Water Bucket Recipe
            output: 'minecraft:water_bucket',
            pattern: ['BCB', 'CAC', 'BCB'],
            key: {
                C: 'resourcefulbees:water_honeycomb',
                B: 'resourcefulbees:wax',
                A: 'minecraft:bucket'
            }
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
