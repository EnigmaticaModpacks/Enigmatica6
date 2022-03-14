onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/projectvibrantjourneys/shapeless/';
    const recipes = [
        {
            output: Item.of('projectvibrantjourneys:fallen_leaves', 1),
            inputs: ['quark:oak_leaf_carpet'],
            id: `${id_prefix}fallen_leaves`
        },
        {
            output: Item.of('projectvibrantjourneys:rocks', 4),
            inputs: ['minecraft:cobblestone', '#forge:tools/crafting_hammer'],
            id: `${id_prefix}rocks`
        },
        {
            output: Item.of('projectvibrantjourneys:mossy_rocks', 4),
            inputs: ['minecraft:mossy_cobblestone', '#forge:tools/crafting_hammer'],
            id: `${id_prefix}mossy_rocks`
        },
        {
            output: Item.of('projectvibrantjourneys:sandstone_rocks', 4),
            inputs: ['minecraft:sandstone', '#forge:tools/crafting_hammer'],
            id: `${id_prefix}sandstone_rocks`
        },
        {
            output: Item.of('projectvibrantjourneys:red_sandstone_rocks', 4),
            inputs: ['minecraft:red_sandstone', '#forge:tools/crafting_hammer'],
            id: `${id_prefix}red_sandstone_rocks`
        },
        {
            output: Item.of('projectvibrantjourneys:ice_chunks', 4),
            inputs: ['minecraft:ice', '#forge:tools/crafting_hammer'],
            id: `${id_prefix}ice_chunks`
        },
        {
            output: Item.of('projectvibrantjourneys:glowcap'),
            inputs: ['minecraft:glowstone_dust', ['minecraft:brown_mushroom', 'minecraft:red_mushroom']],
            id: `${id_prefix}glowcap`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
