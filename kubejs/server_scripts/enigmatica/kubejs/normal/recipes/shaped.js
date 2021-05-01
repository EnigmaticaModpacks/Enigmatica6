events.listen('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'torchmaster:megatorch',
            pattern: ['AAA', 'BCB', 'DCD'],
            key: {
                A: 'torchmaster:feral_flare_lantern',
                B: '#enigmatica:crafting_materials/diamond',
                C: '#minecraft:logs',
                D: '#forge:storage_blocks/gold'
            }
        },
        {
            output: 'torchmaster:feral_flare_lantern',
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#forge:ingots/gold',
                B: '#forge:glass',
                C: '#forge:storage_blocks/glowstone'
            }
        },
        {
            output: Item.of('compactmachines:tunnel', { definition: { id: 'compactmachines:item' } }),
            pattern: ['ABA', 'BCB', 'DBD'],
            key: {
                A: 'minecraft:hopper',
                B: '#forge:gems/dimensional',
                C: 'occultism:wormhole_frame',
                D: '#forge:chests'
            },
            id: 'compactmachines:tunnel/item'
        },
        {
            output: Item.of('compactmachines:tunnel', { definition: { id: 'compactmachines:redstone_in' } }),
            pattern: ['ABA', 'BCB', 'DBD'],
            key: {
                A: 'glassential:glass_redstone',
                B: '#forge:gems/dimensional',
                C: 'occultism:wormhole_frame',
                D: 'minecraft:redstone_torch'
            },
            id: 'compactmachines:tunnel/redstone'
        },
        {
            output: 'minecraft:furnace',
            pattern: ['LLL', 'L L', 'LLL'],
            key: {
                L: '#forge:stone'
            }
        },
        {
            output: Item.of('minecraft:stick', 16),
            pattern: ['A', 'A'],
            key: {
                A: '#minecraft:logs'
            }
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
