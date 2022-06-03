onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/valhelsia_structures/shapeless';
    const recipes = [
        {
            output: Item.of('3x valhelsia_structures:cut_oak_post'),
            inputs: ['valhelsia_structures:oak_post'],
            id: `${id_prefix}/cut_oak_post`
        },
        {
            output: Item.of('3x valhelsia_structures:cut_spruce_post'),
            inputs: ['valhelsia_structures:spruce_post'],
            id: `${id_prefix}/cut_spruce_post`
        },
        {
            output: Item.of('3x valhelsia_structures:cut_birch_post'),
            inputs: ['valhelsia_structures:birch_post'],
            id: `${id_prefix}/cut_birch_post`
        },
        {
            output: Item.of('3x valhelsia_structures:cut_jungle_post'),
            inputs: ['valhelsia_structures:jungle_post'],
            id: `${id_prefix}/cut_jungle_post`
        },
        {
            output: Item.of('3x valhelsia_structures:cut_acacia_post'),
            inputs: ['valhelsia_structures:acacia_post'],
            id: `${id_prefix}/cut_acacia_post`
        },
        {
            output: Item.of('3x valhelsia_structures:cut_dark_oak_post'),
            inputs: ['valhelsia_structures:dark_oak_post'],
            id: `${id_prefix}/cut_dark_oak_post`
        },
        {
            output: Item.of('3x valhelsia_structures:cut_warped_post'),
            inputs: ['valhelsia_structures:warped_post'],
            id: `${id_prefix}/cut_warped_post`
        },
        {
            output: Item.of('3x valhelsia_structures:cut_crimson_post'),
            inputs: ['valhelsia_structures:crimson_post'],
            id: `${id_prefix}/cut_crimson_post`
        },
        {
            output: Item.of('9x minecraft:bone'),
            inputs: ['valhelsia_structures:bone_pile_block'],
            id: `${id_prefix}/bone_pile_block`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
