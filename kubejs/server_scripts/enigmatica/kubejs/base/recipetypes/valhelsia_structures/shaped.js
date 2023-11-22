onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/valhelsia_structures/shaped';
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
            output: 'valhelsia_structures:dungeon_door',
            pattern: ['ABA', 'ABA', 'ACA'],
            key: {
                A: 'minecraft:iron_bars',
                B: 'minecraft:spruce_door',
                C: 'minecraft:iron_door'
            },
            id: `${id_prefix}dungeon_door`
        },
        {
            output: Item.of('valhelsia_structures:oak_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:oak_log'
            },
            id: `${id_prefix}oak_post`
        },
        {
            output: Item.of('valhelsia_structures:spruce_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:spruce_log'
            },
            id: `${id_prefix}spruce_post`
        },
        {
            output: Item.of('valhelsia_structures:birch_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:birch_log'
            },
            id: `${id_prefix}birch_post`
        },
        {
            output: Item.of('valhelsia_structures:jungle_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:jungle_log'
            },
            id: `${id_prefix}jungle_post`
        },
        {
            output: Item.of('valhelsia_structures:dark_oak_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:dark_oak_log'
            },
            id: `${id_prefix}dark_oak_post`
        },
        {
            output: Item.of('valhelsia_structures:acacia_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:acacia_log'
            },
            id: `${id_prefix}acacia_post`
        },
        {
            output: Item.of('valhelsia_structures:warped_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:warped_stem'
            },
            id: `${id_prefix}warped_post`
        },
        {
            output: Item.of('valhelsia_structures:crimson_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:crimson_stem'
            },
            id: `${id_prefix}crimson_post`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
